import React from 'react';
import { Home } from 'pages';
import { UsersProvider } from 'context/Users';
import styles from './App.module.scss';

const App = () => (
  <UsersProvider>
    <div className={styles.wrapper}><Home /></div>
  </UsersProvider>
);

export default App;
