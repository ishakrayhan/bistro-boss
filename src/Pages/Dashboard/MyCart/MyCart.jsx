import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/UseCart";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const handleDelete = item =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         fetch(`http://localhost:5000/carts/${item._id}`,{
          method: 'DELETE'

         })
         .then(res => res.json())
         .then(data=>{
          if (data.deletedCount>0){
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });

          }
         })
        }
      });
    }
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
            <button onClick={() => handleDelete(item)} className="btn btn-ghost text-teal-50 bg-red-400 btn-lg"><FaTrashAlt></FaTrashAlt></button>
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