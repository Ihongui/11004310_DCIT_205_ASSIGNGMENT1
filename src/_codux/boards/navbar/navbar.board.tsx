import { createBoard } from '@wixc3/react-board';
import { Navbar } from '../../../components/navbar/navbar';

export default createBoard({
    name: 'Navbar',
    Board: () => <Navbar />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 746,
        windowHeight: 395,
        canvasWidth: 870,
        canvasHeight: 447
    }
});
