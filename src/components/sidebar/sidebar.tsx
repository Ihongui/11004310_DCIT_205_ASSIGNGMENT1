import classNames from 'classnames';
import styles from './navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ul>
                <li>
                    <a href="/page1">Page 1</a>
                </li>
                <li>
                    <a href="/page2">Page 2</a>
                </li>
                <li>
                    <a href="/page3">Page 3</a>
                </li>
                <li>
                    <a href="/page4">Page 4</a>
                </li>
                <li>
                    <a href="/page5">Page 5</a>
                </li>
                <li>
                    <a href="/page6">Page 6</a>
                </li>
                <li>
                    <a href="/page7">Page 7</a>
                </li>
            </ul>
        </div>
    );
};
