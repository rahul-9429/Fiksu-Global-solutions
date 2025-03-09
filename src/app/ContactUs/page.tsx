"use client";
import { Mail, MapPinned, PhoneCall } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div
      className="p-10 sm:px-28 pt-20 flex flex-col sm:flex-row"
      style={{
        zIndex: "-10",
        backgroundImage: 'url("/Ellipse36.svg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top -50px left -150px",
      }}
    >
      <div className="fixed dotted-background h-full top-0 left-0 right-0 z-0">
      <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div></div>
      <div className="w-[100%] sm:w-[60%]">
        <h1 className="text-4xl">Need help? Get in touch with us</h1>
        <p className="text-white/50">
          We would love to hear from you! Write us what you think!
        </p>
        <form className="pt-10 text-lg" onSubmit={handleSubmit}>
          <div className="flex sm:flex-row flex-col gap-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="pb-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="outline-none border-2 bg-black/40 border-white/10 px-4 pr-10 py-2 rounded-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="pb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="outline-none border-2 border-white/10 bg-black/40 px-4 pr-10 py-2 rounded-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex flex-col py-8">
            <label htmlFor="service" className="pb-3">
              What kind of service are you looking for?
            </label>
            <input
              type="text"
              name="service"
              id="service"
              className="outline-none border-2 border-white/10 bg-black/40 px-4 pr-10 py-2 rounded-sm"
              placeholder="Enter your queries"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="pb-3">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="outline-none border-2 border-white/10 bg-black/40 px-4 pr-10 py-2 rounded-sm"
              placeholder="Type in your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-tr from-[#7D71F9] to-[#72C6FB] mt-4 text-lg font-bold rounded-sm sm:mb-0 mb-10"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="sm:pl-20 flex justify-center gap-8 flex-col">
        <span className="flex items-center gap-4">
          <PhoneCall />
          <span className="flex flex-col">
            <h2 className="text-2xl">+91 1234567891</h2>
            <p className="text-lg text-white/60">Bangalore office</p>
          </span>
        </span>

        <span className="flex items-center gap-4">
          <Mail />
          <span className="flex flex-col">
            <h2 className="text-2xl">
              <a href="mailto:hey@fiksuglobalsolutions.com">
                hey@fiksuglobalsolutions.com
              </a>
            </h2>
            <p className="text-lg text-white/60">Bangalore office</p>
          </span>
        </span>

        <span className="flex items-center gap-4">
          <MapPinned />
          <span className="flex flex-col">
            <h2 className="text-2xl">
              F-208, B Block, Royalmist Apartment
            </h2>
            <p className="text-lg text-white/60">Bangalore IN 560099</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Page;
