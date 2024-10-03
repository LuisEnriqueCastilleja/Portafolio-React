export const GifCard = ({ gif }) => {
  return (
    <li className="w-50 p-2 m-0">
      <img
        className="w-100 h-100 img-fluid"
        src={gif.images.downsized_medium.url}
        alt={gif.name}
        loading="lazy"
      ></img>
    </li>
  );
};
