const Render = ({ data, click }) => {
  return (
    <ul>
      {data.map((el) => (
        <li key={el.id} onClick={click}>
          <img
            src={el.urls.raw}
            srcSet={el.urls.fall}
            alt={el.tags.map((el) => el.title)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Render;
