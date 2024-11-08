import { Accordion } from '@/components/Accordion';
import { InputSection } from '@/components/InputSection';
import { RadioButtonSection } from '@/components/RadioButtonSection';
import { ReactNode } from 'react';

export const QuestionEditorSection = ({
  questionConfig,
  children,
}: {
  questionConfig: Question;
  children: ReactNode;
}) => {
  return (
    <Accordion
      key={questionConfig.questionId}
      className="w-full rounded-lg border border-solid border-foreground px-4 py-2"
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
        {children}
        <InputSection
          label="Button"
          name={`${questionConfig.questionId}-button`}
          defaultValue={questionConfig.button.content}
        />
        {questionConfig.backButton && (
          <InputSection
            label="Back Button"
            name={`${questionConfig.questionId}-backButton`}
            defaultValue={questionConfig.backButton.content}
          />
        )}
      </div>
    </Accordion>
  );
};
