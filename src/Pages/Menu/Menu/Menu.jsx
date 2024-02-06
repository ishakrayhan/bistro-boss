
import Cover from '../../Shared/Cover/Cover';

import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/dessert-bg.jpeg'
import PopularManu from '../../Home/PopularManu/PopularManu';

const Menu = () => {
    return (
        <div>
            <h2>kljsdlfjdsflj</h2>
            <Helmet>
        <title>Bistro | menu</title>
       
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
     <PopularManu></PopularManu>
   
     <Cover img={menuImg} title="Our Menu"></Cover>
     <PopularManu></PopularManu>
     <Cover img={menuImg} title="Our Menu"></Cover>
     <PopularManu></PopularManu>
        </div>
       
    );
};

export default Menu;