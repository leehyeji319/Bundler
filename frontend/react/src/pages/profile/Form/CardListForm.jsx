// [Import - Design]
// import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";

// [Import - React Basic] react && props && mui
import React from "react";
// import PropTypes from "prop-types";

// [Import - React-Redux]
// import { useSelector, useDispatch } from "react-redux";

// [Import - Redux-action] redux-action 함수
// import { actAddCard } from "redux/actions/makeCardAction";

import CardThumbnailCard from "../components/thumCard/ThumnailCard";

// BundlelistTabForm Template
function CardListTab() {
  return (
    <MDBox
      sx={{
        marginLeft: "3%",
        marginTop: "7%",
        marginRight: "3%",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
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
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default CardListTab;

// // Typechecking props for the SelectedCategory
// BundleListTab.propTypes = {
//   selected: PropTypes.bool.isRequired,
//   handleChange: PropTypes.func.isRequired,
// };
