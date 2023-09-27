import React, { useEffect, useState } from 'react';
import styles from './downloadblock.less';
import { InfoCircleFilled } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import QRCode from 'qrcode.react';
export default function downloadblock() {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.float} id="downloadblockButton"></div>
        <div className={styles.L1}>
          <span>Get</span>
          <img src={require('@/assets/header/logo.png')}></img>
          <span className={styles.logoText}>LIMINO</span>
          <span>Wallet</span>
        </div>
        <div className={styles.ButtonBox}>
          <div className={styles.Button}>
            <img src={require('../../assets/footer/google.png')}></img>
            <div className={styles.ButtonText}>
              <div className={styles.textTop}>Download on the</div>
              <div className={styles.textBottom}>Google Play</div>
            </div>
          </div>
          <div className={styles.Button}>
            <img src={require('../../assets/footer/apple.png')}></img>
            <div className={styles.ButtonText}>
              <div className={styles.textTop}>Download on the</div>
              <div className={styles.textBottom}>iOS & Mac OS</div>
            </div>
          </div>
          <div className={styles.Button}>
            <img src={require('../../assets/footer/android.png')}></img>
            <div className={styles.ButtonText}>
              <div className={styles.textTop}>Download on the</div>
              <div className={styles.textBottom}>APK Store</div>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <span>Get app link via</span>&nbsp;
          <span
            className={styles.link}
            onClick={() => {
              showModal();
            }}
          >
            QR code
          </span>
        </div>
        <Modal
          footer={null}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={600}
          getContainer={false}
        >
          <div
            style={{
              paddingLeft: '30px',
              fontWeight: 'bold',
              fontSize: '36px',
            }}
          >
            QR code
          </div>
          <div
            className={styles.walletConnectBox}
            style={{
              textAlign: 'center',
              padding: '20px',
              paddingLeft: '10px',
              paddingRight: '10px',
            }}
          >
            <div
              className={styles.walletConnectTitle}
              style={{
                fontWeight: 'bold',
                fontSize: '24px',
                lineHeight: '32px',
              }}
            >
              Download our Mobile App<br></br>to Create your
              <span
                style={{
                  color: '#037CD6',
                  paddingLeft: '5px',
                }}
              >
                Limino Wallet
              </span>
            </div>
            <div
              className={styles.walletConnectTitle}
              style={{
                fontSize: '16px',
                lineHeight: '32px',
                color: '#A2A2A2',
                marginTop: '20px',
              }}
            >
              Scan QR code to start exploring<br></br>all of web3 in one place
            </div>
            <div
              className={styles.QRcode}
              style={{
                margin: '20px auto',
                border: '20px solid black',
                width: '440px',
                height: '440px',
                padding: '20px',
              }}
            >
              <QRCode
                value={'please waiting for uploading'}
                size={360}
                fgColor="#000000"
              />
            </div>
            <div
              className={styles.walletConnectTitle}
              style={{
                fontSize: '16px',
                lineHeight: '32px',
                color: '#A2A2A2',
                marginTop: '20px',
              }}
            >
              The{' '}
              <span
                style={{
                  color: '#037CD6',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                }}
              >
                Limino App
              </span>{' '}
              is available on both iOS and Android
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
