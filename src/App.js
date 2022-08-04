import "./Reset.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import tracksData from "./tracks-db.json";
import Home from "./pages/Home/Home.jsx";
import Tracks from "./pages/Tracks/Tracks.jsx";
import Bikers from "./pages/Bikers/Bikers.jsx";
import Error from "./pages/Error/Error.jsx";
import Navbar from "./components/Navbar/Navbar";
import TrackDetails from "./pages/TrackDetails/TrackDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/tracks/:id" element={<TrackDetails />} />
        <Route path="/bikers" element={<Bikers />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
