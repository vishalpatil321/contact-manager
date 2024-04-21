import { useRef, useState } from 'react';
import './InputFields.css';
import { NavLink } from 'react-router-dom';
const InputFields = (props) => {
   
   const [name , setName] = useState();
   const [email , setEmail] = useState();
   const [number , setNumber] = useState();
   const [address , setAddress] = useState();
    
   return(
      
      <form className='input-fields' onSubmit={(e) => {
         e.preventDefault();
            // props.saveButtonListener(name,number,email,address);
          }
      }>
         {/* <NavLink to="/" className="button" ><button >back</button></NavLink> */}
        <p>Please input atleast name and number</p>
       <input type="text" placeholder='Enter Name' value={name} onChange={(e) => {
         setName(e.target.value)
       
         }}></input>
      
       
       <input type="text" placeholder='Eneter Phone Number' value={number} onChange={(e) => setNumber(e.target.value)}></input>
      
       
       <input type="text" placeholder='Enter Email Id' value={email} onChange={(e) => setEmail(e.target.value)}></input>
      
      
       <input type="text" placeholder='Enter Address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
       {/* <p>{props.error}</p> */}
       
      {/* <button className='save-button'>Save</button> */}
       
      <NavLink to='/' className="button" onClick={() => {
           props.saveButtonListener(name,number,email,address);
      }}><button>save or back</button></NavLink> 
      </form>
   
   );
};

export default InputFields;