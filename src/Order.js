import React from 'react'
import Layout from './Layout'
import "./cart.css"

const Order = ({order}) => {
  return (
  <Layout>
    <div>
      <h2>Order History</h2>

    <div className="cartItem">
      
        

      {order?.map((item) => {

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
                
                <p>{description}</p>
                <p>left:{left}</p>
                <p><b> ${price} </b><del>M.R.P${price + discountPercentage}</del></p>
                

              </div>
              
            </div>
            <hr/>
            
          



          </>
        )
      })}

    </div>



    </div>



  </Layout>
  )
}

export default Order
