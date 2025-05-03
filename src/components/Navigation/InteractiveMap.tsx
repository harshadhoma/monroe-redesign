import React from 'react';
import { Header } from './HeaderComponent';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function FairgroundsMap() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
      <h1 className="text-3xl font-bold text-purple-800 text-center my-6">🗺️ Explore the Fairgrounds</h1>

      <div className="max-w-5xl mx-auto border border-purple-200 rounded-lg overflow-hidden shadow-md bg-white">
        <TransformWrapper
          initialScale={1}
          minScale={0.8}
          maxScale={3}
          centerOnInit
          doubleClick={{ mode: 'zoomIn' }}
          wheel={{ step: 0.15 }}
          panning={{ velocityDisabled: true }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* Zoom Controls */}
              <div className="flex gap-2 justify-end px-4 py-2 bg-purple-100">
                <button
                  className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 text-sm"
                  onClick={() => zoomIn()}
                >
                  Zoom In
                </button>
                <button
                  className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 text-sm"
                  onClick={() => zoomOut()}
                >
                  Zoom Out
                </button>
                <button
                  className="bg-gray-300 text-purple-700 px-3 py-1 rounded hover:bg-gray-400 text-sm"
                  onClick={() => resetTransform()}
                >
                  Reset
                </button>
              </div>

              {/* Map Image */}
              <TransformComponent>
                <img
                  src="/assets/map.png"
                  alt="Fairground Map"
                  className="w-full max-h-[85vh] object-contain select-none"
                  draggable={false}
                />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
}
