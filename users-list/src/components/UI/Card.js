import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    //trả về cả class riêng của card và cả class chung được set từ <App/>
    //Card bao lớp bên ngoài(border, shadow,..) trả về props.children (cho phép các component khác làm elements bên trong)
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
