'use client';
import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';

interface Props {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  defaultValue: string;
}

export const ColorSelector = (props: Props) => {
  const [newValue, setNewValue] = useState(props.defaultValue);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewValue(event.target.value.toUpperCase());
  };

  return (
    <div className="flex w-full items-center gap-2">
      <span className="whitespace-nowrap rounded py-1 font-semibold">
        {props.label}:
      </span>
      <input
        className="w-6 bg-transparent"
        type="color"
        name={props.name}
        onChange={handleOnChange}
        defaultValue={props.defaultValue}
      />
      <span className="text-sm">({newValue})</span>
    </div>
  );
};
