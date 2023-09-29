import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
        {props.send.map((oneCompany) => (
          <li key={oneCompany.id}>
            <Link to={`/company/${oneCompany.slug}`}>
              {oneCompany.name}
              {<br />}
              {<img src={oneCompany.logo} style={{ width: "100px" }} />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
