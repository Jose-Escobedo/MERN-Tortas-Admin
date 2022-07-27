import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import UserList from "./pages/User/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/User/NewUser";
import ProductList from "./pages/Products/ProductList";
import Product from "./pages/Products/Product";
import NewProduct from "./pages/Products/NewProduct";
import Login from "./pages/Login/Login";

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root"))?.user || "{}"
  )?.currentUser?.isAdmin;

  return (
    <AppContainer>
      {admin ? (
        <>
          <Navbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/users" element={<UserList />} />
              <Route exact path="/user/:userId" element={<User />} />
              <Route exact path="/newUser" element={<NewUser />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route exact path="/product/:productId" element={<Product />} />
              <Route exact path="/newproduct" element={<NewProduct />} />
              <Route
                exact
                path="/login"
                element={admin ? <Navigate to="/" /> : <Login />}
              />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <Navigate to="/" />
          <Routes>
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </>
      )}
    </AppContainer>
  );
}

const AppContainer = styled.div`
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
