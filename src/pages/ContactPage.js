import React from 'react'
import ContactItem from '../components/ContactItem'
import phone from '../images/phone.svg'
import email from '../images/emailme.svg'
import location from '../images/location.svg'
import Title from '../components/Title'
import Meta from '../components/Meta'

const ContactPage = () => {
    return (
      <>
        <Meta title={'Contact Me'}/>
        <div>
          <Title title={`Contact`} span={`Contact`} />
        </div>
        <div className='contact-page'>
          <div className='map-sect'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9124378160295!2d90.38221931447454!3d23.7505016946905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8baaa2cf199%3A0x4d117c67a941dcf4!2sNorth%20Dhanmondi%20Road%2C%20Kalabagan%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1626607360779!5m2!1sen!2sbd'
              width='600'
              title='My Location'
              height='450'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
          <div className='contact-sect'>
            <ContactItem icon={phone} text={'+8801754861010'} title={'Phone'} />
            <ContactItem
              icon={email}
              text={'tahasin181962@gmail.com'}
              title={'Email'}
            />
            <ContactItem
              icon={location}
              text={'Dhanmondi, Dhaka'}
              title={'Address'}
            />
          </div>
        </div>
      </>
    )
}

export default ContactPage
