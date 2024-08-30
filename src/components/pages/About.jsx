import React from "react";


export const About = () => {
  const aboutContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  };

  const aboutText = {
    flex: 1,
    marginRight: "20px",
  };

  const aboutImage = {
    flex: 1,
  };

  return (
    <div style={aboutContainer}>

      <div style={aboutImage}>
        <img src="../assets/images/gnomecode.png" alt="Gnomecoding" style={{ width: "100%" }} />
      </div>
      <div style={aboutText}>
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna at nisi volutpat fermentum. Phasellus ut condimentum orci. Aenean ac magna in felis dapibus tempus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna at nisi volutpat fermentum. Phasellus ut condimentum orci. Aenean ac magna in felis dapibus tempus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna at nisi volutpat fermentum. Phasellus ut condimentum orci. Aenean ac magna in felis dapibus tempus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna at nisi volutpat fermentum. Phasellus ut condimentum orci. Aenean ac magna in felis dapibus tempus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna at nisi volutpat fermentum. Phasellus ut condimentum orci. Aenean ac magna in felis dapibus tempus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna at nisi volutpat fermentum. Phasellus ut condimentum orci. Aenean ac magna in felis dapibus tempus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna at nisi volutpat fermentum. Phasellus ut condimentum orci. Aenean ac magna in felis dapibus tempus.

        </p>
      </div>
    </div>
  );
};
