// react
import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import { Button, Card } from "@mui/material";
// import Modal from "@mui/material/Modal";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Import custom
import ModalCardList from "pages/home/components/modalCardList";
import LikeButton from "pages/home/buttons/likeButton";
import ScrapButton from "pages/home/buttons/scrapButton";

// Card Image
import CardImg from "assets/images/bundler/bundlerRabbit.png";

function HomeBundle({ bundleTitle, bundleAuthor, cardList }) {
  const [cardListModal, setCardListModal] = useState(false);
  const handleCardListOpen = () => setCardListModal(true);
  const handleCardClose = () => setCardListModal(false);

  return (
    <Card sx={{ ml: 2, mb: 3, maxWidth: 800, minHeight: 200, maxHeight: 400 }}>
      <ModalCardList open={cardListModal} cardList={cardList} handleCardClose={handleCardClose} />
      <MDBox mx={3} sx={{ position: "realative" }}>
        <MDBox display="flex" sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
          <MDBox display="flex" sx={{ alignItems: "center", width: "80%" }}>
            <MDBox
              component="img"
              src={CardImg}
              alt={CardImg}
              borderRadius="lg"
              shadow="md"
              width="70px"
              height="70px"
              zIndex={1}
            />
            <MDBox mx={2} width="70%">
              <MDTypography variant="h4" textTransform="capitalize" fontWeight="bold">
                [번들]
              </MDTypography>
              <MDTypography variant="overline" mt={1}>
                {bundleAuthor}
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" m="1" sx={{ alignItems: "center", width: "20%" }}>
            <LikeButton />
            <ScrapButton />
          </MDBox>
        </MDBox>
        <MDBox mt={2} mb={3}>
          <MDTypography display="inline" variant="h6" textTransform="capitalize" fontWeight="bold">
            {bundleTitle}
          </MDTypography>
        </MDBox>
        <MDBox mt={2} mb={3}>
          <MDTypography variant="body2" component="p" color="text">
            {bundleTitle}
          </MDTypography>
        </MDBox>
        {/* <MDBox sx={{ position: "absolute", bottom: "0", mb: "1" }}> */}
        {cardList !== null && <Button onClick={handleCardListOpen}>번들 상세보기</Button>}
        {/* </MDBox> */}
      </MDBox>
    </Card>
  );
}

// Default Vlaue
HomeBundle.defaultProps = {
  cardList: [],
};

// Typechecking props for the SimpleBlogCard
HomeBundle.propTypes = {
  bundleTitle: PropTypes.string.isRequired,
  bundleAuthor: PropTypes.string.isRequired,
  cardList: PropTypes.arrayOf(PropTypes.object),
};

export default HomeBundle;
