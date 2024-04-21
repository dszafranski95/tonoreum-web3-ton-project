// src\views\Index\Index.tsx
import React from 'react';
import { Hero } from "../../components/Hero/Hero";
import { FAQSection } from "../../components/Faq/FaqSection/FAQSection";
import { UnstoppableApplications } from "../../components/UnstoppableApplications/UnstoppableApplications";
import LatestSection from "../../components/VideoItem/LatestSection";

const Index = () => {
  return (
    <>
      <Hero />
      <FAQSection />
      <UnstoppableApplications />
      <LatestSection />
    </>
  );
};

export default Index;
