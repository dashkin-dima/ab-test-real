import React, { useState, useEffect, useContext } from 'react';
import {
  TableUser, HistogramUsers, FormAddUser, RollingRetention,
} from 'components';
import cn from 'classnames';

import Tabs from 'components/Tabs';
import useUsers from 'hooks/useUsers';

import styles from './Home.module.scss';

enum TABS {
  tableUsers = 'table users',
  rollingRetention = 'Rolling Retention 7 day',
}

function Home() {
  const tabs: Array<string> = [...Object.values(TABS)];

  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const { fetchUsers, error } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCalculate = () => {
    setActiveTab(TABS.rollingRetention);
  };

  if (error) {
    return (<div className={cn(styles.content, styles.error)}>{error}</div>);
  }

  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={styles.content}>
        {activeTab === TABS.tableUsers && (
        <>
          <TableUser />
          <FormAddUser className={styles.formAddUser} />
          <button type="button" onClick={handleCalculate}>Calculate</button>
        </>
        )}
        { activeTab === TABS.rollingRetention && (
          <>
            <HistogramUsers />
            <RollingRetention />
          </>
        )}

      </div>
    </>

  );
}

export default Home;
