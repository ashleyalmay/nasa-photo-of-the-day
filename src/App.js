import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/body";
import Footer from "./Components/footer";


function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
