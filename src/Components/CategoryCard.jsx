
const CategoryCard = ({ icon, name }) => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <span className="text-4xl">{icon}</span>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {name}
      </h3>
    </div>
  );
};

export default CategoryCard;
