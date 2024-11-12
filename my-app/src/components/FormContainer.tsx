'use client';

import { useLocale } from '@/context/LocaleProvider';
import { useTemplate } from '@/context/TemplateProvider';
import { LOCALES } from '@/utils/constants';
import { retrieveFormData } from '@/utils/retrieveFormData';
import {
  type FormEvent,
  type MouseEvent,
  ReactNode,
  useCallback,
  useRef,
} from 'react';

export const FormContainer = ({ children }: { children: ReactNode }) => {
  const { selection } = useLocale();
  const { template } = useTemplate();
  const isGenerateAllRef = useRef(false);

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    const count = parseInt(
      (event.target as HTMLButtonElement).getAttribute('data-generate-count') ??
        '1',
    );
    isGenerateAllRef.current = count === 9;
  };

  const handleDownload = (
    template: Config,
    locale: string,
    formData: FormData,
  ) => {
    const newTemplate: Config = retrieveFormData(template, formData, locale);
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(newTemplate, undefined, 2));
    const anchorElement = document.getElementById('hidden-download-btn');
    anchorElement?.setAttribute('href', dataStr);
    anchorElement?.setAttribute('download', `${locale}.json`);
    anchorElement?.click();
  };

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (!template) return;
      const formData = new FormData(event.target as HTMLFormElement);
      if (isGenerateAllRef.current) {
        LOCALES.forEach((locale) => {
          handleDownload(template[locale], locale, formData);
        });
      } else {
        handleDownload(template[selection], selection, formData);
      }
    },
    [selection, template],
  );

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-1 flex-col">
      {children}
      <div className="sticky bottom-0 z-50 flex w-full flex-1 items-end">
        <div className="flex w-full items-center justify-end gap-4 border-t border-solid border-gray-500 bg-background px-8 py-4">
          <button
            type="submit"
            data-generate-count={1}
            onClick={handleOnClick}
            className="rounded-md bg-green-500 px-6 py-2 font-bold text-background transition-all hover:scale-105"
          >
            Generate ({selection})
          </button>
          <button
            type="submit"
            data-generate-count={9}
            onClick={handleOnClick}
            className="rounded-md bg-blue-500 px-6 py-2 font-bold text-background transition-all hover:scale-105"
          >
            Generate All
          </button>
        </div>
      </div>
      <a id="hidden-download-btn" className="hidden"></a>
    </form>
  );
};
