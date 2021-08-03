import React, { lazy, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink,
  CHeader,
  CFooter,
  CBadge,
  CListGroupItem,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CTabs,
  CTabContent,
  CTabPane,
  CNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project from "../../assets/img/project.jpg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Projects.css";
import AddProjectsForms from "./AddProjects";
import ProjectBoard from "./ProjectBoard";

const Projects = () => {
  const [addproject, setAddproject] = useState(false);
  const [projectboard, setprojectboard] = useState(true);
  const [actionbuttons, setactionbuttons] = useState(true);
  const [value, setvalue] = useState("");

  console.log(value);

  const ShowAddProject = () => {
    setAddproject(true);
    setprojectboard(false);
    setactionbuttons(false);
  };

  return (
    <CRow>
      <CCol col="3" sm="4" md="2" style={{ padding: "10px" }}>
        {actionbuttons && (
          <CButton
            block
            shape="pill"
            className="navy_blue"
            size="sm"
            onClick={() => ShowAddProject()}
          >
            Add Project
          </CButton>
        )}
      </CCol>
      <CCol col="3" sm="4" md="3" style={{ padding: "10px" }}>
        {actionbuttons && (
          <CInputGroup>
            <CInputGroupPrepend>
              <CButton block shape="pill" className="navy_blue" size="sm">
                Search
              </CButton>
            </CInputGroupPrepend>
            <CInput
              type="text"
              className="form-control form-control-sm"
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            ></CInput>
          </CInputGroup>
        )}
      </CCol>
      <CCol xs="12" md="12">
        {projectboard && <ProjectBoard />}
      </CCol>
      <CCol md="12">{addproject && <AddProjectsForms />}</CCol>
    </CRow>
  );
};

export default Projects;
