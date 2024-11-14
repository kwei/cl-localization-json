export const retrieveFormData = (
  template: Config,
  formData: FormData,
  locale: string,
) => {
  const newTemplate: Config = JSON.parse(JSON.stringify(template));
  newTemplate.theme = getThemeData(formData, newTemplate.theme, locale);

  template.questions.forEach((questionConfig, index) => {
    const questionId = questionConfig.questionId;
    const newQuestion = { ...newTemplate.questions[index] };
    newQuestion.question =
      (formData.get(`${questionId}-question-${locale}`) as string) ??
      newQuestion.question;
    newQuestion.description =
      (formData.get(`${questionId}-description-${locale}`) as string) ??
      newQuestion.description;

    questionConfig.options.forEach((_, optionIndex) => {
      const newOption = { ...newQuestion.options[optionIndex] };
      newOption.content =
        (formData.get(
          `${questionId}-option-${optionIndex}-content-${locale}`,
        ) as string) ?? newOption.content;

      newOption.description =
        (formData.get(
          `${questionId}-option-${optionIndex}-description-${locale}`,
        ) as string) ?? newOption.description;

      newOption.placeholder =
        (formData.get(
          `${questionId}-option-${optionIndex}-placeholder-${locale}`,
        ) as string) ?? newOption.placeholder;

      newQuestion.button.content =
        (formData.get(`${questionId}-button-${locale}`) as string) ??
        newQuestion.button.content;

      newQuestion.type =
        (formData.get(`${questionId}-type-${locale}`) as
          | 'singleChoice'
          | 'multipleChoice') ?? newQuestion.type;

      newQuestion.column =
        Number(formData.get(`${questionId}-column-${locale}`) as '3' | '4') ??
        newQuestion.column;

      newTemplate.surveyId =
        (formData.get(`surveyId-${locale}`) as string) ?? newTemplate.surveyId;

      if (newQuestion.backButton) {
        newQuestion.backButton.content =
          (formData.get(`${questionId}-backButton-${locale}`) as string) ??
          newQuestion.backButton.content;
      }

      newQuestion.options[optionIndex] = newOption;
    });

    newTemplate.questions[index] = newQuestion;
  });
  return newTemplate;
};

function getThemeData(
  formData: FormData,
  originalTheme: Theme,
  locale: string,
) {
  const theme: Theme = { ...originalTheme };
  theme.width =
    (formData.get(`theme-width-${locale}`) as string) ?? originalTheme.width;
  theme.general.bgColor = (
    (formData.get(`theme-general-bgColor-${locale}`) as string) ??
    originalTheme.general.bgColor
  ).toUpperCase();
  theme.general.bgColorHeader = (
    (formData.get(`theme-general-caption-bgColor-${locale}`) as string) ??
    originalTheme.general.bgColorHeader
  ).toUpperCase();
  theme.general.primaryFontColor = (
    (formData.get(`theme-general-primary-font-color-${locale}`) as string) ??
    originalTheme.general.primaryFontColor
  ).toUpperCase();
  theme.general.secondaryFontColor = (
    (formData.get(`theme-general-secondary-font-color-${locale}`) as string) ??
    originalTheme.general.secondaryFontColor
  ).toUpperCase();
  theme.options.bgColor = (
    (formData.get(`theme-option-bgColor-${locale}`) as string) ??
    originalTheme.options.bgColor
  ).toUpperCase();
  theme.options.bgColorHover =
    (formData.get(`theme-option-hover-bgColor-${locale}`) as string) ??
    originalTheme.options.bgColorHover;
  theme.options.bgColorActive =
    (formData.get(`theme-option-active-bgColor-${locale}`) as string) ??
    originalTheme.options.bgColorActive;
  theme.options.border = (
    (formData.get(`theme-option-border-color-${locale}`) as string) ??
    originalTheme.options.border
  ).toUpperCase();
  theme.options.borderHover = (
    (formData.get(`theme-option-hover-border-color-${locale}`) as string) ??
    originalTheme.options.borderHover
  ).toUpperCase();
  theme.options.borderActive = (
    (formData.get(`theme-option-active-border-color-${locale}`) as string) ??
    originalTheme.options.borderActive
  ).toUpperCase();
  theme.options.primaryFontColor = (
    (formData.get(`theme-option-primary-font-color-${locale}`) as string) ??
    originalTheme.options.primaryFontColor
  ).toUpperCase();
  theme.options.primaryFontColorActive = (
    (formData.get(
      `theme-option-active-primary-font-color-${locale}`,
    ) as string) ?? originalTheme.options.primaryFontColorActive
  ).toUpperCase();
  theme.options.secondaryFontColor = (
    (formData.get(`theme-option-secondary-font-color-${locale}`) as string) ??
    originalTheme.options.secondaryFontColor
  ).toUpperCase();
  theme.options.secondaryFontColorActive = (
    (formData.get(
      `theme-option-active-secondary-font-color-${locale}`,
    ) as string) ?? originalTheme.options.secondaryFontColorActive
  ).toUpperCase();
  theme.buttons.bgColor = (
    (formData.get(`theme-button-bgColor-${locale}`) as string) ??
    originalTheme.buttons.bgColor
  ).toUpperCase();
  theme.buttons.primaryFontColor = (
    (formData.get(`theme-button-primary-font-color-${locale}`) as string) ??
    originalTheme.buttons.primaryFontColor
  ).toUpperCase();

  return theme;
}
