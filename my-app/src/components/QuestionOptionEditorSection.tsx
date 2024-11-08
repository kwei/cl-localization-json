import { InputSection } from '@/components/InputSection';

export const QuestionOptionEditorSection = ({
  questionId,
  options,
}: {
  questionId: string;
  options: Option[];
}) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="font-semibold">Options</label>
      <div className="flex w-full flex-col gap-2 px-4">
        {options.map(
          (optionConfig, index) =>
            (optionConfig.content || optionConfig.description) && (
              <ul
                key={`${questionId}-option-${optionConfig.value}`}
                className="list-disc py-2"
              >
                <label className="font-bold">{optionConfig.value}</label>
                {optionConfig.content && (
                  <li className="ml-6">
                    <InputSection
                      label="Title"
                      name={`${questionId}-option-${index}-content`}
                      defaultValue={optionConfig.content}
                    />
                  </li>
                )}
                {optionConfig.description && (
                  <li className="ml-6">
                    <InputSection
                      label="Desc"
                      name={`${questionId}-option-${index}-description`}
                      defaultValue={optionConfig.description}
                    />
                  </li>
                )}
                {optionConfig.placeholder && (
                  <li className="ml-6">
                    <InputSection
                      label="Placeholder"
                      name={`${questionId}-option-${index}-placeholder`}
                      defaultValue={optionConfig.placeholder}
                    />
                  </li>
                )}
              </ul>
            ),
        )}
      </div>
    </div>
  );
};
