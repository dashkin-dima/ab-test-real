import React, { useState } from 'react';
import cn from 'classnames';

import { useUsers } from 'hooks';

import styles from './TableUser.module.scss';

const TableUser = () => {
  const { users } = useUsers();

  return (
    <div className={styles.tabs}>
      <div className={styles.header}>
        <div className={cn(styles.headerItem, styles.rowItem)}>UserID</div>
        <div className={cn(styles.headerItem, styles.rowItem)}>Date Registration</div>
        <div className={cn(styles.headerItem, styles.rowItem)}>Date Last Activity</div>
      </div>
      <hr />
      <div className={styles.content}>
        {users.map((user, index) => (
          <div key={user.id} className={styles.row}>
            <div key={user.id} className={styles.rowContent}>
              <div className={styles.rowItem}>{index + 1}</div>
              <div className={styles.rowItem}>{user.dateRegistration}</div>
              <div className={styles.rowItem}>{user.dateLastActivity}</div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableUser;
