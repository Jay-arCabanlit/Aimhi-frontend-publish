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
  CPopover,
  CInputRadio,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Calibrate.css";
import data from "../../json/dupa";
import NumberFormat from "react-number-format";
import ReactToExcel from "react-html-table-to-excel";
import { CSVLink, CSVDownload } from "react-csv";
import { element } from "prop-types";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const Dupa = (props) => {
  console.log(props.data);
  const [dupadata, setdupadata] = useState([]);
  const [backupData, setbackupData] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [inputclass, setinputclass] = useState("input_outline");
  const [inputdisable, setinputdisable] = useState(true);
  const [buttonName, setbuttonName] = useState("Edit");

  useEffect(() => {
    // setdupadata(val.location.state.data);
    // setbackupData(val.location.state.data);
    setdupadata(props.data);
    setbackupData(props.data);
  }, []);

  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  const InputOnchange = (e, scopeIndex, Index, header, Category) => {
    let newArr = [...dupadata];

    if (Category == "Labor" && header == "Description") {
      newArr[scopeIndex].Labor[Index].Description = e.target.value;
    } else if (Category == "Labor" && header == "NoOfPerson") {
      newArr[scopeIndex].Labor[Index].No_Of_Person = e.target.value;
    } else if (Category == "Labor" && header == "Unit") {
      newArr[scopeIndex].Labor[Index].Unit = e.target.value;
    } else if (Category == "Labor" && header == "Rate") {
      newArr[scopeIndex].Labor[Index].Rate = e.target.value;
    }

    setdupadata(newArr);
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

    setdupadata(newArr);
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

    setdupadata(newArr);
  };

  const EditField = (val) => {
    console.log("hello");
    let OldArr = [...backupData];

    if (buttonName == "Edit") {
      setinputclass("input_edit");
      setinputdisable(false);
      setbuttonName("Cancel");
    } else {
      setdupadata(OldArr);
      setinputclass("input_outline");
      setinputdisable(true);
      setbuttonName("Edit");
    }
  };

  const tbody = dupadata.map((scope, Index) => {
    let Total_Labor = 0;
    let Total_Equipment = 0;
    let Total_Material = 0;
    let Direct_Total_Cost = 0;
    let Direct_Unit_Cost = 0;
    let Total_OCM = 0;
    let Total_CP = 0;
    let Total_Vat = 0;
    let Total_Cost = 0;
    let Total_Unit_Cost = 0;
    let scopeIndex = Index;

    const Labor = scope.Labor.map((labor, Index) => {
      console.log(labor.DailyRate, labor.TotalRate);
      Total_Labor += labor.Amount;
      Direct_Total_Cost += labor.Amount;
      let DailyRate = labor.DailyRate;

      return (
        <tr key={Index} className="text-center" style={{ fontSize: "14px" }}>
          <td>
            <input
              type="text"
              className={inputclass}
              onChange={(e) =>
                InputOnchange(e, scopeIndex, Index, "Description", "Labor")
              }
              value={labor.Description}
              style={{ textAlign: "center", color: "#23303d", width: "85%" }}
              disabled={inputdisable}
            />
          </td>
          <td>
            <input
              type="text"
              className={inputclass}
              onChange={(e) =>
                InputOnchange(e, scopeIndex, Index, "NoOfPerson", "Labor")
              }
              value={labor.No_Of_Person}
              style={{ textAlign: "center", color: "#23303d" }}
              disabled={inputdisable}
            />
          </td>
          <td>
            <input
              type="text"
              className={inputclass}
              onChange={(e) =>
                InputOnchange(e, scopeIndex, Index, "Unit", "Labor")
              }
              value={labor.Unit}
              style={{ textAlign: "center" }}
              disabled={inputdisable}
            />
          </td>
          <td>
            <input
              type="text"
              className={inputclass}
              onChange={(e) =>
                InputOnchange(e, scopeIndex, Index, "Rate", "Labor")
              }
              value={labor.Rate}
              style={{ textAlign: "center", color: "#23303d" }}
              disabled={inputdisable}
            />
          </td>
          <td className="text-left">
            PHP
            <NumberFormat
              value={labor.Amount}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
            />
            {DailyRate > 0 ? (
              <span>
                <CButton
                  id="Popover1"
                  type="button"
                  color="success"
                  className="float-right"
                  size="sm"
                >
                  <span
                    className="iconify"
                    data-icon="eos-icons:ai-operator"
                    data-inline="false"
                    style={{ fontSize: "15px", fontWeight: "700" }}
                  ></span>
                </CButton>
                <Popover
                  placement="bottom"
                  isOpen={popoverOpen}
                  target="Popover1"
                  toggle={toggle}
                  style={{
                    background: "#DCE7DF",
                    fontSize: "12px",
                  }}
                >
                  <PopoverBody>
                    A Php 78.77 daily rate is very low compared to the average.
                    It seems this is an hourly rate. Would you like to
                    re-calculate?
                    <div>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio1"
                          name="inline-radios"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio1"
                        >
                          Change daily rate to Php{labor.DailyRate}
                        </CLabel>
                      </CFormGroup>
                    </div>
                    <div>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio1"
                          name="inline-radios"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio1"
                        >
                          Change total to Php{labor.TotalRate}
                        </CLabel>
                      </CFormGroup>
                    </div>
                    <div>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio1"
                          name="inline-radios"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio1"
                        >
                          Do not change
                        </CLabel>
                      </CFormGroup>
                    </div>
                    <div className="align-right">
                      <CButton color="secondary_base" size="sm" block>
                        save
                      </CButton>
                    </div>
                  </PopoverBody>
                </Popover>
              </span>
            ) : (
              ""
            )}
          </td>
        </tr>
      );
    });
    const Equipment = scope.Equipment.map((equipment, Index) => {
      Total_Equipment += equipment.Amount;
      Direct_Total_Cost += equipment.Amount;
      return (
        <tr key={Index} className="text-center" style={{ fontSize: "14px" }}>
          <td>
            <input
              type="text"
              className={inputclass}
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
              style={{ textAlign: "center", color: "#23303d", width: "85%" }}
              disabled={inputdisable}
            />
          </td>
          <td>
            <input
              type="text"
              className={inputclass}
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
              style={{ textAlign: "center", color: "#23303d" }}
              disabled={inputdisable}
            />
          </td>
          <td>
            <input
              type="text"
              className={inputclass}
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
              style={{ textAlign: "center", color: "#23303d" }}
              disabled={inputdisable}
            />
          </td>
          <td>
            <input
              type="text"
              className={inputclass}
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
              style={{ textAlign: "center", color: "#23303d" }}
              disabled={inputdisable}
            />
          </td>
          <td className="text-left">
            PHP
            <NumberFormat
              value={equipment.Amount}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
            />
          </td>
        </tr>
      );
    });
    const Material = scope.Materials.map((material, Index) => {
      Total_Material += material.Amount;
      Direct_Total_Cost += material.Amount;
      return (
        <tr key={Index} className="text-center" style={{ fontSize: "14px" }}>
          <td>
            <input
              type="text"
              className={inputclass}
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
              style={{ textAlign: "center", color: "#23303d", width: "85%" }}
              disabled={inputdisable}
            />
          </td>
          <td>
            <input
              type="text"
              className={inputclass}
              onChange={(e) =>
                MaterialInputOnchange(e, scopeIndex, Index, "Unit", "Material")
              }
              value={material.Unit}
              style={{ textAlign: "center", color: "#23303d" }}
              disabled={inputdisable}
            />
          </td>
          <td>
            {" "}
            <input
              type="text"
              className={inputclass}
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
              style={{ textAlign: "center", color: "#23303d", width: "85%" }}
              disabled={inputdisable}
            />
          </td>
          <td>
            <input
              type="text"
              className={inputclass}
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
              style={{ textAlign: "center", color: "#23303d" }}
              disabled={inputdisable}
            />
          </td>
          <td className="text-left">
            PHP
            <NumberFormat
              value={material.Amount}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
            />
          </td>
        </tr>
      );
    });

    Direct_Unit_Cost += Direct_Total_Cost / 1;
    Total_OCM += (Direct_Total_Cost / 100) * 15;
    Total_CP += (Direct_Total_Cost / 100) * 10;
    Total_Vat += ((Direct_Unit_Cost + Total_OCM + Total_CP) / 100) * 5;
    Total_Cost += Direct_Unit_Cost + Total_OCM + Total_CP + Total_Vat;
    Total_Unit_Cost += Total_Cost / 1;

    return (
      <table
        className=" table table-sm"
        key={Index}
        style={{ marginTop: "30px", textAlign: "justify" }}
      >
        <tbody key={Index} lg="12">
          <tr className="table-borderless" style={{ marginTop: "20px" }}>
            <td colSpan="5">
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                {scope[0]}
              </span>
            </td>
          </tr>

          <tr
            className="text-center"
            style={{
              background: "#F4F4F7",
              fontWeight: "600",
              fontSize: "14px",
              border: "none",
            }}
          >
            <td>Designation</td>
            <td>No of Person</td>
            <td>Unit</td>
            <td>Rate</td>
            <td className="text-left">Amount</td>
          </tr>
          <tr
            style={{
              // background: "#F4F4F7",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            <td colSpan="4">Labor</td>
            <td colSpan="1" style={{ textAlign: "left" }}>
              PHP
              <NumberFormat
                value={Total_Labor}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            </td>
          </tr>
          {Labor}
          <tr
            className="text-center"
            style={{
              background: "#F4F4F7",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            <td>Description</td>
            <td>No of Units</td>
            <td>Not of Hours</td>
            <td>Rate</td>
            <td className="text-left">Amount</td>
          </tr>
          <tr
            style={{
              // background: "#F4F4F7",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            <td colSpan="4">Equipment</td>
            <td colSpan="1" style={{ textAlign: "left" }}>
              PHP
              <NumberFormat
                value={Total_Equipment}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            </td>
          </tr>
          {Equipment}
          <tr
            className="text-center"
            style={{
              background: "#F4F4F7",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            <td>Description</td>
            <td>Units</td>
            <td>Quantity</td>
            <td>Unit Cost</td>
            <td className="text-left">Amount</td>
          </tr>
          <tr
            style={{
              // background: "#F4F4F7",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            <td colSpan="4">Material</td>
            <td colSpan="1" style={{ textAlign: "left" }}>
              PHP
              <NumberFormat
                value={Total_Material}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            </td>
          </tr>
          {Material}

          <tr style={{ fontSize: "14px" }}>
            <td colSpan="3">Direct Total Cost</td>
            <td colSpan="1">A + B + C</td>
            <td colSpan="1" className="text-right">
              PHP
              <NumberFormat
                value={Direct_Total_Cost}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            </td>
          </tr>

          <tr className="table-borderless" style={{ fontSize: "14px" }}>
            <td colSpan="3">Direct Unit Cost</td>
            <td colSpan="1">D / Quantity</td>
            <td colSpan="1" className="text-right">
              PHP
              <NumberFormat
                value={Direct_Unit_Cost}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            </td>
          </tr>

          <tr className="table-borderless" style={{ fontSize: "14px" }}>
            <td colSpan="3">
              Overhead, contingencies, and miscellaneous (OCM)
            </td>
            <td colSpan="1">15.00% of D</td>
            <td colSpan="1" className="text-right">
              PHP
              <NumberFormat
                value={Total_OCM}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            </td>
          </tr>

          <tr className="table-borderless" style={{ fontSize: "14px" }}>
            <td colSpan="3">Contractor’s Profit (CP)</td>
            <td colSpan="1">10.00% of D</td>
            <td colSpan="1" className="text-right">
              PHP
              <NumberFormat
                value={Total_CP}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            </td>
          </tr>

          <tr className="table-borderless" style={{ fontSize: "14px" }}>
            <td colSpan="3">Value Added Tax (VAT)</td>
            <td colSpan="1">5% of (D + F + G)</td>
            <td colSpan="1" className="text-right">
              PHP
              <NumberFormat
                value={Total_Vat}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            </td>
          </tr>

          <tr className="table-borderless" style={{ fontSize: "14px" }}>
            <td colSpan="3">Total Cost</td>
            <td colSpan="1">D + F + G + H </td>
            <td colSpan="1" className="text-right">
              PHP
              <NumberFormat
                value={Total_Cost}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            </td>
          </tr>

          <tr className="table-borderless" style={{ fontSize: "14px" }}>
            <td colSpan="3">Total Unit Cost</td>
            <td colSpan="1">I / Quantity</td>
            <td colSpan="1" className="text-right">
              PHP
              <NumberFormat
                value={Total_Unit_Cost}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            </td>
          </tr>
          <tr className="table-borderless">
            <td> </td>
          </tr>
          <tr className="table-borderless">
            <td> </td>
          </tr>
          <tr>
            <td
              colSpan="6"
              style={{
                borderBottom: "5px solid #549764",
                borderTop: "1px solid white",
              }}
            ></td>
          </tr>
        </tbody>
      </table>
    );
  });
  return (
    <>
      <CRow>
        <CCol xs="12" sm="12" md="7" lg="7">
          <h3 style={{ fontSize: "18px" }}>Calibrate your data</h3>
          <span style={{ fontSize: "12px" }}>
            Calibrate the data uploaded. Correct the information or match it to
            accordingly. Sunt et maiores optio et similique accusantium quisquam
            provident quo. Labore autem sit inventore. Tenetur vitae est quia.
          </span>
        </CCol>
        <CCol xs="12" sm="12" md="9" lg="9"></CCol>
        <CCol sm="12" md="3" lg="3" className="float-lg-right">
          <CRow>
            <CCol md="6" sm="12">
              <CButton
                color="secondary_base"
                variant="outline"
                size="sm"
                onClick={() => EditField(true)}
                // active
                block
              >
                {buttonName}
              </CButton>
            </CCol>
            <CCol md="6" sm="12">
              <CButton color="secondary_base" size="sm" block>
                Save
              </CButton>
            </CCol>
          </CRow>
        </CCol>
        <CCol sm="4" md="12" lg="12">
          {tbody}
        </CCol>
      </CRow>
    </>
  );
};

export default Dupa;
