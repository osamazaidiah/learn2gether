import React from "react";

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div
    style={{
      overflow: "hidden",
      minWidth: "100%"
    }}
  >
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
      allowFullScreen
      title="Embedded youtube"
      style={{
        left: "0px",
        top: "0px",
        height: "350px",
        width: "100%"
      }}
    />
  </div>
);

export default YoutubeEmbed;
