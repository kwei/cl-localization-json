import { InputSection } from '@/components/InputSection';
import { QuestionEditorSection } from '@/components/QuestionEditorSection';
import { QuestionOptionEditorSection } from '@/components/QuestionOptionEditorSection';
import { ThemeEditorSection } from '@/components/ThemeEditorSection';

export const EditorTemplate = ({
  show,
  locale,
  template,
}: {
  show: boolean;
  locale: string;
  template: Config;
}) => {
  return (
    <div
      className={`flex w-full flex-col gap-2 px-4 pb-4 ${show ? 'visible' : 'invisible'}`}
    >
      {template && (
        <InputSection
          label="New Survey ID"
          name={`surveyId-${locale}`}
          defaultValue={template.surveyId}
        />
      )}
      {template?.theme && <ThemeEditorSection theme={template.theme} locale={locale} />}
      {template?.questions.map((questionConfig) => (
        <QuestionEditorSection
          key={questionConfig.questionId}
          questionConfig={questionConfig}
          locale={locale}
        >
          <QuestionOptionEditorSection
            questionId={questionConfig.questionId}
            options={questionConfig.options}
            locale={locale}
          />
        </QuestionEditorSection>
      ))}
    </div>
  );
};
