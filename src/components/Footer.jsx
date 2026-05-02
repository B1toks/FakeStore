import Menu from './Menu';
import './css/Footer.css';

const Footer = ({ title }) => {
  const footerMenuItems = [
    { text: 'GitHub', url: 'https://github.com/B1toks' },
    { text: 'Portfolio', url: 'https://www.honchar.dev' },
  ];

  return (
    <footer className="footer">
      <p>{title}</p>
      <Menu list={footerMenuItems} />
    </footer>
  );
};

export default Footer;
