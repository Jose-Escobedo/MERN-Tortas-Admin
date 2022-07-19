import styled from "styled-components";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <LoginContainer className="container">
      <input
        type="text"
        placeholder="username"
        className="input"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" onClick={handleClick}>
        Login
      </button>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .input {
    padding: 0.8em;
    margin-bottom: 1.3em;
  }
  .button {
    padding: 10px;
    width: 100px;
  }
`;
export default Login;
