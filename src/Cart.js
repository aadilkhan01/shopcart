
import "./cart.css";
import { AiFillStar } from "react-icons/ai";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Cart = ({ cartItem, filterItems, total, BuyItems,addItemNo,subItemNo}) => {

 const length=cartItem.length
 











  return (
    <>
      <Layout>

        <img className="upperimg" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
        <div className="buyNow">

          <p>    Subtotal ({length} items) : <b>${total}</b></p>
          <center>
          <Link to="/buy"><button className="buybtn" onClick={BuyItems}>BuyNow</button></Link>
           
            


          </center>
        </div>


        <div className="cartItem">



          {cartItem?.map((item) => {

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
            return (

              <>

                <div className="cart">

                  <img src={thumbnail} alt="Loading" />




                  <div className="content">
                    <p><b>{brand}</b></p>
                    <p>{title}</p>
                    <p><b>{rating}</b> <AiFillStar /></p>

                    <p>{description}</p>
                    <p>left:{left}</p> 
                    <p><b> ${price} </b><del>M.R.P${price + discountPercentage}</del></p>
                    <button className="dec"onClick={()=>subItemNo(item)}>-</button>
                  {item.quantity}
                
                    <button className="removeBtn" onClick={() => filterItems(id, item)}>Remove</button>
                    <button className="inc" on onClick={()=>addItemNo(item)}>+</button>



                  </div>
                  
                </div>
                <hr />





              </>
            )
          })}

        </div>
      </Layout>

    </>
  )
}
export default Cart


