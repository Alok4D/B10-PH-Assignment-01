const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mt-12">
      <div className="navbar-start">
        <a className="cursor-pointer text-xl">Awlad.H</a>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <a className="btn btn-outline">Download Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
