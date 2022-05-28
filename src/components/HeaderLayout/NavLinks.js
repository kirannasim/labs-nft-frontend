const NavLinks = ({ href, text }) => {
  return (
    <div className="">
      <ul className="">
        <li className="">
          <a className="" href={href}>
            {text}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
