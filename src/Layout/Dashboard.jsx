import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendar, FaHome } from 'react-icons/fa';
import useCart from "../Hooks/UseCart";

const Dashboard = () => {
  const [cart]= useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet>
          Page content here
        </Outlet>

        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full ">
          {/* Sidebar content here */}
          <li><NavLink to="/dashboard/home"><FaHome></FaHome> Home</NavLink></li>
          <li><NavLink to="/dashboard/reservations"><FaCalendar></FaCalendar> Reservation</NavLink></li>
          <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> add to mony</NavLink></li>
          <li>
            <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> 
          my cart
          <span className="badge badge-secondary ">  +{cart?.length || 0} </span> 
          </NavLink>
        
          </li>
          

          <div className="divider"></div>
          <li><NavLink to="/"> <FaHome></FaHome> Home</NavLink></li>
          <li><NavLink to="/menu">Our Menu</NavLink></li>
          <li><NavLink to="/order/salad">Secret</NavLink></li>

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;