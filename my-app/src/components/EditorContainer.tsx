'use client';

import { EditorTemplate } from '@/components/EditorTemplate';
import { useLocale } from '@/context/LocaleProvider';
import { useTemplate } from '@/context/TemplateProvider';
import { LOCALES } from '@/utils/constants';

export const EditorContainer = () => {
  const { selection } = useLocale();
  const { template } = useTemplate();

  if (!template || !template[selection]) return null;
  return LOCALES.map((locale) => (
    <EditorTemplate
      key={`${template.surveyId}-${locale}`}
      show={selection === locale}
      locale={locale}
      template={template[locale]}
    />
  ));
};
