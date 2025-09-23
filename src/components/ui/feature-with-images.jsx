import { Badge } from "./badge";

function Feature({ orientation = "left", title, tagline, description, icon }) {
  const ContentSection = () => (
    <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
      <div>
        <Badge>Services</Badge>
      </div>
      <div className="flex gap-2 flex-col">
        <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
          {title}
        </h2>
        <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
          {description}
        </p>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="bg-gray-300 rounded-md w-full aspect-video h-full flex-1">
      <img
        src={icon}
        alt={title}
        className="object-cover w-full h-full rounded-md"
      />
    </div>
  );
  return (
    <div className="w-full py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
          {orientation === "left" ? (
            <>
              <ImageSection />
              <ContentSection />
            </>
          ) : (
            <>
              <ContentSection />
              <ImageSection />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export { Feature };
