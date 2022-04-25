import { useStarknet } from '@starknet-react/core';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import networkExampleImg from '~/assets/images/wallet-network-example.png';
import ConnectWallet from '~/components/ConnectWallet';
import Mint from '~/components/Mint';
import getContractsAddresses from '~/hooks/GetContractsAddresses';

type Props = {}

const Home: FC<Props & NextPage> = () => {
  const [COUNTER_CONTRACT_ADDRESS, RPS_CONTRACT_ADDRESS] = getContractsAddresses();
  console.log(COUNTER_CONTRACT_ADDRESS, RPS_CONTRACT_ADDRESS);
  const router = useRouter();
  const { account } = useStarknet();
  if (router.query.returnUrl && account) {
    router.push({
      pathname: router.query.returnUrl as string,
    });
  }
  
  const renderExercisesButtons = () => {
    return [(
      <div key="counter">
        <h4>
        Purchase trees directly! You simply tell how many trees you would like to buy. Any impact purchased will be billed straight away. 
        </h4>
        {COUNTER_CONTRACT_ADDRESS ? (
          <Link key="counterButton" href="/counter">
            <a>Counter</a>
          </Link>
        ) : (
          <p>
              <img src="https://c.pxhere.com/images/f7/29/1671d5404f1f057cdec39f918a9e-1632461.jpg!d" />
          </p>
        )}
      </div>
    )
    ,
     (
      <div key="rpc">

      </div>
    )];
  };

  const renderConnectContent = () => {
    return (
      <>
        <p>Do you have argent-x wallet extension installed? You'll need that to continue, here you have it:</p>
        <a href="https://chrome.google.com/webstore/detail/argent-x-starknet-wallet/dlcobpjiigpikoobohmabehhmhfoodbb" target="_blank" className="download-button">
          <img src="https://argentwebsite.cdn.prismic.io/argentwebsite/2a59b435-65f7-4fd5-962d-543ff6bbac5d_button-download-starknet.svg" alt="Download Argent X StarkNet browser wallet" />
        </a>
        <p>After that make sure you have an account deployed (yap, the wallet is a smart contract) and make sure you are in the right network:</p>
        <Image src={networkExampleImg} alt="wallet network selector example" />
        <p>And last but not least, connect your dApp to your wallet:</p>
        <ConnectWallet />
      </>
    );
  };
  //new
  const renderConnectContent1 = () => {
    return (
      <>
        <p>Do you have argent-x wallet extension installed? You'll need that to continue, here you have it:</p>
        <a href="https://chrome.google.com/webstore/detail/argent-x-starknet-wallet/dlcobpjiigpikoobohmabehhmhfoodbb" target="_blank" className="download-button">
          <img src="https://argentwebsite.cdn.prismic.io/argentwebsite/2a59b435-65f7-4fd5-962d-543ff6bbac5d_button-download-starknet.svg" alt="Download Argent X StarkNet browser wallet" />
        </a>
        <p>After that make sure you have an account deployed (yap, the wallet is a smart contract) and make sure you are in the right network:</p>
        <Image src={networkExampleImg} alt="wallet network selector example" />
        <p>And last but not least, connect your dApp to your wallet:</p>
        <Mint />
      </>
    );
  };
  //endnew
  const renderDappContent = () => {
    return (
      <div>
        <p>Your account { account }</p>
        <div className="exercises-info">
          {renderExercisesButtons()}
        </div>
      </div>
    );
  };
  return (
    <section className="simple-container">
      <h1>Mint trees</h1>
      {!!account ? renderDappContent() : renderConnectContent()}
    </section>
  )
  return (
    <section className="simple-container">
      <h1>Mint trees</h1>
      {!!account ? renderDappContent() : renderConnectContent1()}
    </section>
  )
}

export default Home
