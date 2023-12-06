import classNames from 'classnames';
import styles from './navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className, styles.NAVBAR)}>
            <img src="/src/Images/uog-coa-2017.svg-96x115.png" alt="" className={styles.img1} />
            <div className={styles.icon}>
                <h1 className={styles.logo}>University of Ghana</h1>
            </div></div>
    );
};
