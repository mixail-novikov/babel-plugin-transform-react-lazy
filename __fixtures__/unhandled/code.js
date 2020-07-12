import React, { lazy as ReactLazy } from "react";

const LazyComponent = ReactLazy(() => import("./LazyComponent"));

export const App = () => {
  return <LazyComponent />;
};
