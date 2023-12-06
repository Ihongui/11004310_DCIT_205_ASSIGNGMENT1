import { useState } from 'react';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { LandingPage1 } from './components/landing-page-1/landing-page-1';
import { Navbar } from './components/navbar/navbar';
import { SideBar } from './components/side-bar/side-bar';
import { Footer } from './components/footer/footer';


function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Navbar className={styles.NAVBAR} />
            <SideBar />
            <div>
                <LandingPage1 className={styles.landingPg} />
            </div>
            <div className={styles.overview}>
                <h2 className={styles.h2}>Overview</h2>
                <h3 className={styles.h3}>Welcome to the Missing Grade Reporting System, your one-stop solution to track and report missing grades. This system empowers students to take control of their academic profiles, ensuring that no grades slip through the cracks.</h3></div>
            <Footer /></div>
    );
}

export default App;
