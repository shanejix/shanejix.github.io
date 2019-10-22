import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

export default function Article() {
  return (
    <div>
      <Header></Header>
      <main
        style={{
          marginLeft: "10vw"
        }}
      >
        加班建设中......
      </main>

      <Footer></Footer>
    </div>
  );
}
