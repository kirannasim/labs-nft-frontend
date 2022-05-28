const AuthBtnGroup = () => {
  return (
    <div className="d-flex">
      <Link to="/login">
        <button type="button" className="btn btn-outline-primary topbar--btn">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button type="button" className="btn btn-primary topbar--btn">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default AuthBtnGroup;
