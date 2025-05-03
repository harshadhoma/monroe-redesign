import React from 'react';

interface FacebookEventsEmbedProps {
  pageUrl: string;
  width?: string;
  height?: string;
}

export const FacebookEventsEmbed: React.FC<FacebookEventsEmbedProps> = ({
  pageUrl,
  width = '340',
  height = '500',
}) => {
  return (
    <section className="bg-purple-100 py-10 px-4 text-center">
      <h3 className="text-xl font-semibold text-purple-800 mb-4 flex justify-center items-center gap-2">
        <span role="img" aria-label="calendar">📅</span> Upcoming Events on Facebook
      </h3>
      <div className="flex justify-center">
        <div className="w-full max-w-[400px]">
          <iframe
            src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
              pageUrl
            )}&tabs=events&width=${width}&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
            width="100%"
            height={height}
            style={{ border: 'none', overflow: 'hidden', width: '100%' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="w-full rounded-md shadow"
            title="Facebook Events"
          />
        </div>
      </div>
    </section>
  );
};
