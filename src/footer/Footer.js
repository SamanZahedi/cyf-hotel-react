import React from "react";

function Footer({ data }) {
  return (
    <div className="bg-dark">
      <ul className="ml-5 text-light list-unstyled">
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;