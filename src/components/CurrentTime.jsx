const CurrentTime = ({ date }) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return <span>{`${hours}:${minutes}:${seconds}`}</span>;
};

export default CurrentTime;
