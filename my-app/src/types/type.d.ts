interface Config {
  surveyId: string;
  theme: Theme;
  product: 'PHD' | 'PDR';
  questions: Question[];
}

interface Question {
  questionId: string;
  column: number;
  type: 'singleChoice' | 'multipleChoice';
  question: string;
  description: string;
  options: Option[];
  button: {
    value: string; // This is used for tracking.
    content: string; // This is localized.
  };
  backButton?: {
    value: string; // This is used for tracking.
    content: string; // This is localized.
  };
}

type Option = {
  value: string; // This is used for tracking.
  content?: string; // This is localized.
  description?: string;
  iconUrl?: string;
  enableInput?: boolean;
  placeholder?: string;
};

interface Theme {
  width: string;
  general: {
    bgColor: string;
    bgColorHeader: string;
    primaryFontColor: string;
    secondaryFontColor: string;
  };
  options: OptionTheme;
  buttons: {
    bgColor: string;
    primaryFontColor: string;
  };
}

type OptionTheme = {
  bgColor: string;
  border: string;
  bgColorHover: string;
  borderHover: string;
  bgColorActive: string;
  borderActive: string;
  primaryFontColor: string;
  secondaryFontColor: string;
  primaryFontColorActive: string;
  secondaryFontColorActive: string;
};
