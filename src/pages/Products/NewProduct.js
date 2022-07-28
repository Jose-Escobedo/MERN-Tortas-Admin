import { useState } from "react";
import styled from "styled-components";
const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  return (
    <NewProductContainer>
      <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <input type="file" id="file" />
          </div>
          <div className="addProductItem">
            <label>Name</label>
            <input type="text" placeholder="Torta Cubana" />
          </div>
          <div className="addProductItem">
            <label>Stock</label>
            <select>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Price</label>
            <input type="text" placeholder="100" />
          </div>
          <div className="addProductItem">
            <label>Categories</label>
            <input type="text" placeholder="tamal, combos" />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input type="text" placeholder="Tasty food..." />
          </div>
          <button className="addProductButton">Create</button>
        </form>
      </div>
    </NewProductContainer>
  );
};

const NewProductContainer = styled.div`
  .newProduct {
    flex: 4;
  }

  .addProductForm {
    margin-top: 10px;
  }

  .addProductItem {
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .addProductItem > label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .addProductItem > input {
    padding: 10px;
  }

  .addProductItem > select {
    padding: 10px;
  }

  .addProductButton {
    margin-top: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default NewProduct;
