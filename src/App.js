import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Order from './Order';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import { useState } from 'react';
import Buy from './Buy';


function App() {
  const [cartItem, setCartItem] = useState([])
  const [total, setTotal] = useState(0)
  const [order, setOrder] = useState([])



  const handleAddCart = ((item) => {
// console.log({item});


    let isItemNotExist = true;
    cartItem.forEach((product) => {
     if(product.id === item.id){
      isItemNotExist = false
     }
    })
 
    if (isItemNotExist) {
   
        setCartItem([...cartItem,{...item,quantity:1}])
        const updateTotal = total + item.price
        setTotal(updateTotal)
        alert("Item Added In The Cart")

    }
    else{
      setCartItem(cartItem.map((product)=>
      product.id===item.id?{...product,quantity:product.quantity+1}:product))
      const updateTotal = total + item.price
        setTotal(updateTotal)
        alert("Item Already In The Cart")
    }
        
      
      })

    
   const addItemNo=(item)=>{
    setCartItem(cartItem.map((product)=>
      product.id===item.id?{...product,quantity:product.quantity+1}:product))
      const updateTotal = total + item.price
        setTotal(updateTotal)
        

   }
   const subItemNo=(item)=>{
    if (item.quantity>1){

    setCartItem(cartItem.map((product)=>
    product.id===item.id?{...product,quantity:product.quantity-1}:product))
    const updateTotal = total - item.price
      setTotal(updateTotal)
      
   }
  else{
    filterItems (item.id,item)

  }}
   






  const BuyItems = () => {
    setOrder(cartItem)
    setCartItem([])
    setTotal(0)

  }
  const filterItems = (id, item) => {
    console.log(id)
    let newItems = cartItem.filter((item) =>
      item.id !== id)
    const updateTotal = total - item.price
    setTotal(updateTotal)


    setCartItem(newItems)


  }



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home handleAddCart={handleAddCart} />
    },
    {
      path: "/cart",
      element: <Cart cartItem={cartItem} filterItems={filterItems} total={total} BuyItems={BuyItems}  addItemNo={addItemNo} subItemNo={subItemNo}/>
    },

    {
      path: "/order",
      element: <Order order={order} />
    },
    {
      path: "/Buy",
      element: <Buy />
    },
    {
      path: "/login",
      element: <Login />
    },
  ])

  return (
    <div className="App">


      <RouterProvider router={router}>

      </RouterProvider>




    </div>
  );
}

export default App;