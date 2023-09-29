import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Languages = () => {
  const [languages, setLanguage] = useState([
    {
      id: 1,
      value: "Javascript",
      xp: 1.5,
    },
    {
      id: 2,
      value: "HTML-CSS",
      xp: 2,
    },
    {
      id: 3,
      value: "Node Js",
      xp: 1.2,
    },
  ]);

  const [framework, setFramework] = useState([
    {
      id: 1,
      value: "Boostrap",
      xp: 1.4,
    },
    {
      id: 2,
      value: "React",
      xp: 1.5,
    },
    {
      id: 3,
      value: "SASS",
      xp: 2,
    },
  ]);

  return (
    <div className="languagesFrameworks">
      <ProgressBar
        data={languages}
        className="displayLanguages"
        title="languages"
      />

      <ProgressBar
        data={framework}
        title="framework"
        className="displayFramework"
      />
    </div>
  );
};

export default Languages;
