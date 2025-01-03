import { NavLink } from "react-router-dom";

function Header() {
  const links = [
    { path: "/use-state", label: "UseState" },
    { path: "/use-effect-fetch", label: "UseEffect Fetch" },
    { path: "/use-effect-axios", label: "UseEffect Axios" },
    { path: "/input-form-data", label: "Input form data" },
  ];

  return (
    <div className="p-2">
      <div className="flex justify-center font-semibold text-4xl p-4">
        <NavLink to="/">StudyReact</NavLink>
      </div>
      <div>
        <ul className="flex justify-center items-center space-x-10 py-2">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={
                  ({ isActive }) =>
                    isActive
                      ? "underline" // Lớp CSS khi active
                      : "text-gray-700" // Lớp CSS mặc định
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
