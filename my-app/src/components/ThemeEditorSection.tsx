import { Accordion } from '@/components/Accordion';
import { ColorSelector } from '@/components/ColorSelector';
import { InputSection } from '@/components/InputSection';

export const ThemeEditorSection = ({
  theme,
  locale,
}: {
  theme: Theme;
  locale: string;
}) => {
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
              name={`theme-width-${locale}`}
              defaultValue={theme.width}
            />
            <label className="font-semibold">General Styles</label>
            <ul className="flex w-full list-disc flex-col gap-2">
              <li className="ml-6">
                <ColorSelector
                  label="Background Color"
                  name={`theme-general-bgColor-${locale}`}
                  defaultValue={theme.general.bgColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Caption Background Color"
                  name={`theme-general-caption-bgColor-${locale}`}
                  defaultValue={theme.general.bgColorHeader}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name={`theme-general-primary-font-color-${locale}`}
                  defaultValue={theme.general.primaryFontColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Secondary Font Color"
                  name={`theme-general-secondary-font-color-${locale}`}
                  defaultValue={theme.general.secondaryFontColor}
                />
              </li>
            </ul>
            <label className="font-semibold">Option Styles</label>
            <ul className="flex w-full list-disc flex-col gap-2">
              <li className="ml-6">
                <ColorSelector
                  label="Background Color(Default)"
                  name={`theme-option-bgColor-${locale}`}
                  defaultValue={theme.options.bgColor}
                />
              </li>
              <li className="ml-6">
                <InputSection
                  label="Background Color(Hover)"
                  name={`theme-option-hover-bgColor-${locale}`}
                  defaultValue={theme.options.bgColorHover}
                />
              </li>
              <li className="ml-6">
                <InputSection
                  label="Background Color(Active)"
                  name={`theme-option-active-bgColor-${locale}`}
                  defaultValue={theme.options.bgColorActive}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Border Color(Default)"
                  name={`theme-option-border-color-${locale}`}
                  defaultValue={theme.options.border}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Border Color(Hover)"
                  name={`theme-option-hover-border-color-${locale}`}
                  defaultValue={theme.options.borderHover}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Border Color(Active)"
                  name={`theme-option-active-border-color-${locale}`}
                  defaultValue={theme.options.borderActive}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name={`theme-option-primary-font-color-${locale}`}
                  defaultValue={theme.options.primaryFontColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color(Active)"
                  name={`theme-option-active-primary-font-color-${locale}`}
                  defaultValue={theme.options.primaryFontColorActive}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Secondary Font Color"
                  name={`theme-option-secondary-font-color-${locale}`}
                  defaultValue={theme.options.secondaryFontColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Secondary Font Color(Active)"
                  name={`theme-option-active-secondary-font-color-${locale}`}
                  defaultValue={theme.options.secondaryFontColorActive}
                />
              </li>
            </ul>
            <label className="font-semibold">Button Styles</label>
            <ul className="flex w-full list-disc flex-col gap-2">
              <li className="ml-6">
                <ColorSelector
                  label="Background Color"
                  name={`theme-button-bgColor-${locale}`}
                  defaultValue={theme.buttons.button.bgColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name={`theme-button-hover-bgColor-${locale}`}
                  defaultValue={theme.buttons.button.bgColorHover}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name={`theme-button-disable-bgColor-${locale}`}
                  defaultValue={theme.buttons.button.bgColorDisabled}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name={`theme-button-font-color-${locale}`}
                  defaultValue={theme.buttons.button.primaryFontColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name={`theme-button-disable-font-color-${locale}`}
                  defaultValue={theme.buttons.button.disabledFontColor}
                />
              </li>
            </ul>
            <label className="font-semibold">Back Button Styles</label>
            <ul className="flex w-full list-disc flex-col gap-2">
              <li className="ml-6">
                <ColorSelector
                  label="Background Color"
                  name={`theme-back-button-bgColor-${locale}`}
                  defaultValue={theme.buttons.backButton.bgColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name={`theme-back-button-hover-bgColor-${locale}`}
                  defaultValue={theme.buttons.backButton.bgColorHover}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name={`theme-back-button-disable-bgColor-${locale}`}
                  defaultValue={theme.buttons.backButton.bgColorDisabled}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name={`theme-back-button-font-color-${locale}`}
                  defaultValue={theme.buttons.backButton.primaryFontColor}
                />
              </li>
              <li className="ml-6">
                <ColorSelector
                  label="Primary Font Color"
                  name={`theme-back-button-disable-font-color-${locale}`}
                  defaultValue={
                    theme.buttons.backButton.disabledFontColor
                  }
                />
              </li>
            </ul>
          </>
        )}
      </div>
    </Accordion>
  );
};
