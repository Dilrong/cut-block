"use client";
import React, { useState } from "react";

function PortfolioList() {
  const youtubeList = [
    "b7aGlfDxECs",
    "1RH0SN6lHbQ",
    "4_kOenxO7cI",
    "xletAQFG5e8",
    "C05HZWkUfpU",
    "hEozDlVci-w",
    "7QnE2dZnMmM",
    "aHf5QRDCJNU",
    "774pKxQpGGc",
    "v5EHbEla4J8",
    "rFVovOsfUlQ",
    "HifiH8BSlb8",
    "OwipIspVrTE",
    "uMRMBxtIaKw",
    "B-TLTRvfDDg",
    "UO-BGI_l5mU",
    "QZfzj5oBHyQ",
    "TmtisanenLI",
    "1tMSiN30KQI",
    "iq9vcAkTrWs",
    "2duaYr3rIK4",
    "jjoVDr0LDNg",
    "81B_-x3dDp4",
    "XlfhvUEDWfs",
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleThumbnailClick = (videoId: any) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mx-4">
      {youtubeList.map((link, index) => (
        <div key={index} style={{ position: "relative" }}>
          <img
            src={`https://img.youtube.com/vi/${link}/maxresdefault.jpg`}
            width="480"
            height="270"
            alt={`Thumbnail ${index + 1}`}
            style={{ cursor: "pointer" }}
            onClick={() => handleThumbnailClick(link)}
          />
          {selectedVideo === link && (
            <iframe
              title="YouTube video"
              width="480"
              height="270"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              frameBorder="0"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            ></iframe>
          )}
        </div>
      ))}
    </div>
  );
}

export default PortfolioList;
