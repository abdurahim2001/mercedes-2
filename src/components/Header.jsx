import React from 'react'
import Video from '../components/Video.jsx';
import Nacsh from '../components/Nacsh.jsx';
import Uslugi from '../components/Uslugi.jsx';
import Havyi from '../components/Havyi.jsx'
import Footer from '../components/Footer';

const Header = () => {
  return (
    <div>
             <Video/>
      <Nacsh/>
 
    <Uslugi/>
      <Havyi/>
      <Footer/>
    </div>
  )
}

export default Header