import "./App.css";
import { Routes, Route, useNavigate, useResolvedPath } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/navbar";
import Home from "./view/home";
import About from "./view/about";
import Blog from "./view/blog";
import Login from "./view/register/login";
import SignUp from "./view/register/signUp";
import NotFound from "./view/notFound";
import Profile from "./view/profile";
import axios from "axios";
import Sitting from "./view/sitting";
function App() {
  const navigate = useNavigate();
  const resolved = useResolvedPath();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token != undefined) {
      axios
        .post(
          "http://localhost:3000/auth",
          {}, // Empty body if not needed
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res.data.status) {
            if (resolved.pathname == "/") {
              console.log(res.data);
            } else {
              navigate("/");
            }
          }
        })
        .catch((error) => {
          console.log("ERROR! :" + error + " :(");
          navigate("/register/login");
        });
    } else {
      navigate("/register/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sitting" element={<Sitting />} />
        </Route>
        <Route path="/register/login" element={<Login />} />
        <Route path="/register/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
