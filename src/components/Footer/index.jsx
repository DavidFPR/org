import './Footer.css';

const Footer = () => {
  return <footer className='footer' style={{backgroundImage: "url(/img/Footer.png)"}}>
            <div className='social-media'>
              
              <a href='https://www.facebook.com'>
                <img src="/img/facebook.png" alt="Facebook" />
              </a>

              <a href='https://www.x.com'>
                <img src="/img/x.png" alt="X" />
              </a>

              <a href='https://www.instagram.com'>
                <img src="/img/instagram.png" alt="Instagram" />
              </a>

            </div>
            <img src="/img/Logo.png" alt="org" />
            <strong>Desarrollado por David Pérez</strong>
  </footer>
};

export default Footer;
