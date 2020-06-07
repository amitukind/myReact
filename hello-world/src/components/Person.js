import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      <h2>
        I am {person.name}, {person.age} Years old. I know {person.skill}
      </h2>
    </div>
  );
};

export default Person;
