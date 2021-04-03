import React from "react";
import "./ReleaseCardStyling.css";

export default function ReleaseCard({ futureReleases }) {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front-1 flip-card-front">
            <h3>{futureReleases[0].feature}</h3>
          </div>
          <div class="flip-card-back">
            <p>{futureReleases[0].description}</p>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front-2 flip-card-front">
            <h3>{futureReleases[1].feature}</h3>
          </div>
          <div class="flip-card-back">
            <p>{futureReleases[1].description}</p>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front-3 flip-card-front">
            <h3>{futureReleases[2].feature}</h3>
          </div>
          <div class="flip-card-back">
            <p>{futureReleases[2].description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
