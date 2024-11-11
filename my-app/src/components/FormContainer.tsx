'use client';

import { useLocale } from '@/context/LocaleProvider';
import { useTemplate } from '@/context/TemplateProvider';
import { retrieveFormData } from '@/utils/retrieveFormData';
import { type FormEvent, ReactNode, useCallback } from 'react';

export const FormContainer = ({ children }: { children: ReactNode }) => {
  const { selection } = useLocale();
  const { template } = useTemplate();

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      if (!template) return;
      const newTemplate: Config = retrieveFormData(template, formData);
      const dataStr =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(newTemplate, undefined, 2));
      const anchorElement = document.getElementById('hidden-download-btn');
      anchorElement?.setAttribute('href', dataStr);
      anchorElement?.setAttribute('download', `${selection}.json`);
      anchorElement?.click();
    },
    [selection, template],
  );

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-1 flex-col">
      {children}
      <a id="hidden-download-btn" className="hidden"></a>
    </form>
  );
};
