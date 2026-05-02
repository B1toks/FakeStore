import Link from 'next/link';

const MenuItem = ({ text, url }) => {
  if (!url) {
    return <li><span>{text}</span></li>;
  }

  const isExternal = /^https?:\/\//.test(url);

  return (
    <li>
      {isExternal ? (
        <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>
      ) : (
        <Link href={url}>{text}</Link>
      )}
    </li>
  );
};

export default MenuItem;
