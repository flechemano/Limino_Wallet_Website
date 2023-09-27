import React from 'react';
import { history, useIntl, Helmet, KeepAlive, setLocale } from 'umi';
import { Link } from 'umi';
import styles from './other2.less';
export default function other2() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.info}>
        <img src={require('../../assets/other/icon1.png')}></img>
        <div className={styles.title}>This page is lost</div>
        <div className={styles.text}>
          We’ve explored deep and wide，<br></br>but we can’t find the page you
          were looking for
        </div>
        <div
          className={styles.button}
          onClick={() => {
            history.push('/');
          }}
        >
          Go Home
        </div>
      </div>
    </div>
  );
}
