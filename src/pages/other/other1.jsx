import React from 'react';
import { history, useIntl, Helmet, KeepAlive, setLocale } from 'umi';
import { Link } from 'umi';
import styles from './other2.less';
export default function other1() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.info}>
        <img src={require('../../assets/other/icon1.png')}></img>
        <div className={styles.title}>Can't open start page</div>
        <div className={styles.text}>
          Something went wrong. Try again later or<br></br>contact us&nbsp;
          <span>support@wormholes.com</span>
        </div>
        <div
          className={styles.button}
          onClick={() => {
            history.push('/');
          }}
        >
          Reload
        </div>
      </div>
    </div>
  );
}
