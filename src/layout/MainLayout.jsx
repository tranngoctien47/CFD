import React, { children } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Login from '../components/Login'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Login />
        </>
    )
}
