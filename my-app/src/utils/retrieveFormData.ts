export const retrieveFormData = (template: Config, formData: FormData) => {
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
      const button = formData.get(`${questionId}-button`) as string;
      const backButton = formData.get(`${questionId}-backButton`) as string;
      const type = formData.get(`${questionId}-type`) as
        | 'singleChoice'
        | 'multipleChoice';
      const column = formData.get(`${questionId}-column`) as '3' | '4';

      if (content) {
        newTemplate.questions[index].options[optionIndex].content = content;
      }
      if (description) {
        newTemplate.questions[index].options[optionIndex].description =
          description;
      }
      if (placeholder) {
        newTemplate.questions[index].options[optionIndex].placeholder =
          placeholder;
      }
      if (button) {
        newTemplate.questions[index].button.content = button;
      }
      if (backButton && newTemplate.questions[index].backButton) {
        newTemplate.questions[index].backButton.content = backButton;
      }
      if (type) {
        newTemplate.questions[index].type = type;
      }
      if (column) {
        newTemplate.questions[index].column = Number(column);
      }
    });
  });
  return newTemplate;
};
