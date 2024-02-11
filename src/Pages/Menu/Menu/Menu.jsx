
import Cover from '../../Shared/Cover/Cover';

import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu//salad-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladimg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import PopularManu from '../../Home/PopularManu/PopularManu';
import useMenu from '../../../Hooks/UseMenu';
import SectionTittle from '../../../Components/SectionTittle/SectionTittle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts =menu.filter(item => item.category === 'dessert')
    const soup =menu.filter(item => item.category === 'soup')
    const salad =menu.filter(item => item.category === 'salad')
    const pizza =menu.filter(item => item.category === 'pizza')
    const offered =menu.filter(item => item.category === 'offered')

        return (
        <div>
          
            <Helmet>
        <title>Bistro | menu</title>
       
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
        <SectionTittle subHeading="Don't Miss" heaDing="Today's Offer"></SectionTittle>
        <MenuCategory items={offered}></MenuCategory>


      
     <MenuCategory
     
      items={desserts} 
     title="dessert" 
     img ={dessertImg}
     >
     </MenuCategory>


     <MenuCategory
     items={pizza}
     title={"pizza"}
     img={pizzaImg}
     ></MenuCategory>

<MenuCategory
     items={salad}
     title={"salad"}
     img={saladimg}
     ></MenuCategory>

<MenuCategory
     items={soup}
     title={"soup"}
     img={soupImg}
     ></MenuCategory>
  
        </div>
       
    );
};

export default Menu;