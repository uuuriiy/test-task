"use client";

import { MainLayout } from "componets/MainLayout";
import { Intro } from "componets/Intro";
import { Heros } from "componets/Heros";

export default function Page() {
  return (
    <MainLayout>
      <Intro />
      <Heros />
    </MainLayout>
  );
}
