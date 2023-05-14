import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import Loading from "./Loading/Loading";
import { Layout } from "./Layout";import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>  
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loading />}
      {error && <b>error.message</b>}
      <ContactList />    
    </Layout>
  );
};