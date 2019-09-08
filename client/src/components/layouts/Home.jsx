import React from "react";
const { ipcRenderer } = window.require("electron");

const Home = () => {
  document.title = "Petro Asia Cheme";
  ipcRenderer.send("msg", "Hello From React");

  return (
    <React.Fragment>
      <div className="container py-5">
        <h1 className="text-center mt-6">
          Welcom to <span className="text-primary">Electron</span> and{" "}
          <span className="text-primary">React</span>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Home;
