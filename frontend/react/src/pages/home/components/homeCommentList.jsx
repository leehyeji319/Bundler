// Import - react
import React from "react";
import PropTypes from "prop-types";

// Import - design
import MDTypography from "components/MDTypography";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function HomeCommentList({ commentList }) {
  const editButton = () => {
    console.log("edit");
  };
  const deleteButton = () => {
    console.log("delete");
  };
  return (
    <ul
      style={{
        maxHeight: "200px",
        overflow: "auto",
        overflowX: "hidden",
      }}
    >
      {commentList.map((comment) => (
        <li key={comment.Id}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <MDTypography variant="button" fontWeight="light">
                {comment.name} : {comment.reply}
              </MDTypography>
            </Box>
            <Box>
              <Button type="button" onClick={editButton} sx={{ p: "0" }}>
                <EditIcon />
              </Button>
              <Button type="button" onClick={deleteButton} sx={{ p: "0" }}>
                <DeleteIcon />
              </Button>
            </Box>
          </Box>
        </li>
      ))}
    </ul>
  );
}

HomeCommentList.propTypes = {
  commentList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      reply: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default HomeCommentList;
