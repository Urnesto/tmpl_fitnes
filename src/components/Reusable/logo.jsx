import logo from "../../assets/images/logo.svg";

export const Logo = ({ size }) => {
  return (
    <>
      <img src={logo} className={size} />
      <div className="mx-2 flex arial tracking-widest flex-col text-base text-white font-extrabold ">
        <a>TMPL</a>
        <a>FITNESS</a>
      </div>
    </>
  );
};
