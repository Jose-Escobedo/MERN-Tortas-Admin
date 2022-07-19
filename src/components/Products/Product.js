import styled from "styled-components";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { productData } from "../../seedData";
import { Publish } from "@material-ui/icons";
import Cubana from "../../images/cubana.jpg";

const Product = () => {
  return (
    <ProductContainer>
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/newproduct">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart
              data={productData}
              dataKey="Sales"
              title="Sales Performance"
            />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={Cubana} alt="" className="productInfoImg" />
              <span className="productName">Torta Cubana</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">5123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">no</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder="Torta Cubana" />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src={Cubana} alt="" className="productUploadImg" />
                <label for="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  .product {
    flex: 4;
    padding: 20px;
  }

  .productTitleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .productAddButton {
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  .productTop {
    display: flex;
  }

  .productTopLeft {
    min-width: 24vw;
  }

  .productTopLeft,
  .productTopRight {
    flex: 1;
  }

  .productTopRight {
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }

  .productInfoImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }

  .productInfoTop {
    display: flex;
    align-items: center;
  }

  .productName {
    font-weight: 600;
  }

  .productInfoBottom {
    margin-top: 10px;
  }

  .productInfoItem {
    width: 150px;
    display: flex;
    justify-content: space-between;
  }

  .productInfoValue {
    font-weight: 300;
  }

  .productBottom {
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }

  .productForm {
    display: flex;
    justify-content: space-between;
  }

  .productFormLeft {
    display: flex;
    flex-direction: column;
  }

  .productFormLeft > label {
    margin-bottom: 10px;
    color: gray;
  }

  .productFormLeft > input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }

  .productFormLeft > select {
    margin-bottom: 10px;
  }

  .productUploadImg {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
  }

  .productFormRight {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .productUpload {
    display: flex;
    align-items: center;
  }

  .productButton {
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default Product;
