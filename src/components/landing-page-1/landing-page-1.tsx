import classNames from 'classnames';
import styles from './landing-page-1.module.scss';

export interface LandingPage1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const LandingPage1 = ({ className }: LandingPage1Props) => {
    return <div className={classNames(styles.root, className)}>
        <div>
            <h2 className={styles.Heading}>Welcome<h2 className={styles.Heading}>To</h2>
            </h2>
            <h3 className={styles.subHeading}>The Missing Grade System</h3></div>
        <p>Your grades are asured</p>
        <button className={styles.button}>Get Started</button>
    </div>;
};
