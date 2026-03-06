import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contect = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make sure the URL is correct
      const { data } = await axios.post(
        'https://gym-full-stack-project-xfp2.vercel.app',  // Backend URL
        { name, email, message },
        {
          withCredentials: true, // Ensure cookies are sent if needed
          headers: { 'Content-Type': 'application/json' },
        }
      );

      setName('');
      setEmail('');
      setMessage('');

      toast.success(data.message); // Show success toast
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error details:', error);
      // Enhanced error handling based on response
      if (error.response) {
        toast.error(error.response.data.message || 'Something went wrong');
      } else {
        toast.error('Network error: Could not reach the server');
      }
    }
  };

  return (
    <section
      className="justify-center items-center flex text-center mt-10 text-white"
      style={{
        width: '100%',
        height: '50vh',
        backgroundImage: "url('image36.webp')", // Background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50px',
      }}
    >
      <form onSubmit={sendMail}>
        <h1 className="text-3xl ml-14">CONTACT US</h1>
        <div className="mt-10">
          <label>Name: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="text-black"
          />
        </div>

        <div className="mt-4">
          <label>Email: </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="text-black"
          />
        </div>

        <div className="mt-4 mr-6">
          <label>Message: </label>
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            className="text-black"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-8 bg-cyan-500 p-3 rounded-xl ml-10"
        >
          {loading && <ClipLoader size={20} color="white" />}
          Send Message
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
    </section>
  );
};

export default Contect;