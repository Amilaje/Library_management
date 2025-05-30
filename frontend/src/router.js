// src/router.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Publish from "./pages/Publish";
import Edit from "./pages/Edit";
import View from "./pages/View";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}
