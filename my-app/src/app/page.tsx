import { EditorContainer } from '@/components/EditorContainer';
import { LocaleButton } from '@/components/LocaleButton';
import { LocaleProvider } from '@/context/LocaleProvider';
import { TemplateProvider } from '@/context/TemplateProvider';
import { LOCALES } from '@/utils/constants';

export default function Home() {
  return (
    <div className="relative flex w-full min-w-[700px] flex-1 flex-col gap-4 p-8">
      <LocaleProvider>
        <TemplateProvider>
          <div className="absolute bottom-0 left-0 right-0 top-0 grid w-full grid-cols-4 gap-4">
            <div className="col-span-1 flex flex-col gap-2">
              {LOCALES.map((locale) => (
                <LocaleButton
                  key={locale}
                  label={`${locale}.json`}
                  value={locale}
                />
              ))}
            </div>
            <div className="scrollbar col-span-3 flex-1 overflow-y-auto">
              <EditorContainer />
            </div>
          </div>
        </TemplateProvider>
      </LocaleProvider>
    </div>
  );
}
