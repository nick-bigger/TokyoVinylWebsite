import { Outlet } from "react-router-dom";

import { CRTScreen } from "@/components/CRTScreen";

export const Root = () => {
  return (
    <>
      <Outlet />
      <CRTScreen />
    </>
  );
};
