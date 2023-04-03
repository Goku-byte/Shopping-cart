import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return <div>
    <div className="flex flex-row justify-between">
      <div>
      <NavLink to="/">
      <img src="https://res.cloudinary.com/codehelp/image/upload/v1667493133/codehelpFinalAssets/ort4cxqmugzj9an4sbae.png" alt="cart"/>
      </NavLink>
      </div>
      <div>
        <NavLink to="/home">
        <p>Home</p>
        </NavLink>
        <div>
        <FaShoppingCart/>
        </div>
      </div>
    </div>
  </div>;
};

export default Navbar;
