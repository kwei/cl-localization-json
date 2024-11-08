import { Accordion } from '@/components/Accordion';
import { ColorSelector } from '@/components/ColorSelector';
import { InputSection } from '@/components/InputSection';

export const ThemeEditorSection = ({ theme }: { theme: Theme }) => {
  return (
    <Accordion
      label="Styles"
      className="w-full rounded-lg border border-solid border-foreground px-4 py-2"
    >
      <div className="flex w-full flex-col gap-2 pt-4">
        {theme && (
          <>
            <InputSection
              label="Width"
              name="theme-width"
              defaultValue={theme.width}
            />
            <label className="font-semibold">General Styles</label>
            <ul className="flex w-full list-disc flex-col gap-2">
              <li className="ml-6">
                <ColorSelector
                  label="Background Color"
                  name="theme-general-bgColor"
                  defaultValue={theme.general.bgColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Caption Background Color"
                  name="theme-general-caption-bgColor"
                  defaultValue={theme.general.bgColorHeader}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name="theme-general-primary-font-color"
                  defaultValue={theme.general.primaryFontColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Secondary Font Color"
                  name="theme-general-secondary-font-color"
                  defaultValue={theme.general.secondaryFontColor}
                />
              </li>
            </ul>
          </>
        )}
      </div>
    </Accordion>
  );
};
