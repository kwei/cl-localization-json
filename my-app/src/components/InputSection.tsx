import { HTMLInputTypeAttribute } from 'react';

interface Props {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  defaultValue: string;
}

export const InputSection = (props: Props) => {
  return (
    <div className="flex w-full items-center gap-2">
      <span className="whitespace-nowrap rounded py-1 font-semibold">
        {props.label}:
      </span>
      <input
        className="w-full border-b border-solid border-foreground bg-transparent px-2 py-1"
        type={props.type ?? 'text'}
        name={props.name}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};
