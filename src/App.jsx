import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./view/home";
import About from "./view/about";
import Blog from "./view/blog";
import Login from "./view/register/login";
import SignUp from "./view/register/signUp";
import NotFound from "./view/notFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
          <Route path="/register/login" element={<Login />} />
          <Route path="/register/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
