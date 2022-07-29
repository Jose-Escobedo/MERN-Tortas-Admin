import { useState } from "react";
import styled from "styled-components";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCategories = (e) => {
    setCategory(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <NewProductContainer>
      <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Torta Cubana"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Stock</label>
            <select name="inStock" onChange={handleChange}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Price</label>
            <input
              name="price"
              type="number"
              placeholder="100"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Categories</label>
            <input
              name="categories"
              type="text"
              placeholder="tamal, combos"
              onChange={handleCategories}
            />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input
              name="desc"
              type="text"
              placeholder="Tasty food..."
              onChange={handleChange}
            />
          </div>
          <button onClick={handleClick} className="addProductButton">
            Create
          </button>
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
