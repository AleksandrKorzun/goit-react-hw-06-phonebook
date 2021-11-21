import ContactsListItem from "./ContactsListItem/ContactsListItem";
import style from './Contacts.module.css'

const Contacts = () => {
    
    return (
        <>
            <ul className={style.contactsList}>
                <ContactsListItem />
            </ul>
        </>
    );
}

export default Contacts;