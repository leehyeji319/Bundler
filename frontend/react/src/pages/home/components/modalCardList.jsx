// Import react
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// @mui material components
import { Card, Modal } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Import Custom
import DataTable from "pages/home/DataTable";
import ModalDetail from "pages/home/components/modalDetail";
import HomeInput from "pages/home/components/homeInput";
import HomeCommentList from "pages/home/components/homeCommentList";

// Import - axios
import { apiPostComment } from "apis/api/apiHomePage";

function ModalCardList({
  open,
  handleCommetList,
  handleCardClose,
  bundleId,
  cardList,
  commentList,
}) {
  // Data - global
  const { loginInfo } = useSelector((state) => state.homeReducer);

  // Data - local
  const columnList = [
    { Header: "유형", accessor: "firstCategoryName", width: "20%" },
    { Header: "제목", accessor: "feedTitle", width: "40%" },
    { Header: "내용", accessor: "feedContent" },
  ];

  // useState - card Detail Information
  const [cardDetail, setCardDetail] = useState({
    feedType: "CARD",
    cardId: 0,
    cardImage: "",
    firstCategoryName: "",
    userId: 1,
    feedTitle: "",
    feedContent: "",
    cardDescription: "",
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

  // 번들 댓글 저장 및 댓글 다시 불러오기
  const handleComment = async (comment) => {
    const params = {
      targetFeedId: bundleId,
      content: comment.inputData,
      userId: loginInfo.userId,
    };
    console.log(params);

    await apiPostComment(params)
      .then(async ({ data }) => {
        console.log(data.message);
        handleCommetList(); // 댓글 목록 다시 불러오기
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // custom style
  const style = {
    position: "absolute",
    top: "50%",
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
    cardList !== null && (
      <>
        <ModalDetail
          open={cardOpenModal}
          handleClose={handleDetailCardClose}
          cardInfo={cardDetail}
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
                canSearch
              />
            </MDBox>
            <MDBox p={3}>
              <HomeInput handleComment={handleComment} />
              <HomeCommentList handleCommetList={handleCommetList} commentList={commentList} />
            </MDBox>
          </Card>
        </Modal>
      </>
    )
  );
}

// Default Vlaue
ModalCardList.defaultProps = {
  cardList: [],
  commentList: [],
};

// Typechecking props for the ModalCardList
ModalCardList.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCommetList: PropTypes.func.isRequired,
  handleCardClose: PropTypes.func.isRequired,
  bundleId: PropTypes.number.isRequired,
  cardList: PropTypes.arrayOf(PropTypes.object),
  commentList: PropTypes.arrayOf(PropTypes.object),
};

export default ModalCardList;
