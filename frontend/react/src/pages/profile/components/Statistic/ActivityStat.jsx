import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ActivityStat() {
  const tempAct = {
    registerDate: "2023-01-10",
    mutualFollows: 35,
    continuousCardMakeCnt: 33,
    totalFeedLikeCnt: 301,
    totalCardScrapCnt: 12,
    mostMakeCategory: "CS",
    mostMakeSubCategory: "네트워크",
  };

  return (
    <MDBox
      sx={{
        marginTop: "10px",
        marginLeft: "10px",
      }}
    >
      <MDTypography
        sx={{
          fontSize: "27px",
          color: "#00EBA4",
          marginLeft: "10px",
        }}
      >
        활동 기록
      </MDTypography>
      <MDTypography fontSize="20px" marginTop="10px" marginLeft="10px">
        - 사용자 가입 일자 : {tempAct.registerDate}
      </MDTypography>
      <MDTypography fontSize="20px" mt="5px" marginLeft="10px">
        - 최장 연속 카드 작성일수 : {tempAct.continuousCardMakeCnt}
      </MDTypography>
      <MDTypography fontSize="20px" mt="5px" marginLeft="10px">
        - 총 피드 좋아요 수 : {tempAct.totalFeedLikeCnt}
      </MDTypography>
      <MDTypography fontSize="20px" mt="5px" marginLeft="10px">
        - 총 카드 스크랩 수 : {tempAct.totalCardScrapCnt}
      </MDTypography>
      <MDTypography fontSize="20px" mt="5px" marginLeft="10px">
        - 가장 많이 작성한 카테고리 - 대분류 : {tempAct.mostMakeCategory}
      </MDTypography>
      <MDTypography fontSize="20px" mt="5px" marginLeft="10px">
        - 가장 많이 작성한 카테고리 - 중분류 : {tempAct.mostMakeSubCategory}
      </MDTypography>
      <MDTypography fontSize="20px" mt="5px" marginLeft="10px">
        - 맞팔로우 수 : {tempAct.mutualFollows}
      </MDTypography>
    </MDBox>
  );
}

export default ActivityStat;
