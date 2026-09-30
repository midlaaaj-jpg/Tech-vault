const Hero = () => {
  return (
   <section className="flex min-h-[80vh] items-center justify-between gap-10 bg-gray-50 px-8 py-16">
        {/* #left side  */}
      <div className="max-w-2xl"> 
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
  Next-Gen Technology
</p>

        <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
  Everything Tech.
  <br />
  <span className="text-gray-500">All In One Place.</span>
</h1>

        <p>
          Discover the latest laptops, smartphones, gaming gear, headphones,
          monitors and more — all in one place.
        </p>
        <div>
          <button>Shop Now</button>
          <button>Explore Categories</button>
         
        </div>
      </div>
       {/* #right side */}
      <div className="hidden h-80 w-80 items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-xl md:flex">
  <span className="text-8xl">💻</span>
</div>
    </section>
  );
};
export default Hero;
