// Import React
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

// @mui material components
import {
  Card,
  Modal,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Input,
} from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Import Custom Component
import { apiPutCardScrap, apiPostCardScrap } from "apis/api/apiHomePage";
// import { apiGetBundle, apiPutCardScrap, apiPostCardScrap } from "apis/api/apiHomePage";

function ScrapButtonModal({ open, handleClose, targetId }) {
  // 해당 유저 정보
  const { loginInfo } = useSelector((state) => state.homeReducer);

  // 현재 사용자가 가지고 있는 번들 목록
  const [bundles, setBundles] = useState([]);

  // 어떤 번들을 선택할지 또는 생성할지 선택
  const [selectedBundle, setSelectedBundle] = useState(0);

  // 빈 번들 생성 시 제목과 내용
  const [createNewBundle, setCreateNewBundle] = useState({
    bundleTitle: "",
    bundleContent: "",
  });

  // 번들 선택
  const handleRadioChange = (event) => {
    setSelectedBundle(event.target.value);
  };

  // 번들 제목
  const handleBundleTitle = (e) => {
    e.preventDefault();
    setCreateNewBundle({ ...createNewBundle, bundleTitle: e.target.value });
  };
  // 번들 내용
  const handleBundleContent = (e) => {
    e.preventDefault();
    setCreateNewBundle({ ...createNewBundle, bundleContent: e.target.value });
  };

  // 모달 닫기
  const handleCloseModal = (e) => {
    e.preventDefault();
    handleClose();
  };

  // 번들 스크랩 및 생성
  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedBundle === "-1") {
      // 새로운 번들 생성 시
      const added = async () => {
        const params = {
          userId: loginInfo.userId,
          feedTitle: createNewBundle.bundleTitle,
          feedContent: createNewBundle.bundleContent,
          feedType: "BUNDLE",
        };
        console.log(targetId, params);
        await apiPostCardScrap(targetId, params)
          .then((success) => console.log(success))
          .then((error) => console.log(error));
      };
      added();
    } else {
      // 기존 번들에 추가
      const added = async () => {
        const params = {
          cardId: targetId,
          bundleId: Number.parseInt(selectedBundle, 10),
        };
        console.log(params);
        await apiPutCardScrap({
          cardId: targetId,
          bundleId: selectedBundle,
        })
          .then((success) => console.log(success))
          .catch((error) => console.log(error));
      };
      added();
    }
    handleClose();
  };

  useEffect(() => {
    setBundles([]);
    // const initCall = async () => {
    //   await apiGetBundle(loginInfo.userId)
    //     .then(({ data }) => {
    //       setBundles(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
    // initCall();
  }, [open]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "#152744",
    boxShadow: 24,
    outline: 10,
    borderRadius: 5,
  };
  return (
    <Card sx={{ ml: 10, mb: 3, minWidth: 200, maxWidth: 800 }}>
      <Modal open={open} onClose={handleCloseModal}>
        <Card sx={style}>
          <MDBox p={3} bgColor="#152744">
            <FormControl sx={{ m: 3 }} variant="standard">
              <FormLabel id="scrap-card-bundle">스크랩 추가 하기</FormLabel>
              <RadioGroup
                aria-labelledby="scrap-card-bundle"
                name="select-bundle"
                value={selectedBundle}
                onChange={handleRadioChange}
              >
                {bundles.map((bundle) => (
                  <FormControlLabel
                    key={bundle.bundleId}
                    value={bundle.bundleId}
                    control={<Radio />}
                    label={bundle.feedTitle}
                  />
                ))}
                <FormControlLabel value="-1" control={<Radio />} label="번들 생성" />
              </RadioGroup>
              {/* <FormHelperText>{helperText}</FormHelperText> */}
            </FormControl>
            {selectedBundle === "-1" && (
              <Box display="grid" width="70%">
                <Input placeholder="번들 제목" onChange={handleBundleTitle} />
                <Input placeholder="번들 내용" onChange={handleBundleContent} />
              </Box>
            )}
            <Box sx={{ my: 1 }}>
              <Button
                sx={{ mt: 1, mr: 1 }}
                type="button"
                variant="outlined"
                onClick={(e) => handleCloseModal(e)}
              >
                생성 취소
              </Button>
              <Button
                sx={{ mt: 1, mr: 1 }}
                type="button"
                variant="outlined"
                onClick={(e) => handleSubmit(e)}
              >
                생성 완료
              </Button>
            </Box>
          </MDBox>
        </Card>
      </Modal>
    </Card>
  );
}

// Typechecking props for the SimpleBlogCard
ScrapButtonModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  targetId: PropTypes.number.isRequired,
};

export default ScrapButtonModal;
