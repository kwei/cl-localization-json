'use client';

import { InputSection } from '@/components/InputSection';
import { QuestionEditorSection } from '@/components/QuestionEditorSection';
import { QuestionOptionEditorSection } from '@/components/QuestionOptionEditorSection';
import { ThemeEditorSection } from '@/components/ThemeEditorSection';
import { useTemplate } from '@/context/TemplateProvider';
import { retrieveFormData } from '@/utils/retrieveFormData';
import { useEffect, useRef } from 'react';
import type { FormEvent } from 'react';

export const EditorSection = ({ selection }: { selection: string }) => {
  const { template } = useTemplate();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent) => {
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
  };

  useEffect(() => {
    formRef.current?.reset();
  }, [selection]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex h-full w-full flex-col"
    >
      <div className="flex w-full flex-col gap-2 px-4">
        {template && (
          <InputSection
            label="New Survey ID"
            name="surveyId"
            defaultValue={template.surveyId}
          />
        )}
        {template?.theme && <ThemeEditorSection theme={template.theme} />}
        {template?.questions.map((questionConfig) => (
          <QuestionEditorSection
            key={questionConfig.questionId}
            questionConfig={questionConfig}
          >
            <QuestionOptionEditorSection
              questionId={questionConfig.questionId}
              options={questionConfig.options}
            />
          </QuestionEditorSection>
        ))}
      </div>

      <div className="flex w-full flex-1 items-end justify-end px-2 py-4">
        {template && (
          <button
            type="submit"
            className="rounded-md bg-green-500 px-6 py-2 font-bold transition-all hover:scale-105"
          >
            Generate
          </button>
        )}
      </div>
      <a id="hidden-download-btn" className="hidden"></a>
    </form>
  );
};
