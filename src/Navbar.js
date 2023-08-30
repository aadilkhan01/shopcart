import React, { useState } from 'react'
import './Navbar.css'
import {Link } from 'react-router-dom'

const Navbar = () => {
const[Search,setSearch]=useState("")




  return (
    <><section className='navbar'>
      <ul className='navbarLink'>
      <li><Link to= "/">Home</Link>
        </li>
        <li><Link to= "/login">Login </Link>
        </li>
        <li><Link to= "/order">Order</Link>
        </li>
        <li><Link to= "/cart">Cart</Link>
        </li>
      </ul>
      <img  className='img' src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg' alt='Loading'/>
      <input type="text" placeholder="Search Your item.."  name='search' value={Search} onChange={(e)=>setSearch(e.target.value)}/>
        <button className='searchBtn' onClick={()=>setSearch("")}>Search</button>

    </section>
    </>
  )
}

export default Navbar
