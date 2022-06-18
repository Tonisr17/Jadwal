import Link from "next/link";
import Head from "next/head";
import Footer from "src/components/footer";
import Time from "src/components/time";

const Home = () => {
  const buttonClassName = `bg-teal-600 hover:bg-teal-700 duration-300 transition-all text-white font-bold text-xl px-4 py-3 rounded-md`;
  return (
    <>
      <Head>
        <title>Jadwal Sholat</title>
      </Head>
      <div className="flex flex-col text-center h-screen px-4 justify-center items-center gap-3">
        <h1 className="sm:text-4xl text-3xl font-bold">Selamat Datang!</h1>
        <p className="text-xl font-medium">
          "Demi masa, sesungguhnya manusia itu benar-benar berada dalam
          kerugian"
        </p>
        <Time />
        <div className="flex gap-4">
          <Link href="/jadwal-sholat">
            <button className={buttonClassName}>Jadwal Sholat</button>
          </Link>
          <Link href="/quran">
            <button className={buttonClassName}>Baca Al-Qur'an</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
