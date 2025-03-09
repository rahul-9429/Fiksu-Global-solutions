"use client";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted");
    console.log(name, email, role, message, phone);
  };

  return (
    <div
      className="px-10 sm:px-20 pt-8 flex flex-col min-h-screen justify-center items-center gap-5 relative 
      bg-[radial-gradient(at_70%_50%,#1c1124_0px,transparent_50%),radial-gradient(at_14%_95%,#3e0c6c_0px,transparent_50%),radial-gradient(at_3%_86%,#4a4a4a_0px,transparent_50%),radial-gradient(at_88%_91%,#000000_0px,transparent_50%),#1c1124]"
    >
       <div className="absolute right-[100px] top-[-180px] z-10 h-[200px] w-[400px] rotate-0 transform rounded-full bg-gradient-to-tl from-slate-800 via-[#7985FA] to-zinc-400 blur-[150px]"></div>
     <div className="fixed dotted-background h-full top-0 left-0 right-0 z-0">
     <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div></div>
      <h1 className="text-4xl text-white">We&apos;re Not Hiring at the Moment</h1>
      <p className="text-lg text-white/80 text-left sm:text-center w-[100%] sm:w-[60%]">
        Thank you for your interest in joining Fiksu Global Solutions! At this
        time, we are not actively hiring for any positions. We appreciate your
        enthusiasm and encourage you to check back later for future
        opportunities. In the meantime, feel free to join our talent community!
      </p>

      <form className="pt-10 w-[90%] sm:w-[50%]" onSubmit={handleSubmit}>
        <h1 className="text-3xl pb-5 text-white">Tell us about yourself</h1>
        <div className="flex sm:flex-row flex-col gap-8">
          <div className="flex flex-col">
            <label htmlFor="name" className="pb-3 text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="outline-none border-2 border-white/10 bg-black/40 px-4 pr-10 py-2 rounded-sm text-white"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="pb-3 text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="outline-none border-2 border-white/10 bg-black/40 px-4 pr-10 py-2 rounded-sm text-white"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-col pt-8">
          <label htmlFor="phone" className="pb-3 text-white">
            Phone number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            maxLength={10}
            className="outline-none border-2 border-white/10 bg-black/40 px-4 pr-10 py-2 rounded-sm text-white"
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col py-8">
          <label htmlFor="role" className="pb-3 text-white">
            What role are you interested in?
          </label>
          <input
            type="text"
            name="role"
            id="role"
            className="outline-none border-2 border-white/10 bg-black/40 px-4 pr-10 py-2 rounded-sm text-white"
            placeholder="Enter your area of interest"
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="pb-3 text-white">
            Let us know more about you
          </label>
          <textarea
            name="message"
            id="message"
            className="outline-none border-2 border-white/10 bg-black/40 px-4 pr-10 py-2 rounded-sm text-white"
            placeholder="Tell us about yourself..."
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-gradient-to-tr from-[#7D71F9] to-[#72C6FB] mt-4 text-lg font-bold rounded-sm sm:mb-0 mb-10 text-white"
        >
          Submit
        </button>
        <p className="text-sm text-white/60 pt-10 text-justify">
          **Filling out our interest form does not guarantee a job or interview
          with us. It simply allows us to keep your information on file for
          future openings. If a suitable role becomes available, our team may
          reach out to you.
        </p>
      </form>
    </div>
  );
};

export default Page;
