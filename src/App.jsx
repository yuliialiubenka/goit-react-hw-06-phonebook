import { getContacts, getVisibleContacts } from 'redux/selectors';
import { useStyles } from "./AppStyles";
import { useSelector } from 'react-redux';
import { Wrapper } from './components/wrapper/wrapper';
import { ContactForm } from './components/contactForm/contactForm';
import { ContactList } from './components/contactList/contactList';
import ContactFilter from './components/contactFilter/contactFilter';
import { EmptyBlock } from './components/emptyBlock/emptyBlock';
import data from './data/data';

export const App = () => {
  const classes = useStyles();
  const contacts = useSelector(getContacts);
  const visibleContacts = useSelector(getVisibleContacts);

  let filterContent;
  let contactsList;

  if (contacts.length > 0 ) {
    filterContent = <ContactFilter 
                      title={data.filterTitle}
                    />
  } else if (contacts.length === 0) {
    filterContent = <EmptyBlock
                      emptyText1={data.emptyText1}
                      emptyText2={data.emptyText2}
                    />
  }

  if (contacts.length > 0 && visibleContacts.length !== 0) {
    contactsList = <ContactList/>
  } else if (contacts.length > 0 && visibleContacts.length === 0) {
    contactsList = <div className={classes.noContacts}>{data.noContacts}</div>
  }
  return (
    <>
      <Wrapper
        title={data.title}
      >
        <ContactForm btnText={data.btnText}/>
          {filterContent}
          {contactsList}
      </Wrapper>
    </>
  )
}