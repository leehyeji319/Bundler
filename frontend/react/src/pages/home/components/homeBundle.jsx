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
import HomeCard from "pages/home/components/homeCard";

// Import custom
import ModalCardList from "pages/home/components/modalCardList";

// Card Image
import CardImg from "assets/images/bundler/bundlerRabbit.png";

function HomeBundle({ bundleTitle, bundleAuthor, cardList }) {
  const [cardListModal, setCardListModal] = useState(false);
  const handleCardListOpen = () => setCardListModal(true);
  const handleCardClose = () => setCardListModal(false);

  return (
    <Card sx={{ ml: 2, mb: 3, maxWidth: 800 }}>
      <ModalCardList open={cardListModal} cardList={cardList} handleCardClose={handleCardClose} />
      <MDBox mx={3}>
        <MDBox display="flex" sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
          <MDBox display="flex" sx={{ alignItems: "center" }}>
            <MDBox
              component="img"
              src={CardImg}
              alt={CardImg}
              borderRadius="lg"
              shadow="md"
              width="25%"
              height="80%"
              zIndex={1}
            />
            <MDBox mx={2} width="70%">
              <MDTypography variant="h4" textTransform="capitalize" fontWeight="bold">
                {bundleTitle}
              </MDTypography>
              <MDTypography variant="overline" mt={1}>
                {bundleAuthor}
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
        <Button onClick={handleCardListOpen}>번들 상세보기</Button>
      </MDBox>
    </Card>
  );
}

// Default Vlaue
HomeCard.defaultProps = {
  commentList: null,
};

// Typechecking props for the SimpleBlogCard
HomeBundle.propTypes = {
  bundleTitle: PropTypes.string.isRequired,
  bundleAuthor: PropTypes.string.isRequired,
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      cardImage: PropTypes.string.isRequired,
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
    }).isRequired
  ).isRequired,
};

export default HomeBundle;
