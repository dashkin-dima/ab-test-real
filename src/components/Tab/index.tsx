import React from 'react';

import cn from 'classnames';

import styles from './Tab.module.scss';

type ITabProps = {
  title: string,
  onClick: () => void,
  disabled: boolean
};

const Tab = (props: ITabProps) => {
  const { title, onClick, disabled } = props;

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.tab, {
          [styles.tabDisabpled]: disabled,
        })}
        onClick={onClick}
      >
        {title}
      </div>
    </div>
  );
};

export default Tab;
