import { Route, Routes } from "react-router-dom";
import App from "./App";
import Calculator from "./Calculator";
import BlogPost from "./BlogPost";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Calculator />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}

export default Pages;
