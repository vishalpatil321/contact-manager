import Item from "./Item";
import './Contact.css'
const Contact = (props) => {
    const data = props.dataContact;
    console.log(data);
    return(
     <div className="contact">
        {data.map((item , i) => <Item index={i} name={item.name} number={item.number} email={item.email} address={item.address} deleteButtonListener={props.deleteButtonListener} viewButtonListener={props.viewButtonListener}
        updateButtonListener={props.updateButtonListener} editButtonListener={props.editButtonListener}
        />)}
     </div>
    );
};

export default Contact;