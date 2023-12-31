
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  /*const [formData, setFormData] = useState({});
 const [error, setError] = useState({});
 const [loading, setLoading] = useState(false);
 */
 /* const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    //it prevent the page from getting refresh. 
   //s const res = await fetch{"https://localhost:3000/API/auth/signup",formData};
    
    try{
      setLoading(true);
     const res = await fetch("/API/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if(!res.ok){
      const errorData = await res.json();
      setError(errorData.message || "Server error");
      setLoading(false);
      return ;
    }
    const data = await res.json();
    //console.log(data.message); 
    if(data)
    {
      console.log("User created sucessfully", data);   
    }
    else
    {
      setError("Invalid repsonse from server");
      setLoading(false);
      //setError(null);
    }
    //to check the any error while signup (ie error handling and the loading )
    //if (data.success === false) {
    // setError(data.message);
    // setLoading(false);
    // return ;
  // }
   // setLoading(false);


   // }catch(error){
    //  setLoading(false);
    //  setError(error.message);
   // }
        //--
   /// console.log(data);
  }catch(error){
    setError("Network error");
    setLoading(false);
  }finally {
    setLoading(false);
  }
 
};*/
  return (
    <>
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 ">Sign Up</h1>
    
    <form  className="flex flex-col gap-4">
        <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username" />
        <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email" />
        <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password" />
        <button  className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
        
        </button>

    </form>
      <div className="flex gap-2 mt-5">
        <p className="text-lg">Have an account?</p>
        <Link to={"/sign-in"} >
          <span className="text-blue-700 text-lg">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 text-lg">{error} </p> }
      </div>
      </>
  )
  }