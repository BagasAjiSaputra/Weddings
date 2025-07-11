export default function VideoBox() {
  return (
    <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <video autoPlay loop muted playsInline className="w-full h-auto block">
        <source src="/videos/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
