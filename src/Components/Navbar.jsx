import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import {FaCartArrowDown } from 'react-icons/fa';
const Navbar = ({setData, cart}) => {
    // console.log(useLocation())
    const location = useLocation()
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")

    const filterByCategory = (category)=>{
        const element = items.filter((product)=> product.category=== category)
        // console.log(element)
        setData(element)
    }

    const filterByPrice = (price)=>{
        const element = items.filter((product) => product.price>=price)
        setData(element)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
        setSearchTerm("")
    }
  return (
    <div>
        <header className='sticky-top'>
            <div className="nav-bar">
                <Link to={'/'} className="brand">E-cart</Link>

                    <form className="search-bar" onSubmit={handleSubmit}> 
                        <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
                        type="text" placeholder='Search Products' />
                    </form>

                   <Link to={'/cart'} className="cart">
                
<button type="button" class="btn btn-primary position-relative">
<FaCartArrowDown style={{fontSize :'1.5rem'}}/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
                   </Link>     
             {/* nav-bar */}
            </div>

            {
                location.pathname=='/' && (
                    <div className="nav-bar-wrapper">
                <div className="items">Filter by {"->"}</div>
                <div className="items"
                onClick={()=> setData(items)}
                >No Filter</div>
                <div 
                onClick={()=>filterByCategory('mobiles')}
                className="items">Mobiles</div>
                <div className="items"
                onClick={()=>filterByCategory('laptops')}
                >Laptops</div>
                <div className="items"
                onClick={()=>filterByCategory('tablets')}
                >Tablets</div>
                <div 
                onClick={()=> filterByPrice(29999)}
                className="items">{">="}29999</div>
                <div className="items"
                onClick={()=> filterByPrice(49999)}
                >{">="}49999</div>
                <div className="items"
                onClick={()=> filterByPrice(69999)}
                >{">="}69999</div>
                <div className="items"
                onClick={()=> filterByPrice(89999)}
                >{">="}89999</div>
                
                {/* nav-bar-wrapper */}
            </div>
                )
            }

            
        </header>
    </div>
  )
}

export default Navbar