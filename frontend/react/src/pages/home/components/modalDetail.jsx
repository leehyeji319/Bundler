// Import React
import React, { useState } from "react";
import PropTypes from "prop-types";

// @mui material components
import { Card, Modal, Box, TextField } from "@mui/material";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Import Custom Component
import HomeInput from "pages/home/components/homeInput";
// import HomeCommentList from "pages/home/components/homeCommentList";

function ModalDetail({ open, handleClose, image, category, id, title, description, solution }) {
  // 토글 버튼
  const [solutionToggle, setSolutionToggle] = useState(false);
  const [mySolutionToggle, setMySolutionToggle] = useState(false);
  const [mySolution, setMySolution] = useState("");

  const handleMyAnswerChange = (e) => {
    e.preventDefault();
    setMySolution(e.target.value);
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    handleClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    bgcolor: "#152744",
    boxShadow: 24,
    outline: 10,
    borderRadius: 5,
  };
  return (
    <Card sx={{ ml: 10, mb: 3, maxWidth: 800 }}>
      <Modal open={open} onClose={handleCloseModal}>
        <Card sx={style}>
          <MDBox p={3} bgColor="#152744">
            <MDBox>
              <MDBox
                component="img"
                src={image}
                alt={image}
                borderRadius="lg"
                shadow="md"
                width="10%"
                height="10%"
                position="relative"
                display="inline-block"
                zIndex={1}
              />
              <MDBox display="inline-block" mx={2}>
                <MDTypography variant="h3" textTransform="capitalize" fontWeight="bold">
                  {category}
                </MDTypography>
                <MDTypography variant="overline" mt={1}>
                  {id}
                </MDTypography>
              </MDBox>
            </MDBox>
            <MDBox mt={2} mb={3}>
              <MDTypography
                display="inline"
                variant="h6"
                textTransform="capitalize"
                fontWeight="bold"
              >
                {title}
              </MDTypography>
            </MDBox>
            <MDBox mt={2} mb={3}>
              <MDTypography variant="body2" component="p" color="text">
                {description}
              </MDTypography>
            </MDBox>
            <MDBox mt={2} mb={3}>
              <MDBox display="flex" alignItems="center" mt={3} lineHeight={1}>
                <MDTypography variant="h6">해설</MDTypography>
                <Switch
                  checked={solutionToggle}
                  onChange={() => setSolutionToggle(!solutionToggle)}
                />
              </MDBox>
              {solutionToggle === true && (
                <MDTypography variant="body2" component="p" color="text">
                  {solution}
                </MDTypography>
              )}
            </MDBox>
            <MDBox mt={2} mb={3}>
              <MDBox display="flex" alignItems="center" mt={3} mb={3} lineHeight={1}>
                <MDTypography variant="h6">
                  답변
                  <br />
                  쓰기
                </MDTypography>
                <Switch
                  checked={mySolutionToggle}
                  onChange={() => setMySolutionToggle(!mySolutionToggle)}
                />
              </MDBox>
              {mySolutionToggle === true && (
                <Box sx={{ display: "flex" }}>
                  <TextField
                    value={mySolution}
                    fullWidth
                    multiline
                    rows={3}
                    id="my-answer"
                    type="text"
                    name="myAnswerText"
                    label="Optional"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleMyAnswerChange}
                  />
                </Box>
              )}
            </MDBox>
            <Box sx={{ borderTop: "solid 1px white", p: 1 }}>
              <HomeInput />
              {/* <HomeCommentList commentList={commentList} /> */}
            </Box>
          </MDBox>
        </Card>
      </Modal>
    </Card>
  );
}

ModalDetail.defaultProps = {
  solution: "",
};

// Typechecking props for the SimpleBlogCard
ModalDetail.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  solution: PropTypes.string,
  // commentList: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     name: PropTypes.string.isRequired,
  //     reply: PropTypes.string.isRequired,
  //   }).isRequired
  // ).isRequired,
};

export default ModalDetail;
