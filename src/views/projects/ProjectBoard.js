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
  CProgress,
} from "@coreui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project from "../../assets/img/project.jpg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Projects.css";
import Projects from "./Projects";

const ProjectBoard = ({}) => {
  const [active, setActive] = useState(1);

  const AllProjects = [
    {
      Id: 1,
      ProjectName: "Project 1",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 2,
      ProjectName: "Project 2",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 3,
      ProjectName: "Project 3",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 4,
      ProjectName: "Project 4",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 5,
      ProjectName: "Project 5",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 6,
      ProjectName: "Project 6",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 7,
      ProjectName: "Project 7",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 8,
      ProjectName: "Project 8",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 9,
      ProjectName: "Project 9",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 10,
      ProjectName: "Project 10",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 11,
      ProjectName: "Project 11",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 12,
      ProjectName: "Project 12",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 13,
      ProjectName: "Project 13",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 14,
      ProjectName: "Project 14",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 15,
      ProjectName: "Project 15",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
    {
      Id: 16,
      ProjectName: "Project 16",
      TotalBudget: "40,000,000.00",
      TotalCost: "40,000,000.00",
      ProjectPercentage: "30",
      DateStart: "mm/dd/yy",
      DateEnd: "mm/dd/yy",
      ProjectStatus: "Under Budget",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const value = "";

  return (
    <CCard>
      {/* <CCardHeader>
        Index indentifiers
        <DocsLink name="CTabs" />
      </CCardHeader> */}
      <CCardBody>
        <CTabs>
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink
                active
                style={{
                  background: "#1c2635",
                  color: "white",
                  borderTopLeftRadius: "10px",
                }}
              >
                Projects
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                active
                style={{
                  background: "#1c2635",
                  color: "white",
                }}
              >
                Photo
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                style={{
                  background: "#1c2635",
                  color: "white",
                  borderTopRightRadius: "10px",
                }}
              >
                Site Issues
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent className="project_board">
            <CTabPane>
              <CRow>
                {AllProjects.filter((item) => {
                  if (!value) return true;
                  if (
                    item.ProjectName.includes(value) ||
                    item.ProjectPercentage.includes(value)
                  ) {
                    return true;
                  }
                }).map((item) => (
                  <CCol xs="12" sm="12" md="6" key={item.Id.toString()}>
                    <CCard
                      className="text-white"
                      style={{
                        color: "#23303d",
                        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                      }}
                    >
                      <CCardBody>
                        <div className="col-md-12" style={{ padding: "10px" }}>
                          <span className="font-primary-color font-big">
                            {item.ProjectName}
                          </span>
                          <CBadge
                            className="float-right"
                            shape="pill"
                            color="success"
                          >
                            <span
                              style={{ fontSize: "12px", fontWeight: "700" }}
                            >
                              {item.ProjectStatus}
                            </span>
                          </CBadge>
                        </div>
                        <div className="col-md-12">
                          <span className="font-primary-color col-md-3 font-small">
                            Total Budget
                          </span>
                          <span className="font-primary-color col-md-3 font-bold-cost">
                            PHP {item.TotalBudget}
                          </span>
                          <span className="font-primary-color col-md-3 font-small">
                            Total Cost
                          </span>
                          <span className="font-primary-color col-md-3 font-bold-cost">
                            PHP {item.TotalCost}
                          </span>
                        </div>
                        <div className="col-md-12">
                          <span className="col-md-2 font-primary-color font-big">
                            {item.ProjectPercentage} %
                          </span>
                          <div className="col-md-10 float-right">
                            <CProgress value={25} color="dark" />
                            <span className="font-primary-color float-left">
                              {item.DateStart}
                            </span>
                            <span className="font-primary-color float-right">
                              {item.DateEnd}
                            </span>
                          </div>
                        </div>
                      </CCardBody>
                    </CCard>
                  </CCol>
                ))}
              </CRow>
            </CTabPane>
            <CTabPane>
              {AllProjects.filter((item) => {
                if (!value) return true;
                if (
                  item.ProjectName.includes(value) ||
                  item.ProjectPercentage.includes(value)
                ) {
                  return true;
                }
              }).map((item) => (
                <CRow key={item.Id.toString()}>
                  <CCol xs="12" sm="12" md="6">
                    <CCard
                      className="text-white"
                      style={{
                        color: "#23303d",
                        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                      }}
                    >
                      <CCardBody>
                        <div className="col-md-12" style={{ padding: "10px" }}>
                          <span className="font-primary-color font-big">
                            {item.ProjectName}
                          </span>
                          <CBadge
                            className="float-right"
                            shape="pill"
                            color="success"
                          >
                            <span
                              style={{ fontSize: "12px", fontWeight: "700" }}
                            >
                              {item.ProjectStatus}
                            </span>
                          </CBadge>
                        </div>
                        <div className="col-md-12">
                          <span className="font-primary-color col-md-3 font-small">
                            Total Budget
                          </span>
                          <span className="font-primary-color col-md-3 font-bold-cost">
                            PHP {item.TotalBudget}
                          </span>
                          <span className="font-primary-color col-md-3 font-small">
                            Total Cost
                          </span>
                          <span className="font-primary-color col-md-3 font-bold-cost">
                            PHP {item.TotalCost}
                          </span>
                        </div>
                        <div className="col-md-12">
                          <span className="col-md-2 font-primary-color font-big">
                            {item.ProjectPercentage} %
                          </span>
                          <div className="col-md-10 float-right">
                            <CProgress value={30} color="dark" />
                            <span className="font-primary-color float-left">
                              {item.DateStart}
                            </span>
                            <span className="font-primary-color float-right">
                              {item.DateEnd}
                            </span>
                          </div>
                        </div>
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol md="6">
                    <CCard>
                      <CCardBody></CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              ))}
            </CTabPane>
            <CTabPane></CTabPane>
          </CTabContent>
        </CTabs>
      </CCardBody>
    </CCard>
  );
};

export default ProjectBoard;
