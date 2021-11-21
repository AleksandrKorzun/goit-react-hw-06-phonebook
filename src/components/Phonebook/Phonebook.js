import React, { useState} from 'react';
import PhonebookInput from './PhoneBookInput/PhonebookInput';
import { useDispatch, useSelector } from "react-redux";
import {addItemsActionCreator} from '../../redux/contacts/contactsActions'

const Phonebook = () => {
    const [contact, setContact] = useState({
        name: '',
        number: ''
    });
    const items = useSelector(state=> state.contacts.items)
    const dispatch = useDispatch()
    const onChangeInpuntName = (e) => {
        const {name, value} = e.target
        setContact((prev)=>({...prev, [name]: value}))
    }
    const onSubmitContacts = (e) => {
        e.preventDefault();
        const checkContacts = items.some((contact)=>{
            return contact.name.trim().toLocaleLowerCase() === name.trim().toLocaleLowerCase()
        }) 
        if (!checkContacts){
            dispatch(addItemsActionCreator(contact))
            setContact({name: "", number: ""}) 
        } else {
            alert(`${name} is already in contacts`)
        } 
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

