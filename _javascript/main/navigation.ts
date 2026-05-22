import { getBreakpoint, onBreakpointChange } from "../misc/breakpoint";

const NAV_OPEN_CLASS = "nav-open";

const FAB_OPEN_ICON = "bi-list";
const FAB_CLOSE_ICON = "bi-x-lg";

let isOpen = true;

export default function setupNavigation() {
  const elements = getNavigationElements();
  isOpen = elements.nav.classList.contains(NAV_OPEN_CLASS);

  setupEventListeners(elements);
  initAriaState(elements);

  onBreakpointChange(bp => applyBreakpoint(bp === "sm", elements));
  applyBreakpoint(getBreakpoint() === "sm", elements);
}

function setupEventListeners(elements: NavigationElements) {
  elements.fab.addEventListener("click", onNavigationToggle(elements));
  elements.fab.addEventListener("keydown", (e) => {
    if (e.key === " ") { e.preventDefault(); onNavigationToggle(elements)(); }
  });
  elements.blur.addEventListener("click", closeNav(elements));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) closeNav(elements)();
  });
  document.addEventListener("keydown", onFocusTrap(elements));
}

function initAriaState(elements: NavigationElements) {
  elements.fab.setAttribute("role", "button");
  elements.fab.setAttribute("aria-expanded", String(isOpen));
  elements.fab.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  if (!isOpen) elements.links.setAttribute("inert", "");
}

function applyBreakpoint(isMobile: boolean, elements: NavigationElements) {
  if (isMobile) {
    elements.nav.setAttribute("role", "dialog");
    elements.nav.setAttribute("aria-modal", "true");
    elements.nav.setAttribute("aria-label", "Navigation");
    if (isOpen) closeNav(elements)();
  } else {
    elements.nav.removeAttribute("role");
    elements.nav.removeAttribute("aria-modal");
    elements.nav.removeAttribute("aria-label");
    if (!isOpen) {
      elements.nav.classList.add(NAV_OPEN_CLASS);
      elements.links.removeAttribute("inert");
      isOpen = true;
    }
  }
}

interface NavigationElements {
  nav: HTMLElement,
  blur: HTMLDivElement,
  fab: HTMLDivElement,
  fabIcon: HTMLElement,
  links: HTMLUListElement,
}

function getNavigationElements(): NavigationElements {
  const baseSelector = ".page-chrome > nav";

  const nav = tryQuerySelector(baseSelector) as HTMLElement;
  const blur = tryQuerySelector(`${baseSelector} > .nav-blur`) as HTMLDivElement;
  const fab = tryQuerySelector(`${baseSelector} > .nav-fab`) as HTMLDivElement;
  const fabIcon = tryQuerySelector(`${baseSelector} > .nav-fab > i`) as HTMLElement;
  const links = tryQuerySelector(`${baseSelector} > .nav-links`) as HTMLUListElement;

  return { nav, blur, fab, fabIcon, links };
}

const tryQuerySelector = (selector: Parameters<typeof document.querySelector>[0]) => {
  const element = document.querySelector(selector);
  if (element == null) {
    throw new Error(`Couldn't query selector: ${selector}`);
  }

  return element;
}

const onNavigationToggle = (elements: NavigationElements) =>
  () => isOpen
    ? closeNav(elements)()
    : openNav(elements)();

const onFocusTrap = (elements: NavigationElements) =>
  (e: KeyboardEvent) => {
    if (!isOpen || e.key !== "Tab") return;

    const focusable: HTMLElement[] = [
      elements.fab,
      ...Array.from(elements.links.querySelectorAll<HTMLElement>("a")),
    ];

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

const closeNav = (elements: NavigationElements) =>
  () => {
    elements.nav.classList.remove(NAV_OPEN_CLASS);
    elements.fabIcon.classList.remove(FAB_CLOSE_ICON);
    elements.fabIcon.classList.add(FAB_OPEN_ICON);
    elements.fab.setAttribute("aria-expanded", "false");
    elements.fab.setAttribute("aria-label", "Open navigation");
    elements.links.setAttribute("inert", "");
    elements.fab.focus();
    isOpen = false;
  };

const openNav = (elements: NavigationElements) =>
  () => {
    elements.nav.classList.add(NAV_OPEN_CLASS);
    elements.fabIcon.classList.remove(FAB_OPEN_ICON);
    elements.fabIcon.classList.add(FAB_CLOSE_ICON);
    elements.fab.setAttribute("aria-expanded", "true");
    elements.fab.setAttribute("aria-label", "Close navigation");
    elements.links.removeAttribute("inert");
    isOpen = true;
    elements.links.querySelector<HTMLElement>("a")?.focus();
  };
