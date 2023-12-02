import { createBoard } from '@wixc3/react-board';
import { InstructorContact } from '../../../components/instructor-contact/instructor-contact';

export default createBoard({
    name: 'InstructorContact',
    Board: () => <InstructorContact />,
    isSnippet: true,
});
