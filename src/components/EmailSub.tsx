"use client";
import React, { useState } from "react";

const EmailSub = () => {
  const [email, setEmail] = useState("");
  const [subState, setSubState] = useState(false);

  const handleEmail = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = event.currentTarget;  
    formData.append("Email", email);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxt2c40zJUrTfj4m-77FZdAV8I0l7XQxUi5hb-gwK-LABSpXUqx8EIbt6ETCIz4UhIx/exec", 
        {
          method: "POST",
          body: formData,
        }
      );

      setSubState(true);
      setEmail("");  
      form.reset();  

      const contentType = response.headers.get("Content-Type");
      let result;

      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        result = await response.text();
      }

      console.log("Success:", result);
       
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="px-5 sm:px-20 flex justify-center items-center gap-5 min-h-[50vh]">
      <div className="flex justify-center items-center gap-5 flex-col">
        <h1 className="text-center text-3xl sm:text-4xl">
          Stay Updated on the Latest in Automotive
          <span className="hidden sm:contents">
            <br />
          </span>{" "}
          Infotainment!
        </h1>
        <p className="text-center">
          Subscribe to our newsletter and get exclusive insights on the latest innovations in AI-powered infotainment, smart connectivity, and in-car entertainment.
        </p>

        <form onSubmit={handleEmail} className="flex justify-between items-center gap-5 border-2 border-[#7985FA]/60 rounded-full w-[100%] sm:w-[60%]">
          <input
            type="email"
            placeholder="you@domain.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="tracking-wider bg-black text-xl placeholder:flex placeholder:items-center placeholder:justify-center w-[100%] border-0 outline-none ml-3"
          />
          <button
            type="submit"
            className="bg-white/60 hover:bg-white transition-all duration-100 text-black font-bold text-l tracking-wide rounded-3xl m-1 px-6 py-2"
          >
            Subscribe
          </button>
        </form>

        {subState && <p className="text-green-500">Subscription successful!</p>}
      </div>
    </div>
  );
};

export default EmailSub;
