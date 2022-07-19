import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import UserList from "./components/User/UserList";
import User from "./components/User/User";
import NewUser from "./components/User/NewUser";
import ProductList from "./components/Products/ProductList";

function App() {
  return (
    <AppConatiner>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<UserList />} />
          <Route exact path="/user/:userId" element={<User />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/products" element={<ProductList />} />
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
