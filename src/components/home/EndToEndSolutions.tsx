const EndToEndSolutions = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary leading-tight">
            Providing end-to-end solutions for all your <br className="hidden md:block" /> transportation needs
          </h2>
        </div>

        {/* Video Player */}
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black aspect-video border border-gray-100">
          <video 
            className="w-full h-full" 
            src="https://tcil.canto.com/direct/video/746klq1rlh47vam18v6m60ce58/ub9AXDCjzuQ-7k_0zp5OJeLI8RY/original?content-type=video%2Fmp4&name=TCI_Freight+Revamped+Video_March+2025_3.mp4" 
            controls 
            preload="metadata"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default EndToEndSolutions;
