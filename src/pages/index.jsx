import React from 'react';
import { history, useIntl, Helmet, KeepAlive, setLocale } from 'umi';
import { Link } from 'umi';
import styles from './index.less';
import MyHeader from '@/components/header/header.jsx';
import MyFooter from '@/components/footer/footer.jsx';
export default function index(props) {
  return (
    <>
      <MyHeader></MyHeader>
      <div>{props.children}</div>
      <MyFooter></MyFooter>
    </>
  );
}
