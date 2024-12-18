import { EditorContainer } from '@/components/EditorContainer';
import { FormContainer } from '@/components/FormContainer';
import { LocaleButton } from '@/components/LocaleButton';
import { LocaleProvider } from '@/context/LocaleProvider';
import { TemplateProvider } from '@/context/TemplateProvider';
import { LOCALES } from '@/utils/constants';

export default function Home() {
  return (
    <div className="relative flex w-full min-w-[700px] flex-1 flex-col gap-4">
      <LocaleProvider>
        <TemplateProvider>
          <FormContainer>
            <div className="grid w-full flex-1 grid-cols-5 gap-4 px-8 py-4">
              <div className="col-span-1 flex flex-col gap-2">
                {LOCALES.map((locale) => (
                  <LocaleButton
                    key={locale}
                    label={`${locale}.json`}
                    value={locale}
                  />
                ))}
              </div>
              <div className="col-span-4 flex-1">
                <EditorContainer />
              </div>
            </div>
          </FormContainer>
        </TemplateProvider>
      </LocaleProvider>
    </div>
  );
}
