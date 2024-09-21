import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Para íconos de redes sociales

export default function App() {
  return (
    <>
      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998', }}>
        <MDBIcon fab icon={<FontAwesomeIcon icon={faInstagram} />} size='lg' />
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
        <MDBIcon fab icon='twitter' size='lg' />
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
        <MDBIcon fab icon='google' size='lg' />
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
        <MDBIcon fab icon='instagram' size='lg' />
      </MDBBtn>
    </>
  );
}