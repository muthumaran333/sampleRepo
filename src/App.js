import React from 'react';
import './App.css';
import Props from './Components/Props';
import Connect from './Components/Connect';
import images from './images.jpg';
import downloads from './images/download.jpg';
import Composition from './Components/Composition';
import Component from './Components/newComponent';
function App() {

  const ObejctExample = {
    Name:{
      id:1,
      name:"Muthumaran",
      image:downloads
      },
    age:{
      id:2,
      age:"20",
      images:images
    }
  }
  return (
    <>
    <div>
    <Component/>  
</div>
    <Props name="Abhishek" age="20" img={images} msg="this is from the props component"/>
    <Props name="Abhishek" age="20" />
    <Connect title="this message from the connect and muthumaran" 
      img={images}/>

      <Props Name={ObejctExample.Name.name}  images1 = {ObejctExample.Name.image}/>

      <Composition text="muthu">
  <h1>hello muthumaran</h1>
</Composition>

  
      

    </>
  );
}

export default App;
