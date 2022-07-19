import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import styled from "styled-components";

function App() {
  return (
    <AppConatiner>
      <Navbar />
      <div className="container">
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
`;
export default App;
