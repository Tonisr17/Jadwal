import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface ListSuratProps {
  number: number;
  asma: {
    id: {
      short: string;
    };
    translation: {
      id: string;
    };
  };
  ayahCount: string;
  type: {
    id: string;
  };
}

export interface BaseSuratProps {
  number: number;
  name: string;
  translation: string;
  bismillah: {
    arab: string;
    translation: string;
    audio: {
      alafasy: string;
    };
  };
  asma: {
    translation: {
      id: string;
    };
    id: {
      short: string;
    };
  };
  tafsir: {
    id: string;
  };
  description: string;
  ayahs: [
    ayat: {
      number: {
        insurah: number;
      };
      text: {
        ar: string;
        read: string;
      };
      audio: {
        url: string;
      };
      translation: {
        id: string;
      };
    }
  ];
  type: {
    id: string;
  };
  recitation: {
    full: string;
  };
}

export interface KotaProps {
  id: string;
  lokasi: string;
  daerah: string;
  jadwal: [
    {
      tanggal: string;
      imsak: string;
      subuh: string;
      terbit: string;
      dhuha: string;
      dzuhur: string;
      ashar: string;
      maghrib: string;
      isya: string;
      date: string;
    }
  ];
}

export interface WaktuProps {
  waktu: {
    id: string;
    lokasi: string;
    date: string;
    daerah: string;
    jadwal: [
      waktu: {
        date: string;
        tanggal: string;
        imsak: string;
        subuh: string;
        terbit: string;
        dhuha: string;
        dzuhur: string;
        ashar: string;
        maghrib: string;
        isya: string;
      }
    ];
  };
  tanggal: string;
  bulan: string;
  tahun: string;
}

export interface PuasaSunnahProps {
  puasaSunnah: [
    fasting: {
      month: number;
      date: string;
      type: {
        name: string;
      };
    }
  ];
}

export interface DateSliceProps {
  date: Date;
  setDate: (func: Function) => void;
}

export interface LastReadSliceProps {
  lastRead: {
    id: string;
    name: string;
    ayat: number | null;
    number: number | null;
  };
  setLastRead: (lastRead: {
    id: string;
    name: string;
    ayat: number | null;
    number: number | null;
  }) => void;
}

export interface OptionSliceProps {
  audio: boolean;
  tafsir: boolean;
  terjemahan: boolean;
  notification: boolean;
  isMore: boolean;
  setNotification: (status: boolean) => void;
  setAudio: (status: boolean) => void;
  setTerjemahan: (status: boolean) => void;
  setTafsir: (status: boolean) => void;
}

export interface ThemeSliceProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export interface AsmaulHusnaProps {
  asmaulHusna: [
    {
      urutan: string;
      latin: string;
      arab: string;
      arti: string;
    }
  ];
}
