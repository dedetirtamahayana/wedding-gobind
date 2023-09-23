import React from "react";

const Footer = () => {
  return (
    <div className='pb-12 lg:pb-36' id='footer'>
      <div className='container p-5 lg:p-0 mx-auto '>
        <img
          className='h-72 w-72 lg:h-96 lg:w-96 rounded-full object-cover object-center mx-auto'
          src='../bulet.png'
          alt='nature image'
        />
        <h1 className='text-5xl text-center text-black custom-text'>
          We Are Expecting You
        </h1>
      </div>
    </div>
  );
};

export default Footer;
