import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";
import Modal from "../component/modal";
import { Context } from "../store/appContext";
import { func } from "prop-types";
class ModalData {
    constructor(show, onClose, id) {
      this.show = show;
      this.onClose = onClose;
      this.id = id;
    }
  }
export const Home = () => {
    const { store, actions } = useContext(Context);
    const [show, setShow] = useState(false);
    const [id, setId] = useState("");
    const [inputValues, setInputValues] = useState({
        nameInput: '',
        emailInput: '',
        phoneInput: '',
        addressInput: ''
    });
    
    const modal = new ModalData(show, ()=> {setShow(false)},id);
    useEffect(() => {
        actions.getContacts()     //important from class vs appcontext use effect
    }, [])
    const getValues = () => {
        const values = Object.values(inputValues);
        console.log(values);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const contactItems = store.contacts.map((item, index) => (
        <ContactCard 
            key={index} 
            name={item.name} 
            address={item.address} 
            phone={item.phone} 
            email={item.email} 
            id={item.id} 
            onDelete={() => {
                setShow(true); 
                setId(item.id)
            }}
        />
    ))
    console.log(store.contacts)
    return (
        <div className="text-center mt-5">
            <ul>
                <li>
                    {contactItems}
                </li>
            </ul>
            {/* <ContactCard onDelete={() => setShow(true)} /> */}

            <Modal modalData={modal}/>
        </div>
    );
}


