import React, { lazy } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CLink,
  CBadge,
  CListGroupItem,
  CWidgetBrand,
  CWidgetIcon,
  CProgress,
  CListGroup,
  CProgressBar,
  CFormGroup,
  CInputGroup,
  CInputRadio,
  CLabel,
  CInputCheckbox,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project from "../../assets/img/project.jpg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.css";
import ChartLineSimple from "../charts/ChartLineSimple";

const Dashboard = () => {
  const ProjectStatus = 50;

  return (
    <>
      <CRow>
        <CCol xs="12" sm="4" md="3" xl="3">
          <div className="card shadow" style={{ height: "160px" }}>
            <div className="card-header content-center text-white  bg-primary_dark">
              <div>
                <div className="project_val">250</div>
                <div className="project_label">ALL PROJECTS</div>
              </div>
            </div>
            <div
              className="card-body row text-center"
              style={{ height: "75px" }}
            >
              <div className="col">
                <div className="text-value-lg">205</div>
                <div className="text-uppercase small">ON TIME</div>
              </div>
              <div className="c-vr"></div>
              <div className="col">
                <div className="text-value-lg">45</div>
                <div className="text-uppercase text-muted small">DELAYED</div>
              </div>
            </div>
          </div>
        </CCol>
        <CCol xs="12" sm="4" md="3" xl="3">
          <div className="card success shadow">
            <div
              className="card-body d-flex align-items-center p-0"
              style={{ height: "120px" }}
            >
              <div
                className="mr-4 text-white bg-success p-4"
                style={{ height: "120px" }}
              >
                <span
                  className="iconify"
                  data-icon="grommet-icons:money"
                  data-inline="false"
                ></span>
              </div>
              <div>
                <div className="text-value text-value-lg">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold small">
                  COLLECTABLES
                </div>
              </div>
            </div>
            <footer className="card-footer px-3 py-2 card-footer">
              <a
                href="https://coreui.io/"
                className="font-weight-bold font-xs btn-block text-muted"
                rel="noopener norefferer"
                target="_blank"
              >
                View more
              </a>
            </footer>
          </div>
        </CCol>
        <CCol xs="12" sm="4" md="3" xl="3">
          <div className="card success shadow">
            <div
              className="card-body d-flex align-items-center p-0"
              style={{ height: "120px" }}
            >
              <div
                className="mr-3 text-white bg-success p-4"
                style={{ height: "120px" }}
              >
                <span
                  className="iconify"
                  data-icon="grommet-icons:money"
                  data-inline="false"
                  // style={{ height: "90px", width: "25px" }}
                ></span>
              </div>
              <div>
                <div className="text-value text-value-lg">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold small">
                  COLLECTABLES
                </div>
              </div>
            </div>
            <footer className="card-footer px-3 py-2 card-footer">
              <a
                href="https://coreui.io/"
                className="font-weight-bold font-xs btn-block text-muted"
                rel="noopener norefferer"
                target="_blank"
              >
                View more
              </a>
            </footer>
          </div>
        </CCol>
        <CCol xs="12" sm="4" md="3" xl="3">
          <CCard className="text-black shadow">
            <CCardBody>
              <div>
                <span
                  className="pull-left"
                  style={{ fontSize: "24px", fontWeight: "600" }}
                >
                  45%
                </span>
              </div>

              {/* <h4 className="pull-left">45%</h4> */}
              <span style={{ fontSize: "12px", fontWeight: "600" }}>
                PROFIT MARGIN
              </span>
              <CProgress color="success" value={45} size="xs" />
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0px",
                  textAlign: "left",
                  lineHeight: "normal",
                }}
              >
                Acceptable profit margin explained in this section. This will
                serve as a reminder to the person reading.
              </span>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="12" md="9" lg="9">
          <span style={{ fontSize: "18px", fontWeight: "600" }}>
            Metric that matter
          </span>
          <CRow className="text-center" style={{ marginTop: "10px" }}>
            <CCol md="2" lg="2">
              <CircularProgressbarWithChildren
                value={ProjectStatus}
                text={`${ProjectStatus}%`}
                styles={{
                  path: {
                    stroke: "#351D75",
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "#9c9c9c",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  text: {
                    fill: "#23303D",
                    fontSize: "20px",
                    fontWeight: "700",
                  },
                  background: {
                    fill: "#54c2a2",
                  },
                }}
              ></CircularProgressbarWithChildren>
              <span className="title">Reduction in project duration</span>
            </CCol>
            <CCol md="2" lg="2">
              <CircularProgressbarWithChildren
                value={ProjectStatus}
                text={`${ProjectStatus}%`}
                styles={{
                  path: {
                    stroke: "#F0E362",
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "#9c9c9c",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  text: {
                    fill: "#23303D",
                    fontSize: "20px",
                    fontWeight: "700",
                  },
                  background: {
                    fill: "#54c2a2",
                  },
                }}
              ></CircularProgressbarWithChildren>
              <span className="title">Manpower cost savings</span>
            </CCol>
            <CCol md="2" lg="2">
              <CircularProgressbarWithChildren
                value={ProjectStatus}
                text={`${ProjectStatus}%`}
                styles={{
                  path: {
                    stroke: "#25C6E3",
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "#9c9c9c",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  text: {
                    fill: "#23303D",
                    fontSize: "20px",
                    fontWeight: "700",
                  },
                  background: {
                    fill: "#54c2a2",
                  },
                }}
              ></CircularProgressbarWithChildren>
              <span className="title">Machinery cost savings</span>
            </CCol>
            <CCol md="2" lg="2">
              <CircularProgressbarWithChildren
                value={ProjectStatus}
                text={`${ProjectStatus}%`}
                styles={{
                  path: {
                    stroke: "#549764",
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "#9c9c9c",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  text: {
                    fill: "#23303D",
                    fontSize: "20px",
                    fontWeight: "700",
                  },
                  background: {
                    fill: "#54c2a2",
                  },
                }}
              ></CircularProgressbarWithChildren>
              <span className="title">Lorem Ipsum</span>
            </CCol>
            <CCol md="2" lg="2">
              <CircularProgressbarWithChildren
                value={ProjectStatus}
                text={`${ProjectStatus}%`}
                styles={{
                  path: {
                    stroke: "#C4C4C4",
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "#9c9c9c",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  text: {
                    fill: "#23303D",
                    fontSize: "20px",
                    fontWeight: "700",
                  },
                  background: {
                    fill: "#54c2a2",
                  },
                }}
              ></CircularProgressbarWithChildren>
              <span className="title">Lorem Ipsum</span>
            </CCol>
          </CRow>
        </CCol>
        <CCol sm="12" md="3" lg="3">
          <span style={{ fontSize: "18px", fontWeight: "600" }}>
            Things for consideration
          </span>
          <CListGroup style={{ fontSize: "12px", marginTop: "10px" }}>
            <CListGroupItem color="danger">
              The weather next week is rainy, re-plan projects?
              <span
                className="iconify float-right"
                data-icon="ant-design:warning-filled"
                data-inline="false"
                style={{
                  width: "20px",
                  height: "20px",
                  whiteSpace: "nowrap",
                }}
              ></span>
            </CListGroupItem>
            <CListGroupItem>
              What if I add an extra crane to the project?
            </CListGroupItem>
            <CListGroupItem>
              Price of cement may go down, check if you’d like to buy more.
            </CListGroupItem>
            <CListGroupItem>
              What if my crew works 2 hours overtime per day?
            </CListGroupItem>
          </CListGroup>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="12" md="9" xl="9">
          <span style={{ fontSize: "15px", fontWeight: "700" }}>
            Top 5 Earning Projects
          </span>
          <CRow>
            <CCol sm="12" md="4" xl="4" style={{ paddingTop: "20px" }}>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                Project 1
              </span>
              <CRow>
                <CCol sm="4" md="4" xl="4">
                  <img
                    src={Project}
                    alt="Avatar"
                    style={{
                      width: "92px",
                      height: "98px",
                    }}
                  />
                </CCol>
                <CCol sm="8" md="8" xl="8">
                  <CRow>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Project Cost
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Spent
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol md="2" style={{ marginTop: "15px" }}>
                      <span>25%</span>
                    </CCol>
                    <CCol md="10" style={{ marginTop: "15px" }}>
                      <CProgress
                        color="success"
                        value={ProjectStatus}
                        className="mb-3"
                        style={{ height: "10px" }}
                      />
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          fontWeight: "600",
                        }}
                      >
                        <span className="float-left">01-JAN-2021</span>
                        <span className="float-right"> 01-JAN-2021</span>
                      </span>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
            <CCol sm="12" md="4" xl="4" style={{ paddingTop: "20px" }}>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                Project 2
              </span>
              <CRow>
                <CCol sm="4" md="4" xl="4">
                  <img
                    src={Project}
                    alt="Avatar"
                    style={{
                      width: "92px",
                      height: "98px",
                    }}
                  />
                </CCol>
                <CCol sm="8" md="8" xl="8">
                  <CRow>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Project Cost
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Spent
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol md="2" style={{ marginTop: "15px" }}>
                      <span>25%</span>
                    </CCol>
                    <CCol md="10" style={{ marginTop: "15px" }}>
                      <CProgress
                        value={25}
                        className="mb-3"
                        style={{ height: "10px" }}
                      />
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          fontWeight: "600",
                        }}
                      >
                        <span className="float-left">01-JAN-2021</span>
                        <span className="float-right"> 01-JAN-2021</span>
                      </span>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
            <CCol sm="12" md="4" xl="4" style={{ paddingTop: "20px" }}>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                Project 3
              </span>
              <CRow>
                <CCol sm="4" md="4" xl="4">
                  <img
                    src={Project}
                    alt="Avatar"
                    style={{
                      width: "92px",
                      height: "98px",
                    }}
                  />
                </CCol>
                <CCol sm="8" md="8" xl="8">
                  <CRow>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Project Cost
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Spent
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol md="2" style={{ marginTop: "15px" }}>
                      <span>25%</span>
                    </CCol>
                    <CCol md="10" style={{ marginTop: "15px" }}>
                      <CProgress
                        value={25}
                        className="mb-3"
                        style={{ height: "10px" }}
                      />
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          fontWeight: "600",
                        }}
                      >
                        <span className="float-left">01-JAN-2021</span>
                        <span className="float-right"> 01-JAN-2021</span>
                      </span>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
            <CCol sm="12" md="4" xl="4" style={{ paddingTop: "20px" }}>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                Project 4
              </span>
              <CRow>
                <CCol sm="4" md="4" xl="4">
                  <img
                    src={Project}
                    alt="Avatar"
                    style={{
                      width: "92px",
                      height: "98px",
                    }}
                  />
                </CCol>
                <CCol sm="8" md="8" xl="8">
                  <CRow>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Project Cost
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Spent
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol md="2" style={{ marginTop: "15px" }}>
                      <span>25%</span>
                    </CCol>
                    <CCol md="10" style={{ marginTop: "15px" }}>
                      <CProgress
                        value={25}
                        className="mb-3"
                        style={{ height: "10px" }}
                      />
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          fontWeight: "600",
                        }}
                      >
                        <span className="float-left">01-JAN-2021</span>
                        <span className="float-right"> 01-JAN-2021</span>
                      </span>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
            <CCol sm="12" md="4" xl="4" style={{ paddingTop: "20px" }}>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                Project 5
              </span>
              <CRow>
                <CCol sm="4" md="4" xl="4">
                  <img
                    src={Project}
                    alt="Avatar"
                    style={{
                      width: "92px",
                      height: "98px",
                    }}
                  />
                </CCol>
                <CCol sm="8" md="8" xl="8">
                  <CRow>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Project Cost
                      </span>
                    </CCol>
                    <CCol sm="6" md="6" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Spent
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol md="2" style={{ marginTop: "15px" }}>
                      <span>25%</span>
                    </CCol>
                    <CCol md="10" style={{ marginTop: "15px" }}>
                      <CProgress
                        value={25}
                        className="mb-3"
                        style={{ height: "10px" }}
                      />
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          fontWeight: "600",
                        }}
                      >
                        <span className="float-left">01-JAN-2021</span>
                        <span className="float-right"> 01-JAN-2021</span>
                      </span>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCol>
        <CCol sm="12" md="3" xl="3" style={{ paddingTop: "20px" }}>
          <span style={{ fontSize: "18px", fontWeight: "600" }}>
            Actions that need your attention
          </span>
          <CRow
            style={{
              paddingTop: "20px",
              borderBottom: "1px solid #f2f2f2",
              opacity: "1",
            }}
          >
            <CCol sm="12" md="2" xl="2">
              <CFormGroup variant="checkbox" className="checkbox">
                <CInputCheckbox
                  id="checkbox1"
                  name="checkbox1"
                  value="option1"
                />
              </CFormGroup>
            </CCol>
            <CCol sm="12" md="10" xl="10" style={{ fontSize: "12px" }}>
              <span style={{ fontWeight: "600" }}>
                Draft and/or Open Labour Costs
              </span>
              <div>
                <span>
                  Number of labour costs that are in draft or on-hold in all
                  projects
                </span>
              </div>
            </CCol>
          </CRow>
          <CRow
            style={{
              paddingTop: "20px",
              borderBottom: "1px solid #f2f2f2",
              opacity: "1",
            }}
          >
            <CCol sm="12" md="2" xl="2">
              <CFormGroup variant="checkbox" className="checkbox">
                <CInputCheckbox
                  id="checkbox1"
                  name="checkbox1"
                  value="option1"
                />
              </CFormGroup>
            </CCol>
            <CCol sm="12" md="10" xl="10" style={{ fontSize: "12px" }}>
              <span style={{ fontWeight: "600" }}>
                Draft and/or Open Labour Costs
              </span>
              <div>
                <span>
                  Number of labour costs that are in draft or on-hold in all
                  projects
                </span>
              </div>
            </CCol>
          </CRow>
          <CRow
            style={{
              paddingTop: "20px",
              borderBottom: "1px solid #f2f2f2",
              opacity: "1",
            }}
          >
            <CCol sm="12" md="2" xl="2">
              <CFormGroup variant="checkbox" className="checkbox">
                <CInputCheckbox
                  id="checkbox1"
                  name="checkbox1"
                  value="option1"
                />
              </CFormGroup>
            </CCol>
            <CCol sm="12" md="10" xl="10" style={{ fontSize: "12px" }}>
              <span style={{ fontWeight: "600" }}>
                Draft and/or Open Labour Costs
              </span>
              <div>
                <span>
                  Number of labour costs that are in draft or on-hold in all
                  projects
                </span>
              </div>
            </CCol>
          </CRow>
          <CRow
            style={{
              paddingTop: "20px",
              borderBottom: "1px solid #f2f2f2",
              opacity: "1",
            }}
          >
            <CCol sm="12" md="2" xl="2">
              <CFormGroup variant="checkbox" className="checkbox">
                <CInputCheckbox
                  id="checkbox1"
                  name="checkbox1"
                  value="option1"
                />
              </CFormGroup>
            </CCol>
            <CCol sm="12" md="10" xl="10" style={{ fontSize: "12px" }}>
              <span style={{ fontWeight: "600" }}>
                Draft and/or Open Labour Costs
              </span>
              <div>
                <span>
                  Number of labour costs that are in draft or on-hold in all
                  projects
                </span>
              </div>
            </CCol>
          </CRow>
          <CRow
            style={{
              paddingTop: "20px",
              borderBottom: "1px solid #f2f2f2",
              opacity: "1",
            }}
          >
            <CCol sm="12" md="2" xl="2">
              <CFormGroup variant="checkbox" className="checkbox">
                <CInputCheckbox
                  id="checkbox1"
                  name="checkbox1"
                  value="option1"
                />
              </CFormGroup>
            </CCol>
            <CCol sm="12" md="10" xl="10" style={{ fontSize: "12px" }}>
              <span style={{ fontWeight: "600" }}>
                Draft and/or Open Labour Costs
              </span>
              <div>
                <span>
                  Number of labour costs that are in draft or on-hold in all
                  projects
                </span>
              </div>
            </CCol>
          </CRow>
        </CCol>
        <CCol sm="12" md="9" xl="9">
          <span style={{ fontSize: "15px", fontWeight: "700" }}>
            Bottom 5 Earning Projects
          </span>
          <CRow>
            <CCol sm="12" md="4" xl="4" style={{ paddingTop: "20px" }}>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                Project 1
              </span>
              <CRow>
                <CCol sm="4" md="4" xl="4">
                  <img
                    src={Project}
                    alt="Avatar"
                    style={{
                      width: "92px",
                      height: "98px",
                    }}
                  />
                </CCol>
                <CCol sm="8" md="8" xl="8">
                  <CRow>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Project Cost
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Spent
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol md="2" style={{ marginTop: "15px" }}>
                      <span>25%</span>
                    </CCol>
                    <CCol md="10" style={{ marginTop: "15px" }}>
                      <CProgress
                        value={25}
                        className="mb-3"
                        style={{ height: "10px" }}
                      />
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          fontWeight: "600",
                        }}
                      >
                        <span className="float-left">01-JAN-2021</span>
                        <span className="float-right"> 01-JAN-2021</span>
                      </span>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
            <CCol sm="12" md="4" xl="4" style={{ paddingTop: "20px" }}>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                Project 2
              </span>
              <CRow>
                <CCol sm="4" md="4" xl="4">
                  <img
                    src={Project}
                    alt="Avatar"
                    style={{
                      width: "92px",
                      height: "98px",
                    }}
                  />
                </CCol>
                <CCol sm="8" md="8" xl="8">
                  <CRow>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Project Cost
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Spent
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol md="2" style={{ marginTop: "15px" }}>
                      <span>25%</span>
                    </CCol>
                    <CCol md="10" style={{ marginTop: "15px" }}>
                      <CProgress
                        value={25}
                        className="mb-3"
                        style={{ height: "10px" }}
                      />
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          fontWeight: "600",
                        }}
                      >
                        <span className="float-left">01-JAN-2021</span>
                        <span className="float-right"> 01-JAN-2021</span>
                      </span>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
            <CCol sm="12" md="4" xl="4" style={{ paddingTop: "20px" }}>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                Project 3
              </span>
              <CRow>
                <CCol sm="4" md="4" xl="4">
                  <img
                    src={Project}
                    alt="Avatar"
                    style={{
                      width: "92px",
                      height: "98px",
                    }}
                  />
                </CCol>
                <CCol sm="8" md="8" xl="8">
                  <CRow>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Project Cost
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Spent
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol md="2" style={{ marginTop: "15px" }}>
                      <span>25%</span>
                    </CCol>
                    <CCol md="10" style={{ marginTop: "15px" }}>
                      <CProgress
                        value={25}
                        className="mb-3"
                        style={{ height: "10px" }}
                      />
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          fontWeight: "600",
                        }}
                      >
                        <span className="float-left">01-JAN-2021</span>
                        <span className="float-right"> 01-JAN-2021</span>
                      </span>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
            <CCol sm="12" md="4" xl="4" style={{ paddingTop: "20px" }}>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                Project 4
              </span>
              <CRow>
                <CCol sm="4" md="4" xl="4">
                  <img
                    src={Project}
                    alt="Avatar"
                    style={{
                      width: "92px",
                      height: "98px",
                    }}
                  />
                </CCol>
                <CCol sm="8" md="8" xl="8">
                  <CRow>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Project Cost
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Spent
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol md="2" style={{ marginTop: "15px" }}>
                      <span>25%</span>
                    </CCol>
                    <CCol md="10" style={{ marginTop: "15px" }}>
                      <CProgress
                        value="25"
                        className="mb-3"
                        color="success"
                        style={{ height: "10px" }}
                        className="mb-3"
                      />
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          fontWeight: "600",
                        }}
                      >
                        <span className="float-left">01-JAN-2021</span>
                        <span className="float-right"> 01-JAN-2021</span>
                      </span>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
            <CCol sm="12" md="4" xl="4" style={{ paddingTop: "20px" }}>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                Project 5
              </span>
              <CRow>
                <CCol sm="4" md="4" xl="4">
                  <img
                    src={Project}
                    alt="Avatar"
                    style={{
                      width: "92px",
                      height: "98px",
                    }}
                  />
                </CCol>
                <CCol sm="8" md="8" xl="8">
                  <CRow>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Project Cost
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol sm="6" md="6" xl="6" className="float-left">
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          textAlign: "left",
                        }}
                      >
                        Total Spent
                      </span>
                    </CCol>
                    <CCol sm="6" md="4" xl="6" className="float-right">
                      <span
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        P 40,000,000.00
                      </span>
                    </CCol>
                    <CCol md="2" style={{ marginTop: "15px" }}>
                      <span>25%</span>
                    </CCol>
                    <CCol md="10" style={{ marginTop: "15px" }}>
                      <CProgress
                        value={25}
                        className="mb-3"
                        style={{ height: "10px" }}
                      />
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "-1px",
                          fontWeight: "600",
                        }}
                      >
                        <span className="float-left">01-JAN-2021</span>
                        <span className="float-right"> 01-JAN-2021</span>
                      </span>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow style={{ marginTop: "20px" }}>
        <CCol xs="12" sm="9" lg="9">
          <span
            style={{ fontSize: "15px", fontWeight: "700", marginTop: "20px" }}
          >
            Cost and Expense Summary
          </span>
          <div>
            <span>Costs across all active projects per cost type</span>
          </div>

          <CRow style={{ marginTop: "30px" }}>
            <CCol xs="12" sm="4" lg="4">
              <CCard className="shadow border-0">
                <CCardBody>
                  <CRow>
                    <CCol xs="12" sm="5" lg="5">
                      <span style={{ fontWeight: "700", fontSize: "15px" }}>
                        Manpower
                      </span>
                      <span
                        className="iconify"
                        data-icon="healthicons:construction-worker-outline"
                        data-inline="false"
                        style={{ height: "50px", width: "50px" }}
                      ></span>
                    </CCol>
                    <CCol xs="12" sm="7" lg="7">
                      <span style={{ fontSize: "36px", fontWeight: "600" }}>
                        6.2%
                      </span>
                      <div>
                        <span>Php 7,571.50 spent</span>
                      </div>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs="12" sm="4" lg="4">
              <CCard className="shadow border-0">
                <CCardBody>
                  <CRow>
                    <CCol xs="12" sm="5" lg="5">
                      <span style={{ fontWeight: "700", fontSize: "15px" }}>
                        Inventory
                      </span>
                      <span
                        className="iconify"
                        data-icon="mdi:warehouse"
                        data-inline="false"
                        style={{ height: "50px", width: "50px" }}
                      ></span>
                    </CCol>
                    <CCol xs="12" sm="7" lg="7">
                      <span style={{ fontSize: "36px", fontWeight: "600" }}>
                        6.2%
                      </span>
                      <div>
                        <span>Php 7,571.50 spent</span>
                      </div>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs="12" sm="4" lg="4">
              <CCard className="shadow border-0">
                <CCardBody>
                  <CRow>
                    <CCol xs="12" sm="5" lg="5">
                      <span style={{ fontWeight: "700", fontSize: "15px" }}>
                        Equipment
                      </span>
                      <span
                        className="iconify"
                        data-icon="clarity:tools-line"
                        data-inline="false"
                        style={{ height: "50px", width: "50px" }}
                      ></span>
                    </CCol>
                    <CCol xs="12" sm="7" lg="7">
                      <span style={{ fontSize: "36px", fontWeight: "600" }}>
                        6.2%
                      </span>
                      <div>
                        <span>Php 7,571.50 spent</span>
                      </div>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs="12" sm="4" lg="4">
              <CCard className="shadow border-0">
                <CCardBody>
                  <CRow>
                    <CCol xs="12" sm="5" lg="5">
                      <span style={{ fontWeight: "700", fontSize: "15px" }}>
                        Machinery
                      </span>
                      <span
                        className="iconify"
                        data-icon="tabler:backhoe"
                        data-inline="false"
                        style={{ height: "50px", width: "50px" }}
                      ></span>
                    </CCol>
                    <CCol xs="12" sm="7" lg="7">
                      <span style={{ fontSize: "36px", fontWeight: "600" }}>
                        6.2%
                      </span>
                      <div>
                        <span>Php 7,571.50 spent</span>
                      </div>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs="12" sm="4" lg="4">
              <CCard className="shadow border-0">
                <CCardBody>
                  <CRow>
                    <CCol xs="12" sm="5" lg="5">
                      <span style={{ fontWeight: "700", fontSize: "15px" }}>
                        Manpower
                      </span>
                      <span
                        className="iconify"
                        data-icon="healthicons:construction-worker-outline"
                        data-inline="false"
                        style={{ height: "50px", width: "50px" }}
                      ></span>
                    </CCol>
                    <CCol xs="12" sm="7" lg="7">
                      <span style={{ fontSize: "36px", fontWeight: "600" }}>
                        6.2%
                      </span>
                      <div>
                        <span>Php 7,571.50 spent</span>
                      </div>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs="12" sm="4" lg="4">
              <CCard className="shadow border-0">
                <CCardBody>
                  <CRow>
                    <CCol xs="12" sm="5" lg="5">
                      <span style={{ fontWeight: "700", fontSize: "15px" }}>
                        Manpower
                      </span>
                      <span
                        className="iconify"
                        data-icon="healthicons:construction-worker-outline"
                        data-inline="false"
                        style={{ height: "50px", width: "50px" }}
                      ></span>
                    </CCol>
                    <CCol xs="12" sm="7" lg="7">
                      <span style={{ fontSize: "36px", fontWeight: "600" }}>
                        6.2%
                      </span>
                      <div>
                        <span>Php 7,571.50 spent</span>
                      </div>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
