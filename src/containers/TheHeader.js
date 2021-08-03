import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CCol,
  CRow,
  CInput,
  CSelect,
  CInputGroup,
  CInputGroupPrepend,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

// routes config
import routes from "../routes";

import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks,
} from "./index";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />

      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CInputGroup mb="5">
          <CInputGroupPrepend>
            <CSelect
              style={{
                background: "#B3B7C14D",
                textAlign: "left",
                letterSpacing: "0.21",
                color: "#424242",
                opacity: "1",
                boxShadow: "0px 2px 6px #00000029",
                marginLeft: "30px",
              }}
            >
              <option>All</option>
            </CSelect>
          </CInputGroupPrepend>
          <CInput
            type="text"
            style={{
              width: "400px",
              boxShadow: "0px 2px 6px #00000029",
              opacity: "1",
            }}
          ></CInput>
          <CCol col="12" sm="4" md="6" xl className="mb-6 mb-xl-1">
            <CButton color="dark">
              <span
                className="iconify"
                data-icon="bx:bx-search"
                data-inline="false"
                style={{ height: "25px", width: "25px" }}
              ></span>
            </CButton>
          </CCol>
        </CInputGroup>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdown />
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
