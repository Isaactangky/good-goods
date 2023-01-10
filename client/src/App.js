import { Fragment } from "react";
import { GlobalStyle } from "./GlobalStyle";

import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAuthStatusStartAsync } from "./store/user/user.action";
import Navigation from "./routes/navigation/navigation.component";
import NewPost from "./routes/new-post/new-post.component";
import Home from "./routes/home/home.component";
import Posts from "./routes/posts/posts.component";
import Post from "./routes/post/post.component";
import EditPost from "./routes/edit-post/edit-post.component";
import ContactUs from "./routes/contact-us/contact-us.component";
import PageNotFound from "./routes/page-not-found/page-not-found.component";
import SignIn from "./routes/auth/SignIn.component";
import SignUp from "./routes/auth/SignUp.component";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthStatusStartAsync());
  }, [dispatch]);
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="new" element={<NewPost />} />
          <Route path="post/*">
            <Route index element={<Posts />} />
            <Route path=":id" element={<Post />} />
            <Route path=":id/edit" element={<EditPost />} />
          </Route>
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
