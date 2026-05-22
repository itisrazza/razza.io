export type Breakpoint = "sm" | "md" | "lg";
export type BreakpointChangeCallback = (breakpoint: Breakpoint) => void;
type Unsubscriber = () => void;

const subscribers = new Set<BreakpointChangeCallback>();

export const getBreakpoint = (): Breakpoint =>
  getComputedStyle(document.documentElement)
    .getPropertyValue("--breakpoint").trim() as Breakpoint;

let lastBreakpoint: Breakpoint = getBreakpoint();

new ResizeObserver(() => {
  const bp = getBreakpoint();
  if (bp === lastBreakpoint) return;
  lastBreakpoint = bp;
  console.debug("BreakpointChange: resized", { breakpoint: bp });
  subscribers.forEach(cb => cb(bp));
}).observe(document.body);

export const onBreakpointChange = (callback: BreakpointChangeCallback): Unsubscriber => {
  subscribers.add(callback);
  console.debug("BreakpointChange: subscribed", { callback });
  return () => subscribers.delete(callback);
};
