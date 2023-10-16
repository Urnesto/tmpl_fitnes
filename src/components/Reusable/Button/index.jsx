export const Button = ({
  bg = "bg-tmpl-purple",
  border = "border-2",
  handler,
  children,
  disabled,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={() => handler()}
        className={`bg-${bg} border-${border}  text-white my-3 disabled:opacity-75 w-10/12 lg:w-56 h-12 text-sm uppercase rounded-3xl transition disabled:hover:bg-tmpl-purple hover:bg-tmpl-purple/70`}
      >
        {children}
      </button>
    </>
  );
};
