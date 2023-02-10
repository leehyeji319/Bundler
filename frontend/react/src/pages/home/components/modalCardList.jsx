// Import react
import React, { useState } from "react";
import PropTypes from "prop-types";

// @mui material components
import { Card, Modal } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Import Custom
import DataTable from "pages/home/DataTable";
import ModalDetail from "pages/home/components/modalDetail";

function ModalCardList({ open, handleCardClose, cardList }) {
  // Data - global
  // const { cardList } = useSelector((state) => state.makeReducer);

  // Data - local
  const columnList = [
    { Header: "아이디", accessor: "id", width: "10%" },
    { Header: "제목", accessor: "title" },
    { Header: "내용", accessor: "description" },
    { Header: "유형", accessor: "category", width: "20%" },
  ];

  // useState - card Detail Information
  const [cardDetail, setCardDetail] = useState({
    feedType: "CARD",
    cardId: 0,
    cardImage: "",
    category: "",
    id: "",
    title: "",
    description: "",
    solution: "",
    answer: "",
    commentList: [{ id: 0, name: "", reply: "" }],
  });
  const [cardOpenModal, setCardOpenModal] = useState(false);
  const handleDetailCardOpen = () => setCardOpenModal(true);
  const handleDetailCardClose = () => setCardOpenModal(false);

  // Function
  const handleBundleCloseModal = (e) => {
    e.preventDefault();
    handleCardClose();
  };

  // function
  const handleSelectedCard = (item) => {
    console.log(item);
    setCardDetail(item);
    handleDetailCardOpen();
  };

  // custom style
  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "65%",
    bgcolor: "transparent",
    border: "none",
    boxShadow: 24,
    outline: 0,
    borderRadius: 5,
  };

  return (
    <>
      <ModalDetail
        open={cardOpenModal}
        handleClose={handleDetailCardClose}
        image={cardDetail.category}
        category={cardDetail.category}
        id={cardDetail.cardId}
        title={cardDetail.title}
        description={cardDetail.description}
        solution={cardDetail.solution}
        answer={cardDetail.answer}
        commentList={cardDetail.commentList}
      />
      <Modal open={open} onClose={handleBundleCloseModal}>
        <Card sx={style}>
          <MDBox p={3}>
            <DataTable
              table={{
                columns: columnList,
                rows: cardList,
              }}
              handleEdit={handleSelectedCard}
            />
          </MDBox>
        </Card>
      </Modal>
    </>
  );
}

// Default Vlaue
// ModalCardList.defaultProps = {
//   commentList: null,
// };

// Typechecking props for the ModalCardList
ModalCardList.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCardClose: PropTypes.func.isRequired,
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

export default ModalCardList;
