import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anime Binge</title>
        <meta
          name="description"
          content="Watch the latest anime in HD Quality"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
