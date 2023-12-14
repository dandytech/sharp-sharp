export default function QuickBookList({ category }) {
  const { name, icon } = category;
  return (
    <li className="z-50 flex w-full  cursor-pointer items-center gap-3 px-4 py-2 hover:bg-gray-100">
      {icon}
      {name}
    </li>
  );
}
