import { useState } from "react";
import { Link } from "react-router-dom";
import sun from '../assets/lighticon.png';
import moon from '../assets/darkicon.png';

function Navbar()
{
  const [image,setImage] = useState('light');

  const handleclick = ()=>
  {
      setImage(image === 'light' ? 'dark' : 'light');
      document.body.className = image === 'light' ? 'dark' : 'light';
  }

  return(

    <div  className="nav-container">

     
      <h1 className="nav-logo">EduTech</h1> 

      <nav className="navbar">
        <Link to='/'>HOME </Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/service'>SERVICE</Link>
        <Link to='/course'>COURSE</Link>
        <Link to='/contact'>CONTACT</Link>

      </nav>

      <div className="theme">
        <img src={image === 'light' ? moon : sun} onClick={handleclick}/>
      </div>
    


    </div>
  )
}
export default Navbar;