import classNames from 'classnames';
import styles from './missing-grade-form-1.module.scss';
import { Navbar } from '../navbar/navbar';
import { SideBar } from '../side-bar/side-bar';
import { Footer } from '../footer/footer';

export interface MissingGradeForm1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MissingGradeForm1 = ({ className }: MissingGradeForm1Props) => {
    return <div className={classNames(styles.root, className)}>
        <Navbar />
        <SideBar />
        <div className={styles.MGF}>
            <h2 className={styles.h2}>Report Missing Grades </h2>
            <form className={styles.form}><label className={styles.label}>Course name:</label><input type="text" className={styles.input} />
                <label className={styles.label}>Instructor name:</label>
                <input type="text" className={styles.input} />
                <label className={styles.label}>Expected grade:</label>
                <input type="text" className={styles.input} />
                <label className={styles.label}>Explanation:</label>
                <textarea className={styles.input} />
                <button className={styles.btn}>Button</button>
            </form>
        </div>
        <Footer />
    </div>;
};
