import React from 'react';
import styles from './about.less';
import { ArrowRightOutlined } from '@ant-design/icons';
import MyExtensionButton from '@/components/entensionButton/extensionButton.jsx';
import MyDownloadBlock from '@/components/downloadblock/downloadblock.jsx';
export default function about() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageTop}>
        <div className={styles.pageTopInfo}>
          <div className={styles.L1}>
            Limino-Your<br></br>
            assets management assistant
          </div>
          <div className={styles.L2}>
            The Wormholes Wallet is your portal to the Wormholes Chain
            ecosystem,<br></br>acting as a secure means for storing and
            transacting<br></br>your crypto assets on the Wormholes Chain. Join
            us<br></br>in building the Wormholes ecosystem <br></br>by creating
            a Wormholes Wallet today!
          </div>
          <MyExtensionButton></MyExtensionButton>
        </div>
      </div>
      <div className={styles.cardBox}>
        <div className={styles.content}>
          <div className={styles.title}>Main Features</div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={require('../../assets/about/icon1.png')}></img>
              </div>
              <div className={styles.infoBox}>
                <div className={styles.title}>High secure</div>
                <div className={styles.text}>
                  Limino equips users with a high secure<br></br>login and a key
                  vault. With the special<br></br>secure algorithm, your wallet
                  will be safe.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={require('../../assets/about/icon2.png')}></img>
              </div>
              <div className={styles.infoBox}>
                <div className={styles.title}>Convenient</div>
                <div className={styles.text}>
                  Limino highly cooperate with Wormholes chain.<br></br>By
                  limino, you can do almost all the actions on Wormholes.
                  <br></br>Users can use Limino to send and receives on
                  Wormholes.<br></br>Also, users can use Limino to do the
                  staking. Besides,<br></br>you can also use the wallet to open
                  your own<br></br>Wormholes NFT marketplace.Users can also find
                  <br></br>entrances for all functions of Wormholes.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={require('../../assets/about/icon3.png')}></img>
              </div>
              <div className={styles.infoBox}>
                <div className={styles.title}>User-friendly interface</div>
                <div className={styles.text}>
                  Limino cares about users. Limino put a lot effort<br></br>on
                  doing research on users.<br></br>Limino is designed to make
                  users use Limino<br></br>as easily as possible.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={require('../../assets/about/icon4.png')}></img>
              </div>
              <div className={styles.infoBox}>
                <div className={styles.title}>Private-Own your data</div>
                <div className={styles.text}>
                  All your data will be saved on your local<br></br>server.
                  Limino will not collect your data.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={require('../../assets/about/icon5.png')}></img>
              </div>
              <div className={styles.infoBox}>
                <div className={styles.title}>Support</div>
                <div className={styles.text}>
                  Limino provides perfect support.If you<br></br>have any
                  questions, just contact us.<br></br>We will reply as soon as
                  possible.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={require('../../assets/about/icon6.png')}></img>
              </div>
              <div className={styles.infoBox}>
                <div className={styles.title}>Keep improving</div>
                <div className={styles.text}>
                  We will keep improve Limino's functions.<br></br>Limino will
                  improve the functions that<br></br>already have and have more new
                  functions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyDownloadBlock></MyDownloadBlock>
      <div className={styles.talkingBox}>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <div className={styles.block1}>
              <div className={styles.content}>
                <div className={styles.text}>
                  Synthesis fragment<br></br>S-NFT to<br></br>acquire rewards
                </div>
                <div className={styles.textBlue}>
                  Get it &nbsp; <ArrowRightOutlined />
                </div>
              </div>
            </div>
            <div className={styles.block2}>
              <div className={styles.content}>
                <div className={styles.text}>
                  One-Click<br></br>NFT Minting
                </div>
                <div className={styles.textBlue}>
                  Get it &nbsp; <ArrowRightOutlined />
                </div>
              </div>
            </div>
            <div className={styles.block3}>
              <div className={styles.content}>
                <div className={styles.text}>
                  How to create a<br></br>one-click NFT<br></br>Marketplace
                </div>
                <div className={styles.textBlue}>
                  Get it &nbsp; <ArrowRightOutlined />
                </div>
              </div>
            </div>
            <div className={styles.block4}>
              <div className={styles.content}>
                <div className={styles.text}>
                  Inquiry your<br></br>NFT info
                </div>
                <div className={styles.textBlue}>
                  Get it &nbsp; <ArrowRightOutlined />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentInfo}>
            <div className={styles.contentTitle}>
              Multi - Dimensional<br></br>and Scalable TPS
            </div>
            <div className={styles.contentTitle}>
              Low - Cost<br></br>Decentralized Network
            </div>
            <div className={styles.contentText}>
              <div>
                Create NFT Exchanges Like OpenSea With Just One<br></br>Click
                Low-Cost Minting and Trading NFTs - Realized<br></br>Through
                Limino’s Unique Blockchain Architecture
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
