import { EditorSection } from '@/components/EditorSection';
import { LocaleButton } from '@/components/LocaleButton';
import { LocaleProvider } from '@/context/LocaleProvider';
import { LOCALES } from '@/utils/constants';

export default function Home() {
  return (
    <div className="grid w-full grid-cols-4 gap-4 p-8">
      <LocaleProvider>
        <div className="col-span-1 flex flex-col gap-2">
          {LOCALES.map((locale) => (
            <LocaleButton
              key={locale}
              label={`${locale}.json`}
              value={locale}
            />
          ))}
        </div>
        <div className="col-span-3 rounded-xl border border-solid border-foreground p-2">
          <EditorSection />
        </div>
      </LocaleProvider>
    </div>
  );
}
