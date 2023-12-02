import classNames from 'classnames';
import styles from './grade-report.module.scss';

export interface GradeReportProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const GradeReport = ({ className }: GradeReportProps) => {
    return <div className={classNames(styles.root, className)}>GradeReport</div>;
};
