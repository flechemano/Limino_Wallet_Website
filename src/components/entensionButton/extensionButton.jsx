import React, { useEffect, useState } from 'react';
import styles from './extensionButton.less';
import { InfoCircleFilled } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import useWinSize from '@/hook/WinSize';
export default function extensionButton() {
  const [visible, setVisible] = useState(false);
  const windowSize = useWinSize();
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
      <div
        className={styles.Button}
        onClick={() => {
          showModal();
        }}
      >
        <span className={styles.buttonText}>Get Browser Extension</span>
        <span className={styles.buttonUnderline}></span>
      </div>
      <Modal
        footer={null}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={500}
      >
        <div
          className={styles.walletConnectBox}
          style={{
            textAlign: 'center',
            padding: '20px',
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
        >
          <InfoCircleFilled
            style={{
              fontSize: '80px',
              color: '#F7BF03',
            }}
          />
          <div
            className={styles.walletConnectTitle}
            style={{
              fontWeight: 'bold',
              fontSize: '16px',
              lineHeight: '32px',
              marginTop: '20px',
            }}
          >
            Oh Sorry
          </div>
          <div
            className={styles.walletConnectTitle}
            style={{
              fontSize: '16px',
              lineHeight: '32px',
              color: '#A2A2A2',
            }}
          >
            This browser isn't supported today
          </div>
          <Button
            type="primary"
            style={{
              width: '200px',
              height: '44px',
              marginTop: '30px',
            }}
            onClick={() => {
              setVisible(false);
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
}
