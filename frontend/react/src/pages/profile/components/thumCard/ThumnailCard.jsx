// react-router components
// import { Link } from "react-router-dom";
// import MuiLink from "@mui/material/Link";
// import MDButton from "components/MDButton";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
// import Modal from "@mui/material/Modal";
import { useState } from "react";
// import Divider from "@mui/material/Divider";
// import Icon from "@mui/material/Icon";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import CardImg from "assets/images/bundler/bundlerRabbit.png";
import HomeCardModal from "./ThumnailCardModal";


function CardThumbnailCard({ cardId, cardType, cardTitle, cardLike, cardScrap }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const bundle = {
  //   bundleTitle: "번들 제목",
  //   bundleAuthor: "jsk33a@naver.com",
  //   cardList: [
  //     {
  //       cardId: 1,
  //       cardImage: CardImg,
  //       category: "문제1 > 알고리즘",
  //       id: "jsk33a@naver.com",
  //       title: "제목인데 json 형식 test 중",
  //       description: "이 문제에 대해 설명 하시오",
  //       solution: "정답~~",
  //       answer: "내가 쓴 답~~",
  //       commentList: [
  //         { id: 1, name: "정세권", reply: "댓글 1" },
  //         { id: 2, name: "정둘권", reply: "댓글 2" },
  //       ],
  //     },
  //     {
  //       cardId: 2,
  //       cardImage: CardImg,
  //       category: "문제2 > 알고리즘",
  //       id: "sdfsdfsdf@naver.com",
  //       title: "제목인데 json 형식 test 중",
  //       description: "이 문제에 대해 설명 하시오",
  //       solution: "정답~~",
  //       answer: "내가 쓴 답~~",
  //       commentList: [
  //         { cmtId: 1, name: "정세권", reply: "댓글 1" },
  //         { cmtId: 2, name: "정둘권", reply: "댓글 2" },
  //       ],
  //     },
  //   ],
  // };


  return (
    <Card>
      {/* <HomeCardModal
        key={card.cardId}
        image={card.cardImage}
        category={card.category}
        id={card.id}
        title={card.title}
        description={card.description}
        solution={card.solution}
        answer={card.answer}
        commentList={card.commentList}
      /> */}
      <HomeCardModal
        key="1"
        image= {CardImg}
        category="문제1 > 알고리즘"
        id="dellojoon7@gmail.com"
        title="제목인데 json 형식 test 중"
        description="이 문제에 대해 설명 하시오"
        solution="정답"
        answer="내가 쓴 답"
        commentList={[
          { cmtId: 1, name: "정세권", reply: "댓글 1" },
          { cmtId: 2, name: "정둘권", reply: "댓글 2" },
        ]}
      />
      <MDBox p={3}>
        <MDTypography 
          display="inline"
          variant="h3" 
          textTransform="capitalize" 
          fontWeight="bold"
          >
          {cardType}
        </MDTypography>
        <MDTypography variant="body2" component="p" color="text">
          {cardTitle}
        </MDTypography>
        <MDBox mt={2} mb={3}>
          <MDTypography>
            {cardId}
          </MDTypography>
          <MDBox>
            <MDBox>
              <FavoriteIcon
                sx={{
                  width: "19px",
                  height : "20px",
                }}
                color = "primary"
                style={{
                  float: "left",
                }}
              />
              <MDTypography
                sx={{
                  fontSize : "15px",  
                }}
                style={{
                  float: "left",
                }}>
                {cardLike}
              </MDTypography>
            </MDBox>
            <MDBox
              sx={{
                marginLeft : "10%",
              }}>
              <MobileScreenShareIcon 
                sx={{
                  width: "19px",
                  height : "20px",
                }}
                color = "white"
                style={{
                  float: "left",
                }}
              />
              <MDTypography
                sx={{
                  fontSize : "15px",  
                }}>
                {cardScrap}
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// 썸네일 카드의 프롭타입 설정
CardThumbnailCard.propTypes = {
  cardId: PropTypes.number.isRequired,
  cardType: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardLike: PropTypes.number.isRequired,
  cardScrap: PropTypes.number.isRequired,
//   action: PropTypes.shape({
//     type: PropTypes.oneOf(["external", "internal"]).isRequired,
//     route: PropTypes.string.isRequired,
//     color: PropTypes.oneOf([
//       "primary",
//       "secondary",
//       "info",
//       "success",
//       "warning",
//       "error",
//       "dark",
//       "light",
//       "default",
//     ]),
//     label: PropTypes.string.isRequired,
//   }).isRequired,
};



export default CardThumbnailCard;

