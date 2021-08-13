import React, { useState } from 'react';

import { Tab } from 'components';
import { createUniqId } from 'helpers';

import styles from './Tabs.module.scss';

type ITabsProps = { tabs: Array<string>, activeTab: string, setActiveTab: (tab: string) => void };

const Tabs = (props: ITabsProps) => {
  const { tabs, activeTab, setActiveTab } = props;
  const handleTab = (title: string): void => {
    setActiveTab(title);
  };
  return (
    <div className={styles.tabs}>
      {tabs.map(
        (tab) => (
          <Tab
            title={tab}
            onClick={() => handleTab(tab)}
            key={createUniqId()}
            disabled={tab !== activeTab}
          />
        ),
      )}
    </div>
  );
};

export default Tabs;
