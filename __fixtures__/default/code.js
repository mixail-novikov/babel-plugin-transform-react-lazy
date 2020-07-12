import React from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

export const App = () => {
  return <LazyComponent />;
};
