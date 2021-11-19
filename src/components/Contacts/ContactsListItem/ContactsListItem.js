import style from '../Contacts.module.css'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemActionCreator } from '../../../redux/contacts/contactsActions';

const ContactsListItem = () => {

    
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts)
    const filter = useSelector(state => state.contacts.filter)
    const onDeleteContact = (e) => {
        const{id} = e.target
        dispatch(deleteItemActionCreator(id))
        
    }
    return (
       filter ? 
       contacts.items.map(({name, number, id}) => {
        if (name.toLocaleLowerCase().includes(filter.trim().toLocaleLowerCase())) {
           return <li className={style.formListItem} key={id}>
                        <p className={style.text}>{name}: {number}</p>
                        <button className={style.btn} type="button" onClick={onDeleteContact} id={id}>Delete</button>
                    </li> 
        }
       }
   ) :
        contacts.items.map(({name, number, id})=>(
                <li className={style.formListItem} key={id}>
                    <p className={style.text}>{name}: {number}</p>
                    <button type="button" className={style.btn} onClick={onDeleteContact} id={id}>Delete</button>
                </li>
            

        )
        )
    );
}

export default ContactsListItem;

ContactsListItem.propTypes = {
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.array,
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string
}