import '../../../index.css';
import { createBoard } from '@wixc3/react-board';
import { Dashboard } from '../../../components/dashboard/dashboard';

export default createBoard({
    name: 'Dashboard',
    Board: () => <Dashboard className="Dashboard" />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 850,
        windowHeight: 436,
        canvasWidth: 838
    }
});
