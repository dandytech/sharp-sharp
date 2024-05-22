import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export const abouts = [
  {
    id: 1,
    name: "Sharp-Sharp",
    icon: "🏍",
    route: "/about",
  },
  {
    id: 2,
    name: "Clients",
    icon: "🏉",
    route: "/aboutClient",
  },
  {
    id: 3,
    name: "Providers",
    icon: "⛲️",
    route: "/aboutProviders",
  },
];

export default function AboutSubMenu() {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="grid grid-cols-3">
        {abouts.map((about) => (
          <li
            key={about.id}
            className="block"
            onClick={() => navigate(about.route)}
          >
            <NavLink to={about.route} className=" flex gap-2">
              {" "}
              <span> {about.icon}</span>
              <span>{about.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
