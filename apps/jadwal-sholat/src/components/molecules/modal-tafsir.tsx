"use client";

import { ClipboardCheck, ClipboardCopy, X } from "lucide-react";
import { memo, useCallback, useRef } from "react";
import { useClipboard } from "use-clipboard-copy";
import { useClickOutside } from "~hooks";
import { SuratProps } from "~interfaces";
import { cx } from "~lib/helpers";
import useGlobalStore from "~store";

export function ModalTafsir({ data }: SuratProps) {
  const clipboard = useClipboard({ copiedTimeout: 1000 });

  const { tafsir, setTafsir } = useGlobalStore((state) => ({
    tafsir: state.tafsir,
    setTafsir: state.setTafsir,
  }));

  const modalRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = useCallback(
    (tafsir: string) => {
      clipboard.copy(tafsir);
    },
    [clipboard]
  );

  useClickOutside(setTafsir, modalRef, false);

  return (
    <>
      {tafsir ? (
        <div
          aria-modal="true"
          className={cx(
            "modal-blur fixed inset-0 top-0 z-50",
            "flex min-h-screen w-full items-center justify-center",
            "overflow-x-hidden  backdrop-blur-[3px]"
          )}
        >
          <div className="relative w-full max-w-2xl p-4 md:h-auto">
            <div
              ref={modalRef}
              className={cx(
                "relative rounded-lg bg-white shadow",
                "dark:bg-gray-800 dark:text-white"
              )}
            >
              <div className="flex items-center justify-between rounded-t border-b p-4">
                <h3 className="text-xl font-semibold">
                  Tafsir Surat {data.asma.id.short}
                </h3>
                <div className="flex justify-center items-center space-x-2">
                  <button
                    type="button"
                    aria-label="copy to clipboard"
                    onClick={() => copyToClipboard(data.tafsir.id)}
                    className={cx(
                      "ml-auto inline-flex items-center rounded-lg",
                      "bg-transparent p-1.5 text-sm transition-all",
                      "hover:bg-gray-200",
                      "dark:text-white dark:hover:text-gray-900"
                    )}
                  >
                    {clipboard.copied ? (
                      <ClipboardCheck size={20} />
                    ) : (
                      <ClipboardCopy size={20} />
                    )}
                  </button>
                  <button
                    type="button"
                    className={cx(
                      "ml-auto inline-flex items-center rounded-lg",
                      "bg-transparent p-1.5 text-sm transition-all",
                      "hover:bg-gray-200",
                      "dark:text-white dark:hover:text-gray-900"
                    )}
                    onClick={() => setTafsir(!tafsir)}
                    aria-label="close modal tafsir"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="space-y-6 p-6">
                <p className="text-base leading-relaxed ">{data.tafsir.id}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

memo(ModalTafsir);
