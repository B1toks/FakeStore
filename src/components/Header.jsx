import Logo from './Logo';
import DateTime from './DateTime';
import './css/Header.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <Logo />
      <h1>{title}</h1>
      <DateTime />
    </header>
  );
};

export default Header;
