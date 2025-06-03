import InstaIcon from '../assets/icons/insta.svg';
import XSocial from '../assets/icons/x-social.svg';
import TiktokIcon from '../assets/icons/tiktok.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5
    border-t border-white/20">
      <div className="container">
        <div className='flex flex-col sm:flex-row justify-between gap-4'>
          <div className="text-center">
            © 2025 BSoftwareDev, Inc. All rights reserved
          </div>
          <ul className='flex justify-center gap-2.5'>
            <li><XSocial /></li>
            <li><InstaIcon /></li>
            <li><TiktokIcon /></li>
            <li><YoutubeIcon /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
