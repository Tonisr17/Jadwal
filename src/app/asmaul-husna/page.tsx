import { cx } from "classix";
import { ListAsmaulHusna } from "~components/organisms";
import { env } from "~env.mjs";
import { ofetch } from "~lib/utils/configured-ofetch";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { bitter } from "~lib/utils/fonts";

const { NEXT_PUBLIC_ASMAUL_HUSNA_API } = env;

const baseMetadata = {
  title: "Asma'ul Husna | Jadwal Sholat",
  description: "Berikut daftar Asma'ul Husna",
  url: SITE_URL,
};

const { title, description, url } = baseMetadata;

export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
    siteName: "info-jadwal-sholat.vercel.app",
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

async function getData() {
  const response = await ofetch(`${NEXT_PUBLIC_ASMAUL_HUSNA_API}/all`);
  return response.data;
}

export default async function AsmaulHusna() {
  const asmaulHusna = await getData();

  return (
    <div
      className={cx(
        "flex w-full max-w-full",
        "flex-col items-center justify-start",
        "space-y-7 pt-8 pb-24 md:pb-8"
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-3">
          <h1 className={cx("text-3xl font-bold tracking-wide sm:text-4xl", bitter.className)}>
            Asma&#39;ul Husna
          </h1>
        </div>
        <p className="mt-2 text-lg font-medium">Berikut daftar Asma&#39;ul Husna</p>
      </div>
      <ListAsmaulHusna asmaulHusna={asmaulHusna} />
    </div>
  );
}