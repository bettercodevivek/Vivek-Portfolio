import React from "react";

const Navbar = () =>{
    return(
      <React.Fragment>
       <nav className="flex flex-row items-center justify-between">
        <img src="" alt="logo"/>
        <div className="flex flex-row items-center justify-end gap-8">
            <a href="#">About</a>
            <a href="#">Experience</a>
            <a href="#">Projects</a>
            <a href="#">Blogs</a>
            <a href="#">Contact</a>
            <a href="#">Resume</a>
        </div>
        <div className="flex flex-col gap-1 mr-12 sm:hidden">
         <div className="h-1 w-8 bg-black"></div>
         <div className="h-1 w-7 bg-black"></div>
         <div className="h-1 w-6 bg-black"></div>
        </div>
       </nav>
      </React.Fragment>
    );
}


export default Navbar