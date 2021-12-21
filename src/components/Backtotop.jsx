import React from 'react'
import { BackTop } from 'antd'
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const style = {
  height: "60px",
  width: "60px",
  padding:'10px',
  borderRadius: "50%",
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 20,
};

const Backtotop = () => {
  return (
    <>
      <BackTop>
        <div style={style}><ArrowUpwardIcon/></div>
      </BackTop>
    </>
  );
}

export default Backtotop
