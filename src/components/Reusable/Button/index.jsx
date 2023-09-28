export const Button = ({ btnText, bg, border }) => {
  Button.defaultProps = {
    bg: "bg-tmpl-purple",
    border: "border-2",
  };
  return (
    <div className="flex items-center justify-center  lg:items-start lg:justify-normal">
      <button
        className={`bg-${bg} border-${border} text-white  w-10/12 md:w-56 h-12 text-sm uppercase rounded-3xl transition hover:bg-tmpl-purple/70`}
      >
        {btnText}
      </button>
    </div>
  );
};
