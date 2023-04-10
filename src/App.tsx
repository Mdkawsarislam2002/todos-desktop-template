import { useState } from 'react';
import styles from './App.module.scss';
import { NewCompo } from './components/new-compo/new-compo';

function App() {


    return (
        <div className={styles.App}>
            <NewCompo />
        </div>
    );
}

export default App;
