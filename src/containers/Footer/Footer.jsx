import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Logo from '@/assets/images/logo.svg';
import IconApple from '@/assets/icons/icon-apple.svg';
import IconCloudDownload from '@/assets/icons/icon-cloud-download.svg';
import IconDinosaur from '@/assets/icons/icon-dinosaur.svg';
import IconGooglePlay from '@/assets/icons/icon-google-play.svg';
import IconM from '@/assets/icons/icon-m.svg';
import IconTelegram from '@/assets/icons/icon-telegram.svg';
import IconTwitter from '@/assets/icons/icon-twitter.svg';
import IconYoutube from '@/assets/icons/icon-youtube.svg';
import Particles from '@/components/Particles';
import { EIconColor } from '@/components/Icon';

import './Footer.scss';

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className="Footer">
      <div className="container">
        <div className={classNames('Footer-bg', { active: inView })}>
          <Particles id="FooterParticles" color={EIconColor.AZURE_RADIANCE} />
        </div>

        <div className="Footer-wrapper">
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className="Footer-logo flex items-center justify-center">
              <img src={Logo} alt="" />
              <span className="bebas-neue-font">FIREFOXINU</span>
            </div>
          </AnimationOnScroll>

          <div className="Footer-download">
            <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
              <div className="Footer-download-btn flex items-center">
                <div className="Footer-download-btn-icon">
                  <img src={IconApple} alt="" />
                </div>
                <span className="bebas-neue-font">APP STORE</span>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" delay={200}>
              <div className="Footer-download-btn flex items-center">
                <div className="Footer-download-btn-icon">
                  <img src={IconGooglePlay} alt="" />
                </div>
                <span className="bebas-neue-font">GOOGLE PLAY</span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" delay={300}>
              <div className="Footer-download-btn flex items-center">
                <div className="Footer-download-btn-icon">
                  <img src={IconCloudDownload} alt="" />
                </div>
                <span className="bebas-neue-font">DOWNLOAD APK</span>
              </div>
            </AnimationOnScroll>
          </div>

          <div className="Footer-socials flex items-center justify-center">
            <a className="Footer-socials-item" href="#" target="_blank">
              <img src={IconYoutube} alt="" />
            </a>
            <a className="Footer-socials-item" href="#" target="_blank">
              <img src={IconTelegram} alt="" />
            </a>
            <a className="Footer-socials-item" href="#" target="_blank">
              <img src={IconTwitter} alt="" />
            </a>
            <a className="Footer-socials-item" href="#" target="_blank">
              <img src={IconDinosaur} alt="" />
            </a>
            <a className="Footer-socials-item" href="#" target="_blank">
              <img src={IconM} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
