import "./App.css";
import Blog from "./pages/Blog";
import Collaborate from "./pages/Collaborate";
import DetailArticle from "./pages/DetailArticle";
import Initial from "./pages/Initial";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/article/:id" element={<DetailArticle />} />
      <Route path="/collaborate" element={<Collaborate />} />
    </Routes>
  );
}

export default App;
