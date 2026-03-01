import React from "react";

import MainProject from "./main";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MainProject />
      <main>{children}</main>
    </div>
  );
}
export default layout;
