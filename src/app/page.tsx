// page.tsx
import React from "react";
import ThreeScene from "../components/ThreeScene";
import PaymentPortal from "../components/PayPal";

function About() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p>A passionate team creating software solutions for a better tomorrow.</p>
    </section>
  );
}

function Services() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <ul className="list-disc pl-5">
        <li>Custom Software Development</li>
        <li>Web and Mobile Application Development</li>
        <li>UI/UX Design</li>
        <li>Cloud Solutions</li>
      </ul>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
      <p>Explore our projects to see the solutions we've created for our clients.</p>
      {/* Placeholder for portfolio items */}
    </section>
  );
}

function Testimonials() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <p>
        "The best software development team we've worked with. Highly recommend!" - Client
        Name
      </p>
    </section>
  );
}

function ContactForm() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
        />
        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered w-full"
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-8 py-4 border-t">
      <p className="text-center">© 2024 Holy Grail Studio. All rights reserved.</p>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container flex-1 flex flex-col p-24">
        {" "}
        {/* Adjusted here */}
        <div className="max-w-5xl font-mono mb-8">
          {" "}
          {/* Added margin-bottom */}
          <h1 className="title text-4xl font-semibold mb-4">Holy Grail Studio</h1>
          <p className="tagline text-lg mb-8">Divine Software for Divine People.</p>
        </div>
        <canvas id="bg" className="absolute top-0 left-0 w-full h-full z-[-1]"></canvas>
        <ThreeScene />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <PaymentPortal />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
