import React from "react";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <p>
        {props.send.map((oneCompany) => (
          <h4 id={oneCompany.id}>{oneCompany.name}</h4>
        ))}
      </p>
    </div>
  );
}

export default HomePage;
