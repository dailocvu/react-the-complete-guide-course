/*
- Gồm state lưu tên, tuổi, lỗi 
- Update state khi người dùng nhập (two way binding)
- Xử lý khi submit form -> nếu lỗi: update state error + show Modal, không lỗi: gửi props lên App(name,age)
-
*/

import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  //state dùng để làm gì ?
  //stae dùng để chứa dữ liệu -> state thay đổi thì rerender

  //state chứa dữ liệu tên được nhập vào, giá trị biến lúc đầu là trống
  //tương tự với tuổi và error
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  //update state bằng giá trị nhập vào
  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  //Khi nhấn xác nhận -> null
  const errorHandler = () => {
    setError(null);
  };

  //hàm chạy khi form được submit
  const addUserHandler = (e) => {
    e.preventDefault();

    //Validation input, nếu lỗi cập nhật state
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      //return dể trả về rồi dừng nghỉ khoẻ
      return;
    }

    //+enteredAge convert enteredAge to number to compare
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    //truyền tên và tuổi đã được nhập ngược lên App
    props.onAddUser(enteredUsername, enteredAge);

    //Sau đó reset input và dùng thêm value={} trong input -> 2 side renders
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <>
      {/*nếu error khác null thì hiện Modal, truyền dữ liệu lỗi từ đây sang */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            //two way binding
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
