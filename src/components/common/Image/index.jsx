export const Image = ({ src }) => {
  return (
    <div className="max-h-full max-w-full block rounded-xl lg:rounded-3xl">
      <img src={src}></img>
    </div>
  );
};
