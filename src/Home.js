import React, { useEffect, useState } from "react";
import "./home.css";
import { AiFillStar } from "react-icons/ai";
import { FaGreaterThan ,FaLessThan} from "react-icons/fa";
import Layout from "./Layout";



const Home = ({handleAddCart}) => {
  const [items, setItems] = useState({});
  const [index, setIndex] = useState(0);

  const url = "https://dummyjson.com/products";

  const fetchItem = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setItems(data);
  };
  useEffect(() => {
    fetchItem();
  }, []);
  const imgs = [
    "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
  ];


  return (
    <>
    <Layout>

      <section className="home">
        <img src={imgs[index]} />
        <button
          className="btnDec"
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            } else {
              setIndex(imgs.length - 1);
            }
          }}
        >
          <FaLessThan />
        </button>

        <button
          className="btnInc"
          onClick={() => {
            index < imgs.length - 1 ? setIndex(index + 1) : setIndex(0);
          }}
        >
          <FaGreaterThan/>
        </button>

        <div className="items">
          {items.products?.map((item) => {
            const {
              id,
              title,
              description,
              price,
              discountPercentage,
              rating,
              thumbnail,
              stock: left,
              brand,
            } = item || {};
            // let originalPrice = { price };

            return (
              <>
                <div className="item" key={id}>
                  <img src={thumbnail} alt="Loading" />
                  <p className="rating">
                    <b>{rating}</b>
                    <AiFillStar />
                  </p>
                  <div className="contain">
                    <p><b>{brand}</b></p>
                    <p>{title}</p>
                    {/* <p className="description">{description}</p> */}

                    <p><b> ${price} </b><del>M.R.P${price + discountPercentage}</del></p>
                    {/* <p>left {left}</p> */}
                  </div>

                  <div className="addCart">
                    <button className=" addBtn" onClick={()=>{handleAddCart(item)}}>Add To Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </Layout>
    </>
  );
};
export default Home;