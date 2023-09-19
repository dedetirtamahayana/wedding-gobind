import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Rsvp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    option1: "",
    option2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang di-submit, misalnya mengirimnya ke server
    console.log(formData);
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 500,
    });
  }, []);

  return (
    <div className='bg-biru'>
      <div
        className='container mx-auto py-9 lg:py-36 w-72 lg:w-5/12'
        data-aos='zoom-in-up'
      >
        <div className='text-center pb-8'>
          <h2 className='text-5xl text-gold'>Are You Attending?</h2>
        </div>
        <div
          className='bg-white rounded-2xl shadow-md p-6 md:p-8 lg:p-10'
          style={{ height: "100%" }}
        >
          <form onSubmit={handleSubmit}>
            <div class='grid grid-cols-2 gap-4'>
              <div className='mb-4'>
                <label
                  htmlFor='firstName'
                  className='block text-black font-bold mb-2'
                >
                  First Name
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder='Enter your first name'
                  className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='lastName'
                  className='block text-black font-bold mb-2'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder='Enter your last name'
                  className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
                />
              </div>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='option1'
                className='block text-black font-bold mb-2'
              >
                Select Option 1
              </label>
              <select
                id='option1'
                name='option1'
                value={formData.option1}
                onChange={handleChange}
                className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
              >
                <option value=''>Select an option</option>
                <option value='Option 1A'>Option 1A</option>
                <option value='Option 1B'>Option 1B</option>
                <option value='Option 1C'>Option 1C</option>
              </select>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='option2'
                className='block text-black font-bold mb-2'
              >
                Select Option 2
              </label>
              <select
                id='option2'
                name='option2'
                value={formData.option2}
                onChange={handleChange}
                className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
              >
                <option value=''>Select an option</option>
                <option value='Option 2A'>Option 2A</option>
                <option value='Option 2B'>Option 2B</option>
                <option value='Option 2C'>Option 2C</option>
              </select>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='message'
                className='block text-black font-bold mb-2 '
              >
                Enter Your Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Type your message here'
                rows='4'
                className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
              ></textarea>
            </div>
            <div className='flex justify-center items-center'>
              <button
                type='submit'
                className='bg-biru text-gold py-3 px-6 hover:bg-indigo-600 transition duration-200 rounded-xl'
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
