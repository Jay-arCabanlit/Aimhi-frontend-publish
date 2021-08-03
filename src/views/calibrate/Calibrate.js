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

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Calibrate.css";
import NumberFormat from "react-number-format";
import ReactToExcel from "react-html-table-to-excel";
import { CSVLink, CSVDownload } from "react-csv";
import { element } from "prop-types";
import Dupa from "./Dupa";
import TimeSheet from "./TimeSheet";

const Calibrate = (val) => {
  console.log(val);

  const [dupaData, setdupdataData] = useState([]);
  const [condition, setcondition] = useState("");

  useEffect(() => {
    setdupdataData(val.location.state.data);
    setcondition(val.location.state.condition);
  });

  return <>{condition == "Dupa" ? <Dupa data={dupaData} /> : <TimeSheet />}</>;
};

export default Calibrate;
