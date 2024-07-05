import "./App.css";
import Blog from "./pages/Blog";
import Initial from "./pages/Initial";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
