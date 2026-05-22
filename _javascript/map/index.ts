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
  link: string;
  lat: number;
  lon: number;
}

const dataEl = document.getElementById("map-data");
if (dataEl == null) throw new Error("map: no #map-data element found");

const markers: TravelMarker[] = JSON.parse(dataEl.textContent ?? "[]");
console.debug({markers});

const map = L.map("map").setView([0, 174.783333], 1);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

for (const { title, altTitle, link, lat, lon } of markers) {
  const name = altTitle ? `${title} (${altTitle})` : title;
  const marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup(L.popup().setContent(`<a href="${link}">${name}</a>`));
}
