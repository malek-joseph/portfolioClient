import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a target="_blank"href="https://twitter.com/MalekJoseph2"><BsTwitter /></a>
    </div>
    <div>
      <a target="_blank"href="https://www.linkedin.com/in/malek-joseph/"><BsLinkedin /></a>
    </div>
    <div>
      <a target="_blank"href="https://www.instagram.com/malek_yousef22/?hl=en"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
