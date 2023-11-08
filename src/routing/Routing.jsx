import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Center = lazy(() => import("../view/pages/center/Center"));
const Work = lazy(() => import("../view/pages/center/Work"));

const Routing = () => (
  <Suspense fallback="Loading">
    <Routes>
      <Route path="/" element={<Center />}>
        <Route path="/work" element={<Work />} />
      </Route>
    </Routes>
  </Suspense>
);

export default Routing;
