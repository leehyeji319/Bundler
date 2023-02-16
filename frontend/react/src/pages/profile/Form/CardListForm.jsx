import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import React from "react";
import cardRabbit from "assets/images/bundler/bundler_rabbit_1-removebg-preview.png";
import CardThumbnailCard from "../components/thumCard/ThumnailCard";

// BundlelistTabForm Template
function CardListTab(props) {
  const dataprop = props.data;
  const CardLastData = dataprop;
  console.log(CardLastData);
  return (
    <MDBox
      sx={{
        marginLeft: "3%",
        marginTop: "7%",
        marginRight: "3%",
      }}
    >
      {CardLastData.length === 0 ? (
        <MDBox
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "700px",
          }}
        >
          <MDBox // 토끼사진과 카드 없다는 글자
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "50px",
            }}
          >
            <MDBox // 토끼사진만
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img src={cardRabbit} alt="noBundle" style={{ height: "200px", width: "200px" }} />
            </MDBox>
            <MDTypography fontSize="50px" mt={1}>
              아직 작성한 카드가 없어요!
            </MDTypography>
          </MDBox>
        </MDBox>
      ) : (
        <Grid container spacing={3}>
          {CardLastData.map((oneCard) => (
            <Grid item xs={12} md={6} lg={3}>
              {oneCard.secondCategoryName === "기타" ? (
                <CardThumbnailCard
                  cardId={oneCard.cardId}
                  cardType={oneCard.cardType}
                  cardTitle={oneCard.feedTitle}
                  cardLike={oneCard.feedLikeCnt}
                  cardScrap={oneCard.cardScrapCnt}
                  CategoryName={oneCard.firstCategoryName}
                />
              ) : (
                <CardThumbnailCard
                  cardId={oneCard.cardId}
                  cardType={oneCard.cardType}
                  cardTitle={oneCard.feedTitle}
                  cardLike={oneCard.feedLikeCnt}
                  cardScrap={oneCard.cardScrapCnt}
                  CategoryName={oneCard.secondCategoryName}
                />
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </MDBox>
  );
}

export default CardListTab;

{
  /* <Grid item xs={12} md={6} lg={3}>
  <CardThumbnailCard
    cardId="3"
    cardType="카드 > 문제"
    cardTitle="Q. Java Garbage Collector에 대한 설명으로 틀린 것은?"
    cardLike="183"
    cardScrap="22"
    CategoryId="7"
  />
</Grid>
<Grid item xs={12} md={6} lg={3}>
  <CardThumbnailCard
    cardId="5"
    cardType="카드 > 일반"
    cardTitle="코딩테스트에 자주 쓸만한 정렬 알고리즘 모음"
    cardLike="426"
    cardScrap="91"
    CategoryId="3"
  />
</Grid>
<Grid item xs={12} md={6} lg={3}>
  <CardThumbnailCard
    cardId="7"
    cardType="카드 > 링크"
    cardTitle="신입 프론트엔드 개발자가 꼭 봐야할 프레임워크 지식 모음"
    cardLike="31"
    cardScrap="8"
    CategoryId="1"
  />
</Grid> */
}
