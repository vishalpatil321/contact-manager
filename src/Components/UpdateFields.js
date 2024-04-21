import { NavLink } from 'react-router-dom';
import './UpdateFields.css'
import { useRef } from 'react';
const UpdateFields = (props) => {
     
     const textarea1 = useRef();
     const textarea2 = useRef();
     const textarea3 = useRef();
     const textarea4 = useRef();
   
    return(
       <form className='update-fields' onSubmit={(e) => {
         e.preventDefault();
         

       }}>

        {/* <NavLink to="/" className="button" ><button>back</button></NavLink> */}
        <h1><i className="fa-solid fa-user"></i></h1>
        <textarea ref={textarea1}>{props.toUpdateName}</textarea>
         <textarea ref={textarea2}>{props.toUpdateNumber}</textarea>
         <textarea ref={textarea3}>{props.toUpdateEmail}</textarea>
        <textarea ref={textarea4}>{props.toUpdateAddress}</textarea>
        {/* <button onClick={() => {
          props.updateButtonListener(textarea1.current.value ,textarea2.current.value,textarea3.current.value,textarea4.current.value, props.toUpdateIndex)
        }}>UPDATE</button> */}
        <NavLink to="/" className="button" onClick={() => {
           props.updateButtonListener(textarea1.current.value ,textarea2.current.value,textarea3.current.value,textarea4.current.value, props.toUpdateIndex)
        }}><button>Update and back</button></NavLink>
       </form>
    );
};

export default UpdateFields;