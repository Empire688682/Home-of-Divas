import React from 'react'
import styles from './contact.module.css'
import ContactHero from '@/Component/ContactHero/ContactHero'
import ContactForm from '@/Component/ContactForm/ContactForm'
const page = () => {
  return (
    <div>
      <ContactHero/>
      <ContactForm/>
    </div>
  )
}

export default page
