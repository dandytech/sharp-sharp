import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ address }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 6.625789638470957, // Replace with the latitude of the address
    lng: 3.342357313580873, // Replace with the longitude of the address
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
