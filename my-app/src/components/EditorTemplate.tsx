import { InputSection } from '@/components/InputSection';
import { QuestionEditorSection } from '@/components/QuestionEditorSection';
import { QuestionOptionEditorSection } from '@/components/QuestionOptionEditorSection';
import { ThemeEditorSection } from '@/components/ThemeEditorSection';

export const EditorTemplate = ({
  show,
  template,
}: {
  show: boolean;
  template: Config;
}) => {
  if (!show) return null;
  return (
    <>
      <div className="flex w-full flex-col gap-2 px-4 pb-4">
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
    </>
  );
};
