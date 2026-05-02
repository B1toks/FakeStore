import Menu from './Menu';
import './css/SideBar.css';

const SideBar = ({ title }) => {
  const menuItems = [
    { text: 'Catalog', url: '/' },
    { text: 'Cart', url: '/cart' },
    { text: 'GitHub ↗', url: 'https://github.com/B1toks' },
  ];

  return (
    <aside className="sidebar">
      <h2>{title}</h2>
      <Menu list={menuItems} />
    </aside>
  );
};

export default SideBar;
