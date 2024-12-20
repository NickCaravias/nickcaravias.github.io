interface InterestProps {
    title: string;
    description: string;
    images: string[];
  }
  
  function Interest({ title, description, images }: InterestProps) {
    return (
      <div className="w-11/12 mx-auto bg-green-100 rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-video">
              <img
                src={image}
                alt={`${title} image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Interest;