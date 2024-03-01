"use client";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ScreenContainer({ children }: Props) {
  return <section className="flex min-h-screen flex-col">{children}</section>;
}

export default ScreenContainer;
