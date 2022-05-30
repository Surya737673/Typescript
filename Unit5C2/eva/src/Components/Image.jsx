export const Image = ({ src, alt, borderRadius, width, height, fit }) => {

  return (
    <div>
      <img data-testid="image" src={src} alt={alt}  width={width} height={height} style={{borderRadius:{borderRadius}}} fit={"cover"} />
    </div>
  );
};
