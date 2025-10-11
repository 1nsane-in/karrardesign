export default function Example() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-start py-12 mt-40">
        <div className="max-w-3xl text-center px-4">
          <h1 className="text-3xl font-semibold font-tan-pearl">
            Where Vision Becomes Reality
          </h1>
          <p className="text-md text-zinc-600 mt-2 font-cinzel">
            Every project tells a story of precision, creativity, and unmatched
            craftsmanship.
          </p>
        </div>

        <div className="flex items-center gap-2 lg:h-[400px] w-full container 2xl:px-30 mt-10 px-4">
          {[
            "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/7.jpg",
            "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/4.jpg",
            "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/15.jpg",
            "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/al-mandalo/6.jpg",
            "https://cdn.jsdelivr.net/gh/tussxar/karrar-images/images/dubai-mall/10.jpg",
          ].map((src, idx) => (
            <div
              key={idx}
              className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={src}
                alt={`image-${idx}`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
