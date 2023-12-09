import classNames from 'classnames';
import styles from './login-page.module.scss';
import { Navbar } from '../navbar/navbar';

export interface LoginPageProps {
    className?: string;
}

export const LoginPage = ({ className }: LoginPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href="/home" className={styles.bck}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={classNames('bi', 'bi-arrow-left-circle', styles.bck)}
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                    />
                </svg>
            </a>
            <div className={styles.LG}>
                <h2 className={styles.lg}>Login Required</h2>
                <Navbar />
                <form className={styles.form}>
                    <label htmlFor="studentId" className={styles.label}>
                        Student ID:
                    </label>
                    <input type="text" id="studentId" className={styles.Input} />

                    <label htmlFor="pin" className={styles.label}>
                        PIN:
                    </label>
                    <input type="password" id="pin" className={styles.Input} />

                    <button type="button" className={styles['login-btn']}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
