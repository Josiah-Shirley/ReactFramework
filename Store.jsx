import { useState, useEffect, use } from "react"
import "./store.css"

export default function Store(props) {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString])
    function fetchAPIData() {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const filtered = products.filter((el)=>{return el.title.toLowerCase().includes(searchString.toLowerCase())})
            const currentFilter = filtered.map((product, index) => {
                return (<div className="prodStyle" key={index}>
                    <p>{product.title}</p>
                    <img class="productImages" src={product.image} alt="product image"/>
                    <p>{product.price}</p>
                </div>)
            })
            setFilteredProducts(currentFilter)
        })
    }
    useEffect(fetchAPIData, []) // on page load, call fetchAPIData()
    
    function handleChange(event){
        setSearchString(event.target.value)
    }
    
    
    
    return <div>
        <p>store</p>
        <input type="text" value={searchString} onChange={handleChange} />
        <div style={{display:"flex", flexflow:"row wrap"}}>{filteredProducts}</div>
    </div>


}