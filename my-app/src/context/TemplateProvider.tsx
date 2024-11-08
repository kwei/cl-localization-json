'use client';
import { useLocale } from '@/context/LocaleProvider';
import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

export const TemplateProvider = ({ children }: { children: ReactNode }) => {
  const { selection } = useLocale();
  const [surveyId, setSurveyId] = useState('1bJ8kLz9Xd');
  const [template, setTemplate] = useState<Config>();
  const [currentTemplateLocale, setCurrentTemplateLocale] = useState(selection);

  const handleInputSurveyId = (event: ChangeEvent) => {
    const surveyId = (event.target as HTMLInputElement).value;
    setSurveyId(surveyId);
  };

  useEffect(() => {
    const templateUrl = `https://web-static-stage.cyberlink.com/app/survey/config/${surveyId}/${selection}.json`;
    setCurrentTemplateLocale(selection);
    if (templateUrl) {
      fetch(templateUrl)
        .then((res) => res.json())
        .then((data) => {
          setTemplate(data);
          setSurveyId(data.surveyId);
        });
    }
  }, [surveyId, selection]);

  return (
    <Ctx.Provider value={{ template }}>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center gap-2 p-2">
          <span className="font-semibold">Survey ID</span>
          <input
            className="rounded-md border border-solid border-foreground bg-transparent px-2 py-1"
            type="text"
            value={surveyId}
            onChange={handleInputSurveyId}
          />
        </div>
        <div className="flex w-full items-center gap-2 p-2">
          <span className="font-semibold">Current Template:</span>
          <a
            href={
              template
                ? `https://web-static-stage.cyberlink.com/app/survey/config/${template.surveyId}/${currentTemplateLocale}.json`
                : undefined
            }
          >
            {template
              ? `https://web-static-stage.cyberlink.com/app/survey/config/${template.surveyId}/${currentTemplateLocale}.json`
              : 'N/A'}
          </a>
        </div>
      </div>
      <div className="relative w-full flex-1 py-4">{children}</div>
    </Ctx.Provider>
  );
};

const Ctx = createContext<{
  template?: Config;
}>({});

export const useTemplate = () => useContext(Ctx);
