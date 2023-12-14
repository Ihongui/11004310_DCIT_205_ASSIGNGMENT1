import classNames from 'classnames';
import styles from './instructor-contact.module.scss';
import { SideBar } from '../side-bar/side-bar';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
import Footer_module from '../footer/footer.module.scss';

export interface InstructorContactProps {
    className?: string;
    id: number;
    name: string;
    email: string;
    contact: string;

}



const instructors: InstructorContactProps[] = [
    { id: 1, name: 'Dwumfour Abdullai Abdul-Aziz', email: 'adwumfour@ug.edu.gh', contact: '0260541219 ' },
    { id: 2, name: 'Mark Atta Mensah', email: 'mamensah@ug.edu.gh', contact: '0208603871' },
    { id: 3, name: 'Richard Junior Bonnie', email: 'rabonnie@ug.edu.gh', contact: '0244454628' },

];


export const InstructorContact = ({ className }: InstructorContactProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navbar />
        <SideBar />
        <div className={styles.IC}>
            <h1>Instructor Contact Page</h1></div>
        <div className={styles.contacts}>
            <ul className={classNames('instructor-list', styles['instructor-list'])}>
                {instructors.map((instructor) => (
                    <li key={instructor.id}>
                        <div className="instructor-info">
                            <h3 className={styles.h3}>{instructor.name}</h3>
                            <p className={styles.info}>Email: {instructor.email}</p>
                            <p className={styles.info}>Contact: {instructor.contact}</p>
                        </div>
                        <button>Send Email</button>
                    </li>
                ))}</ul>
        </div>
        <Footer />
    </div>;
};
