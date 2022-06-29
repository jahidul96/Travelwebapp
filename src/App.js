import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Flight from "./pages/Flight";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/flights" element={<Flight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
