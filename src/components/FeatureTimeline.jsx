import React, { useState } from "react";

export default function FeatureTimeline({ features }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeFeature = features[activeIdx];
  const currentFeatures = activeFeature.features || [];

  return (
    <div className="flex flex-col items-center p-12 relative bg-dbm-db-300 shadow-lg border-t-4 border-dbm-pr-100">
      {/* Main Tabs at the top */}
      <div className="flex w-full justify-center mb-8 flex-wrap gap-2">
        {features.map((feature, idx) => (
          <button
            key={feature.title}
            onClick={() => setActiveIdx(idx)}
            className={`px-6 pt-3 rounded-lg font-semibold transition-colors text-lg
              ${activeIdx === idx
                ? "bg-dbm-pr-100 text-white"
                : "bg-dbm-db-100 text-dbm-pr-100 hover:bg-dbm-pr-100/20"}
            `}
          >
            {feature.title}
          </button>
        ))}
      </div>
      {/* Main block with image, title, description, and features at the bottom */}
      <div className="w-full flex flex-col md:flex-row items-stretch justify-between rounded-xl p-8 md:min-h-[400px]">
        {/* Image - 2/3 width */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center relative">
          <img
            src={activeFeature.img}
            alt={activeFeature.title}
            className="rounded-xl w-full max-w-[1200px] object-contain"
          />
        </div>
        {/* Title/Description and Features - 1/3 width */}
        <div className="w-full md:w-1/3 flex flex-col h-full pt-4 md:pt-0 md:min-h-[600px] justify-between">
          <div className="h-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-dbm-pr-100 mb-2">
              {activeFeature.title}
            </h2>
            <p className="text-base md:text-lg text-dbm-w-200">
              {activeFeature.text}
            </p>
          </div>
          {/* Features section aligned to the bottom */}
          <div className="md:h-1/2 mt-4 md:mt-0 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-dbm-pr-100 mb-4">Features</h3>
            <ul className="flex flex-wrap gap-4">
              {currentFeatures.length > 0 ? (
                currentFeatures.map((f, i) => (
                  <li
                    key={i}
                    className="bg-dbm-db-100 text-dbm-pr-100 px-4 py-2 rounded-lg shadow"
                  >
                    {f}
                  </li>
                ))
              ) : (
                <li className="text-dbm-w-400">No features listed.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}