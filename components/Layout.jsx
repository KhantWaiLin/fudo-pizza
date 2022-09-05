import Footer from './Footer'
import React from 'react'
import Header from './Header';

const Layout = ({children}) => {
  return (
    <div>
        < Header/>
        {children}
        <Footer />
    </div>
  )
}

export default Layout