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

        {/* Галерея снизу */}
        <div className="flex items-center gap-2 lg:h-[400px] w-full container 2xl:px-30 mt-10 px-4">
          {[
            "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&h=800&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&h=800&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&h=800&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&h=800&w=800&auto=format&fit=crop",
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
