import React from "react";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      
        {props.send.map((oneCompany) => (
          <div>
            <h4>{oneCompany.name}</h4>
            <img src={oneCompany.logo} />
          </div>
        ))}
      
    </div>
  );
}

export default HomePage;
