import { useNavigate } from "react-router";

export const categories = [
  {
    id: 1,
    name: "Laudry",
    icon: "😊",
    route: "/services",
  },
  {
    id: 2,
    name: "Tailoring",
    icon: "😇",
    route: "/services",
  },
  {
    id: 3,
    name: "Barbing",
    icon: "😇",
    route: "/services",
  },

  {
    id: 4,
    name: "Make-up",
    icon: "😇",
    route: "/services",
  },
  {
    id: 5,
    name: "Mechanic",
    icon: "😇",
    route: "/services",
  },
  {
    id: 6,
    name: "Electricia",
    icon: "😇",
    route: "/services",
  },

  {
    id: 7,
    name: "Shoe-Maker",
    icon: "😇",
    route: "/services",
  },
  {
    id: 8,
    name: "Cook",
    icon: "😇",
    route: "/services",
  },
  {
    id: 9,
    name: "Cleaner",
    icon: "😇",
    route: "/services",
  },

  {
    id: 10,
    name: "Nanny",
    icon: "😇",
    route: "/services",
  },
  {
    id: 11,
    name: "Barbing",
    icon: "😇",
    route: "/services",
  },
  {
    id: 12,
    name: "Barbing",
    icon: "😇",
    route: "/services",
  },

  {
    id: 13,
    name: "Barbing",
    icon: "😇",
    route: "/services",
  },
  {
    id: 14,
    name: "Barbing",
    icon: "😇",
    route: "/services",
  },
  {
    id: 15,
    name: "Barbing",
    icon: "😇",
    route: "/services",
  },

  {
    id: 16,
    name: "Barbing",
    icon: "😇",
    route: "/services",
  },
  {
    id: 17,
    name: "Barbing",
    icon: "😇",
    route: "/services",
  },
  {
    id: 18,
    name: "Barbing",
    icon: "😇",
    route: "/services",
  },

  {
    id: 19,
    name: "Barbing",
    icon: "😇",
    route: "/services",
  },
  {
    id: 20,
    name: "Barbing",
    icon: "😇",
    route: "/services",
  },
];

export default function ServiceMenus() {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="grid grid-cols-3">
        {categories.map((category) => (
          <li
            key={category.id}
            className="block"
            onClick={() => navigate(category.route)}
          >
            <div className=" flex gap-2">
              {" "}
              <span className="cursor-pointer mb-5"> {category.icon}</span>
              <span className="cursor-pointer">{category.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
