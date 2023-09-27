import React, { useEffect, useState } from 'react';
import styles from './homepage.less';
import { ArrowRightOutlined } from '@ant-design/icons';
import MyDownloadBlock from '@/components/downloadblock/downloadblock.jsx';
import MyExtensionButton from '@/components/entensionButton/extensionButton.jsx';
import useWinSize from '@/hook/WinSize';
export default function homepage() {
  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);
  const windowSize = useWinSize();
  function debounce(func, timeout = 50) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  function checkSlide(e) {
    console.log(e);
    console.log(window.scrollY);
    if (
      window.scrollY > window.innerWidth * 0.5 - 400 &&
      window.scrollY < window.innerWidth * 0.5 + 800
    ) {
      console.log('content1');
      if (content1 == false) {
        setContent1(true);
      }
    }
    if (
      window.scrollY > window.innerWidth * 0.5 + 300 &&
      window.scrollY < window.innerWidth * 0.5 + 1600
    ) {
      console.log('content2');
      if (content2 == false) {
        setContent2(true);
      }
    }
    if (
      window.scrollY > window.innerWidth * 0.5 + 1200 &&
      window.scrollY < window.innerWidth * 0.5 + 2400
    ) {
      console.log('content3');
      if (content3 == false) {
        setContent3(true);
      }
    }
    if (window.scrollY > window.innerWidth * 0.5 + 2400) {
      setContent1(true);
      setContent2(true);
      setContent3(true);
    }
  }
  window.addEventListener('scroll', debounce(checkSlide));
  return (
    <>
      {windowSize.width > 768 ? (
        <>
          <div className={styles.pageContainer}>
            <div className={styles.pageTop}>
              <div className={styles.pageTopInfo}>
                <div className={styles.L1}>
                  A Secure & Powerful<br></br>
                  Limino Wallet
                </div>
                <div className={styles.L2}>
                  Manage your crypto assets<br></br>in an efficient and secure
                  way.
                  {/* Manage your limino currency with<br></br>ease in a secure &
                  feature rich platform<br></br>engineered for unprecedented
                  design */}
                </div>
                <MyExtensionButton></MyExtensionButton>
              </div>
            </div>
            <div className={styles.contentBox}>
              <img
                src={require('../../assets/homepage/shape.png')}
                className={styles.shape}
              ></img>
              <div className={styles.content}>
                <div className={styles.contentImg}>
                  <img
                    className={styles.content1img}
                    style={{
                      marginLeft: content1 ? '0px' : '-1200px',
                      transition: 'all 0.5s',
                    }}
                    src={require('../../assets/homepage/iPhone1.png')}
                  ></img>
                </div>
                <div
                  className={styles.contentInfo}
                  style={{
                    opacity: content1 ? '1' : '0',
                    transition: 'all 0.5s',
                  }}
                >
                  <div className={styles.contentTitle}>
                    Manage your assets easily
                  </div>
                  <div className={styles.contentText}>
                    Available as a browser extension and as a mobile app,
                    <br></br>Limino equips you with a key vault,<br></br>
                    secure login, token wallet and token
                    <br></br>exchange-everything you need to<br></br>manage your
                    digital assets.
                  </div>
                </div>
              </div>
              <div className={styles.contentLeft}>
                <div
                  className={styles.contentInfo}
                  style={{
                    opacity: content2 ? '1' : '0',
                    transition: 'all 0.5s',
                  }}
                >
                  <div className={styles.contentTitle}>
                    One-Click NFT Marketplace
                  </div>
                  <div className={styles.contentText}>
                    Limino provides users a convenient way to<br></br>open their
                    own NFT marketplace on<br></br>Wormholes Chain.
                  </div>
                </div>
                <div className={styles.contentImg}>
                  <img
                    style={{
                      marginLeft: content2 ? '0px' : '1200px',
                      transition: 'all 0.5s',
                    }}
                    src={require('../../assets/homepage/iPhone2.png')}
                  ></img>
                </div>
              </div>
              <div className={styles.content2}>
                <div className={styles.contentImg}>
                  <img
                    style={{
                      marginLeft: content3 ? '0px' : '-1200px',
                      transition: 'all 0.5s',
                    }}
                    src={require('../../assets/homepage/iPhone3.png')}
                  ></img>
                </div>
                <div
                  className={styles.contentInfo}
                  style={{
                    opacity: content3 ? '1' : '0',
                    transition: 'all 0.5s',
                  }}
                >
                  <div className={styles.contentTitle}>Own your data</div>
                  <div className={styles.contentText}>
                    Limino generates passwords and keys on your device,<br></br>
                    so only you have access to your accounts and data.<br></br>
                    You always choose what to share<br></br>and what to keep
                    private.
                  </div>
                </div>
              </div>
            </div>
            <MyDownloadBlock></MyDownloadBlock>
            <div className={styles.talkingBox}>
              <div className={styles.content}>
                <div className={styles.contentImg}>
                  <img src={require('../../assets/homepage/Border.png')}></img>
                  <div className={styles.obrit1}>
                    <img
                      className={styles.img1}
                      src={require('../../assets/homepage/3.png')}
                    ></img>
                  </div>
                  <div className={styles.obrit2}>
                    <img
                      className={styles.img1}
                      src={require('../../assets/homepage/7.png')}
                    ></img>
                  </div>
                  <div className={styles.obrit3}>
                    <img
                      className={styles.img1}
                      src={require('../../assets/homepage/2.png')}
                    ></img>
                  </div>
                  <div className={styles.obrit4}>
                    <img
                      className={styles.img1}
                      src={require('../../assets/homepage/5.png')}
                    ></img>
                  </div>
                  <div className={styles.obrit5}>
                    <img
                      className={styles.img1}
                      src={require('../../assets/homepage/4.png')}
                    ></img>
                  </div>
                  <div className={styles.obrit6}>
                    <img
                      className={styles.img1}
                      src={require('../../assets/homepage/1.png')}
                    ></img>
                  </div>
                  <div className={styles.obrit7}>
                    <img
                      className={styles.img1}
                      src={require('../../assets/homepage/6.png')}
                    ></img>
                  </div>
                </div>
                <div className={styles.contentInfo}>
                  <div className={styles.contentTitle}>
                    They talking about&nbsp;<span>Limino</span>
                  </div>
                  <div className={styles.contentText}>
                    <div className={styles.textBlue}>
                      Join thousands of our happy users<br></br>These are just
                      some of the reviews and feedback<br></br>from users of the
                      Limino Wallet
                    </div>
                    <div>
                      Limino Wallet is the best multi crypto currency<br></br>
                      wallet to store your favourite coin/token,<br></br>very
                      easy to use and very smooth,<br></br>
                      special desing.Absolutely the best wallet out there.
                    </div>
                    <div>
                      The Infinity Wallet is like nothing you have ever<br></br>
                      used before. With it's ease to use simplicity,<br></br>
                      feature rich, crisp graphics and down to it's<br></br>
                      butter-smooth performance. It truly is the<br></br>only
                      digital asset wallet you will ever need.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.faqBox}>
              <div className={styles.container}>
                <div className={styles.title}>FAQ</div>
                <div
                  className={styles.item}
                  onClick={() => {
                    window.open(
                      'https://www.wormholes.com/docs/wallet/wallet.html#receive-and-payment',
                      '_blank',
                    );
                  }}
                >
                  <div className={styles.itemLeft}>General Introduction</div>
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
                  <div className={styles.itemLeft}>One-click exchange</div>
                  <div className={styles.button}>
                    <ArrowRightOutlined />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemLeft}>Become a staker</div>
                  <div className={styles.button}>
                    <ArrowRightOutlined />
                  </div>
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
