import React, { Children } from 'react';

export default function Composition(props) {
  
  return (
    <div>
     <div>
        <h1>{props.children}</h1>
        </div>
     <h1>{props.text}</h1>
    </div>
  );
}
