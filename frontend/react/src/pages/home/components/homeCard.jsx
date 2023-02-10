// React
import { useState, useEffect } from "react";

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
import { apiGetCardDetail, apiGetBundle } from "apis/api/apiHomePage";

// Card Image
import CardImg from "assets/images/bundler/bundlerRabbit.png";

// Import custom
import { useSelector } from "react-redux";

// const cardInfo
function HomeCard({ cardInfo }) {
  // 해당 유저 정보
  const { loginInfo } = useSelector((state) => state.homeReducer);

  // 현재 사용자가 가지고 있는 번들 목록
  const [bundleList, setBundleList] = useState([]);

  const [cardDetailInfo, setCardDetailInfo] = useState({});

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    const emp = async () => {
      await apiGetCardDetail(cardInfo.cardId)
        .then(({ data }) => {
          console.log("data", data);
          setCardDetailInfo(data);
        })
        .catch((error) => console.log(error));
    };
    emp();

    setOpen(true);
  };

  const handleBundleList = () => {
    const initCall = async () => {
      await apiGetBundle(loginInfo.userId, cardInfo.cardId)
        .then(({ data }) => {
          setBundleList(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    initCall();
  };

  useEffect(() => {
    const initCall = async () => {
      await apiGetBundle(loginInfo.userId, cardInfo.cardId)
        .then(({ data }) => {
          setBundleList(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    initCall();
  }, []);

  return (
    <Card sx={{ ml: 2, mb: 3, maxWidth: 800, minHeight: 200, maxHeight: 400 }}>
      <ModalDetail open={open} handleClose={handleClose} cardInfo={cardDetailInfo} />
      <MDBox mx={3}>
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
                [카드]&nbsp;{cardInfo.firstCategoryName}
              </MDTypography>
              <MDTypography variant="overline" mt={1}>
                {cardInfo.userId}
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" m="1" sx={{ alignItems: "center", width: "20%" }}>
            <LikeButton />
            <ScrapButton
              feedType={cardInfo.feedType}
              targetId={cardInfo.cardId}
              bundleList={bundleList}
              handleBundleList={handleBundleList}
            />
          </MDBox>
        </MDBox>
        <MDBox mt={2} mb={3}>
          <MDTypography display="inline" variant="h6" textTransform="capitalize" fontWeight="bold">
            {cardInfo.feedTitle}
          </MDTypography>
        </MDBox>
        <MDBox mt={2} mb={3}>
          <MDTypography variant="body2" component="p" color="text">
            {cardInfo.feedContent}
          </MDTypography>
        </MDBox>
        <Button onClick={handleOpen}>카드 상세보기</Button>
      </MDBox>
    </Card>
  );
}

// Default Vlaue
HomeCard.defaultProps = {
  cardInfo: {
    secondCategoryId: -1,
    secondCategoryName: "",
    cardDescription: "",
    cardCommentary: "",
    createdAt: "",
    userProfileImage: "",
    commentResponseDtoList: [],
  },
};

// Typechecking props for the SimpleBlogCard
HomeCard.propTypes = {
  cardInfo: PropTypes.shape({
    cardId: PropTypes.number.isRequired,
    feedType: PropTypes.string.isRequired,
    cardType: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    userNickname: PropTypes.string.isRequired,
    firstCategoryId: PropTypes.number.isRequired,
    firstCategoryName: PropTypes.string.isRequired,
    feedTitle: PropTypes.string.isRequired,
    feedContent: PropTypes.string.isRequired,
    cardScrapCnt: PropTypes.number.isRequired,
    feedLikeCnt: PropTypes.number.isRequired,
    feedCommentCnt: PropTypes.number.isRequired,
    secondCategoryId: PropTypes.number,
    secondCategoryName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardCommentary: PropTypes.string,
    createdAt: PropTypes.string,
    userProfileImage: PropTypes.string,
    commentResponseDtoList: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default HomeCard;

// HomeCard.propTypes = {
//   cardInfo: PropTypes.shape({
//     cardId: PropTypes.number.isRequired,
//     cardScrapCnt: PropTypes.number.isRequired,
//     feedCommentCnt: PropTypes.number.isRequired,
//     feedLikeCnt: PropTypes.number.isRequired,
//     feedType: PropTypes.string.isRequired,
//     cardType: PropTypes.string.isRequired,
//     createdAt: PropTypes.string.isRequired,
//     deleted: PropTypes.bool.isRequired,
//     firstCategoryId: PropTypes.number.isRequired,
//     firstCategoryName: PropTypes.string.isRequired,
//     userId: PropTypes.number.isRequired,
//     userNickname: PropTypes.string.isRequired,
//     feedTitle: PropTypes.string.isRequired,
//     feedContent: PropTypes.string.isRequired,
//     cardCommentary: PropTypes.string,
//     cardDescription: PropTypes.string,
//     linkDescription: PropTypes.string,
//     linkId: PropTypes.number,
//     linkImage: PropTypes.string,
//     linkTitle: PropTypes.string,
//     linkUrl: PropTypes.string,
//     secondCategoryId: PropTypes.number,
//     secondCategoryName: PropTypes.string,
//     userProfileImage: PropTypes.string,
//   }),
//   commentList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       reply: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };
