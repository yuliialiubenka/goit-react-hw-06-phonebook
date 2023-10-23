import { useStyles } from "./contactListStyles";
import ContactIcon from "../../data/contact-icon.svg";
import DeleteIcon from "../../data/delete-icon.svg";
import { getRandomHexColor } from './getRandomHexColor';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { removeContact } from 'redux/contacts';

export const ContactList = () => {
    const classes = useStyles();
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(removeContact());

    return (
        <ul className={classes.contactList}>
            {contacts.map(contact => (
                <li key={nanoid()} className={classes.contactListItem}>
                    <img
                        className={classes.contactImg}
                        src={ContactIcon} 
                        alt="Phone" 
                        width={36}
                        style={{ backgroundColor: getRandomHexColor() }}
                    />
                    <a className={classes.contactLink} href={`tel:${contact.number}`}>
                        <p>{contact.name}</p>
                        <p>{contact.number}</p>
                    </a>
                    <button
                        className={classes.contactListButton}
                        type="button"
                        name="delete"
                        onClick={handleDelete}
                    >
                        <img
                            className={classes.contactImg}
                            src={DeleteIcon} 
                            alt="Phone" 
                            width={24}
                        />
                    </button>
                </li>
            ))}
        </ul>

    );
};