'use client';

import { EditorTemplate } from '@/components/EditorTemplate';
import { useLocale } from '@/context/LocaleProvider';
import { useTemplate } from '@/context/TemplateProvider';
import { LOCALES } from '@/utils/constants';

export const EditorContainer = () => {
  const { selection } = useLocale();
  const { template } = useTemplate();

  if (!template) return null;
  return LOCALES.map((locale) => (
    <EditorTemplate
      key={locale}
      show={selection === locale}
      template={template}
    />
  ));
};
