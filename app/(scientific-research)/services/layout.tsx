import React from "react";

import MainServices from "./mainServices";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MainServices />
      <main>{children}</main>
    </div>
  );
}
export default layout;