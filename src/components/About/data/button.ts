import mailAnimation from '../../../assets/lotties/mail-animation.json';
import githubAnimation from '../../../assets/lotties/github-animation.json';
import spotifyAnimation from '../../../assets/lotties/spotify-animation.json';
import whatsappAnimation from '../../../assets/lotties/whatsapp-animation.json';
import instagramAnimation from '../../../assets/lotties/instagram-animation.json';

export const buttons = [
  {
    href: 'mailto:fabriciowashingtondev@gmail.com',
    animationData: mailAnimation,
    ariaLabel: 'Send an email',
  },
  {
    href: 'https://github.com/FabricioWashington',
    animationData: githubAnimation,
    ariaLabel: 'Visit my GitHub',
  },
  {
    href: 'https://www.instagram.com/washington_fbc',
    animationData: instagramAnimation,
    ariaLabel: 'Visit my Instagram',
  },
  {
    href: 'https://api.whatsapp.com/send?phone=5561981870240',
    animationData: whatsappAnimation,
    ariaLabel: 'Send a WhatsApp message',
  },
  {
    href: 'https://open.spotify.com/user/21dtqoigkdg4lcoj26uqp5hzq?si=28ea5e7e1a3c4934&nd=1&dlsi=3e39e81990094bd7',
    animationData: spotifyAnimation,
    ariaLabel: 'Listen to my playlist',
  },
];
