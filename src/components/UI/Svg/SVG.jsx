import PropTypes from "prop-types";

export const SVG = ({ urlImg }) => {
  const ImgSvg = () => <img src={urlImg} />;
  return <ImgSvg />;
};
SVG.propTypes = {
  urlImg: PropTypes.string,
};
