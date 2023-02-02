// [Import - Design]
import { Box, TextField, Typography } from "@mui/material";

// [Import - React Basic] react && props && mui
import PropTypes from "prop-types";

function MakeBundle({ selected, handleBundle }) {
  // 부모로 데이터 넘기기
  const handleBundleChange = (event) => {
    handleBundle(event.target);
  };

  return (
    <Box mt={3}>
      {selected === true && (
        <div>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6">
              <Box sx={{ textAlign: "center", mt: 3 }}>
                번들
                <br />
                제목
              </Box>
            </Typography>
            <TextField
              multiline
              rows={1}
              required
              autoFocus
              id="bundle-bundleThumbnail"
              type="text"
              name="bundleThumbnail"
              label="Required"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleBundleChange}
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6">
              <Box sx={{ textAlign: "center", mt: 3 }}>
                번들
                <br />
                내용
              </Box>
            </Typography>
            <TextField
              multiline
              rows={3}
              required
              id="bundle-bundleThumbnailText"
              type="text"
              name="bundleThumbnailText"
              label="Required"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleBundleChange}
            />
          </Box>
        </div>
      )}
    </Box>
  );
}

// Typechecking props for the SelectedCategory
MakeBundle.propTypes = {
  selected: PropTypes.bool.isRequired,
  handleBundle: PropTypes.func.isRequired,
};

export default MakeBundle;
