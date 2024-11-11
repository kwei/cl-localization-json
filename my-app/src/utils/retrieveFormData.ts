export const retrieveFormData = (template: Config, formData: FormData) => {
  const newTemplate: Config = { ...template };
  newTemplate.theme = getThemeData(formData, newTemplate.theme);

  template.questions.forEach((questionConfig, index) => {
    const questionId = questionConfig.questionId;
    const newQuestion = { ...newTemplate.questions[index] };
    newQuestion.question =
      (formData.get(`${questionId}-question`) as string) ??
      newQuestion.question;
    newQuestion.description =
      (formData.get(`${questionId}-description`) as string) ??
      newQuestion.description;

    questionConfig.options.forEach((_, optionIndex) => {
      const newOption = { ...newQuestion.options[optionIndex] };
      newOption.content =
        (formData.get(
          `${questionId}-option-${optionIndex}-content`,
        ) as string) ?? newOption.content;

      newOption.description =
        (formData.get(
          `${questionId}-option-${optionIndex}-description`,
        ) as string) ?? newOption.description;

      newOption.placeholder =
        (formData.get(
          `${questionId}-option-${optionIndex}-placeholder`,
        ) as string) ?? newOption.placeholder;

      newQuestion.button.content =
        (formData.get(`${questionId}-button`) as string) ??
        newQuestion.button.content;

      newQuestion.type =
        (formData.get(`${questionId}-type`) as
          | 'singleChoice'
          | 'multipleChoice') ?? newQuestion.type;

      newQuestion.column =
        Number(formData.get(`${questionId}-column`) as '3' | '4') ??
        newQuestion.column;

      newTemplate.surveyId =
        (formData.get('surveyId') as string) ?? newTemplate.surveyId;

      if (newQuestion.backButton) {
        newQuestion.backButton.content =
          (formData.get(`${questionId}-backButton`) as string) ??
          newQuestion.backButton.content;
      }

      newQuestion.options[optionIndex] = newOption;
    });

    newTemplate.questions[index] = newQuestion;
  });
  return newTemplate;
};

function getThemeData(formData: FormData, originalTheme: Theme) {
  const theme: Theme = { ...originalTheme };
  theme.width = (formData.get('theme-width') as string) ?? originalTheme.width;
  theme.general.bgColor =
    (formData.get('theme-general-bgColor') as string) ??
    originalTheme.general.bgColor;
  theme.general.bgColorHeader =
    (formData.get('theme-general-caption-bgColor') as string) ??
    originalTheme.general.bgColorHeader;
  theme.general.primaryFontColor =
    (formData.get('theme-general-primary-font-color') as string) ??
    originalTheme.general.primaryFontColor;
  theme.general.secondaryFontColor =
    (formData.get('theme-general-secondary-font-color') as string) ??
    originalTheme.general.secondaryFontColor;
  theme.options.bgColor =
    (formData.get('theme-option-bgColor') as string) ??
    originalTheme.options.bgColor;
  theme.options.bgColorHover =
    (formData.get('theme-option-hover-bgColor') as string) ??
    originalTheme.options.bgColorHover;
  theme.options.bgColorActive =
    (formData.get('theme-option-active-bgColor') as string) ??
    originalTheme.options.bgColorActive;
  theme.options.border =
    (formData.get('theme-option-border-color') as string) ??
    originalTheme.options.border;
  theme.options.borderHover =
    (formData.get('theme-option-hover-border-color') as string) ??
    originalTheme.options.borderHover;
  theme.options.borderActive =
    (formData.get('theme-option-active-border-color') as string) ??
    originalTheme.options.borderActive;
  theme.options.primaryFontColor =
    (formData.get('theme-option-primary-font-color') as string) ??
    originalTheme.options.primaryFontColor;
  theme.options.primaryFontColorActive =
    (formData.get('theme-option-active-primary-font-color') as string) ??
    originalTheme.options.primaryFontColorActive;
  theme.options.secondaryFontColor =
    (formData.get('theme-option-secondary-font-color') as string) ??
    originalTheme.options.secondaryFontColor;
  theme.options.secondaryFontColorActive =
    (formData.get('theme-option-active-secondary-font-color') as string) ??
    originalTheme.options.secondaryFontColorActive;
  theme.buttons.bgColor =
    (formData.get('theme-button-bgColor') as string) ??
    originalTheme.buttons.bgColor;
  theme.buttons.primaryFontColor =
    (formData.get('theme-button-primary-font-color') as string) ??
    originalTheme.buttons.primaryFontColor;

  return theme;
}
