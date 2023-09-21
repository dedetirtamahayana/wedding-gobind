import React from "react";

const Backdrop = ({ onClick }) => {
  return (
    <div
      className='fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage: `url('/3.jpg')`, // Ganti dengan path gambar yang benar
      }}
    >
      <div className='bg-black bg-opacity-50 absolute inset-0'></div>
      <div className=' text-white z-10 text-center mb-4'>
        <h1 className='text-7xl custom-text mb-4'>Amara & Sarizki</h1>
        <p>Undangan Pawiwahan & Mepandes</p>
        <p>Kepada Yth. Bapak/Ibu/Saudara/i</p>
      </div>

      <button
        className='bg-white text-black hover:bg-black hover:text-white hover:animate-pulse px-4 py-2 rounded-md relative z-10 '
        onClick={onClick}
      >
        Buka Undangan
      </button>
    </div>
  );
};

export default Backdrop;
