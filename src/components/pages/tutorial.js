import React, { Component } from "react";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div className="intro-text">
        So, Snake has never really been known as a complex game with a system
        that requires a lot of thought, but hey, it doesn't hurt to review the
        basics, right?
      </div>

      <div className="snake-display-wrapper">
        <div className="snake-img">
          <img
            src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/snakebites_what_you_need_to_know_slideshow/650x350_snakebites_what_you_need_to_know_slideshow.jpg"
            alt="snek"
          />
        </div>

        <div className="snake-text">
          Ah yes, the snake. The main character who you control in it's
          neverending quest to eat and grow. Now, we'll get into what you need
          to eat and how to control him later. For now, all you need to know in
          this section is that as the snake, in order to avoid a game over, you
          must avoid biting your own tail and smashing your nose on the outer
          walls!
        </div>
      </div>

      <div className="apple-display-wrapper">
        <div className="fruit-img">
          <img
            src="https://salixfruits.com/assets/img/apples-02.jpg"
            alt="fruit"
          />
        </div>
        <div className="apple-text">
          The apple is the chosen food of our intrepid critter. There is no
          specific button needed to munch on this little red treat. Just aim
          your snake to face the apple, and CHARGE!
        </div>
      </div>

      <div className="controls-display-wrapper">
        <div className="game-img">
          <img
            src="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/03/XboxSeriesXController_Inline1.jpg?w=1200"
            alt="controller"
          />
        </div>

        <div className="controls-text">
          In order to make your snake move, you will be using the arrow keys
          located on the bottom right side of your keyboard. There is no
          diagonal movement. You can only move straight with ninety degree turns
          available.
        </div>
      </div>

      <div className="issued-challenge">
        So there you have it! The super complex tutorial in all of it's
        splendor! You've read it, and hopefully taken notes, but can you become
        the ultimate slithery apple muncher? Feel free to test your skill by
        clicking the PLAY link at the top of the page!
      </div>
    </div>
  );
}
