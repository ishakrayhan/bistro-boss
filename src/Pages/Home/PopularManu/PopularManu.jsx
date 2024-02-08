import { useEffect, useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/UseMenu";


const PopularManu = () => {
    const [menu]= useMenu();
    const popular =menu.filter(item => item.category === 'popular')

    // const [menu, setMenu]= useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{ 
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)})
    // },[])

    return (
        <section>
            <SectionTittle
            heaDing={"Popular Items"}
            subHeading={"from our manu"}
            ></SectionTittle>
            <div className="grid md:grid-cols-2 gap-4 mb-8 mt-8">
                {
                    popular.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularManu;