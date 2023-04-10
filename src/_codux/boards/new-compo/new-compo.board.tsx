import { createBoard } from '@wixc3/react-board';
import { NewCompo } from '../../../components/new-compo/new-compo';

export default createBoard({
    name: 'NewCompo',
    Board: () => <NewCompo />
});
