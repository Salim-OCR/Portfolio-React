import React from "react";

const ProgressBar = ({ className, data, title }) => {
  console.log(data);

  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className="years">
        <span>Années d'expérience</span>
        <span> 1 an</span>
        <span> 2 ans</span>
      </div>
      <ul>
        {data.map((item) => {
          let xYears = 2;
          let progressBar = (item.xp / xYears) * 100 + "%";

          return (
            <li key={item.id}>
              <p>{item.value}</p>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProgressBar;
