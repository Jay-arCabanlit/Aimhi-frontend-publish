import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false} style={{ background: "white" }}>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://coreui.io/react"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#549764" }}
        >
          AIMHI
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
