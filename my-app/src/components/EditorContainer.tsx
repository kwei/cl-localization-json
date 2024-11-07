'use client';

import { EditorSection } from '@/components/EditorSection';
import { useLocale } from '@/context/LocaleProvider';

export const EditorContainer = () => {
  const { selection } = useLocale();
  return <EditorSection key={selection} selection={selection} />;
};
