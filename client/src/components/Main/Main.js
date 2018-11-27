import React from "react";

const Main = (props) => (
  <div className="container">
    <h1 className="display-4 text-center">Dungeons & Dragons Character Creator</h1>
    <h5 className="text-center">5th Edition Basic Rules</h5>

    <hr />

    <p className="lead text-justify">
      Dungeons & Dragons, a tabletop roleplaying game by Wizards of the Coast, is a great way to have a good time with friends. However, in the past, it was a difficult hobby to get involved with, due to a steep learning curve full of numbers, and expensive rulebooks. The 5th edition, however, is much more streamlined, and offers a set of basic rules for free online. It's never been easier to get started! Still, even with a simpler system, character creation remains a daunting task for those unfamiliar with the system, and that's where this site hopes to help.
  </p>

    <p>
      By logging in, you can access the character creation page. You can create your character in whatever order you want, and other aspects of character creation will adapt to what you have or haven't completed. Not every option listed in the Basic Rules is available here; the optional Feats rule, for example, is not included. And of course, only options availble in the Basic Rules can be found here; options included in the Players Handbook or other rulebook expansions are not available.
  </p>

    <p>
      Without logging in, you can still look through characters that other users have created, if they're available to the public. By seeing what other people have created, you might be inspired for your own characters!
  </p>

    <p>
      The Dungeons & Dragons 5th Edition Basic Rules can be found online on <a href="http://dnd.wizards.com/products/tabletop/players-basic-rules" target="_blank" rel="noopener noreferrer">Wizards of the Coast's website,</a> and is available as a PDF download <a href="http://dnd.wizards.com/articles/features/basicrules" target="_blank" rel="noopener noreferrer">from this page.</a>
    </p>

    <hr />

    <h4 className="text-center">Credits</h4>

    <p>
      Dungeons & Dragons, D&D, their respective logos, and all Wizards titles and characters are property of Wizards of the Coast LLC in the U.S.A. and other countries.
  </p>

    <h5>Icons</h5>

    <p><u>Races</u></p>

    <p>Human Icon: <a href="https://game-icons.net/lorc/originals/boomerang-sun.html" target="_blank" rel="noopener noreferrer"> Boomerang Sun by Lorc</a></p>

    <p><u>Classes</u></p>

    <p>Fighter Icon: <a href="https://game-icons.net/lorc/originals/battle-gear.html" target="_blank" rel="noopener noreferrer"> Battle Gear by Lorc</a></p>

    <p><u>Backgrounds</u></p>

    <p>Soldier Icon: <a href="https://game-icons.net/cathelineau/originals/swordman.html" target="_blank" rel="noopener noreferrer"> Swordman Icon by Cathelineau</a></p>
  </div>
)

export default Main;