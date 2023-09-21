import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const Rsvp = () => {
  const [attending, setAttending] = useState("");
  const [numberOfGuestsDisabled, setNumberOfGuestsDisabled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 500,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwAE976Dy5HwaGrEKNs60iQV1hivFvsGyHm6MfgqU6jemwaR8anUmfZd12cbVzDg-Nz9A/exec",
        {
          method: "POST",
          body: formDatab,
        }
      );
      if (!res.ok) {
        throw new Error("Respons jaringan tidak berhasil");
      }

      // Tampilkan pesan sukses ke pengguna
      Swal.fire({
        title: "Sukses!",
        text: "Pesan Anda berhasil dikirim.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Kesalahan saat mengirim permintaan:", error);
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan saat mengirim pesan Anda.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleAttendingChange = (e) => {
    const selectedValue = e.target.value;
    setAttending(selectedValue);
    if (selectedValue === "I am not attending") {
      setNumberOfGuestsDisabled(true);
    } else {
      setNumberOfGuestsDisabled(false);
    }
  };

  return (
    <div className='bg-gallery'>
      <div
        className='container mx-auto py-9 lg:py-36 w-72 lg:w-5/12'
        data-aos='zoom-in-up'
      >
        <div className='text-center pb-8'>
          <h2 className='text-5xl text-black custom-text'>
            Are You Attending?
          </h2>
        </div>
        <div
          className='bg-white rounded-2xl shadow-md p-6 md:p-8 lg:p-10'
          style={{ height: "100%" }}
        >
          <form className='form'>
            <div>
              <div className='mb-4'>
                <input
                  type='text'
                  id='firstName'
                  name='Name'
                  placeholder='Enter your name'
                  className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
                />
              </div>
            </div>

            <div className='mb-4'>
              <select
                id='attending'
                name='Attending'
                className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
                onChange={handleAttendingChange}
              >
                <option value=''>Are you attending?</option>
                <option value='I am attending'>I am attending</option>
                <option value='I am not attending'>I am not attending</option>
              </select>
            </div>

            <div className='mb-4'>
              <select
                id='numberOfGuests'
                name='Number'
                className={`w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500 ${
                  numberOfGuestsDisabled ? "bg-gray-300" : ""
                }`}
                disabled={numberOfGuestsDisabled}
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
              <textarea
                id='message'
                name='Message'
                placeholder='Type your message here'
                rows='4'
                className='w-full p-3 border border-biru  focus:outline-none focus:border-indigo-500'
              ></textarea>
            </div>
            <div className='flex justify-center items-center'>
              <button
                type='submit'
                className='bg-black text-white py-3 px-6 hover:animate-pulse transition duration-200 rounded-xl'
                onClick={handleSubmit}
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
