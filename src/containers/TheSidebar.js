import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";

import logo from "../assets/img/Aimhi.png";
import LogoMinimized from "../assets/img/Aimhi-minimized.png";

import CIcon from "@coreui/icons-react";

// sidebar nav config
import navigation from "./_nav";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      // style={{ background: "#23303d" }}
      show={show}
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <img
          src={logo}
          alt="Logo"
          className="c-sidebar-brand-full"
          height={35}
        />
        <img
          src={LogoMinimized}
          alt="Logo"
          className="c-sidebar-brand-minimized"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          // style={{ background: "#23303d" }}
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
