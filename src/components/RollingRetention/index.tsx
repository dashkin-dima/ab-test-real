import convertToDays from 'helpers/convertToDays';
import { useUsers } from 'hooks';
import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { userType } from 'typings/user';

import styles from './RollingRetention.module.scss';

const GOOD_DAYS = 7;

type IRollingRetentionProps = { className?: string };

const RollingRetention = (props: IRollingRetentionProps) => {
  const { users } = useUsers();
  const [countGoodUsers, setCountGoodUsers] = useState<number>(0);

  useEffect(() => {
    users.forEach((user: userType) => {
      const firstTime = new Date(user.dateRegistration).getTime();
      const lastTime = new Date(user.dateLastActivity).getTime();
      const days = convertToDays(lastTime - firstTime);
      if (days > GOOD_DAYS) {
        setCountGoodUsers((prevCount) => prevCount + 1);
      }
    });
  }, []);

  const RollingRetentionPercentage: number = (countGoodUsers / users.length) * 100;
  return (
    <div className={cn(styles.rollingRetention)}>
      <span>Rolling Retention 7 day = </span>
      <span>
        {RollingRetentionPercentage.toFixed(2)}
        %
      </span>
    </div>
  );
};

export default RollingRetention;
