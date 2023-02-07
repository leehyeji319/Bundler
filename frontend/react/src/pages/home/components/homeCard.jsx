// React
import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import { Card, Button } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Import Custom
import ModalDetail from "pages/home/components/modalDetail";
import LikeButton from "pages/home/buttons/likeButton";
import ScrapButton from "pages/home/buttons/scrapButton";

function HomeCard({ image, category, id, title, description, solution, answer }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ ml: 2, mb: 3, maxWidth: 800 }}>
      <ModalDetail
        open={open}
        handleClose={handleClose}
        image={image}
        category={category}
        id={id}
        title={title}
        description={description}
        solution={solution}
        answer={answer}
        // commentList={commentList}
      />
      <MDBox mx={3}>
        <MDBox display="flex" sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
          <MDBox display="flex" sx={{ alignItems: "center" }}>
            <MDBox
              component="img"
              src={image}
              alt={title}
              borderRadius="lg"
              shadow="md"
              width="25%"
              height="80%"
              zIndex={1}
            />
            <MDBox mx={2} width="70%">
              <MDTypography variant="h4" textTransform="capitalize" fontWeight="bold">
                {category}
              </MDTypography>
              <MDTypography variant="overline" mt={1}>
                {id}
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" m="2rem">
            <LikeButton />
            <ScrapButton />
          </MDBox>
        </MDBox>
        <MDBox mt={2} mb={3}>
          <MDTypography display="inline" variant="h6" textTransform="capitalize" fontWeight="bold">
            {title}
          </MDTypography>
        </MDBox>
        <MDBox mt={2} mb={3}>
          <MDTypography variant="body2" component="p" color="text">
            {description}
          </MDTypography>
        </MDBox>
        <Button onClick={handleOpen}>카드 상세보기</Button>
      </MDBox>
    </Card>
  );
}

// Default Vlaue
// HomeCard.defaultProps = {
//   commentList: null,
// };

// Typechecking props for the SimpleBlogCard
HomeCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  // commentList: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     name: PropTypes.string.isRequired,
  //     reply: PropTypes.string.isRequired,
  //   }).isRequired
  // ),
};

export default HomeCard;
