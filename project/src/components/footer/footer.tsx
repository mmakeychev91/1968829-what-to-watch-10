import React from 'react';
import Logo from '../../components/logo/logo';

const Footer = (): JSX.Element => (
  <footer className="page-footer">
    <Logo isLink isLinkLight/>
    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);

export default Footer;
