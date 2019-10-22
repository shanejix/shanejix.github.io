import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Posts from "../components/Posts";

export default function PostsList() {
  return (
    <div>
      <Header></Header>
      <main
        style={{
          marginLeft:'10vw'
        }}
      >
        <Posts></Posts>
      </main>

      <Footer></Footer>
    </div>
  );
}
