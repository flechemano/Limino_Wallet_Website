import React, { useState, useEffect } from 'react';
import styles from './header.less';
import mobile from './mheader.less';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { history, withRouter } from 'umi';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import useWinSize from '@/hook/WinSize';
export default withRouter(function downloadblock(props) {
  const windowSize = useWinSize();
  const [showFeature, setShowFeature] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [mobilDownlodActive, setMobilDownlodActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  useEffect(() => {
    if (mobilDownlodActive == true) {
      setTimeout(() => {
        setMobilDownlodActive(false);
      }, 500);
    }
  }, [mobilDownlodActive]);
  return (
    <>
      {windowSize.width > 768 ? (
        <>
          <div className={styles.headerContainer}>
            <div className={styles.headerBox}>
              <div
                className={styles.headerLeft}
                onClick={() => {
                  history.push('/');
                }}
              >
                <img src={require('../../assets/header/logo.png')}></img>
                <span>LIMINO</span>
              </div>
              <div className={styles.headerRight}>
                <div
                  className={styles.menuBox}
                  onMouseEnter={() => setShowFeature(true)}
                  onMouseLeave={() => setShowFeature(false)}
                >
                  <div className={styles.menuTitle}>
                    Features
                    <DownOutlined
                      style={{
                        transform: showFeature
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                      }}
                    />
                  </div>
                  <div
                    className={styles.menuItemBox}
                    style={{
                      visibility: showFeature ? 'visible' : 'hidden',
                      opacity: showFeature ? 1 : 0,
                      transition: 'all 0.25s linear',
                    }}
                  >
                    <div
                      className={styles.menuItem}
                      onClick={() => {
                        history.push('/features');
                      }}
                    >
                      S-NFTs
                    </div>
                  </div>
                </div>
                <div
                  className={styles.menuBox}
                  onMouseEnter={() => setShowSupport(true)}
                  onMouseLeave={() => setShowSupport(false)}
                >
                  <div className={styles.menuTitle}>
                    Support
                    <DownOutlined
                      style={{
                        transform: showSupport
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                      }}
                    />
                  </div>
                  <div
                    className={styles.menuItemBox}
                    style={{
                      visibility: showSupport ? 'visible' : 'hidden',
                      opacity: showSupport ? 1 : 0,
                      transition: 'all 0.25s linear',
                    }}
                  >
                    <div className={styles.menuItem}>Communtiy</div>
                    <div
                      className={styles.menuItem}
                      onClick={() => {
                        history.push('/support');
                      }}
                    >
                      FAQ
                    </div>
                  </div>
                </div>
                <div
                  className={styles.menuBox}
                  onMouseEnter={() => setShowAbout(true)}
                  onMouseLeave={() => setShowAbout(false)}
                >
                  <div className={styles.menuTitle}>
                    About
                    <DownOutlined
                      style={{
                        transform: showAbout
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                      }}
                    />
                  </div>

                  <div
                    className={styles.menuItemBox}
                    style={{
                      visibility: showAbout ? 'visible' : 'hidden',
                      opacity: showAbout ? 1 : 0,
                      transition: 'all 0.25s linear',
                    }}
                  >
                    <div
                      className={styles.menuItem}
                      onClick={() => {
                        history.push('/about');
                      }}
                    >
                      Team
                    </div>
                  </div>
                </div>
                <a
                  href={
                    props.location.pathname == '/support'
                      ? '/#downloadblockButton'
                      : '#downloadblockButton'
                  }
                >
                  <div className={styles.Button}>
                    <span className={styles.buttonText}>Get Mobile App</span>
                    <span className={styles.buttonUnderline}></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={mobile.headerContainer}>
            <div className={mobile.headerBox}>
              <div
                className={mobile.headerLeft}
                onClick={() => {
                  history.push('/');
                }}
              >
                <img src={require('../../assets/header/logo.png')}></img>
                <span>LIMINO</span>
              </div>
              <div className={mobile.headerRight}>
                <div
                  className={
                    mobilDownlodActive
                      ? mobile.downloadButtonActive
                      : mobile.downloadButton
                  }
                  onClick={() => {
                    setMobilDownlodActive(!mobilDownlodActive);
                  }}
                ></div>
                <div
                  className={
                    mobileMenuActive
                      ? mobile.MenuButtonActive
                      : mobile.MenuButton
                  }
                  onClick={() => {
                    setMobileMenuActive(!mobileMenuActive);
                  }}
                ></div>
              </div>
            </div>
            <div className={mobile.menuBox}>
              <Collapse accordion defaultActiveKey={['1']}>
                <Panel header="Features" key="1">
                  <p>1</p>
                </Panel>
                <Panel header="Support" key="2">
                  <p>2</p>
                </Panel>
                <Panel header="About" key="3">
                  <p>3</p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </>
      )}
    </>
  );
});
