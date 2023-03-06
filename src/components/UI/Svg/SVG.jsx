import PropTypes from "prop-types";

export const SVG = ({ src }) => {
  const ImgSvg = () => <img src={src} />;
  return <ImgSvg />;
};

SVG.propTypes = {
  src: PropTypes.string,
};
