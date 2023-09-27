import React, { useEffect, useState } from 'react';
import styles from './features.less';
import { ArrowRightOutlined } from '@ant-design/icons';
import MyExtensionButton from '@/components/entensionButton/extensionButton.jsx';
import MyDownloadBlock from '@/components/downloadblock/downloadblock.jsx';
export default function features() {
  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);
  function debounce(func, timeout = 100) {
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
    if (window.scrollY > window.innerWidth * 0.5 + 2400) {
      setContent1(true);
      setContent2(true);
    }
  }
  window.addEventListener('scroll', debounce(checkSlide));
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageTop}>
        <div className={styles.pageTopInfo}>
          <div className={styles.L1}>
            The second native token<br></br>
            of the Wormholes Chain
          </div>
          <div className={styles.L2}>
            S-NFT is an Epoch-making special native<br></br>token of
            Wormholes.It serves as the direct<br></br>reward to the miners and
            NFT<br></br>marketplace creators of Wormholes.
            {/* S-NFTs serve as the direct reward to the miners<br></br>and NFT marketplace creators
            who secure<br></br>the Limino Chain through their stakes and actions */}
          </div>
          <MyExtensionButton></MyExtensionButton>
          {/* <div className={styles.Button}>
            <span className={styles.buttonText}>Get Browser Extension</span>
            <span className={styles.buttonUnderline}></span>
          </div> */}
        </div>
      </div>
      <div className={styles.cardBox}>
        <div className={styles.content}>
          <div className={styles.title}>Main Features</div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={require('../../assets/feature/icon1.png')}></img>
              </div>
              <div className={styles.infoBox}>
                Excellent combatibility<br></br>stemming from<br></br>
                architectural-level minting,<br></br>circulation and
                transaction.
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={require('../../assets/feature/icon2.png')}></img>
              </div>
              <div className={styles.infoBox}>
                Growing exchange rate-With<br></br>the increasing level of S-NFT
                <br></br>
                S-NFT will have a higher<br></br>exchange rate when owners
                <br></br>
                convert S-NFT to<br></br>ERBs by Wormholes chain.
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={require('../../assets/feature/icon3.png')}></img>
              </div>
              <div className={styles.infoBox}>
                Strong liquidity in the<br></br>secondary S-NFT market<br></br>
                resulting from the unique<br></br>token economic model.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.content}>
          <div className={styles.contentImg}>
            <img
              style={{
                marginLeft: content1 ? '0px' : '-1200px',
                transition: 'all 1s',
              }}
              src={require('../../assets/homepage/iPhone4.png')}
            ></img>
          </div>
          <div
            className={styles.contentInfo}
            style={{
              opacity: content1 ? '1' : '0',
              transition: 'all 1s',
            }}
          >
            <div className={styles.contentTitle}>S-NFT compose rule</div>
            <div className={styles.contentText}>
              S-NFT has four levels. <br></br>Every 16 low level S-NFTs can be
              composed<br></br>
              to 1 higher level S-NFT. By the composing,<br></br>
              the exchange rate of S-NFT will be increased.
            </div>
          </div>
        </div>
        <div className={styles.contentLeft}>
          <div
            className={styles.contentInfo}
            style={{
              opacity: content2 ? '1' : '0',
              transition: 'all 1s',
            }}
          >
            <div className={styles.contentTitle}>What can S-NFT do?</div>
            <div className={styles.contentText}>
              S-NFT can be exchange with Wormholes chain to ERBs.<br></br>Also,
              anyone who has S-NFTs can sell S-NFTs<br></br>
              on Wormholes NFT marketplace. <br></br>
              Users can also collect the S-NFTs they like.
            </div>
          </div>
          <div className={styles.contentImg}>
            <img
              style={{
                marginLeft: content2 ? '0px' : '1200px',
                transition: 'all 1s',
              }}
              src={require('../../assets/homepage/iPhone5.png')}
            ></img>
          </div>
        </div>
      </div>
      <MyDownloadBlock></MyDownloadBlock>
      <div className={styles.cardBox}>
        <div className={styles.content}>
          <div
            className={styles.title}
            style={{
              paddingTop: '100px',
            }}
          >
            Get S-NFT
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card1}>
              <div className={styles.cardTitle}>
                Become Wormholes marketplace creators<br></br>or stake S-NFT to
                get S-NFT
              </div>
              <div className={styles.infoBox}>
                When creating a new block, four marketplace<br></br>
                creators and S-NFT stakers will be distributed
                <br></br>S-NFT through DRE algorithm droppoint.
                <br></br>The higher values of ERBs or S-NFT they stake,
                <br></br>the higher chance of getting S-NFT they have.
              </div>
              <div
                className={styles.Button}
                onClick={() => {
                  window.open('https://www.limino.com/#/wallet', '_blank');
                }}
              >
                Get it &nbsp; <ArrowRightOutlined />
              </div>
              <div className={styles.colorful}></div>
            </div>
            <div className={styles.card1}>
              <div className={styles.cardTitle}>
                Trading centers collect S-NFT and<br></br>participate in
                synthesis to convert ERB
              </div>
              <div className={styles.infoBox}>
                Get S-NFTs in Wormholes marketplace<br></br> S-NFTs can be saled
                on Wormholes marketplace.<br></br>You can use ERB to buy S-NFTs
                listed
                <br></br>on Wormholes marketplace.
              </div>
              <div
                className={styles.Button}
                onClick={() => {
                  window.open(
                    'www.wormholestest.com/c0xc5871d1ee9ffb443cc05897df6f624d0c77fa5d6/#/',
                    '_blank',
                  );
                }}
              >
                Get it &nbsp; <ArrowRightOutlined />
              </div>
              <div className={styles.colorful}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
