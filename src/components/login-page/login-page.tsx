import classNames from 'classnames';
import styles from './login-page.module.scss';
import { Navbar } from '../navbar/navbar';




export interface LoginPageProps {
    className?: string;
}


export const LoginPage = ({ className }: LoginPageProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.LG}>
            <h2 className={styles.lg}>Login Required</h2>
            <Navbar />
            <form className={styles.form}>
                <label htmlFor="studentId" className={styles.label}>Student ID:</label>
                <input
                    type="text"
                    id="studentId"
                    className={styles.Input}

                />

                <label htmlFor="pin" className={styles.label}>PIN:</label>
                <input
                    type="password"
                    id="pin"
                    className={styles.Input}

                />

                <button type="button" className={styles['login-btn']} >
                    Login
                </button>

            </form>
        </div></div>;
};
