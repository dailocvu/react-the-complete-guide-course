/*
- Return AddUser và UsersList components
- Chứa state lưu usersList được gọi về từ AddUser (child -> parent) thông qua function addUserHandler
- Dùng state này truyền đi UsersList để hiển thị
*/

import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  //state lưu users list = mảng rỗng
  const [usersList, setUsersList] = useState([]);

  //gọi props từ AddUser lên App bằng cách tạo 1 function và truyền tham số
  const addUserHandler = (uName, uAge) => {
    //update state dựa trên users list trước đó
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      {/*Dùng function name làm props*/}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
