import classNames from 'classnames';
import styles from './dashboard.module.scss';
import { Navbar } from '../navbar/navbar';


const grades = [
    { course: 'Math', grade: 'A' },
    { course: 'Science', grade: 'B' },
    // Add more sample data as needed
];

const missingGrades = [
    { course: 'History' },
    // Add more missing grades as needed
];


export interface DashboardProps {
    className?: string;
}

export const Dashboard = ({ className }: DashboardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div />
            <h2>Dashboard - Current Grades</h2>
            <div className="grades">
                <h3>Your Grades:</h3>
                <ul>
                    {grades.map((item, index) => (
                        <li key={index}>
                            {item.course}: {item.grade}
                        </li>
                    ))}
                </ul>
            </div>
            {missingGrades.length > 0 && (
                <div className="alerts">
                    <h3>Alerts - Missing Grades:</h3>
                    <ul>
                        {missingGrades.map((item, index) => (
                            <li key={index}>Missing grade for {item.course}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
