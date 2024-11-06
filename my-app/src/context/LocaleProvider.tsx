'use client';
import { LOCALES } from '@/utils/constants';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type ContextValue = {
  selection: string;
  setSelection: (_locale: string) => void;
};

const INIT_CONTEXT_VALUE: ContextValue = {
  selection: LOCALES[0],
  setSelection: () => {},
};

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [selection, setSelection] = useState<string>(LOCALES[0]);

  const contextValue = useMemo(
    () => ({
      selection,
      setSelection,
    }),
    [selection],
  );

  return <Ctx.Provider value={contextValue}>{children}</Ctx.Provider>;
};

const Ctx = createContext<ContextValue>(INIT_CONTEXT_VALUE);
export const useLocale = () => useContext(Ctx);
