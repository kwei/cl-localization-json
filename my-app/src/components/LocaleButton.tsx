'use client';

import { useLocale } from '@/context/LocaleProvider';
import { useCallback, useMemo } from 'react';
import ArrowRightIcon from '@/assets/icons/chevron-compact-right.svg';

interface Props {
  label: string;
  value: string;
}

export const LocaleButton = (props: Props) => {
  const { label, value } = props;
  const { selection, setSelection } = useLocale();

  const isSelected = useMemo(() => selection === value, [selection, value]);

  const handleSelect = useCallback(() => {
    setSelection(value);
  }, [value]);

  return (
    <div className={`locale-btn ${isSelected ? 'active' : ''}`}>
      <button
        onClick={handleSelect}
        className="flex flex-1 items-center justify-between p-2 text-left font-semibold"
      >
        <span>{label}</span>
        <ArrowRightIcon alt="choose" />
      </button>
    </div>
  );
};
