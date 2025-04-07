// import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent} from "react-leaflet";
// import {useNavigate} from "react-router-dom";
// import {useEffect, useState} from "react";
// import useUrlLocation from "../../hooks/useUrlLocation";
// import useGetLocation from './../../hooks/useGetLocation';

function Map() {
  // const [mapcenter, setmapcenter] = useState([50, 4]);
  // const [lat, lng] = useUrlLocation();
  // const {
  //   isLoading: isLoadingPosition,
  //   position: geoLocationPosition,
  //   getPosition,
  // } = useGetLocation();
  // useEffect(() => {
  //   if (lat && lng) setmapcenter([lat, lng]);
  // }, [lat, lng]);
  //    useEffect(() => {
  //      if (geoLocationPosition?.lat && geoLocationPosition?.lng)
  //        setmapcenter([geoLocationPosition.lat, geoLocationPosition.lng]);
  //    }, [geoLocationPosition]);
  return (
    <div className="mapContainer">
      {/* <MapContainer className="map" center={mapcenter} zoom={13} scrollWheelZoom={true}>
        <button onClick={getPosition} className="getLocation">
          {isLoadingPosition ? "Loading ..." : " Use Your Location"}
        </button>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <DetectClick />
        <Changecenter position={mapcenter} />
        {markerhotel.map((item) => {
          return (
            <Marker key={item.id} position={[item.latitude, item.longitude]}>
              <Popup>{item.host_location}</Popup>
            </Marker>
          );
        })}
      </MapContainer> */}
      test
    </div>
  );
}

export default Map;

// function Changecenter({position}) {
//   const map = useMap();
//   map.setView(position);
//   return null;
// }

// function DetectClick() {
//   const navigate = useNavigate();
//   useMapEvent({
//     click: (e) => {
//       navigate(`/bookmark/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
//     },
//   });
// }
