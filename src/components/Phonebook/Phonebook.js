import React, { useState} from 'react';
import PhonebookInput from './PhoneBookInput/PhonebookInput';
import { useDispatch } from "react-redux";
import {addItemsActionCreator} from '../../redux/contacts/contactsActions'

const Phonebook = () => {
    const [contact, setContact] = useState({
        name: '',
        number: ''
    });
    const dispatch = useDispatch()
    const onChangeInpuntName = (e) => {
        const {name, value} = e.target
        setContact((prev)=>({...prev, [name]: value}))
    }
    const onSubmitContacts = (e) => {
        e.preventDefault();
        dispatch(addItemsActionCreator(contact))
        setContact({name: "", number: ""}) 
    }
    
    const {name, number} = contact
    return (
        <PhonebookInput 
            name={name} 
            number={number} 
            onChangeInpuntName={onChangeInpuntName} 
            onSubmitContacts={onSubmitContacts}/>
    );
}

export default Phonebook;

