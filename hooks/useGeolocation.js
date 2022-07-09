import react, { useEffect, useState } from "react";
export const useGeoLoaction = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", long: "" },
  });
  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        long: location.coords.longitude,
      },
    });
  };
  const onErr = () => {
    setLocation({
      loaded: true,
      error: { code: 0, message: "Location not supported by browser" },
    });
  };
  useEffect(() => {
    if (!"geolocation" in navigator) {
      onErr();
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onErr);
  }, []);
  return location;
};
