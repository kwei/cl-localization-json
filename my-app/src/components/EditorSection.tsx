'use client';

import { useLocale } from '@/context/LocaleProvider';
import { useRef, useState } from 'react';
import type { FormEvent } from 'react';

export const EditorSection = () => {
  const { selection } = useLocale();
  const [template, setTemplate] = useState<Config>();
  const templateUrlRef = useRef<HTMLInputElement>(null);

  const handleGetTemplate = () => {
    const templateUrl = templateUrlRef.current?.value;
    if (templateUrl) {
      fetch(templateUrl)
        .then((res) => res.json())
        .then((data) => {
          setTemplate(data);
        });
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    if (!template) return;
    const newTemplate: Config = { ...template };
    template.questions.forEach((questionConfig, index) => {
      const questionId = questionConfig.questionId;
      const question = formData.get(`${questionId}-question`) as string;
      const description = formData.get(`${questionId}-description`) as string;
      newTemplate.questions[index].question = question;
      newTemplate.questions[index].description = description;
      questionConfig.options.forEach((optionConfig, optionIndex) => {
        const content = formData.get(
          `${questionId}-option-${optionIndex}-content`,
        ) as string;
        const description = formData.get(
          `${questionId}-option-${optionIndex}-description`,
        ) as string;
        const placeholder = formData.get(
          `${questionId}-option-${optionIndex}-placeholder`,
        ) as string;
        newTemplate.questions[index].options[optionIndex].content = content;
        newTemplate.questions[index].options[optionIndex].description =
          description;
        newTemplate.questions[index].options[optionIndex].placeholder =
          placeholder;
      });
    });
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(newTemplate, undefined, 2));
    const anchorElement = document.getElementById('hidden-download-btn');
    anchorElement?.setAttribute('href', dataStr);
    anchorElement?.setAttribute('download', `${selection}.json`);
    anchorElement?.click();
  };

  return (
    <form
      key={selection}
      onSubmit={handleSubmit}
      className="flex h-full w-full flex-col"
    >
      <div className="flex w-full items-center gap-2 p-2">
        <input
          ref={templateUrlRef}
          className="flex-1 border-b border-solid border-foreground bg-transparent px-2 py-1"
          type="url"
          defaultValue="https://web-static-stage.cyberlink.com/app/survey/config/sample1/ENU.json"
          placeholder="https://example.com/path/to/id/ENU.json"
        />
        <button
          type="button"
          onClick={handleGetTemplate}
          className="rounded-md bg-blue-500 px-6 py-1 text-background transition-all hover:scale-105"
        >
          {template ? 'Reload' : 'Load'}
        </button>
      </div>
      <div className="flex w-full flex-col gap-2 px-2">
        {template?.questions.map((questionConfig) => (
          <details key={questionConfig.questionId} className="w-full">
            <summary className="rounded bg-gray-300 px-2 text-lg font-bold">
              Question: {questionConfig.questionId}
            </summary>
            <input
              className="w-full border-b border-solid border-foreground bg-transparent px-2 py-1"
              type="text"
              name={`${questionConfig.questionId}-question`}
              defaultValue={questionConfig.question}
            />
            <input
              className="w-full border-b border-solid border-foreground bg-transparent px-2 py-1"
              type="text"
              name={`${questionConfig.questionId}-description`}
              defaultValue={questionConfig.description}
            />
            <div className="flex w-full flex-col gap-2 pl-2">
              {questionConfig.options.map(
                (optionConfig, index) =>
                  (optionConfig.content || optionConfig.description) && (
                    <fieldset
                      key={optionConfig.value}
                      className="w-ful rounded border border-solid border-foreground px-2 pb-2"
                    >
                      <legend className="rounded bg-background px-2 font-semibold">
                        Option: {optionConfig.value}
                      </legend>
                      {optionConfig.content && (
                        <input
                          className="w-full bg-transparent px-2 py-1"
                          type="text"
                          name={`${questionConfig.questionId}-option-${index}-content`}
                          defaultValue={optionConfig.content}
                        />
                      )}
                      {optionConfig.description && (
                        <input
                          className="w-full bg-transparent px-2 py-1"
                          type="text"
                          name={`${questionConfig.questionId}-option-${index}-description`}
                          defaultValue={optionConfig.description}
                        />
                      )}
                      {optionConfig.placeholder && (
                        <input
                          className="w-full bg-transparent px-2 py-1"
                          type="text"
                          name={`${questionConfig.questionId}-option-${index}-placeholder`}
                          defaultValue={optionConfig.placeholder}
                        />
                      )}
                    </fieldset>
                  ),
              )}
            </div>
          </details>
        ))}
      </div>

      <div className="flex w-full flex-1 items-end justify-end px-2 py-4">
        <button
          type="submit"
          className="rounded-md bg-green-500 px-6 py-2 font-bold transition-all hover:scale-105"
        >
          Generate
        </button>
      </div>
      <a id="hidden-download-btn" className="hidden"></a>
    </form>
  );
};
