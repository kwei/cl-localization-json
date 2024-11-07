interface Config {
	surveyId: string;
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