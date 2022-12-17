import React from "react";

import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Novel from "./pages/Novel/Novel";
import Read from "./pages/read/Read";
import Novels from "./pages/Novels/Novels";
import Privacy from "./components/PrivacyPolicy/Privacy&Policy";
import Terms from "./components/Terms/Terms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novel/:novelId" element={<Novel />} />
        <Route path="/novels" element={<Novels />} />
        <Route path="/novel/:novelId/chapter/:chapterId" element={<Read />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
