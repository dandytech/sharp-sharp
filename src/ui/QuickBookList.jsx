export default function QuickBookList({ category }) {
  const { name, icon } = category;
  return (
    <li className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex gap-3 items-center w-full">
      {icon}
      {name}
    </li>
  );
}
