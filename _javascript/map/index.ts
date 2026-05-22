import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// When bundled, Leaflet can't auto-detect imagePath from the <link> tag URL.
// Explicitly wire the default icon images imported above.
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface TravelMarker {
  title: string;
  altTitle?: string;
  hero: string;
  country: string;
  countryLabel: string;
  link: string;
  lat: number;
  lon: number;
}

const dataEl = document.getElementById("map-data");
if (dataEl == null) throw new Error("map: no #map-data element found");

const markers: TravelMarker[] = JSON.parse(dataEl.textContent ?? "[]");

const map = L.map("map").setView([0, 174.783333], 1);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function buildPopup({ title, altTitle, hero, country, countryLabel, link }: TravelMarker): string {
  return `<a class="map-popup" href="${link}">
    <img class="map-popup-hero" src="${hero}" alt="${title}" loading="lazy" onerror="this.remove()">
    <span class="country-label">
      <img src="/assets/icons/countries/${country}.svg" alt="">
      ${countryLabel}
    </span>
    <div class="map-popup-body">
      <div class="map-popup-title">
        <strong>${title}</strong>
        ${altTitle ? `<span class="map-popup-alt-title">${altTitle}</span>` : ""}
      </div>
    </div>
  </a>`;
}

for (const marker of markers) {
  L.marker([marker.lat, marker.lon])
    .addTo(map)
    .bindPopup(L.popup({ closeButton: false, minWidth: 220 }).setContent(buildPopup(marker)));
}
