//importing styles
import styles from "./Mapcomponent.module.css";
import "leaflet/dist/leaflet.css";

//import Maps essentials
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
//importing Hooks
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//importing from Map Slice
import { mapSliceActions } from "../../store/Slices/MapSlice/MapSlice";

// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
  iconSize: [40, 40], // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

//markers
const markers = [
  {
    geocode: [29.866111534053438, 77.89054783097357],
    popUp:
      "https://thumbs.dreamstime.com/b/pile-garbage-plastic-black-trash-bag-waste-many-footpath-pollution-trash-plastic-waste-bag-foam-tray-garbage-119376415.jpg",
  },
  {
    geocode: [29.8716189232314, 77.89262531030506],
    popUp:
      "https://img.etimg.com/thumb/width-1200,height-900,imgsize-164265,resizemode-75,msid-50132962/news/politics-and-nation/here-are-five-ways-to-tackle-bengalurus-garbage-problem.jpg",
  },
  {
    geocode: [29.878546796809378, 77.87856246775048],
    popUp: "https://thumbs.dreamstime.com/b/trash-park-798316.jpg",
  },
];

//Main Component
const Mapcomponent = () => {
  const { user } = useSelector((store) => store.auth);
  const map_data = useSelector((store) => store.map_data);
  console.log(map_data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      //Server request and updating Map Data Slice
      fetch("http://192.168.43.93:8080/wastify/get/maps")
        .then((response) => response.json())
        .then((data) => dispatch(mapSliceActions.update_data(data)))
        .catch((error) => console.error("Error:", error));
    }
  }, []);

  return (
    <div className={styles.main_container}>
      <MapContainer
        className={styles.leaflet_container}
        center={[29.854263, 77.888]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {map_data.map((marker) => (
            <Marker key = {marker.imgUrl} position={[marker.latitude, marker.longitude]} icon={customIcon}>
              <Popup>
                <img
                  className={styles.popup_image}
                  src={marker.imgUrl}
                  alt = {[marker.latitude, marker.longitude]}
                ></img>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Mapcomponent;
