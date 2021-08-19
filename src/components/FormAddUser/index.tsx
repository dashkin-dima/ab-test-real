import React, { useState } from 'react';
import cn from 'classnames';

import { useUsers } from 'hooks';
import { regularExpressions } from 'helpers';

import styles from './FormAddUser.module.scss';

type IFormAddUser = {
  className?: string
};

const FormAddUser = (props: IFormAddUser) => {
  const { className = '' } = props;

  const [dateRegistration, setDateRegistration] = useState<string>('');
  const [dateLastActivity, setDateLastActivity] = useState<string>('');
  const [error, setError] = useState<string | undefined>();
  const { addUsers } = useUsers();

  const handleDateRegistration = (event: { target: { value: string } }) => {
    setDateRegistration(event.target.value);
    setError(undefined);
  };

  const handleDateLastActivity = (event: { target: { value: string } }) => {
    setDateLastActivity(event.target.value);
    setError(undefined);
  };

  const AddUsers = () => {
    if (!regularExpressions.date.test(dateRegistration) ||
    !regularExpressions.date.test(dateLastActivity)
    ) {
      setError('invalid date');
      return;
    }
    const firstTime = new Date(dateRegistration).getTime();
    const lastTime = new Date(dateLastActivity).getTime();
    if (firstTime - lastTime > 0) {
      setError('date registration should be less date last activity');
      return;
    }
    addUsers({ dateRegistration, dateLastActivity });
    setDateRegistration('');
    setDateLastActivity('');
  };
  return (
    <div className={cn(styles.form, className)}>
      <div className={styles.itemForm}>
        <span className={styles.text}>Date Registration: </span>
        <input
          type="date"
          value={dateRegistration}
          onChange={handleDateRegistration}
        />
      </div>
      <div className={styles.itemForm}>
        <span className={styles.text}>Date Last Activity: </span>
        <input
          type="date"
          value={dateLastActivity}
          onChange={handleDateLastActivity}
        />
      </div>
      <button className={styles.button} type="button" onClick={AddUsers}>submit</button>
      {error && (<div className={styles.error}>{error}</div>)}
    </div>
  );
};

export default FormAddUser;
