import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { productData } from "../../seedData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPstats] = useState([]);
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPstats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

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
            <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={product.img} alt="" className="productInfoImg" />
              <span className="productName">{product.name}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">
                  {product._id.slice(0, 7)}
                </span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">5123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">{product.inStock}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder={product.name} />
              <label>Product Description</label>
              <input type="text" placeholder={product.desc} />
              <label>Product Price</label>
              <input type="text" placeholder={product.price} />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src={product.img} alt="" className="productUploadImg" />
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
