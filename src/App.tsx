import { useState } from 'react';
import styles from './App.module.scss';
import { GlobalButton } from './components/global-button/global-button';

function App() {
    return (
        <div className={styles.App}>
            <GlobalButton />
        </div>
    );
}

export default App;
