import React from 'react';

import Mybutton from './Mybutton';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

const persons= [
  {name:"sara", image:image1, description:"this a great person"},
  {name:"John", image:image2, description:"this a cool person"},
  {name:"Aria", image:image1, description:"this a awesome person"}
]

export default class App extends React.Component
{
    state= 
    {
       indicator:1



    }
render ()
{
return(
    <>
    {persons.map((element, index)=> <Mybutton 
    onsimpleclick={()=>this.setState({indicator:index})}

     label={element.name} 
    />)}
 
<h1>{persons[this.state.indicator].name}</h1>
<img src={persons[this.state.indicator].image}/>
<p>{persons[this.state.indicator].description}</p>
 </>




)
}}
 