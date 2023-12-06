import classNames from 'classnames';
import styles from './instructor-contact.module.scss';
import { SideBar } from '../side-bar/side-bar';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

export interface InstructorContactProps {
    className?: string;
    id: number;
    name: string;
    email: string;

}



const instructors: InstructorContactProps[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },

];


export const InstructorContact = ({ className }: InstructorContactProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navbar />
        <SideBar />
        <div className={styles.IC}>
            <h1>Instructor Contact Page</h1>
            <ul className={classNames('instructor-list', styles['instructor-list'])}>
                {instructors.map((instructor) => (
                    <li key={instructor.id}>
                        <div className="instructor-info">
                            <h3 className={styles.h3}>{instructor.name}</h3>
                            <p>Email: {instructor.email}</p>
                        </div>
                        <button>Send Email</button>
                    </li>
                ))}</ul>
        </div>
        <Footer />
    </div>;
};
