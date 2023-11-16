import { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";

const Center = lazy(() => import("../view/pages/center/Center"));
const Work = lazy(() => import("../view/pages/center/Work"));
const CenterCards = lazy(() => import("../view/pages/center/CenterCards"));
const Address = lazy(() => import("../view/pages/center/Address/Address"));
const Login = lazy(() => import("../view/pages/center/Login"));
const AddedCarts = lazy(() => import("../view/pages/center/AddedCarts"));
const CenterCarousel = lazy(() => import("../view/components/CenterCarousel"));
const OrderHow = lazy(() =>
  import("../view/pages/center/Address/Address-Links/Orderhow")
);
const Payout = lazy(() =>
  import("../view/pages/center/Address/Address-Links/Payout")
);
const Delivery = lazy(() =>
  import("../view/pages/center/Address/Address-Links/Delivery")
);
const Return = lazy(() =>
  import("../view/pages/center/Address/Address-Links/Return")
);
const ClothesReturn = lazy(() =>
  import("../view/pages/center/Address/Address-Links/Clothesreturn")
);
const Rulesell = lazy(() =>
  import("../view/pages/center/Address/Address-Links/Rulesell")
);
const RuleTrading = lazy(() =>
  import("../view/pages/center/Address/Address-Links/RuleTrading")
);
const Questions = lazy(() =>
  import("../view/pages/center/Address/Address-Links/Questions")
);

const Routing = () => {
  return (
    <Suspense fallback="Loading">
      <Routes>
        <Route path="/" element={<Center />}>
          <Route path="/work" element={<Work />} />
          <Route
            path="/"
            element={
              <>
                <CenterCarousel />
                <CenterCards />
              </>
            }
          />
          <Route path="/address" element={<Address />}>
            <Route path="orderhow" element={<OrderHow />} />
            <Route path="payout" element={<Payout />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="return" element={<Return />} />
            <Route path="clothesreturn" element={<ClothesReturn />} />
            <Route path="rulesell" element={<Rulesell />} />
            <Route path="ruletrading" element={<RuleTrading />} />
            <Route path="questions" element={<Questions />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<AddedCarts />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
