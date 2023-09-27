import React from 'react';
import styles from './support.less';
import { ArrowRightOutlined } from '@ant-design/icons';
export default function support() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageTop}>
        <div className={styles.underFont}>F A Q</div>
        <div className={styles.top}>
          <span>F</span>requently&nbsp;<span>A</span>sked&nbsp;<span>Q</span>
          ueuestions
        </div>
        <div className={styles.bottom}>Answers to commonly asked questions</div>
      </div>
      <div className={styles.faqBox}>
        <div className={styles.container}>
          <div className={styles.title}>Getting started</div>
          <div
            className={styles.item}
            onClick={() => {
              window.open(
                'https://www.wormholes.com/docs/wallet/wallet.html#receive-and-payment',
                '_blank',
              );
            }}
          >
            <div className={styles.itemLeft}>Limino Wallet</div>
            <div className={styles.button}>
              <ArrowRightOutlined />
            </div>
          </div>
          <div
            className={styles.item}
            onClick={() => {
              window.open(
                'https://www.wormholes.com/docs/wallet/wallet.html#',
                '_blank',
              );
            }}
          >
            <div className={styles.itemLeft}>Create an Account</div>
            <div className={styles.button}>
              <ArrowRightOutlined />
            </div>
          </div>
          <div
            className={styles.item}
            onClick={() => {
              window.open(
                'https://www.wormholes.com/docs/wallet/wallet.html#one-click-nft-marketplace',
                '_blank',
              );
            }}
          >
            <div className={styles.itemLeft}>One-Click NFT Market</div>
            <div className={styles.button}>
              <ArrowRightOutlined />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemLeft}>Becom a Validator</div>
            <div className={styles.button}>
              <ArrowRightOutlined />
            </div>
          </div>
          <div className={styles.title}>Manage my digital assets</div>
          <div
            className={styles.item}
            onClick={() => {
              window.open(
                'https://www.wormholes.com/docs/wallet/wallet.html#receive-and-payment',
                '_blank',
              );
            }}
          >
            <div className={styles.itemLeft}>Receive and Payment</div>
            <div className={styles.button}>
              <ArrowRightOutlined />
            </div>
          </div>
          <div
            className={styles.item}
            onClick={() => {
              window.open(
                'https://www.wormholes.com/docs/wallet/wallet.html#erb',
                '_blank',
              );
            }}
          >
            <div className={styles.itemLeft}>ERB</div>
            <div className={styles.button}>
              <ArrowRightOutlined />
            </div>
          </div>
          <div
            className={styles.item}
            onClick={() => {
              window.open(
                'https://www.wormholes.com/docs/wallet/wallet.html#switch-network',
                '_blank',
              );
            }}
          >
            <div className={styles.itemLeft}>Switch Network</div>
            <div className={styles.button}>
              <ArrowRightOutlined />
            </div>
          </div>
          <div
            className={styles.item}
            onClick={() => {
              window.open(
                'https://www.wormholes.com/docs/wallet/wallet.html#add-tokens',
                '_blank',
              );
            }}
          >
            <div className={styles.itemLeft}>Add Tokens</div>
            <div className={styles.button}>
              <ArrowRightOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
