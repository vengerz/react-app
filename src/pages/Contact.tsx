import React from 'react'
import { ContactComponent} from '../components/ContactComponent'
import TitleComponent from '../components/TitleComponent';

function ContactPage() {
    const title1  = "Contact Page";
  return (
    <>
    <TitleComponent data ={title1}/>
    <ContactComponent/>
    </>
  )
}

export default ContactPage