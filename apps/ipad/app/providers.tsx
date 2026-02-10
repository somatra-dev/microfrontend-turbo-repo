'use client';

import React from 'react';
import { StoreProvider } from '../../../packages/ui/src/lib/store/provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
