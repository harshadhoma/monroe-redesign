import React, { useState } from 'react';

interface FacebookEmbedProps {
  pageUrl: string;
  tabs?: string;
  width?: string;
  height?: string;
}

export const FacebookEmbed: React.FC<FacebookEmbedProps> = ({
  pageUrl,
  tabs = 'timeline',
  width = '340',
  height = '500',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-purple-100 py-10 px-4 text-center">
      <h3 className="text-xl font-semibold text-purple-800 mb-2 flex justify-center items-center gap-2">
        <span role="img" aria-label="megaphone">📣</span> Follow 4-H on Facebook
      </h3>

      <div className="mb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-purple-600 underline hover:text-purple-800"
        >
          {isExpanded ? 'Hide Facebook Feed' : 'Show Facebook Feed'}
        </button>
      </div>

      {isExpanded && (
        <div className="flex justify-center">
          <div className="w-full max-w-[400px]">
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                pageUrl
              )}&tabs=${tabs}&width=${width}&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
              width="100%"
              height={height}
              style={{ border: 'none', overflow: 'hidden', width: '100%' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full rounded-md shadow"
              title="Facebook Page Embed"
            />
          </div>
        </div>
      )}
    </section>
  );
};