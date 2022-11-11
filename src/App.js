import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Navigation from "./routes/navigationRoute/navigation.component";
import Home from "./routes/homeRoute/home.component";
import NewPost from "./routes/newpostRoute/new-post.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="new" element={<NewPost />} />
      </Route>
    </Routes>
  );
}

export default App;
