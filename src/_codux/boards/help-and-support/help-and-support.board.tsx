import { createBoard } from '@wixc3/react-board';
import { HelpAndSupport } from '../../../components/help-and-support/help-and-support';

export default createBoard({
    name: 'HelpAndSupport',
    Board: () => <HelpAndSupport />,
    isSnippet: true,
});
