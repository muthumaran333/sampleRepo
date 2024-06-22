import React from "react";
export default function Props(props) {
  return (
    <>
      <div>


        
        <h1 className="">This is a props</h1>
        <p>Name of the person is : {props.name}</p>
        <p>Age of the person is : {props.age}</p>
        <h1 > This muthumaran  </h1>
          <span className="text-red-500"> Name : {props.Name}</span>
          <img src={props.image} alt="" />
          
      </div>
    </>
  );
}
