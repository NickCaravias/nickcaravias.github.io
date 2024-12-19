import backgroundImage from '../assets/home-background.jpg';

function Home() {
  return (
    <div className="relative h-screen w-full bg-white">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        style={{ zIndex: 5 }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">
          Nick Caravias
        </h1>
        <h2 className="text-2xl font-light">
          Full Stack Software Engineer
        </h2>
      </div>
    </div>
  );
}

export default Home;