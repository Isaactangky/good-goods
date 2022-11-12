import { createContext, useState, useEffect } from "react";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import POSTS_DATA from "../../posts-data";
export const PostsContext = createContext({
  posts: [],
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // TODO: fetch data from server
    setTimeout(() => setPosts(POSTS_DATA), 1000);
  }, []);
  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };
  const value = { posts, addPost };
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
