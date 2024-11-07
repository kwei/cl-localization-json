'use client';

import { Accordion } from '@/components/Accordion';
import { InputSection } from '@/components/InputSection';
import { RadioButtonSection } from '@/components/RadioButtonSection';
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
        {template?.questions.map((questionConfig) => (
          <Accordion
            key={questionConfig.questionId}
            className="w-full rounded-xl bg-gradient-to-r from-gray-300/10 to-gray-300/10 p-4 shadow-lg"
            label={`Question: ${questionConfig.questionId}`}
          >
            <div className="flex w-full flex-col gap-2 pt-4">
              <InputSection
                label="Title"
                name={`${questionConfig.questionId}-question`}
                defaultValue={questionConfig.question}
              />
              <InputSection
                label="Description"
                name={`${questionConfig.questionId}-description`}
                defaultValue={questionConfig.description}
              />
              <RadioButtonSection
                label="Type"
                name={`${questionConfig.questionId}-type`}
                defaultChecked={questionConfig.type}
                options={[
                  { label: 'singleChoice', value: 'singleChoice' },
                  { label: 'multipleChoice', value: 'multipleChoice' },
                ]}
              />
              <RadioButtonSection
                label="Column"
                name={`${questionConfig.questionId}-column`}
                defaultChecked={questionConfig.column}
                options={[
                  { label: '3', value: 3 },
                  { label: '4', value: 4 },
                ]}
              />
              <fieldset className="flex w-full flex-col gap-2 rounded border border-solid border-foreground px-4 pb-2">
                <legend className="px-2 text-lg">Option Section</legend>
                {questionConfig.options.map(
                  (optionConfig, index) =>
                    (optionConfig.content || optionConfig.description) && (
                      <ul
                        key={`${questionConfig.questionId}-option-${optionConfig.value}`}
                        className="list-disc py-2"
                      >
                        <label className="font-bold">
                          {optionConfig.value}
                        </label>
                        {optionConfig.content && (
                          <li className="ml-6">
                            <InputSection
                              label="Title"
                              name={`${questionConfig.questionId}-option-${index}-content`}
                              defaultValue={optionConfig.content}
                            />
                          </li>
                        )}
                        {optionConfig.description && (
                          <li className="ml-6">
                            <InputSection
                              label="Desc"
                              name={`${questionConfig.questionId}-option-${index}-description`}
                              defaultValue={optionConfig.description}
                            />
                          </li>
                        )}
                        {optionConfig.placeholder && (
                          <li className="ml-6">
                            <InputSection
                              label="Placeholder"
                              name={`${questionConfig.questionId}-option-${index}-placeholder`}
                              defaultValue={optionConfig.placeholder}
                            />
                          </li>
                        )}
                      </ul>
                    ),
                )}
                <InputSection
                  label="Button"
                  name={`${questionConfig.questionId}-button`}
                  defaultValue={questionConfig.button.content}
                />
              </fieldset>
            </div>
          </Accordion>
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
