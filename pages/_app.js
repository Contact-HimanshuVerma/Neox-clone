import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/layout";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const [soicalmedia, setSocialmedia] = useState(false);
  const [soicalmediaTwo, setSocialmediaTwo] = useState(false);
  const [chatIconVisible, setChatIconVisible] = useState(false);
  const clickedThree = () => {
    setChatIconVisible(false);
  };

  return (
    <Layout>
      <Head>
        <title>Neo San Private Limited</title>
        <meta name="description" content="Neo San Private Limited." />
        <link rel="icon" href="/logo.png" />
        <meta property="og:type" content="website" />
      </Head>

      <Component {...pageProps} />
      {/* {soicalmedia && <Fixeddiv clicked={clicked} />}
      {soicalmediaTwo && <FixText clickedTwo={clickedTwo} />}
      {chatIconVisible && <Chat clickedThree={clickedThree} />} */}
      {/* {soicalmediaThree && <Fixediv2 clickedThree={clickedThree} />} */}
    </Layout>
  );
}

export default MyApp;
