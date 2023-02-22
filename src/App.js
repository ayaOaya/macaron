import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages";
import {Product} from "./pages"
import { Animator, FadeIn, ScrollContainer, ScrollPage } from 'react-scroll-motion'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
   
   
    
  );
}

export default App;






