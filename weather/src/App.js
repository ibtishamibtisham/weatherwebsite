import logo from "./logo.svg";
import "./App.css";
import { useGeoLoaction } from "./hooks/useGeolocation";

function App() {
  const location = useGeoLoaction();
  return (
    <div className="App">
      <p>helllo</p>
      {location.loaded ? JSON.stringify(location) : "not available"}
    </div>
  );
}

export default App;
