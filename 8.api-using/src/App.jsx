import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

//const BASE_URL = "http://localhost:3005"
const BASE_URL = "https://jsonplaceholder.typicode.com";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/posts/`);
    console.log(response.data);
  };

  const getUserById = async (id) => {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    //POST : Veri eklemek için kullanılır.
    // Gönderilecek Adres, Gönderilecek Veri(newUser)
    const addedUser = await axios.post(`${BASE_URL}/posts`, newUser);
    console.log("Added User:", addedUser.data);
  };

  const updateUser = async (id, updateUser) => {
    //PUT : Veri güncellemek için kullanılır.
    // ALT GR + İki kere virgüle basılacak.
    const updatedUser = await axios.put(`${BASE_URL}/posts/${id}`, updateUser);
    console.log("Updated User:", updatedUser.data);
  };

  const deleteUserById = async (id) => {
    const deletedUser = await axios.delete(`${BASE_URL}/posts/${id}`);
    console.log("Deleted User:", deletedUser.data);
  };

  // 2 Get işlemi kullanarak farklı iki yerden veri getirme
  const getUserById2 = async (id) => {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data.id;
  };

  const getPostById = async (postId) => {
    const response = await axios.get(`${BASE_URL}/posts/${postId}`);
    return response.data;
  };

  const getPost = async () => {
    const postId = await getUserById2(3);
    const postData = await getPostById(postId);
    console.log(postData);
  };

  useEffect(() => {
    const newUser = {
      userId: 11,
      id: 101,
      title: "Yeni Kullanıcıları Ekliyoruz.",
      body: "Post işlemi başarıyla gerçekleştirildi.",
    };

    getPost();

    //createUser(newUser);
    //getAllUsers();
    //getUserById(3);

    /*
    const newLocal = updateUser(2, {
      userId: 1,
      title: "id'si 2 olan kullanıcının bilgilerini değiştiriyoruz.",
      body: "Put(Güncelleme) işlemi başarıyla gerçekleştirildi.",
    });
    */

    //deleteUserById(3);
  }, []);

  return <div></div>;
}

export default App;
