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
            <label className="font-semibold">Option Styles</label>
            <ul className="flex w-full list-disc flex-col gap-2">
              <li className="ml-6">
                <ColorSelector
                  label="Background Color(Default)"
                  name="theme-option-bgColor"
                  defaultValue={theme.options.bgColor}
                />
              </li>
              <li className="ml-6">
                <InputSection
                  label="Background Color(Hover)"
                  name="theme-option-hover-bgColor"
                  defaultValue={theme.options.bgColorHover}
                />
              </li>
              <li className="ml-6">
                <InputSection
                  label="Background Color(Active)"
                  name="theme-option-active-bgColor"
                  defaultValue={theme.options.bgColorActive}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Border Color(Default)"
                  name="theme-option-border-color"
                  defaultValue={theme.options.border}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Border Color(Hover)"
                  name="theme-option-hover-border-color"
                  defaultValue={theme.options.borderHover}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Border Color(Active)"
                  name="theme-option-active-border-color"
                  defaultValue={theme.options.borderActive}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name="theme-option-primary-font-color"
                  defaultValue={theme.options.primaryFontColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color(Active)"
                  name="theme-option-active-primary-font-color"
                  defaultValue={theme.options.primaryFontColorActive}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Secondary Font Color"
                  name="theme-option-secondary-font-color"
                  defaultValue={theme.options.secondaryFontColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Secondary Font Color(Active)"
                  name="theme-option-active-secondary-font-color"
                  defaultValue={theme.options.secondaryFontColorActive}
                />
              </li>
            </ul>
            <label className="font-semibold">Button Styles</label>
            <ul className="flex w-full list-disc flex-col gap-2">
              <li className="ml-6">
                <ColorSelector
                  label="Background Color"
                  name="theme-button-bgColor"
                  defaultValue={theme.buttons.bgColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name="theme-button-primary-font-color"
                  defaultValue={theme.buttons.primaryFontColor}
                />
              </li>
            </ul>
          </>
        )}
      </div>
    </Accordion>
  );
};
