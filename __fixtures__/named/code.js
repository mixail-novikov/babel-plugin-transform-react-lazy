import React, { lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

export const App = () => {
  return <LazyComponent />;
};
