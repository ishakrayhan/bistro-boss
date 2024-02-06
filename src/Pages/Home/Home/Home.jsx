import React from 'react';
import Bannar from '../Bannar/Bannar';
import Category from '../Category/Category';
import PopularManu from '../PopularManu/PopularManu';
import Featured from '../Featured/Featured';
import Testimoniyals from '../Testimoniyals/Testimoniyals';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
              <Helmet>
        <title>Bistro | Home</title>
       
      </Helmet>
           <Bannar></Bannar>
           <Category></Category>
           <PopularManu></PopularManu>
           <Featured></Featured>
           <Testimoniyals></Testimoniyals>
        </div>
    );
};

export default Home;