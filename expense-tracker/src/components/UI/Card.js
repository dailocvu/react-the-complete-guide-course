import "./Card.css";

/*
- UI component gồm 1 vài CSS dùng chung cho component khác (ở đây là border, shadow,..)
*/
const Card = (props) => {
  const classes = "card " + props.className; //thêm class của component cần wrap UI
  return <div className={classes}>{props.children}</div>; //bên trong là data được truyền đi với children
}

export default Card;
