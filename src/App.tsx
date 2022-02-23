import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import NewImage from "./components/pages/new-image/NewImage";

import "./style/index.css";

let loggedIn = false;

function App() {
  const {
    state: { user },
  } = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* {user.email.length !== 0 && ( */}
        <>
          <Route path="/" element={<Home />} />
          <Route path="/new-image" element={<NewImage />} />
        </>
        {/* )} */}
        <Route
          path="*"
          element={loggedIn ? <Navigate to="/" /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
