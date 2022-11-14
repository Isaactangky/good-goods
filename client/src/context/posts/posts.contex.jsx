import { createContext, useState, useEffect } from "react";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import POSTS_DATA from "../../posts-data";
import axios from "axios";
export const PostsContext = createContext({
  posts: [],
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // TODO: fetch data from server
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/post");
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };
  const value = { posts, addPost };
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
