import React, { useState } from "react";
// Here we are importing a CSS file as a dependency




function Resume() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    time: "",
    comment: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send email with form data
    console.log("Form Data: ", formData);
  };

  return (


<div >
            <h1><span className='bg-blue-700'>Make a Request</span></h1>
    <div className="bg-blue-700 border-8 border-gray-500 rounded-md mt-10 m-auto sm:w-2/6 w-1/2">
    <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
      <div>
        <label className="font-sans text-white text-lg mt-5 text-center block" htmlFor="name">Name:</label>
        <br></br>
        <input className=""
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="font-sans text-white text-lg text-center block" htmlFor="phone">Phone Number:</label>
        <br></br>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="font-sans text-white text-lg text-center block" htmlFor="email">Email:</label>
        <br></br>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="font-sans text-white text-lg text-center block" htmlFor="address">Address:</label>
        <br></br>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="font-sans text-white text-lg text-center block" htmlFor="time">Time Request:</label>
        <br></br>
        <input
          type="text"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="text-base text-white text-center block mt-4" htmlFor="comments">Special Comments:</label>
        <br></br>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </div>

      
      <h1  className='m-5 animate-pulse'><span className='bg-black'><button type="submit">Submit</button></span></h1>
    </form>
    </div>
           
        </div>
  )}



  export default Resume;