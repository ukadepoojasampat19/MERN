import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData, /*... spread opreator */
      [e.target.id]: e.target.value,
    });
  };
 
   
    const handleSubmit = async (e) => {
      e.preventDefault(); /* prevent refreshing while submitting the data */
      try {
        setLoading(true);
        const res = await fetch("localhost:3000/API/auth/signup", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), // Fix: Convert formData to JSON
        });
    
        const data = await res.json();
        
        if (data.success === false) {
          setLoading(false);
          // Handle the case when signup is unsuccessful
          setError(data.message);
          return;
        }
    
        // Handle successful signup
        setLoading(false);
        setError(null);
        navigate('/sign-in');
      } catch (error) {
        // Handle other errors (e.g., network issues)
        setLoading(false);
        setError(error.message);
      } 
    };
    
  
  console.log(formData);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button type="submit" disabled ={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? "Loading.." : "Sign-up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>have an account?</p>
        <Link to={"/Signin"}>
          <span> Sign in </span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
