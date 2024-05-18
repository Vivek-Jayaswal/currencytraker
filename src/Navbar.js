// import { useState } from "react";

const Navbar = () => {

    const [input , setInput] = useState("");
    

    return(
        <div className="input">
            <input placeholder="Search By Name or Symbol "/>
            <button className="btn-1">Sort By Mkt Cap</button>
            <button className="btn-1">Sort by percentage</button>
        </div>
    )
}

// export default Navbar;