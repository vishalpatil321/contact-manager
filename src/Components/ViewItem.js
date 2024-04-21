
import { NavLink } from 'react-router-dom';
import './ViewItem.css';


const ViewItem = (props) => {    
    return(
      <div className='view-item'>
         <div className='buttons'>
          <NavLink to='/' className='back-navlink'><button className='back-button'><h4><i class="fa-solid fa-circle-arrow-left"></i></h4></button></NavLink>  
          
          
         </div>
                <h1><i className="fa-solid fa-user"></i></h1>
                
                <h3>{props.name}</h3>
                <p>Phone Number</p> <b>{props.number}</b>
                <hr/>
                <p>Email Id | {props.email}</p>
                <hr/>
                <p>Address | {props.address}</p>
                
      </div>
    );
};

export default ViewItem;