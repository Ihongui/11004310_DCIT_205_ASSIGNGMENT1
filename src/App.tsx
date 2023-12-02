import { useState } from 'react';
import styles from './App.module.scss';
import { LandingPage1 } from './components/landing-page-1/landing-page-1';
import { Navbar } from './components/navbar/navbar';


function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Navbar className={styles.NAVBAR} />
            <LandingPage1 className={styles.landingPg} />
        </div>
    );
}

export default App;
