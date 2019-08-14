import React from 'react';
import { statement } from '@babel/template';
import Mybutton from './Mybutton';

export default class Link extends React.Component
{
    state= 
    {
        Title:"",
        src:Myimage ,
        info:""



    }
render ()
{
return(
    <>
<Mybutton onsimpleclick={()=>{this.setState({Title:"sarra",src:Myimage1,info:""})}} /> 
<Mybutton onsimpleclick={()=>{this.setState({Title:"sarra",src:Myimage2,info:""})}} /> 
<Mybutton onsimpleclick={()=>{this.setState({Title:"sarra",src:Myimage3,info:""})}} /> 
 
 </>
)
}}
 
