// const serviceCategories = [
//   {
//     id: 1,
//     name: "Cleaning & Pest Control",
//   },
//   {
//     id: 2,
//     name: "Washing",
//   },
//   {
//     id: 3,
//     name: "Renovation & Installation",
//   },
//   {
//     id: 4,
//     name: "Repairs & Maintenance",
//   },
//   {
//     id: 5,
//     name: "Tailoring & Fashion",
//   },
//   {
//     id: 6,
//     name: "Beauty & Makeup",
//   },
//   {
//     id: 7,
//     name: "Health & Wellness",
//   },
//   {
//     id: 8,
//     name: "Gardening & Holticulture",
//   },
// ];

export default function SmallServiceCategories({
  serviceCategories,
  handleFilter,
}) {
  return (
    <div>
      <select
        className="rounded-xl px-3 py-1 w-full"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option>Search Category</option>
        {serviceCategories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
