import React from "react";

export const About = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
  };

  const textStyle = {
    flex: 1,
    marginRight: "20px",
  };

  const imageStyle = {
    flex: 1,
  };

  return (
    <div style={containerStyle}>
   
      <div style={imageStyle}>
        <img src="../assets/images/gnomecode.png" alt="Gnomecoding" style={{ width: "100%", borderRadius: "8px" }} />
      </div>
      <div style={textStyle}>
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna at nisi volutpat fermentum. Phasellus ut condimentum orci. Aenean ac magna in felis dapibus tempus.</p>
      </div>
    </div>
  );
};
