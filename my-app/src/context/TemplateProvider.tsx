'use client';
import { useLocale } from '@/context/LocaleProvider';
import { LOCALES } from '@/utils/constants';
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
  const [template, setTemplate] = useState<Record<string, Config>>();

  const handleInputSurveyId = (event: ChangeEvent) => {
    const surveyId = (event.target as HTMLInputElement).value;
    setSurveyId(surveyId);
  };

  const getAllTemplates = async (surveyId: string) => {
    const result: Record<string, Config> = {};
    const promises = LOCALES.map(async (locale) => {
      const templateUrl = `https://web-static-stage.cyberlink.com/app/survey/config/${surveyId}/${locale}.json`;
      return fetch(templateUrl)
        .then((res) => res.json())
        .then((res) => res as Config);
    });
    await Promise.all(promises).then((data) => {
      LOCALES.forEach((locale, index) => {
        result[locale] = data[index];
      });
    });
    setTemplate(result);
  };

  useEffect(() => {
    if (surveyId) {
      getAllTemplates(surveyId).then();
    }
  }, [surveyId]);

  useEffect(() => {
    if (template) {
      setSurveyId(template[selection].surveyId);
    }
  }, [selection]);

  return (
    <Ctx.Provider value={{ template }}>
      <div className="flex w-full flex-col gap-2 px-8">
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
              template && template[selection]
                ? `https://web-static-stage.cyberlink.com/app/survey/config/${template[selection].surveyId}/${selection}.json`
                : undefined
            }
          >
            {template && template[selection]
              ? `https://web-static-stage.cyberlink.com/app/survey/config/${template[selection].surveyId}/${selection}.json`
              : 'N/A'}
          </a>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col">{children}</div>
    </Ctx.Provider>
  );
};

const Ctx = createContext<{
  template?: Record<string, Config>;
}>({});

export const useTemplate = () => useContext(Ctx);
