import { createBoard } from '@wixc3/react-board';
import { MissingGradeForm } from '../../../components/missing-grade-form/missing-grade-form';
import MissingGradeForm_module from '../../../components/missing-grade-form/missing-grade-form.module.scss';

export default createBoard({
    name: 'MissingGradeForm',
    Board: () => <MissingGradeForm className={MissingGradeForm_module.MGF} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 712,
        canvasWidth: 960,
        windowHeight: 454,
        canvasHeight: 459
    }
});
