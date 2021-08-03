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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project from "../../assets/img/project.jpg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Projects.css";
// import data from "../../json/dupa";
import NumberFormat from "react-number-format";
import ReactToExcel from "react-html-table-to-excel";
import { CSVLink, CSVDownload } from "react-csv";
import { element } from "prop-types";
import swal from "sweetalert";
import loadingVideo from "../../assets/video/loadingstate.mp4";

import axios from "axios";

const AddProjects = () => {
  const [headvalue, setheadvalue] = useState([]);
  const [tbody, setbody] = useState();
  const [togglevalue, settoggleval] = useState([]);
  const [togglescope, settogglescope] = useState([]);
  const [data, setdata] = useState([]);
  const [show, setshow] = useState("PVC Doors and Frames");
  const [file, setFile] = React.useState("");

  const handleUpload = (event) => {
    console.log(event.target.files[0]);
    let formData = new FormData();
    swal({
      title: "Are you sure?",
      text: "You will upload this file" + " " + event.target.files[0].name,
      icon: "warning",
      buttons: ["No, cancel it!", "Yes, I am sure!"],
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        formData.append("file", event.target.files[0]);
        axios
          .post("http://127.0.0.1:5000/test", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(function (response) {
            setdata(response.data);
          });
      }
    });
  };

  const toggleShown = (value, valindex) => {
    console.log(valindex, "index");
    const shownState = togglevalue.slice();
    const index = shownState.indexOf(value);

    setshow(value);
    if (index >= 0) {
      shownState.splice(index, 1);
      settoggleval(shownState);
    } else {
      shownState.push(value);
      settoggleval(shownState);
    }
  };
  const toggle = (value) => {
    console.log(value);
    const shownState = togglescope.slice();
    const index = shownState.indexOf(value);
    // settagshow(value);
    // settoggle(valindex);
    if (index >= 0) {
      shownState.splice(index, 1);
      settogglescope(shownState);
    } else {
      shownState.push(value);
      settogglescope(shownState);
    }
  };

  const InputOnchange = (e, scopeIndex, Index, header, Category) => {
    let newArr = [...data];

    if (Category == "Labor" && header == "Description") {
      newArr[scopeIndex].Labor[Index].Description = e.target.value;
    } else if (Category == "Labor" && header == "NoOfPerson") {
      newArr[scopeIndex].Labor[Index].No_Of_Person = e.target.value;
    } else if (Category == "Labor" && header == "Unit") {
      newArr[scopeIndex].Labor[Index].Unit = e.target.value;
    } else if (Category == "Labor" && header == "Rate") {
      newArr[scopeIndex].Labor[Index].Rate = e.target.value;
    }

    setdata(newArr);
  };

  const EquipmentInputOnchange = (e, scopeIndex, Index, header, Category) => {
    let newArr = [...data];

    if (Category == "Equipment" && header == "Description") {
      newArr[scopeIndex].Equipment[Index].Description = e.target.value;
    } else if (Category == "Equipment" && header == "NoOfUnits") {
      newArr[scopeIndex].Equipment[Index].No_Of_Units = e.target.value;
    } else if (Category == "Equipment" && header == "NoOfHours") {
      newArr[scopeIndex].Equipment[Index].No_Of_Hours = e.target.value;
    } else if (Category == "Equipment" && header == "Rate") {
      newArr[scopeIndex].Equipment[Index].Rate = e.target.value;
    }

    setdata(newArr);
  };

  const MaterialInputOnchange = (e, scopeIndex, Index, header, Category) => {
    let newArr = [...data];

    if (Category == "Material" && header == "Description") {
      newArr[scopeIndex].Materials[Index].Description = e.target.value;
    } else if (Category == "Material" && header == "Unit") {
      newArr[scopeIndex].Materials[Index].Unit = e.target.value;
    } else if (Category == "Material" && header == "Quantity") {
      newArr[scopeIndex].Materials[Index].Quantity = e.target.value;
    } else if (Category == "Material" && header == "UnitCost") {
      newArr[scopeIndex].Materials[Index].Unit_Cost = e.target.value;
    }

    setdata(newArr);
  };

  const body = data.map((datascope, Index) => {
    let scopeIndex = Index;
    let Total = 0;
    let Labor_Total = 0;
    let Equipment_Total = 0;
    let Material_Total = 0;

    // let arrow = "bx:bxs-right-arrow";
    // if (togglevalue.includes(datascope[0]) == true) {
    //   arrow = "bx:bxs-down-arrow";
    //   console.log(true);
    // }
    const laborscope = datascope.Labor.map((labor, Index) => {
      Total += labor.Amount;
      Labor_Total += labor.Amount;
      return (
        <tr key={Index} className="text-center">
          <td>
            <input
              type="text"
              className="input_outline"
              onChange={(e) =>
                InputOnchange(e, scopeIndex, Index, "Description", "Labor")
              }
              value={labor.Description}
              style={{ textAlign: "center" }}
            />
          </td>
          <td>
            <input
              type="text"
              className="input_outline"
              onChange={(e) =>
                InputOnchange(e, scopeIndex, Index, "NoOfPerson", "Labor")
              }
              value={labor.No_Of_Person}
              style={{ textAlign: "center" }}
            />
          </td>
          <td>
            <input
              type="text"
              className="input_outline"
              onChange={(e) =>
                InputOnchange(e, scopeIndex, Index, "Unit", "Labor")
              }
              value={labor.Unit}
              style={{ textAlign: "center" }}
            />
          </td>
          <td>
            <input
              type="text"
              className="input_outline"
              onChange={(e) =>
                InputOnchange(e, scopeIndex, Index, "Rate", "Labor")
              }
              value={labor.Rate}
              style={{ textAlign: "center" }}
            />
          </td>
          <td>
            <NumberFormat
              value={labor.Amount}
              displayType={"text"}
              thousandSeparator={true}
            />
          </td>
        </tr>
      );
    });

    const Equipmentscope = datascope.Equipment.map((equipment, Index) => {
      Total += equipment.Amount;
      Equipment_Total += equipment.Amount;
      return (
        <tr key={Index} className="text-center">
          <td>
            <input
              type="text"
              className="input_outline"
              onChange={(e) =>
                EquipmentInputOnchange(
                  e,
                  scopeIndex,
                  Index,
                  "Description",
                  "Equipment"
                )
              }
              value={equipment.Description}
              style={{ textAlign: "center" }}
            />
          </td>
          <td>
            <input
              type="text"
              className="input_outline"
              onChange={(e) =>
                EquipmentInputOnchange(
                  e,
                  scopeIndex,
                  Index,
                  "NoOfUnits",
                  "Equipment"
                )
              }
              value={equipment.No_Of_Units}
              style={{ textAlign: "center" }}
            />
          </td>
          <td>
            <input
              type="text"
              className="input_outline"
              onChange={(e) =>
                EquipmentInputOnchange(
                  e,
                  scopeIndex,
                  Index,
                  "NoOfHours",
                  "Equipment"
                )
              }
              value={equipment.No_Of_Hours}
              style={{ textAlign: "center" }}
            />
          </td>
          <td>
            <input
              type="text"
              className="input_outline"
              onChange={(e) =>
                EquipmentInputOnchange(
                  e,
                  scopeIndex,
                  Index,
                  "Rate",
                  "Equipment"
                )
              }
              value={equipment.Rate}
              style={{ textAlign: "center" }}
            />
          </td>
          <td>
            <NumberFormat
              value={equipment.Amount}
              displayType={"text"}
              thousandSeparator={true}
            />
          </td>
        </tr>
      );
    });

    const Materialscope = datascope.Materials.map((material, Index) => {
      Total += material.Amount;
      Material_Total += material.Amount;
      return (
        <tr key={Index} className="text-center">
          <td>
            <input
              type="text"
              className="input_outline"
              onChange={(e) =>
                MaterialInputOnchange(
                  e,
                  scopeIndex,
                  Index,
                  "Description",
                  "Material"
                )
              }
              value={material.Description}
              style={{ textAlign: "center" }}
            />
          </td>
          <td>
            <input
              type="text"
              className="input_outline"
              onChange={(e) =>
                MaterialInputOnchange(e, scopeIndex, Index, "Unit", "Material")
              }
              value={material.Unit}
              style={{ textAlign: "center" }}
            />
          </td>
          <td>
            <input
              type="text"
              className="input_outline"
              onChange={(e) =>
                MaterialInputOnchange(
                  e,
                  scopeIndex,
                  Index,
                  "Quantity",
                  "Material"
                )
              }
              value={material.Quantity}
              style={{ textAlign: "center" }}
            />
          </td>
          <td>
            {" "}
            <input
              type="text"
              className="input_outline"
              onChange={(e) =>
                MaterialInputOnchange(
                  e,
                  scopeIndex,
                  Index,
                  "UnitCost",
                  "Material"
                )
              }
              value={material.Unit_Cost}
              style={{ textAlign: "center" }}
            />
          </td>
          <td>
            <NumberFormat
              value={material.Amount}
              displayType={"text"}
              thousandSeparator={true}
            />
          </td>
        </tr>
      );
    });

    return (
      <tbody key={Index}>
        <tr
          key={Index}
          style={{ fontWeight: "700" }}
          onClick={() => toggleShown(datascope[0])}
        >
          <td colSpan="4">
            <i
              className="iconify"
              data-icon="bx:bxs-right-arrow"
              data-inline="false"
            ></i>

            {datascope[0]}
          </td>
          <td colSpan="1" className="text-center">
            {
              <NumberFormat
                value={Total}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
          </td>
        </tr>
        {togglevalue.includes(datascope[0]) && (
          <tr
            style={{ fontWeight: "600" }}
            onClick={() => toggle(datascope[0] + "Labor" + Index)}
          >
            <td colSpan="4" style={{ paddingLeft: "50px" }}>
              <i
                className="iconify"
                data-icon="bx:bxs-right-arrow"
                data-inline="false"
              ></i>
              Labor
            </td>
            <td colSpan="1" style={{ textAlign: "center" }}>
              {
                <NumberFormat
                  value={Labor_Total}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              }
            </td>
          </tr>
        )}
        {togglescope.includes(datascope[0] + "Labor" + Index) && (
          <tr
            className="text-center"
            style={{
              background: "#E9e9e9",
              fontWeight: "600",
            }}
          >
            <td>Designation</td>
            <td>No of Person</td>
            <td>Unit</td>
            <td>Rate</td>
            <td>Amount</td>
          </tr>
        )}

        {togglescope.includes(datascope[0] + "Labor" + Index) && laborscope}

        {togglevalue.includes(datascope[0]) && (
          <tr
            style={{ fontWeight: "600", marginLeft: "20px" }}
            onClick={() => toggle(datascope[0] + "Equipment" + Index)}
          >
            <td colSpan="4" style={{ paddingLeft: "50px" }}>
              <i
                className="iconify"
                data-icon="bx:bxs-right-arrow"
                data-inline="false"
              ></i>
              Equipment
            </td>
            <td colSpan="1" style={{ textAlign: "center" }}>
              <NumberFormat
                value={Equipment_Total}
                displayType={"text"}
                thousandSeparator={true}
              />
            </td>
          </tr>
        )}
        {togglescope.includes(datascope[0] + "Equipment" + Index) && (
          <tr
            className="text-center"
            style={{
              background: "#E9e9e9",
              fontWeight: "600",
            }}
          >
            <td>Description</td>
            <td>No of Units</td>
            <td>Not of Hours</td>
            <td>Rate</td>
            <td>Amount</td>
          </tr>
        )}

        {togglescope.includes(datascope[0] + "Equipment" + Index) &&
          Equipmentscope}
        {togglevalue.includes(datascope[0]) && (
          <tr
            style={{ fontWeight: "600", marginLeft: "20px" }}
            onClick={() => toggle(datascope[0] + "Material" + Index)}
          >
            <td colSpan="4" style={{ paddingLeft: "50px" }}>
              <i
                className="iconify"
                data-icon="bx:bxs-right-arrow"
                data-inline="false"
              ></i>
              Materials
            </td>
            <td colSpan="1" style={{ textAlign: "center" }}>
              <NumberFormat
                value={Material_Total}
                displayType={"text"}
                thousandSeparator={true}
              />
            </td>
          </tr>
        )}
        {togglescope.includes(datascope[0] + "Material" + Index) && (
          <tr
            className="text-center"
            style={{
              background: "#E9e9e9",
              fontWeight: "600",
            }}
          >
            <td>Description</td>
            <td>Units</td>
            <td>Quantity</td>
            <td>Unit Cost</td>
            <td>Amount</td>
          </tr>
        )}

        {togglescope.includes(datascope[0] + "Material" + Index) &&
          Materialscope}
      </tbody>
    );
  });

  return (
    <>
      <CForm>
        <CCard>
          <CHeader></CHeader>
          <CCardBody>
            <CRow>
              <CCol md="6">
                <CFormGroup row>
                  <CLabel className="col-form-label col-md-3" md="3">
                    Project Name :
                  </CLabel>
                  <CCol md="9">
                    <CInput
                      type="text"
                      className="form-control"
                      placeholder="Enter project name"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel className="col-form-label col-md-3" md="3">
                    Project Location :
                  </CLabel>
                  <CCol md="9">
                    <CInput
                      type="text"
                      className="form-control"
                      placeholder="Enter project location"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel className="col-form-label col-md-3" md="3">
                    Project ID :
                  </CLabel>
                  <CCol md="9">
                    <CInput
                      type="text"
                      className="form-control"
                      placeholder="Enter project Id"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel className="col-form-label col-md-3" md="3">
                    Project Category
                  </CLabel>
                  <CCol md="6">
                    <CInput
                      type="text"
                      className="form-control"
                      placeholder="Enter project category"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel className="col-form-label col-md-3" md="3">
                    Project Cost
                  </CLabel>
                  <CCol md="9">
                    <CInput
                      type="text"
                      className="form-control"
                      placeholder="Enter project Cost"
                    />
                  </CCol>
                </CFormGroup>
              </CCol>
              <CCol md="6">
                <CFormGroup row>
                  <CLabel className="col-form-label col-md-3" md="3">
                    Source of Funds :
                  </CLabel>
                  <CCol md="7">
                    <CInput
                      type="text"
                      className="form-control"
                      placeholder="Enter project name"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel className="col-form-label col-md-3" md="3">
                    Start Date:
                  </CLabel>
                  <CCol md="6">
                    <CInput
                      type="date"
                      className="form-control"
                      placeholder="mm/dd/yyyy"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel className="col-form-label col-md-3" md="3">
                    ProjectDuration:
                  </CLabel>
                  <CCol md="6">
                    <CInput
                      type="text"
                      className="form-control"
                      placeholder="Days"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel className="col-form-label col-md-3" md="3">
                    Brief Description
                  </CLabel>
                  <CCol md="9">
                    <CTextarea className="form-control"></CTextarea>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel className="col-form-label col-md-3" md="3">
                    Documents
                  </CLabel>
                  <CCol md="9">
                    <CInput
                      type="file"
                      className="form-control"
                      onChange={handleUpload}
                    />
                  </CCol>
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CForm>

      <CCard>
        <CCardBody>
          <div className="float-right export_container">
            {/* <CSVLink
              data={gitdata}
              filename={"my-file.csv"}
              className="btn navy_blue"
              target="_blank"
            >
              CSV
            </CSVLink> */}

            <ReactToExcel
              className="btn navy_blue margin"
              table="dupa_table"
              filename="excelFile"
              sheet="sheet 1"
              buttonText="XLSX"
            />
          </div>

          <table
            id="dupa_table"
            className="col-md-12 table"
            data-show-export="true"
          >
            <thead
              style={{
                background: "#E9e9e9",
              }}
            >
              <tr>
                <th colSpan="4">Scope of Work</th>

                <th colSpan="1" className="text-center">
                  Estimated Cost
                </th>
              </tr>
            </thead>
            {body}
          </table>
        </CCardBody>
      </CCard>
    </>
  );
};

export default AddProjects;
