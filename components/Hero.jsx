const Hero = () => {
  return (
    <section className="w-full h-screen overflow-hidden">
      <div className={`absolute top-[120px] flex`}>
        <div className="absolute w-full h-full bg-[#00000080]" />
        <video
          src="/hero-video.MOV"
          autoPlay
          loop
          muted
          className="w-full object-cover h-[480px] sm:h-[580px] md:h-[680px]"
        />
        <div className="absolute flex flex-col justify-center items-center m-4">
          <div className="w-5 h-5 rounded-full bg-[#fbdf7b]" />
          <div className="w-1 sm:h-80 h-60 yellow-gradient" />
        </div>
        <div className="absolute m-8 max-w-4xl bg-[#00000050] rounded-lg p-2">
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] text-[40px] lg:leading-[98px]">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-500 via-amber-100 to-yellow-400 bg-clip-text text-transparent">
              Volodymyr
            </span>
          </h1>
          <p className="font-medium lg:text-[30px] sm:text-[26px] text-[16px] lg:leading-[40px] text-white">
            Web Developer Lover from Ukraine
            <span className="hidden sm:flex">
              Web Developer Lover from UkraineWeb Developer Lover from
              UkraineWeb Developer Lover from UkraineWeb Developer Lover from
              UkraineWeb Developer Lover from Ukraine
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
