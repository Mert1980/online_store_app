import React, { useState } from "react";
import App from "./App";

const SearchComponent = ({setFilter, setSearch}) => {
    const [click, setClick] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    
    // console.log(searchTerm)
    const handleChange = () => {
        if (!click) {setFilter(true)} else {setFilter(false)}
        setClick( !click )
      }
    const handleInputChange = (event)=>{
          setSearchTerm(event.target.value)
          setSearch(event.target.value)
      }
      
    
     return (
            <form>
            <br />
             <label>
                <input
                  type="text"
                  name="searchProduct"
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="Search for a product..."
                />
                <br />
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={click}
                  onChange={handleChange}
                />
                Only show products in stock!
              </label>
             <br />
            </form>
          );
     }
  export default SearchComponent;
