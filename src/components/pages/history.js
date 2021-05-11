import React from "react";

import Armanto from "../../photos/armanto.jpg";
import Logo from "../../photos/logo.png";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div className="history-text">
        Snake is a game that originated on mobile. It is actually the game that
        paved the way for mobile gaming as we see it today. Without further
        adieu, let's begin.
      </div>

      <div className="programmer-company-wrapper">
        <div className="armanto-img">
          <img src={Armanto} alt="programmer" />
        </div>

        <div className="programmer-history-text">
          The man responsible for spearheading the mobile gaming movement is
          Taneli Armanto, a design engineer in Nokia. He took inspiration from
          the arcade game Blockade, which had been released by Gremlin in 1976.
          There was also a PC version of Snake invented in 1978 known as Worm.
          Upon first being released in 1997, Snake was debuted on the Nokia
          6110. This was a huge undertaking, considering that it gave a
          convenient method of communication an added element of entertainment
          which launched the world of mobile gaming. There were other games that
          released on the Nokia platform such as Snake Xenzia, Snake EX 1 and 2,
          Snakes (The first 3D iteration of the game,) Snake II and III, and
          Snake Subsonic.
          <div className="fun-fact">
            Fun Fact: There is actually a version of snake built specifically to
            run on certain graphing calculators, such as the TI-89 series
            graphing calculators!
          </div>
        </div>

        <div className="logo">
          <img src={Logo} alt="nokia-logo" />
        </div>
      </div>

      <div className="other-titles-text">
        There have been many other titles released both on the Nokia platform
        and as separate standalone games. I could list them all here, but the
        list is extremely long. If you're interested in viewing all of the
        titles, they can be found at
        https://gamia-archive.fandom.com/wiki/Snake_(video_game)
      </div>
    </div>
  );
}
