
import { useEffect, useState } from 'react';
import Contact from './Contact';
import './Container.css';
import InputFields from './InputFields';
import Navigation from './Navigation';

import { Route, Routes, json } from "react-router-dom";
import ViewItem from './ViewItem';
import UpdateFields from './UpdateFields';

const Container = () => {
    const [data , setaData] = useState([]);
    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [number , setNumber] = useState();
    const [address , setAddress] = useState();
    const [i , setI] = useState(null);
    

    useEffect(() => {
      setaData(localStorage.getItem('contact') ? JSON.parse(localStorage.getItem('contact')):data);
    },[])
    // const numberPattern = new RegExp(/^[0-9\b]+$/);
    // const emailPattern = new RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/);
    // const namePattern = new RegExp(/^[a-zA-Z]{2,40}([a-zA-Z]{2,40})+$/)

   
  const saveButtonListener = (contactName,contactNumber,contactEmail,contactAddress) => {
     
       if(!contactName == '' && !contactNumber == ''){
       
       
        setaData((item) => {
          const newItem = [
            ...item,{
              name:contactName,
              number:contactNumber,
              email:contactEmail,
              address:contactAddress
            }
          ]
          localStorage.setItem('contact',JSON.stringify(newItem));
          return newItem;

        }); 
       
        
      }
      
     
        console.log(contactName,contactNumber , data);
       
  }

  const deleteButtonListener = (index) => {
    const dt = data.filter((item) => {
     
      return index !== data.indexOf(item);
    });
    setaData(dt);
    localStorage.setItem('contact',JSON.stringify(dt));
  }

  const [contactName , setContactName] = useState('');
  const [contactNumber , setContactNumber] = useState('');
  const [contactEmail , setContactEmail] = useState('');
  const [contactAddress , setContactAddress] = useState('');

  const viewButtonListener = (index) => {
    const storedData = JSON.parse(localStorage.getItem('contact'));
    
    setContactName(storedData[index].name);
    setContactNumber(storedData[index].number);
    setContactEmail(storedData[index].email);
    setContactAddress(storedData[index].address);
    
  };

  const editButtonListener = (index) => {
    const storedData = JSON.parse(localStorage.getItem('contact'));
     
      setName(storedData[index].name);
      setNumber(storedData[index].number);
      setEmail(storedData[index].email);
      setAddress(storedData[index].address);
     
      setI(index);


  }
 
  

  const updateButtonListener = ( updateName ,updateNumber, updateEmail, updateAddress, index) => {
    const storedData = JSON.parse(localStorage.getItem('contact'));
      
     const dt = [...storedData];
    
      dt[index].name = updateName;
      dt[index].number = updateNumber;
      dt[index].email = updateEmail;
      dt[index].address= updateAddress;
      setaData(dt);
      localStorage.setItem('contact',JSON.stringify(dt));
  }
  

    return(
     <div className='container'>
     <header>
     <Navigation/>
     </header>
     <hr/>
   <div className='content'>
   <Routes>
    <Route path="/inputFields" element={<InputFields saveButtonListener ={saveButtonListener} editName={name} editNumber={number} editEmail={email} editAddress={address}/> }></Route>
    <Route path="/" element={<Contact dataContact={data} deleteButtonListener ={deleteButtonListener} viewButtonListener={viewButtonListener} editButtonListener={editButtonListener}/>}></Route>
    <Route path="/viewItem" element={<ViewItem name={contactName} number={contactNumber} email={contactEmail} address={contactAddress} editButtonListener={editButtonListener}/>}></Route>
    <Route path="/updateFields" element={<UpdateFields toUpdateName={name} toUpdateNumber={number} toUpdateEmail={email} toUpdateAddress={address} toUpdateIndex={i} updateButtonListener={updateButtonListener}/>}></Route>
   </Routes>
   </div>
   <p className='copyright'>Copyright © 2024 Vishal Patil All Rights Reserved.</p>
     </div>
    );
};

export default Container;