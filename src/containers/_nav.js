import React from "react";
import CIcon from "@coreui/icons-react";
import { NavLink } from "react-router-dom";
import connect from "../assets/icons/Connect.svg";


const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: (
      <span
        className="iconify c-sidebar-nav-icon"
        data-icon="ic:outline-dashboard"
        data-inline="false"
        style={{ height: "25px", width: "25px" }}
      ></span>
    ),
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Learn"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Projects",
    to: "/theme/colors",
    icon: (
      <span
        className="iconify c-sidebar-nav-icon"
        data-icon="ic:outline-business"
        data-inline="false"
        style={{ height: "25px", width: "25px" }}
      ></span>
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Manpower",
    to: "/theme/colors",
    icon: (
      <span
        className="iconify c-sidebar-nav-icon"
        data-icon="grommet-icons:user-worker"
        data-inline="false"
        style={{ height: "25px", width: "25px" }}
      ></span>
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Inventory",
    to: "/theme/colors",
    icon: (
      <span
        className="iconify c-sidebar-nav-icon"
        data-icon="mdi:warehouse"
        data-inline="false"
        style={{ height: "25px", width: "25px" }}
      ></span>
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Equipment",
    to: "/theme/colors",
    icon: (
      <span
        className="iconify c-sidebar-nav-icon"
        data-icon="tabler:backhoe"
        data-inline="false"
        style={{ height: "25px", width: "25px" }}
      ></span>
    ),
  },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Connect",
  //   to: "/projects/Projects",
  //   icon: (
  //     <span
  //       className="iconify c-sidebar-nav-icon"
  //       data-icon="grommet-icons:connect"
  //       data-inline="false"
  //       style={{ height: "25px", width: "25px" }}
  //     ></span>
  //   ),
  // },
  {
    _tag: "CSidebarNavTitle",
    _children: ["PREDICT"],
  },

  {
    _tag: "CSidebarNavItem",
    name: "Schedule",
    to: "/theme/colors",
    icon: (
      <span
        className="iconify c-sidebar-nav-icon"
        data-icon="ant-design:schedule-outlined"
        data-inline="false"
        style={{ height: "25px", width: "25px" }}
      ></span>
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Finance  ",
    to: "/theme/colors",
    icon: (
      <span
        className="iconify c-sidebar-nav-icon"
        data-icon="map:finance"
        data-inline="false"
        style={{ height: "25px", width: "25px" }}
      ></span>
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Resource",
    to: "/theme/colors",
    icon: (
      <span
        className="iconify c-sidebar-nav-icon"
        data-icon="grommet-icons:resources"
        data-inline="false"
        style={{ height: "25px", width: "25px" }}
      ></span>
    ),
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["ADMIN"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Connect",
    to: "/connect/Connect",
    icon: (
      <span
        className="iconify c-sidebar-nav-icon"
        data-icon="grommet-icons:connect"
        data-inline="false"
        style={{ height: "25px", width: "25px" }}
      ></span>
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Calibrate",
    to: "/calibrate/Calibrate",
    icon: (
      <span
        className="iconify c-sidebar-nav-icon"
        data-icon="et:scope"
        data-inline="false"
        style={{ height: "25px", width: "25px" }}
      ></span>
    ),
  },
];

export default _nav;
