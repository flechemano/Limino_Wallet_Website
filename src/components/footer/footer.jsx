import React, { useState } from 'react';
import styles from './footer.less';
import {
  DownOutlined,
  UpOutlined,
  VerticalAlignBottomOutlined,
} from '@ant-design/icons';
import { Select } from 'antd';
import { history } from 'umi';
import useWinSize from '@/hook/WinSize';
const { Option } = Select;
export default function footer() {
  const windowSize = useWinSize();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      {windowSize.width > 768 ? (
        <>
          <div className={styles.footerContainer}>
            <div className={styles.footerBox}>
              <div className={styles.footerTop}>
                <div className={styles.footerTopLeft}>
                  <img src={require('../../assets/footer/logoWhite.png')}></img>
                  <span>LIMINO</span>
                </div>
                <div className={styles.footerTopRight}>
                  <div className={styles.footerTopRightItem}>
                    <div className={styles.footerTopRightItemTitle}>
                      Features
                    </div>
                    <span
                      className={styles.footerTopRightItemContent}
                      onClick={() => {
                        history.push('/features');
                        window.scrollTo(0, 0);
                      }}
                    >
                      S-NFTs
                    </span>
                  </div>
                  <div className={styles.footerTopRightItem}>
                    <div className={styles.footerTopRightItemTitle}>
                      Support
                    </div>
                    <span className={styles.footerTopRightItemContent}>
                      Communtiy
                    </span>
                    <br></br>
                    <span
                      className={styles.footerTopRightItemContent}
                      onClick={() => {
                        history.push('/support');
                        window.scrollTo(0, 0);
                      }}
                    >
                      FAQ
                    </span>
                  </div>
                  <div className={styles.footerTopRightItem}>
                    <div className={styles.footerTopRightItemTitle}>About</div>
                    <span
                      className={styles.footerTopRightItemContent}
                      onClick={() => {
                        history.push('/about');
                        window.scrollTo(0, 0);
                      }}
                    >
                      Team
                    </span>
                  </div>
                  <div className={styles.footerTopRightItem}>
                    <div className={styles.footerTopRightItemTitle}>
                      Download Wallet
                    </div>
                    <div className={styles.selectbox} id="footerSelect">
                      <Select
                        style={{
                          width: 200,
                          height: 40,
                        }}
                        onChange={handleChange}
                        placeholder={
                          <span>&nbsp;&nbsp;&nbsp;&nbsp;Select Platform</span>
                        }
                        getPopupContainer={(triggerNode) =>
                          triggerNode.parentNode
                        }
                      >
                        <Option value="google">
                          <div id="footerSelItem" className={styles.google}>
                            <span>{'Google Play'}</span>
                          </div>
                        </Option>
                        <Option value="ios">
                          <div id="footerSelItem" className={styles.ios}>
                            <span>{'iOS & Mac OS'}</span>
                          </div>
                        </Option>
                        <Option value="apk">
                          <div id="footerSelItem" className={styles.apk}>
                            <span>{'APK Store'}</span>
                          </div>
                        </Option>
                      </Select>
                      <div className={styles.downloadButton}>
                        <VerticalAlignBottomOutlined />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footerBottom}>
                <div className={styles.footerBottomLeft}>Power by Limino</div>
                <div className={styles.footerBottomRight}>
                  <span
                    className={styles.footerBottomRightItem}
                    onClick={() => {
                      history.push('/termsService');
                      window.scrollTo(0, 0);
                    }}
                  >
                    Terms of Service
                  </span>
                  |
                  <span
                    className={styles.footerBottomRightItem}
                    onClick={() => {
                      history.push('/privacyPolicy');
                      window.scrollTo(0, 0);
                    }}
                  >
                    Privacy Policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
