import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/UseCart";
import { FaTrashAlt } from 'react-icons/fa';


const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Bistro | menu</title>

            </Helmet>
       <div  className="uppercase font-bold flex justify-evenly">
       <h2 className="text-3xl">Total Items {cart.length}</h2>
          <h2 className="text-3xl">Total Items ${total}</h2>
          <button className="btn btn-warning btn-sm">pay</button>
           
       </div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item,index) =>     <tr
        key={item._id}
        >
          <td>
            {index + 1}
          </td>
          <td>
          
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.image} />
                </div>
             
        
            </div>
          </td>
          <td>
        {item.name}
          </td>
          <td className="text-end">${item.price}</td>
          <td>
            <button className="btn btn-ghost text-teal-50 bg-red-200 btn-lg"><FaTrashAlt></FaTrashAlt></button>
          </td>
        </tr>)
      }
  

    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
    );
};

export default MyCart;