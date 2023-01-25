// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import { Button, Card } from "@mui/material";
// import Modal from "@mui/material/Modal";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import HomeCard from "pages/home/components/homeCard";

// Card Image
import CardImg from "assets/images/bundler/bundlerRabbit.png";

// Hooks
import { useState } from "react";

function HomeBundle({ bundleTitle, bundleAuthor, cardList }) {
  const [cardOpen, setCardOpen] = useState(false);
  const handleCardOpen = () => setCardOpen(true);
  const handleCardClose = () => setCardOpen(false);

  function Cards() {
    return cardList.map((card) => (
      <HomeCard
        key={card.cardId}
        image={card.cardImage}
        category={card.category}
        id={card.id}
        title={card.title}
        description={card.description}
        solution={card.solution}
        answer={card.answer}
        commentList={card.commentList}
      />
    ));
  }

  return (
    <Card sx={{ ml: 10, mb: 3, maxWidth: 800 }}>
      <MDBox p={3} mx={3}>
        <MDBox>
          <MDBox
            component="img"
            src={CardImg}
            alt={CardImg}
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
              {bundleTitle}
            </MDTypography>
            <MDTypography variant="overline" mt={1}>
              {bundleAuthor}
            </MDTypography>
          </MDBox>
        </MDBox>
        <Button onClick={handleCardOpen}>카드 슬래쉬~~</Button>
        {cardOpen === true && (
          <div>
            <Cards />
            <Button onClick={handleCardClose}>카드 Close</Button>
          </div>
        )}
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