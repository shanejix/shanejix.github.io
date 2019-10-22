import React from "react";

import Posts from "../components/Posts";
import Projects from "../components/Projects";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header></Header>

      {/* main */}
      <main
        style={{
          marginLeft: '10vw'
        }}>

      {/* posts */}
      <Posts></Posts>

      {/* projects */}
      <Projects></Projects>

      {/* Contact */}
        <Contact></Contact>
        
      </main>
      
      {/* Footer */}
      <Footer></Footer>

    </div>
  );
}
