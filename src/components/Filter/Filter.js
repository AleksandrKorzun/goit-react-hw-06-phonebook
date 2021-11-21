import style from './Filter.module.css'
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterActionCreator } from '../../redux/contacts/contactsActions';


const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state=>state.contacts.filter)
    const onChangeFilter = (e) => {
        const {value} = e.target
        dispatch(setFilterActionCreator(value))
      }
    return (
        <label className={style.formLabel}>
                Find contacts by name
                <input
                className={style.formInput}
                    type="text"
                    name="filter"
                    onChange={onChangeFilter}
                    value={filter}
                />
            </label>
    );
}

export default Filter;

// Filter.propTypes = {
//     filter: PropTypes.string.isRequired,
// }