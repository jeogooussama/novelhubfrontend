import React from "react"

import Home from "./pages/Home/Home";
import { BrowserRouter,Route, Routes  } from "react-router-dom";
import Novel from "./pages/Novel/Novel";
import Read from "./pages/read/Read";
import Novels from "./pages/Novels/Novels";

function App() {

  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />  
  <Route path="/novel/:novelId" element={<Novel/>} />
  <Route path="/novels" element={<Novels/>}/>
  <Route  path="/novel/:novelId/chapter/:chapterId" element={<Read/>} />
</Routes>
</BrowserRouter>
    )
}

export default App;