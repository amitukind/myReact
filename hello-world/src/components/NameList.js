import React from "react";
import Person from "./Person";

const NameList = () => {
  const persons = [
    { id: 1, name: "Amit", age: 29, skill: "WebGL" },
    { id: 2, name: "Verma", age: 29, skill: "Unity" },
    { id: 3, name: "Pooja", age: 25, skill: "Maya" },
  ];
  // Key is a special prop to uniquely identify it cannot be accessed directly will give undefined
  const personList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  return personList;
};

export default NameList;
