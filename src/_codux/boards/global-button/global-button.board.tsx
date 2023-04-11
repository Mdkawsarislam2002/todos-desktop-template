import { createBoard } from '@wixc3/react-board';
import { GlobalButton } from '../../../components/global-button/global-button';

export default createBoard({
    name: 'GlobalButton',
    Board: () => <GlobalButton />,
    environmentProps: {
        canvasHeight: 146,
    },
});
