// Import React
import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// @mui material components
import { Card, Modal, Box, TextField } from "@mui/material";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Import Custom Component
import HomeInput from "pages/home/components/homeInput";
import HomeCommentList from "pages/home/components/homeCommentList";
import CardImg from "assets/images/bundler/bundler_rabbit_3.png";

// Import - axios
import { apiPostComment } from "apis/api/apiHomePage";
// import { apiGetCardDetail, apiPostComment } from "apis/api/apiHomePage";

function ModalDetail({ open, handleOpen, handleClose, cardInfo }) {
  const { loginInfo } = useSelector((state) => state.homeReducer);
  // 토글 버튼
  const [solutionToggle, setSolutionToggle] = useState(false);
  const [mySolutionToggle, setMySolutionToggle] = useState(false);
  const [mySolution, setMySolution] = useState("");

  // 댓글 저장
  // const [commentList, setCommentList] = useState([]);

  const handleMyAnswerChange = (e) => {
    e.preventDefault();
    setMySolution(e.target.value);
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    handleClose();
  };

  // 카드 댓글 저장 및 댓글 다시 불러오기
  const handleComment = async (comment) => {
    const params = {
      targetFeedId: cardInfo.cardId,
      content: comment.inputData,
      userId: loginInfo.userId,
    };
    console.log(params);

    await apiPostComment(params)
      .then(async ({ data }) => {
        console.log(data.message);
        handleOpen(); // 댓글 목록 다시 불러오기
      })
      .catch((error) => {
        console.log(error);
      });
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
                  {cardInfo.firstCategoryName}
                </MDTypography>
                <MDTypography variant="overline" mt={1}>
                  {cardInfo.userId}
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
                {cardInfo.feedTitle}
              </MDTypography>
            </MDBox>
            <MDBox mt={2} mb={3}>
              <MDTypography variant="body2" component="p" color="text">
                {cardInfo.feedContent}
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
                  {cardInfo.cardCommentary}
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
              <HomeInput handleOpen={handleOpen} handleComment={handleComment} />
              <HomeCommentList
                handleCommetList={handleOpen}
                commentList={cardInfo.commentResponseDtoList}
              />
            </Box>
          </MDBox>
        </Card>
      </Modal>
    </Card>
  );
}

ModalDetail.defaultProps = {
  cardInfo: {
    cardId: -1,
    cardType: "",
    firstCategoryId: -1,
    secondCategoryId: -1,
    secondCategoryName: "",
    cardDescription: "",
    cardCommentary: "",
    createdAt: "",
    feedType: "",
    userNickname: "",
    userProfileImage: "",
    commentResponseDtoList: [],
  },
};

// Typechecking props for the SimpleBlogCard
ModalDetail.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  cardInfo: PropTypes.shape({
    cardId: PropTypes.number,
    cardType: PropTypes.string,
    userId: PropTypes.number.isRequired,
    firstCategoryId: PropTypes.number,
    firstCategoryName: PropTypes.string.isRequired,
    feedTitle: PropTypes.string.isRequired,
    feedContent: PropTypes.string.isRequired,
    cardScrapCnt: PropTypes.number.isRequired,
    feedLikeCnt: PropTypes.number.isRequired,
    feedCommentCnt: PropTypes.number.isRequired,
    feedType: PropTypes.string,
    secondCategoryId: PropTypes.number,
    userNickname: PropTypes.string,
    secondCategoryName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardCommentary: PropTypes.string,
    createdAt: PropTypes.string,
    userProfileImage: PropTypes.string,
    commentResponseDtoList: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default ModalDetail;
