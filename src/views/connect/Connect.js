import React, { lazy, useState, useEffect } from "react";
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
  CFormGroup,
  CLabel,
  CForm,
  CTextarea,
  CInputRadio,
  CInputGroupText,
  CValidFeedback,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project from "../../assets/img/project.jpg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import NumberFormat from "react-number-format";
import ReactToExcel from "react-html-table-to-excel";
import { CSVLink, CSVDownload } from "react-csv";
import { element } from "prop-types";
import swal from "sweetalert";
import "./Connect.css";
import { Document, Page } from "react-pdf";
import Calibrate from "../calibrate/Calibrate";
import { useHistory } from "react-router-dom";
import Lottie from "react-lottie";
import LoadingLottie from "../../json/lottie";
import Dupa from "../calibrate/Dupa";

import axios from "axios";

const Connect = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const history = useHistory();
  const [srcfile, setsrcfile] = useState("");
  const [filename, setfilename] = useState();
  const [isSelected, setisSelected] = useState(false);
  const [projectOption, setprojectOption] = useState("NewProject");
  const [method, setmethod] = useState("Manual");
  const [manualbtn, setmanualbtn] = useState("secondary_base");
  const [connectbtn, setconnectbtn] = useState("secondary");
  const [Loading, setLoading] = useState(false);
  const [typeOfInformation, settypeOfInformation] = useState("Dupa");

  const Upload = (event) => {
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setfilename(event.target.files[0]);
    setsrcfile(objectUrl);
    setisSelected(true);
  };

  const optionSelect = (e) => {
    setprojectOption(e.target.value);
  };

  const MethodChoose = (val) => {
    setmethod(val);
    if (val == "Manual") {
      setmanualbtn("secondary_base");
      setconnectbtn("secondary");
    } else {
      setmanualbtn("secondary");
      setconnectbtn("secondary_base");
    }
  };

  const onChangeInformation = (e) => {
    console.log(e.target.value);
    settypeOfInformation(e.target.value);
  };

  const Connect = () => {
    let formData = new FormData();
    formData.append("file", filename);
    setLoading(true);
    setTimeout(() => {
      axios
        .post("http://127.0.0.1:5000/test", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          setLoading(false);
          history.push({
            pathname: "../calibrate/Calibrate",
            state: { data: response.data, condition: typeOfInformation },
          });
        });
    }, 3000);
  };

  return (
    <>
      {Loading ? (
        <div className="loading">
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            className="loading-lottie"
          />
        </div>
      ) : (
        ""
      )}
      <CRow>
        <CCol xs="12" sm="12" md="7" lg="7">
          <h3 style={{ fontSize: "18px" }}>Let's Connect!</h3>
          <span style={{ fontSize: "12px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            pretium sapien. In hac habitasse platea dictumst. Praesent vel diam
            cursus velit sodales ornare. Maecenas tincidunt lacinia ipsum non
            gravida. Nulla ut orci viverra neque sollicitudin luctus mattis eu
            ipsum. Ut id volutpat lectus. Nunc imperdiet metus non velit
            fermentum imperdiet nec in nisi.
          </span>
        </CCol>
        <CCol xs="12" sm="12" md="7" lg="7" style={{ padding: "10px" }}>
          <span className="category_label">
            <CBadge color="secondary_base" shape="pill">
              1
            </CBadge>
            <span style={{ margin: "8px" }}>
              Information you'd like to provide
            </span>
          </span>
        </CCol>
        <CCol xs="12" sm="12" md="7" lg="7" style={{ paddingLeft: "30px" }}>
          <h6 style={{ margin: "10px" }}>Project Information</h6>
          <CFormGroup variant="custom-radio" inline>
            <CInputRadio
              custom
              id="inline-radio1"
              name="inline-radios"
              value="NewProject"
              onChange={(e) => optionSelect(e)}
              checked={projectOption == "NewProject"}
            />
            <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
              New Project
            </CLabel>
          </CFormGroup>
          <CFormGroup variant="custom-radio" inline>
            <CInputRadio
              custom
              id="inline-radio2"
              name="inline-radios"
              value="ExcistingProject"
              onChange={(e) => optionSelect(e)}
              className="secondary_base"
              checked={projectOption == "ExcistingProject"}
            />
            <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
              Excisting Project
            </CLabel>
          </CFormGroup>
        </CCol>
        {projectOption == "NewProject" ? (
          <CCol xs="12" sm="12" md="7" lg="7" style={{ padding: "30px" }}>
            <CFormGroup row>
              <CCol md="5">
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-user" size="sm" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    id="input1-group1"
                    name="input1-group1"
                    placeholder="Project Name"
                    size="sm"
                  />
                  <span className="help-block" style={{ fontSize: "8px" }}>
                    Project name is unique. Type in a name with atleast 5
                    characters.
                  </span>
                </CInputGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="5">
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <span
                        className="iconify"
                        data-icon="carbon:location-filled"
                        data-inline="false"
                      ></span>
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    id="input1-group1"
                    name="input1-group1"
                    placeholder="Project Location"
                    size="sm"
                  />
                </CInputGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="5">
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <span
                        className="iconify"
                        data-icon="fa-solid:list"
                        data-inline="false"
                      ></span>
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CSelect
                    custom
                    name="select"
                    id="select"
                    placeholder="Project Category"
                    size="sm"
                  >
                    <option value="0">Project Category</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </CSelect>
                </CInputGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="5">
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <span
                        className="iconify"
                        data-icon="fa-solid:id-badge"
                        data-inline="false"
                      ></span>
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    id="input1-group1"
                    name="input1-group1"
                    placeholder="Project Id"
                    size="sm"
                  />
                </CInputGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="5">
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <span
                        className="iconify"
                        data-icon="bi:currency-dollar"
                        data-inline="false"
                      ></span>
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    id="input1-group1"
                    name="input1-group1"
                    placeholder="Project Cost"
                    size="sm"
                  />
                </CInputGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="5">
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <span
                        className="iconify"
                        data-icon="bi:currency-dollar"
                        data-inline="false"
                      ></span>
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    id="input1-group1"
                    name="input1-group1"
                    placeholder="Source of Funds"
                    size="sm"
                  />
                </CInputGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="5">
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <span
                        className="iconify"
                        data-icon="bx:bx-calendar"
                        data-inline="false"
                      ></span>
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    id="input1-group1"
                    name="input1-group1"
                    placeholder="Start Date"
                    size="sm"
                  />
                </CInputGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="5">
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <span
                        className="iconify"
                        data-icon="bx:bx-calendar"
                        data-inline="false"
                      ></span>
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    id="input1-group1"
                    name="input1-group1"
                    placeholder="No of Days"
                    size="sm"
                  />
                </CInputGroup>
              </CCol>
            </CFormGroup>
          </CCol>
        ) : (
          <CCol xs="12" sm="12" md="7" lg="7" style={{ padding: "20px" }}>
            <CCol xs="12" sm="12" md="6" lg="6">
              <CInputGroup>
                <CLabel style={{ paddingLeft: "20px" }}>Project Name</CLabel>
                <CCol xs="12" sm="12" md="10" lg="10">
                  <CInput
                    type="text"
                    placeholder="Enter name to search"
                    size="sm"
                  />
                  <span className="help-block" style={{ fontSize: "8px" }}>
                    Please enter at least 3 characters to search
                  </span>
                </CCol>
                <CCol xs="12" sm="12" md="2" lg="2">
                  <CButton color="secondary_base" size="sm">
                    <span
                      className="iconify"
                      data-icon="fluent:search-16-filled"
                      data-inline="false"
                      style={{ height: "15px", width: "15px" }}
                    ></span>
                  </CButton>
                </CCol>
              </CInputGroup>
            </CCol>
          </CCol>
        )}

        <CCol xs="12" sm="12" md="7" lg="7" style={{ padding: "10px" }}>
          <span className="category_label">
            <span className="category_label">
              <CBadge color="secondary_base" shape="pill">
                2
              </CBadge>
              <span style={{ margin: "10px" }}>
                Select you preferred input method.
              </span>
            </span>
          </span>
        </CCol>
        <CCol xs="12" sm="12" md="7" lg="7">
          <CFormGroup>
            <CCol md="5">
              <CLabel htmlFor="ccmonth" style={{ fontSize: "10px" }}>
                Type of Information
              </CLabel>
              <CSelect
                custom
                name="ccmonth"
                id="ccmonth"
                size="sm"
                value={typeOfInformation}
                onChange={(e) => onChangeInformation(e)}
              >
                <option value="Dupa">Dupa</option>
                <option value="TimeSheet">Time Sheets</option>
              </CSelect>
              <span className="help-block" style={{ fontSize: "8px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </CCol>
          </CFormGroup>
        </CCol>
        <CCol xs="12" sm="12" md="6" lg="6" style={{ paddingLeft: "25px" }}>
          <CRow>
            <CCol md="3" className="text-center">
              <CButton
                active
                block
                aria-pressed="true"
                color={manualbtn}
                size="lg"
                onClick={() => MethodChoose("Manual")}
              >
                <span
                  className="iconify"
                  data-icon="bi:keyboard"
                  data-inline="false"
                  style={{ height: "50px", width: "50px" }}
                ></span>
                <h6>MANUAL</h6>
              </CButton>
            </CCol>
            <CCol md="3" className="text-center">
              <CButton
                active
                block
                color={connectbtn}
                size="lg"
                onClick={() => MethodChoose("Connect")}
              >
                <span
                  className="iconify"
                  data-icon="fluent:cloud-flow-24-regular"
                  data-inline="false"
                  style={{ height: "50px", width: "50px" }}
                ></span>
                <h6>CONNECT</h6>
              </CButton>
            </CCol>
          </CRow>
        </CCol>
        {method == "Manual" ? (
          <CCol xs="12" sm="12" md="12" lg="12" style={{ padding: "15px" }}>
            <h5 style={{ margin: "10px" }}>Files</h5>
            <CRow>
              <CCol
                xs="12"
                sm="12"
                md="4"
                lg="4"
                style={{ paddingTop: "10px" }}
              >
                <CCard className="card_upload">
                  <input type="file" multiple onChange={Upload} />
                  <p>Drag your files here or browse to upload</p>
                </CCard>
              </CCol>
              <CCol xs="12" sm="12" md="8" lg="8" style={{ padding: "5px" }}>
                <CCol xs="12" sm="12" md="4" lg="4">
                  {isSelected ? (
                    <CCard style={{ border: "none", overflow: "hidden" }}>
                      <iframe
                        src={srcfile}
                        className="responsive-iframe"
                      ></iframe>
                      <span className="float-left" style={{ fontSize: "12px" }}>
                        File Name{" "}
                        <span className="float-right">Date Uploaded</span>
                      </span>
                      <span
                        className="float-left"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        {filename.name}
                        <span className="float-right">{filename.name}</span>
                      </span>
                    </CCard>
                  ) : (
                    <p>Select a file to show details</p>
                  )}
                </CCol>
              </CCol>
            </CRow>
          </CCol>
        ) : (
          <CCol xs="12" sm="12" md="12" lg="12" style={{ padding: "15px" }}>
            <CRow>
              <CCol xs="12" sm="12" md="3" lg="3">
                <CFormGroup>
                  <CLabel htmlFor="name" style={{ fontSize: "10px" }}>
                    Connect this app
                  </CLabel>
                  <CInput
                    id="name"
                    placeholder="Enter your name"
                    required
                    size="sm"
                  />
                  <span className="help-block" style={{ fontSize: "8px" }}>
                    This is where you’ll add some help text if required
                    [optional]
                  </span>
                </CFormGroup>
              </CCol>
            </CRow>
          </CCol>
        )}
        {method == "Connect" ? (
          <CCol xs="12" sm="12" md="7" lg="7" style={{ padding: "10px" }}>
            <span className="category_label">
              <CBadge color="secondary_base" shape="pill">
                3
              </CBadge>
              <span style={{ margin: "8px" }}>Choose Account</span>
            </span>
            <CCol md="5" lg="5" xs="12" sm="12" style={{ padding: "15px" }}>
              <CButton
                active
                block
                color="secondary_base"
                size="sm"
                onClick={() => MethodChoose("Connect")}
              >
                Sign in to Google sheets
              </CButton>
              <span
                className="help-block"
                style={{ fontSize: "8px" }}
                md="12"
                lg="12"
                xs="12"
                sm="12"
              >
                Google Sheets is a secure partner of AIMHI. Your credentials are
                encrypted and can be removed at any time.
              </span>
            </CCol>
            <CCol md="5" lg="5" xs="12" sm="12" style={{ padding: "15px" }}>
              <CButton active block color="secondary" size="sm">
                To continue, finish required fields
              </CButton>
            </CCol>
          </CCol>
        ) : (
          ""
        )}
        {method == "Connect" ? (
          <CCol xs="12" sm="12" md="7" lg="7" style={{ padding: "10px" }}>
            <span className="category_label">
              <CBadge color="secondary_base" shape="pill">
                4
              </CBadge>
              <span style={{ margin: "8px" }}>Set-up connection</span>
            </span>
            <CCol xs="12" sm="12" md="6" lg="6" style={{ padding: "10px" }}>
              <CInputGroup>
                <CLabel style={{ paddingLeft: "20px", fontSize: "10px" }}>
                  Filename
                </CLabel>
                <CCol xs="12" sm="12" md="10" lg="10">
                  <CInput
                    type="text"
                    placeholder="Enter you filename"
                    size="sm"
                  />
                  <span className="help-block" style={{ fontSize: "8px" }}>
                    Project name is unique. Type in a name with at least 5
                    characters.
                  </span>
                </CCol>
                <CCol xs="12" sm="12" md="2" lg="2">
                  <CButton color="secondary_base" size="sm">
                    <span
                      className="iconify"
                      data-icon="fluent:search-16-filled"
                      data-inline="false"
                      style={{ height: "15px", width: "15px" }}
                    ></span>
                  </CButton>
                </CCol>
              </CInputGroup>
              <CInputGroup>
                <CLabel
                  style={{
                    paddingLeft: "20px",
                    paddingTop: "10px",
                    fontSize: "10px",
                  }}
                >
                  How often would you like to sync?
                </CLabel>
                <CCol xs="12" sm="12" md="10" lg="10">
                  <CInput type="text" placeholder="Daily" size="sm" />
                  <span className="help-block" style={{ fontSize: "8px" }}>
                    This is where you’ll add some help text if required
                    [optional]
                  </span>
                </CCol>
              </CInputGroup>
            </CCol>
          </CCol>
        ) : (
          ""
        )}
      </CRow>

      <CCol
        sm="4"
        md="4"
        className="float-right"
        style={{ paddingBottom: "20px" }}
      >
        <CRow>
          <CCol md="6" sm="12">
            <CButton color="secondary_base" variant="outline" size="sm" block>
              Cancel
            </CButton>
          </CCol>
          <CCol md="6" sm="12">
            <CButton
              color="secondary_base"
              size="sm"
              block
              onClick={() => Connect()}
            >
              Connect
            </CButton>
          </CCol>
        </CRow>
      </CCol>
    </>
  );
};

export default Connect;
