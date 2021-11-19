
import './App.css';
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Phonebook from './components/Phonebook/Phonebook';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';


const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem("contacts")) || []);
  const [filter, setFilter] = useState("")
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])
  
  const addContacts = (name, number) => {
    const checkContacts = contacts.some((contact)=>{
      return contact.name.trim().toLocaleLowerCase() === name.trim().toLocaleLowerCase()
    }) 
    if (!checkContacts){
      setContacts((prev) => ([...prev, {name, number, id: uuidv4()}]));
    } else {
      alert(`${name} is already in contacts`)
    }
  }
  const onChangeFilter = (e) => {
    const {value} = e.target
    setFilter(value)
  }
  
  return (
    <div>
        <h1 style={{textAlign: "center"}}>Phonebook</h1>
        <Phonebook addContacts={addContacts}/>

        <h2 style={{textAlign: "center"}}>Contacts</h2>
        <Filter 
            filter={filter}
            onChangeFilter={onChangeFilter}
        />
        <Contacts
            filter={filter} 
            contacts={contacts}
            // onDeleteContact={onDeleteContact}
        />
      </div>
  );
}

export default App;


