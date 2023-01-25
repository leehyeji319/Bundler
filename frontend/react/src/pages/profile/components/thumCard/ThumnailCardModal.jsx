/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================
*/

// react-router components
// import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
// import MuiLink from "@mui/material/Link";
// import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";

// Modal
// import { useState } from "react";
import { Box } from "@mui/material";

function HomeCardModal({ image, category, id, title, description, solution, answer, commentList }) {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    outline: 0,
    borderRadius: 5,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  <Modal open={open} onClose={handleClose}>
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
          <MDTypography variant="h6" textTransform="capitalize" fontWeight="bold">
            해설
          </MDTypography>
          <MDTypography variant="body2" component="p" color="text">
            {solution}
          </MDTypography>
        </MDBox>
        <MDBox mt={2} mb={3}>
          <MDTypography variant="h6" textTransform="capitalize" fontWeight="bold">
            내가 쓴 답
          </MDTypography>
          <MDTypography variant="body2" component="p" color="text">
            {answer}
          </MDTypography>
        </MDBox>
        <Box sx={{ borderTop: "solid 1px white", p: 1 }}>
          <MDTypography variant="h6" textTransform="capitalize" fontWeight="bold">
            댓글란
          </MDTypography>
          <ul>
            {commentList.map((comment) => (
              <li>
                <MDTypography variant="body2" textTransform="capitalize">
                  {comment.name} : {comment.reply}
                </MDTypography>
              </li>
            ))}
          </ul>
        </Box>
      </MDBox>
    </Card>
  </Modal>
  );
}

// Default Vlaue
// HomeCard.defaultProps = {
//   commentList: null,
// };

// Typechecking props for the SimpleBlogCard
HomeCardModal.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  commentList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      reply: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default HomeCardModal;
