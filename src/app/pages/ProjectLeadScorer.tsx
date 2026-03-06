import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects';

const leadScorer = projectsData.find(p => p.id === 'lead-scorer')!;

export function ProjectLeadScorer() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#4B4B4B] hover:text-[#0B0B0C] transition-colors font-['Inter'] mb-12 group"
              style={{ fontSize: '15px', fontWeight: 500 }}
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
            </Link>

            {/* Category */}
            {leadScorer.category && (
              <p
                className="text-[#7A7A7A] font-['Inter'] uppercase tracking-wide mb-3"
                style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.1em' }}
              >
                {leadScorer.category}
              </p>
            )}

            {/* Title */}
            <h1
              className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight mb-4"
              style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 700, lineHeight: '1.1' }}
            >
              {leadScorer.title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-[#4B4B4B] font-['Inter'] mb-6 max-w-3xl"
              style={{ fontSize: '20px', fontWeight: 400, lineHeight: '1.7' }}
            >
              {leadScorer.description}
            </p>

            {/* Tags / Tech Row */}
            <div className="flex flex-wrap items-center gap-3 mb-2 text-sm font-['Inter']">
              <span className="text-[#7A7A7A]" style={{ fontSize: '13px', fontWeight: 400 }}>
                Skills
              </span>
              <span className="text-[#0B0B0C]" style={{ fontSize: '13px', fontWeight: 500 }}>
                {leadScorer.tech.join(' • ')}
              </span>
            </div>
          </div>
        </section>

        {/* Case Study Body */}
        <section className="pb-24 px-6 lg:px-12 border-t border-[#E6E6E6]">
          <div className="max-w-5xl mx-auto space-y-8 pt-16">
            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* Lead Scorer Intro Block */}
            <div className="space-y-4">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '28px', fontWeight: 600, lineHeight: '1.2' }}
              >
                Lead Scorer
              </h2>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                AI System for Prioritizing Business Opportunities
              </p>
              <p
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.3' }}
              >
                Front Page Description
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Lead Scorer is a machine learning system designed to help sales teams prioritize business opportunities
                more effectively. In many companies, sales pipelines contain hundreds of potential leads, but not every
                opportunity deserves equal attention. Some deals are high value but difficult to close, while others are
                easier to convert but offer smaller returns.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Lead Scorer analyzes structured lead data — such as deal value, number of stakeholders, expected sales
                cycle length, and required integrations — to estimate the relative priority of each opportunity. The
                system trains machine learning models to classify leads into High, Medium, or Low priority categories,
                helping teams focus their time on the opportunities most likely to generate value.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The project demonstrates the full lifecycle of a machine learning system: dataset design, synthetic data
                generation, preprocessing, model training, evaluation, and visualization.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The goal of the project was to explore how AI can support operational decision-making in sales pipelines
                while building a reproducible machine learning workflow.
              </p>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* Skills & Technologies */}
            <div className="space-y-4">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.2' }}
              >
                Skills & Technologies
              </h2>

              <div className="space-y-3">
                <p
                  className="text-[#0B0B0C] font-['Space_Grotesk']"
                  style={{ fontSize: '18px', fontWeight: 600, lineHeight: '1.4' }}
                >
                  Programming
                </p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    Python
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <p
                  className="text-[#0B0B0C] font-['Space_Grotesk']"
                  style={{ fontSize: '18px', fontWeight: 600, lineHeight: '1.4' }}
                >
                  Machine Learning
                </p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    Scikit-learn
                  </li>
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    Classification models (Logistic Regression, Decision Trees)
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <p
                  className="text-[#0B0B0C] font-['Space_Grotesk']"
                  style={{ fontSize: '18px', fontWeight: 600, lineHeight: '1.4' }}
                >
                  Data Processing
                </p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    NumPy
                  </li>
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    Pandas
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <p
                  className="text-[#0B0B0C] font-['Space_Grotesk']"
                  style={{ fontSize: '18px', fontWeight: 600, lineHeight: '1.4' }}
                >
                  Data Visualization
                </p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    Matplotlib
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <p
                  className="text-[#0B0B0C] font-['Space_Grotesk']"
                  style={{ fontSize: '18px', fontWeight: 600, lineHeight: '1.4' }}
                >
                  Software Engineering
                </p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    Modular Python architecture
                  </li>
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    Reproducible data pipelines
                  </li>
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    CLI-based tools
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <p
                  className="text-[#0B0B0C] font-['Space_Grotesk']"
                  style={{ fontSize: '18px', fontWeight: 600, lineHeight: '1.4' }}
                >
                  Concepts
                </p>
                <ul className="space-y-1 ml-6 list-disc">
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    Supervised learning
                  </li>
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    Feature engineering
                  </li>
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    Model evaluation
                  </li>
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    Train/test splitting
                  </li>
                  <li
                    className="text-[#4B4B4B] font-['Inter']"
                    style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                  >
                    Synthetic data generation
                  </li>
                </ul>
              </div>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* Learn More / Project Story */}
            <div className="space-y-4">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.2' }}
              >
                Learn More
              </h2>
              <p
                className="text-[#0B0B0C] font-['Space_Grotesk']"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.3' }}
              >
                Project Story
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Sales teams often face a common problem: deciding which opportunities deserve the most attention. In a
                typical pipeline, dozens or hundreds of leads may appear promising, but pursuing every opportunity
                equally can waste time and resources.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                This project explores how machine learning can assist with opportunity prioritization. Instead of relying
                purely on intuition or manual scoring systems, Lead Scorer analyzes structured data associated with each
                lead and estimates its relative priority.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The system models the trade-offs that sales teams naturally consider when evaluating deals. Larger deals
                are often attractive, but they may involve longer sales cycles, more stakeholders, or higher technical
                integration effort. Smaller deals may close quickly but offer less revenue potential.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Lead Scorer attempts to balance these factors by learning patterns in the data and predicting which
                opportunities are most valuable to pursue.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The project was designed as an end-to-end machine learning pipeline that simulates a real-world CRM
                analytics tool.
              </p>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* Research & Design Process / Problem Definition */}
            <div className="space-y-4">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.2' }}
              >
                Research &amp; Design Process
              </h2>
              <p
                className="text-[#0B0B0C] font-['Space_Grotesk']"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.3' }}
              >
                Problem Definition
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The first step was identifying a realistic business problem suitable for machine learning. Sales pipeline
                prioritization was chosen because it naturally involves structured data and decision-making under
                uncertainty.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The project focuses on predicting lead priority levels based on measurable attributes associated with each
                opportunity.
              </p>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* Dataset Design */}
            <div className="space-y-4">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.2' }}
              >
                Dataset Design
              </h2>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Because real CRM data is typically proprietary and difficult to obtain, the project uses a synthetic
                dataset designed to mimic realistic business scenarios.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The dataset includes features commonly found in enterprise sales pipelines:
              </p>
              <ul className="space-y-1 ml-6 list-disc">
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Expected deal value
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Number of stakeholders involved in the decision
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Estimated sales cycle length
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Number of technical integrations required
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Company size
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Estimated effort required to pursue the deal
                </li>
              </ul>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                These variables represent common trade-offs that influence sales decisions.
              </p>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* Synthetic Data Generation */}
            <div className="space-y-4">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.2' }}
              >
                Synthetic Data Generation
              </h2>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                A custom dataset generator was implemented to produce large volumes of realistic lead data. The generator
                models relationships between features to ensure the dataset behaves similarly to real-world sales
                pipelines.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                For example:
              </p>
              <ul className="space-y-1 ml-6 list-disc">
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Larger companies tend to have more stakeholders
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Larger deals often have longer sales cycles
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Deals with many integrations require more effort
                </li>
              </ul>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The generator produces thousands of synthetic leads, each with a set of features and an assigned priority
                label.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                This approach allowed the system to simulate realistic training data while maintaining full
                reproducibility.
              </p>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* Labeling Strategy */}
            <div className="space-y-4">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.2' }}
              >
                Labeling Strategy
              </h2>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Each lead receives a priority score based on a combination of value and complexity factors.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Positive factors include:
              </p>
              <ul className="space-y-1 ml-6 list-disc">
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Higher deal value
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Shorter sales cycles
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Fewer integrations
                </li>
              </ul>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Negative factors include:
              </p>
              <ul className="space-y-1 ml-6 list-disc">
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  High effort requirements
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Many stakeholders
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Long sales cycles
                </li>
              </ul>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The system combines these variables into a numerical score and converts the score into categorical labels
                using quantile thresholds.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The final labels are:
              </p>
              <ul className="space-y-1 ml-6 list-disc">
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  High priority (top 25%)
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Medium priority (middle 50%)
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Low priority (bottom 25%)
                </li>
              </ul>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* Machine Learning Pipeline */}
            <div className="space-y-4">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.2' }}
              >
                Machine Learning Pipeline
              </h2>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The system is structured as a modular machine learning pipeline.
              </p>

              <p
                className="text-[#0B0B0C] font-['Space_Grotesk']"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.3' }}
              >
                1. Data Generation
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                A CLI tool generates synthetic lead datasets containing thousands of samples.
              </p>

              <p
                className="text-[#0B0B0C] font-['Space_Grotesk']"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.3' }}
              >
                2. Preprocessing
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The dataset is cleaned and transformed before training.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Steps include:
              </p>
              <ul className="space-y-1 ml-6 list-disc">
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Feature normalization
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Encoding categorical variables
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Preparing feature matrices for model training
                </li>
              </ul>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* 3. Model Training */}
            <div className="space-y-4">
              <p
                className="text-[#0B0B0C] font-['Space_Grotesk']"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.3' }}
              >
                3. Model Training
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Two baseline classification models were implemented:
              </p>
              <ul className="space-y-1 ml-6 list-disc">
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Logistic Regression
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Decision Tree Classifier
                </li>
              </ul>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                These models learn relationships between lead characteristics and priority labels.
              </p>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* 4. Model Evaluation */}
            <div className="space-y-4">
              <p
                className="text-[#0B0B0C] font-['Space_Grotesk']"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.3' }}
              >
                4. Model Evaluation
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The trained models are evaluated using a standard train/test split.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Performance metrics include:
              </p>
              <ul className="space-y-1 ml-6 list-disc">
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Accuracy
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Precision
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Recall
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Confusion matrix analysis
                </li>
              </ul>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                This allows the system to measure how well the model predicts lead priorities on unseen data.
              </p>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* 5. Opportunity Ranking */}
            <div className="space-y-4">
              <p
                className="text-[#0B0B0C] font-['Space_Grotesk']"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '1.3' }}
              >
                5. Opportunity Ranking
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Once trained, the model can analyze new leads and estimate their priority level.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                This allows the system to simulate how an AI-driven prioritization tool might assist sales teams in
                deciding which opportunities to pursue first.
              </p>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* System Architecture */}
            <div className="space-y-4">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.2' }}
              >
                System Architecture
              </h2>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The project is structured as a modular Python repository.
              </p>
              <pre className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-xl p-4 overflow-x-auto text-sm font-mono text-[#0B0B0C]">
{`src/
  data_gen.py
  preprocess.py
  train.py
  evaluate.py
  ranker.py

data/
  generated/

docs/
  dataset_schema
  labeling_strategy

scripts/
  run_pipeline`}
              </pre>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                This structure separates the different stages of the machine learning pipeline while keeping the system
                easy to extend.
              </p>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* Results */}
            <div className="space-y-4">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.2' }}
              >
                Results
              </h2>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The trained models successfully learned relationships between deal characteristics and lead priority
                levels.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Evaluation results demonstrate that the system can consistently classify leads based on the underlying
                trade-offs between value and effort.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                The project demonstrates how machine learning can be used to simulate operational decision-support systems
                in business environments.
              </p>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* Future Improvements */}
            <div className="space-y-4">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.2' }}
              >
                Future Improvements
              </h2>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                While the current implementation demonstrates the core concepts, several improvements could expand the
                system further.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Potential enhancements include:
              </p>
              <ul className="space-y-1 ml-6 list-disc">
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Incorporating additional CRM features
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Training more advanced models such as gradient boosting
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Adding model explainability tools
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Integrating the system with a real CRM dataset
                </li>
                <li
                  className="text-[#4B4B4B] font-['Inter']"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
                >
                  Building an interactive dashboard interface
                </li>
              </ul>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                These extensions would move the system closer to a production-ready analytics platform.
              </p>
            </div>

            {/* Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>

            {/* Project Outcome */}
            <div className="space-y-4">
              <h2
                className="text-[#0B0B0C] font-['Space_Grotesk'] tracking-tight"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.2' }}
              >
                Project Outcome
              </h2>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Lead Scorer demonstrates the design and implementation of an end-to-end machine learning workflow for
                business decision support. The project highlights how structured data and predictive models can be used to
                assist teams in prioritizing opportunities and allocating resources more effectively.
              </p>
              <p
                className="text-[#4B4B4B] font-['Inter']"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
              >
                Beyond the technical implementation, the project also explores the broader role of AI in supporting
                operational decision-making within modern organizations.
              </p>
            </div>

            {/* Final Separator */}
            <p
              className="text-[#B3B3B3] font-['Inter']"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              ⸻
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

