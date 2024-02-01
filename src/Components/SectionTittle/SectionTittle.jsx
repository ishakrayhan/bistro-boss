import React from 'react';

const SectionTittle = ({subHeading,heaDing}) => {
    return (
        <div className='mx-auto text-center md:w-3/12'>
            <p className='text-yellow-600 mb-3'>----{subHeading}----</p>
            <h3 className='text-3xl uppercase mb-4 border-y-4 py-4 '>{heaDing}</h3>
        </div>
    );
};

export default SectionTittle;