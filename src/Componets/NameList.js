import React from "react";

function NameList() {
  const name = ["Davis", "Luris", "Moris", "Luris"];
  const result = name.map((names , index) => <h2 key={index}> {index} {names} </h2>);
  return <div> {result} </div>;
}

export default NameList;
