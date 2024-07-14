import React from "react";

const Loader2 = () => {
  return (
    <div className="spinnerContainer" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="spinner" style={{ width: "56px", height: "56px", display: "grid", border: "4px solid #0000", borderRadius: "50%", borderRightColor: "#299fff", animation: "tri-spinner 1s infinite linear" }}>
        <div style={{ content: "", gridArea: "1/1", margin: "2px", border: "inherit", borderRadius: "50%", animation: "tri-spinner 2s infinite" }}></div>
        <div style={{ content: "", gridArea: "1/1", margin: "2px", border: "inherit", borderRadius: "50%", animation: "tri-spinner 2s infinite" }}></div>
      </div>
      <div className="loader" style={{ color: "#4a4a4a", fontFamily: "Poppins, sans-serif", fontWeight: "500", fontSize: "25px", boxSizing: "content-box", height: "40px", padding: "10px 10px", display: "flex", borderRadius: "8px" }}>
        <p>loading</p>
        <div className="words" style={{ overflow: "hidden" }}>
          <span className="word" style={{ display: "block", height: "100%", paddingLeft: "6px", color: "#299fff", animation: "cycle-words 5s infinite" }}>posts</span>
          <span className="word" style={{ display: "block", height: "100%", paddingLeft: "6px", color: "#299fff", animation: "cycle-words 5s infinite" }}>images</span>
          <span className="word" style={{ display: "block", height: "100%", paddingLeft: "6px", color: "#299fff", animation: "cycle-words 5s infinite" }}>followers</span>
          <span className="word" style={{ display: "block", height: "100%", paddingLeft: "6px", color: "#299fff", animation: "cycle-words 5s infinite" }}>hashtags</span>
          <span className="word" style={{ display: "block", height: "100%", paddingLeft: "6px", color: "#299fff", animation: "cycle-words 5s infinite" }}>posts</span>
        </div>
      </div>
    </div>
  );
};

export default Loader2;
