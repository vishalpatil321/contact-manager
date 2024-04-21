import { NavLink } from 'react-router-dom';
import './Item.css';
const Item = (props) => {
    return(
      <div className='item'>
        {/* <h3>{props.index + 1}</h3> */}
         <div className='item-logo'>
         <h3>{props.index+1}</h3>
         {/* <h3><i className="fa-solid fa-user"></i></h3> */}
        </div>
        <div className='item-details'>
           <h5>{props.name}</h5>
           <p>{props.number}</p>
        </div>
        <div className='item-button'>
            <NavLink to='/viewItem'><button className='button' onClick={() => props.viewButtonListener(props.index)}><i class="fa-solid fa-eye"></i></button></NavLink>
            
            <NavLink to='/updateFields'><button className='button' onClick={() => {
            props.editButtonListener(props.index);
          }}><i class="fa-solid fa-pen-to-square"></i></button></NavLink>
            <button className='button' onClick={() => {
              props.deleteButtonListener(props.index);
            }}><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    );
};

export default Item;