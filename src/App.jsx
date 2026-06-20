import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layover from "./pages/Layover";
import StayFinder from "./pages/StayFinder";
import RoamBudget from "./pages/RoamBudget";
import NomadScout from "./pages/NomadScout";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/layover"
          element={<Layover />}
        />

        <Route
          path="/stayfinder"
          element={<StayFinder />}
        />

        <Route
          path="/roambudget"
          element={<RoamBudget />}
        />

        <Route
          path="/nomadscout"
          element={<NomadScout />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;