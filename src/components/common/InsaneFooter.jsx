const InsaneFooter = () => {
  return (
    <footer className=" text-zinc-300 py-6 sm:py-8 lg:py-4 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm sm:text-base lg:text-sm text-zinc-700">
          Crafted and maintained by{" "}
          <a
            href="https://www.1nsane.in/"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline transition-colors duration-300"
          >
            1nsane.in
          </a>
        </p>
      </div>
    </footer>
  );
};

export default InsaneFooter;
