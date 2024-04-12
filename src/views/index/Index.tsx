// src\views\Index\Index.tsx
import React from 'react';
import { Hero } from "../../components/Hero/Hero";
import { FAQSection } from "../../components/Faq/FaqSection/FAQSection";
import HeadlinesSection from '../../components/HeadlineSection/headlinesSection';
import { UnstoppableApplications } from "../../components/UnstoppableApplications/UnstoppableApplications";
import LatestSection from "../../components/VideoItem/LatestSection";

const Index = () => {
  return (
    <>
      <Hero />
      <FAQSection />
      <HeadlinesSection />
      <UnstoppableApplications />
      <LatestSection />
    </>
  );
};

export default Index;
