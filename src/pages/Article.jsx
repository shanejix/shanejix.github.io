import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Detail from "../components/Detail/Detail";

export default function Article() {
  return (
    <div>
      <Header></Header>
      <main
        style={{
          marginLeft: "10vw"
          // marginTop: "-15vh"
        }}
      >
        <Detail></Detail>
      </main>

      <Footer></Footer>
    </div>
  );
}
