import React, { useState } from "react";

export default function FeatureTimeline({ features }) {
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const activeFeature = features[activeFeatureIdx];
  const currentImages = activeFeature.images || [];
  const currentFeatures = activeFeature.features || [];
  const activeImage = currentImages[activeImageIdx] || currentImages[0];

  return (
    <div className="flex flex-col items-center px-4 md:px-8 py-12 relative bg-dbm-db-300 shadow-lg border-t-4 border-dbm-pr-100">
      {/* Why This App Is Necessary Section */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-dbm-pr-100 mb-4">
          Why Butterfly
        </h2>
        <div className="text-base md:text-xl text-dbm-w-200 space-y-4">
          <p>
            Many productivity tools are built around assumptions of consistency, linear thinking, and sustained attention. For neurodivergent users—particularly those with ADHD—these assumptions can turn "helpful" tools into sources of friction, guilt, and overwhelm. Fragmented systems, dense interfaces, and rigid workflows often increase cognitive load rather than reduce it, making it harder to start, prioritize, or maintain momentum.
          </p>
          <p>
            Butterfly was designed in response to those gaps. Instead of asking users to adapt to the tool, Butterfly adapts to the user by emphasizing clarity, flexibility, and cognitive accessibility. Tasks are broken down into manageable steps, time is made visible rather than abstract, and planning is centralized to reduce context switching. The result is a system that supports focus, lowers the activation energy required to begin work, and respects diverse ways of thinking—positioning productivity not as optimization, but as accessibility.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="w-full mb-8 flex flex-wrap justify-center gap-2 md:gap-4">
        {features.map((feature, idx) => (
          <button
            key={feature.title}
            onClick={() => {
              setActiveFeatureIdx(idx);
              setActiveImageIdx(0);
            }}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base
              ${activeFeatureIdx === idx
                ? "bg-dbm-pr-100 text-white"
                : "bg-dbm-db-100 text-dbm-pr-100 hover:bg-dbm-pr-100/20"}
            `}
          >
            {feature.title}
          </button>
        ))}
      </div>

      {/* Main block with image and thumbnails */}
      <div className="w-full flex flex-col items-center gap-3 mb-6">
        {/* Main image - full width */}
        <div className="w-full flex items-center justify-center min-h-[300px] md:min-h-[400px]">
          <img
            src={activeImage}
            alt={activeFeature.title}
            className="rounded-xl w-full max-w-6xl h-auto object-contain"
          />
        </div>

        {/* Thumbnail images - underneath main image */}
        {currentImages.length > 1 && (
          <div className="flex gap-3 justify-center flex-wrap">
            {currentImages.map((img, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveImageIdx(idx)}
                onClick={() => setActiveImageIdx(idx)}
                className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 hover:scale-110"
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Title and description */}
      <div className="w-full max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-dbm-pr-100 mb-3">
            {activeFeature.title}
          </h2>
          <p className="text-base md:text-lg text-dbm-w-200">
            {activeFeature.text}
          </p>
        </div>
    </div>
  );
}