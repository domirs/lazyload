import { lazy } from "react";

const CompA = lazy(() => import("./CompA"));
const CompB = lazy(() => import("./CompB"));

const App = () => {
  return (
    <>
      <CompA />
      <CompB />
    </>
  );
};

export default App;
