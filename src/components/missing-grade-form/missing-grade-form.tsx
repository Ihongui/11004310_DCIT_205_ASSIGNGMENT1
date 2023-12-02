import classNames from 'classnames';
import styles from './missing-grade-form.module.scss';
import { Navbar } from '../navbar/navbar';



const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

};




export interface MissingGradeFormProps {
    className?: string;
}


export const MissingGradeForm = ({ className }: MissingGradeFormProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navbar />
        <h2>Report Missing Grade</h2>
        <form >
            <div className="form-group">
                <label htmlFor="courseName" className={styles.label}>Course Name</label>
                <input
                    type="text"
                    id="courseName"
                    name="courseName"
                    onChange={handleInputChange}
                    required
                    className={styles.Input}
                />
            </div>
            <div className="form-group">
                <label htmlFor="instructorName">Instructor Name</label>
                <input
                    type="text"
                    id="instructorName"
                    name="instructorName"
                    onChange={handleInputChange}
                    required
                    className={styles.Input}
                />
            </div>
            <div className="form-group">
                <label htmlFor="expectedGrade">Expected Grade</label>
                <input
                    type="text"
                    id="expectedGrade"
                    name="expectedGrade"

                    onChange={handleInputChange}
                    required
                    className={styles.Input}
                />
            </div>
            <div className="form-group">
                <label htmlFor="explanation">Explanation</label>
                <textarea
                    id="explanation"
                    name="explanation"

                    onChange={handleInputChange}
                    required
                    className={styles.Input}
                />
            </div>
            <button type="submit">Submit</button>
        </form></div>;
};
