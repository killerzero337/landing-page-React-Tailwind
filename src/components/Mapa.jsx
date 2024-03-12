import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Mapa() {
  const center = [51.505, -0.09];

  return (
    <MapContainer
      center={center}
      zoom={10}
     
    >
      {/* Capa de mapas */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={center}>
        <Popup>
          <div>
            <h2>Ubicación</h2>
            <p>Descripción o información adicional sobre la ubicación.</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;
