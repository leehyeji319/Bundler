/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================
*/

// react-router components
// import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
// import PropTypes from "prop-types";

// @mui material components
// import Card from "@mui/material/Card";
// import MuiLink from "@mui/material/Link";
import Button from "@mui/material/Button";
// import Modal from "@mui/material/Modal";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
import MDInput from "components/MDInput";
// import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import { Chip, Input, makeStyles } from "@material-ui/core";
// import MDButton from "components/MDButton";
import Chip from "@mui/material/Chip";
// import Input from "@mui/material/Input";
import { makeStyles } from "@mui/styles";

// Modal
import { useState } from "react";
import axios from "axios";
// import { Box } from "@mui/material";

// Icon

// function BundleSetBox({ bundleTitle, bundleImage, bundleThumtext }) {
// function BundleSetBox({ bundlePrivate, SelectBundleId, bundleTitle, bundleImage, bundleThumtext }) {
function SkillSetBox() {
  // const [bundlePublic, setBundlePublic] = useState("public");

  // const BundleChange = (bundlePub) => {
  //   setBundlePublic(bundlePub.target.value);
  // };
  const useStyles = makeStyles({
    input: {
      marginRight: "10px",
      marginBottom: "10px",
    },
  });

  // const SettingWindow = () => {
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const classes = useStyles();

  const handleAddItem = () => {
    if (inputValue && items.length < 3) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };
  const handleAddItem2 = () => {
    if (inputValue2 && items2.length < 3) {
      setItems2([...items2, inputValue2]);
      setInputValue2("");
    }
  };

  const handleDeleteItem = (itemToDelete) => {
    setItems(items.filter((item) => item !== itemToDelete));
  };

  const handleDeleteItem2 = (itemToDelete2) => {
    setItems2(items2.filter((item2) => item2 !== itemToDelete2));
  };

  // 스킬박스 세팅 완료
  const SkillFinish = () => {
    axios({
      url: "http://i8a810.p.ssafy.io:8080/api/v1/area",
      method: "POST",
      withCredentials: true,
      data: {
        userId: 3,
        job: items2,
        skill: items,
      },
    })
      .then((result) => {
        console.log(result);
        console.log("skill data good");
        window.open("/profile");
      })
      .catch((error) => {
        console.error(error);
        console.log("skill data error");
      });
  };

  console.log(items);
  console.log(items2);

  return (
    <MDBox // 전체 외부 설정페이지 박스
      sx={{
        height: "auto",
        width: "1050px",
        backgroundColor: "#282535",
        border: "1px solid #ffffff",
        borderRadius: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <MDBox // 글자 있는 박스
        sx={{
          width: "100%",
        }}
        style={{
          justifyContent: "center",
        }}
      >
        <MDTypography
          sx={{
            fontSize: "30px",
            marginLeft: "5%",
            marginTop: "2%",
          }}
        >
          주요 기술 및 희망 직무 설정
        </MDTypography>
      </MDBox>
      <MDBox // 흰 줄
        style={{
          width: "100%",
          textAlign: "center",
          borderBottom: "1px solid #aaa",
          lineHeight: "0.1em",
          margin: "10px 0 20px",
        }}
      />
      <MDBox // 주요 기술,희망직무 설정 전체 박스 밑 내용이 담길 박스들
        sx={{
          width: "1000px",
          height: "auto",
        }}
        style={{
          flexDirection: "row",
        }}
      >
        <MDBox // 주요 기술
          sx={{
            marginLeft: "50px",
            marginTop: "50px",
          }}
        >
          <MDTypography>주요 기술을 입력하세요 (최대 3개)</MDTypography>
          <MDInput
            sx={{ marginTop: "10px" }}
            className={classes.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddItem();
              }
            }}
          />
          <br />
          {items.map((item) => (
            <Chip
              key={item}
              label={item}
              onDelete={() => handleDeleteItem(item)}
              color="primary"
              sx={{ marginLeft: "15px" }}
            />
          ))}
        </MDBox>
        <MDBox // 주요 기술
          sx={{
            marginLeft: "50px",
            marginTop: "50px",
          }}
        >
          <MDTypography>희망 직무를 입력하세요 (최대 3개)</MDTypography>
          <MDInput
            sx={{ marginTop: "10px" }}
            className={classes.input}
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddItem2();
              }
            }}
          />
          <br />
          {items2.map((item2) => (
            <Chip
              key={item2}
              label={item2}
              onDelete={() => handleDeleteItem2(item2)}
              color="success"
              sx={{ marginLeft: "15px" }}
            />
          ))}
        </MDBox>
      </MDBox>
      <MDBox // 밑에 버튼 두개 담을 박스
        sx={{
          marginRight: "35px",
          marginBottom: "100px",
          marginTop: "20px",
        }}
      >
        <Button // 취소 버튼
          // onClick={ProfileSetClose}
          variant="contained"
          style={{
            float: "right",
          }}
          sx={{
            marginRight: "10px",
            fontSize: "14px",
            fontWeight: "bolder",
            color: "#000000",
            backgroundColor: "#81D8C3",
          }}
        >
          취소
        </Button>
        <Button
          variant="contained"
          style={{
            float: "right",
          }}
          sx={{
            marginRight: "10px",
            fontSize: "14px",
            fontWeight: "bolder",
            color: "#000000",
            backgroundColor: "#81D8C3",
          }}
          onClick={SkillFinish}
        >
          설정 완료
        </Button>
      </MDBox>
    </MDBox>
  );
}

// BundleSetBox.propTypes = {
//   // SelectBundleId: PropTypes.number.isRequired,
//   bundleTitle: PropTypes.string.isRequired,
//   // bundlePrivate: PropTypes.oneOf(["public", "private"]),
//   // bundleDefault : PropTypes.oneOf(["non", "default"]),
//   bundleImage: PropTypes.string.isRequired,
//   bundleThumtext: PropTypes.string.isRequired,
// };

export default SkillSetBox;
