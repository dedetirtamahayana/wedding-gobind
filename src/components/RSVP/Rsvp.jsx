import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
const Rsvp = () => {
  const [formValues, setFormValues] = useState({
    Name: "",
    Attending: "",
    Guest: "",
    Message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbwAE976Dy5HwaGrEKNs60iQV1hivFvsGyHm6MfgqU6jemwaR8anUmfZd12cbVzDg-Nz9A/exec",
        formValues
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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
          <h2 className='text-5xl text-gold custom-text'>Are You Attending?</h2>
        </div>
        <div
          className='bg-white rounded-2xl shadow-md p-6 md:p-8 lg:p-10'
          style={{ height: "100%" }}
        >
          <form className='form' onSubmit={handleSubmit}>
            <div class=''>
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
                  onChange={(e) => {
                    setFormValues({ ...formValues, Name: e.target.value });
                  }}
                  value={formValues.Name ?? ""}
                  placeholder='Enter your first name'
                  className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
                />
              </div>
            </div>

            <div className='mb-4'>
              <select
                id=''
                name='Attending'
                onChange={(e) => {
                  setFormValues({ ...formValues, Attending: e.target.value });
                }}
                value={formValues.Attending ?? ""}
                className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
              >
                <option value=''>I am attending</option>
                <option value='I am attending'>I am attending</option>
                <option value='I am not attending'>I am not attending</option>
              </select>
            </div>
            <div className='mb-4'>
              <select
                id=''
                name='Guest'
                onChange={(e) => {
                  setFormValues({ ...formValues, Guest: e.target.value });
                }}
                value={formValues.Guest ?? ""}
                className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
              >
                <option value=''>Number of guests</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
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
                onChange={(e) => {
                  setFormValues({ ...formValues, Message: e.target.value });
                }}
                value={formValues.Message ?? ""}
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
