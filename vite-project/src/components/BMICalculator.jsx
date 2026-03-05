import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    // Validation check for empty or invalid fields
    if (!height || !weight || !gender) {
      toast.error("Please fill in all fields with valid information.");
      return;
    }

    // Convert height to meters and calculate BMI
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Validation for valid numeric input (positive values for height and weight)
    if (isNaN(bmiValue) || bmiValue <= 0) {
      toast.error("Please enter valid numbers for height and weight.");
      return;
    }

    setBmi(bmiValue);

    // Display appropriate toast messages based on BMI
    if (bmiValue < 18.5) {
      toast.warning('You are underweight. Consider seeking advice from a healthcare provider.');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.info('You have a normal weight. Keep maintaining a healthy lifestyle.');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning('You are overweight. Consider seeking advice from a healthcare provider.');
    } else {
      toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist.");
    }
  };

  return (
    <section className="flex justify-center items-center space-x-4 mt-20">
      <div className="bg-green-900 p-8 rounded-2xl shadow-xl w-full max-w-6xl">
        <h1 className="text-4xl font-semibold mb-20 text-white">BMI CALCULATOR</h1>

        <form onSubmit={calculateBMI}>
          <div className="text-white text-lg">
            <label>Height (cm) : </label>
            <input
              type="number"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
              required
              className="ml-2 p-2 rounded text-black"
            />
          </div>
          <div className="text-white mt-4 text-lg">
            <label>Weight (kg) : </label>
            <input
              type="number"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
              required
              className="ml-2 p-2 rounded text-black"
            />
          </div>
          <div className="mt-4 ml-10">
            <label className="text-lg text-white">Gender : </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="ml-2 p-2 rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="ml-32 mt-8 bg-black text-white p-3 rounded-2xl"
          >
            Calculate BMI
          </button>
        </form>

        {/* Display BMI Value */}
        {bmi && (
          <div className="mt-6 text-center text-lg font-medium text-white">
            <p>Your BMI: <strong>{bmi}</strong></p>
          </div>
        )}
      </div>

      {/* ToastContainer to render toasts */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
    </section>
  );
};

export default BMICalculator;