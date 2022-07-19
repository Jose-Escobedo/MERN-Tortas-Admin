import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <AppConatiner>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </AppConatiner>
  );
}

const AppConatiner = styled.div`
  .container {
    display: flex;
    margin-top: 10px;
  }
  .link {
    text-decoration: none;
    color: inherit;
  }
`;
export default App;
