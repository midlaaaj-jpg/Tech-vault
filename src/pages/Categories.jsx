import CategoryCard from "../Components/CategoryCard";

const Categories = () => {
  const categories = [
    {
      icon: "💻",
      name: "Laptops",
    },
    {
      icon: "📱",
      name: "Smartphones",
    },
    {
      icon: "🎧",
      name: "Headphones",
    },
    {
      icon: "⌨️",
      name: "Keyboards",
    },
    {
      icon: "🖱️",
      name: "Mouse",
    },
    {
      icon: "🖥️",
      name: "Monitors",
    },
    {
      icon: "🎮",
      name: "Gaming",
    },
    {
      icon: "📷",
      name: "Cameras",
    },
    {
      icon: "⌚",
      name: "Smartwatches",
    },
    {
      icon: "🔌",
      name: "Accessories",
    },
  ];

  return (
    <section className="px-8 py-16">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">
        Shop by Categories
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            icon={category.icon}
            name={category.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;