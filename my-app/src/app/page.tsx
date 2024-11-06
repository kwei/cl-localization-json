import { EditorSection } from '@/components/EditorSection';
import { LocaleButton } from '@/components/LocaleButton';
import { LocaleProvider } from '@/context/LocaleProvider';
import { LOCALES } from '@/utils/constants';

export default function Home() {
  return (
    <div className="grid w-full min-w-[700px] grid-cols-4 gap-4 p-8">
      <span className="col-span-4 text-sm">
        Select a locale and start editing the translation content. Provide a
        reference JSON link and click load to start editing. After editing,
        click generate to get a complete JSON file.
        <br />
        <span className="text-yellow-500">
          Note that whenever you switch locales, the editing content will be
          reset. Please make sure to click generate before switching locales.
        </span>
      </span>
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
