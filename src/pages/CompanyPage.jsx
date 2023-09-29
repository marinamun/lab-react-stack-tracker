import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams();
  console.log({ companySlug });

  const filteredCompanies = props.send.filter(
    (company) => company.slug === companySlug
  );

  return (
    <div>
      <h1>Company Profile</h1>
      {filteredCompanies.map((company) => (
        <div key={company.id}>
          <h2>{company.name}</h2>
          <img src={company.logo} style={{ width: "80px" }} />
          <p>{company.website}</p>
          <h4>{company.description}</h4>
          <ul>
            {company.techStack.map((technology) => (
              <li key={technology.slug}>
                <h3>{technology.name}</h3>
                <img src={technology.image} style={{ width: "50px" }} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CompanyPage;
