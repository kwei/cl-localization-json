import { EditorContainer } from '@/components/EditorContainer';
import { LocaleButton } from '@/components/LocaleButton';
import { LocaleProvider } from '@/context/LocaleProvider';
import { TemplateProvider } from '@/context/TemplateProvider';
import { LOCALES } from '@/utils/constants';

export default function Home() {
  return (
    <div className="w-full min-w-[700px] gap-4 p-8">
      <LocaleProvider>
        <TemplateProvider>
          <div className="grid w-full grid-cols-4 gap-4">
            <div className="col-span-1 flex flex-col gap-2">
              {LOCALES.map((locale) => (
                <LocaleButton
                  key={locale}
                  label={`${locale}.json`}
                  value={locale}
                />
              ))}
            </div>
            <div className="col-span-3">
              <EditorContainer />
            </div>
          </div>
        </TemplateProvider>
      </LocaleProvider>
    </div>
  );
}
