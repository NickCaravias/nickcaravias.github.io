import { Carousel } from "@material-tailwind/react";

// Component imports
import Interest from "./Interest";

// image imports
import serranoIcon from '../assets/serranos.webp';
import eggplantIcon from '../assets/eggplant-hydrangea.webp';
import tomatoIcon from '../assets/tomatoes-peppers.webp';
import smokiesWaterfallIcon from '../assets/smokies-waterfall.webp';
import smokiesSunriseIcon from '../assets/smokies-sunrise.webp';
import whiteFishBayIcon from '../assets/white-fish-bay.webp';
import raceIcon from '../assets/race.webp';
import kerrCupIcon from '../assets/kerr-cup.webp';
import practiceIcon from '../assets/practice.webp';

function About() {
  const interests = [
    {
      title: "Urban Gardening",
      description: "I enjoy gardending as much as I can in my New York City apartment. There isnt much space outside, but I am still able to grow peppers, tomatoes, potatoes, .",
      photos: [
        { icon: eggplantIcon, name: "Eggplant" },
        { icon: serranoIcon, name: "Serranos" },
        { icon: tomatoIcon, name: "Tomatoes & Peppers" }
      ]
    },
    {
      title: "Hiking & Camping",
      description: "I love to get outside and go for a hike or spend some time camping. Recently I have camped at the Great Smoky Mountains, Haiwatha National Forest, and White Mountain National Forest.",
      technologies: [
        { icon: smokiesSunriseIcon, name: "Smokies" },
        { icon: smokiesWaterfallIcon, name: "Smokies" },
        { icon: whiteFishBayIcon, name: "White fish bay" }
      ]
    },
    {
      title: "Rowing",
      description: "I have been rowing since high school. I rowed at the Detroit Boat Club and then at Bucknell University. I love the sport because of the team and being able to exercise outdoors year round.",
      technologies: [
        { icon: practiceIcon, name: "Practice in Lewisburg" },
        { icon: kerrCupIcon, name: "2V at the Kerr Cup" },
        { icon: raceIcon, name: "Racing against Rutgers and Delaware" }
      ]
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center py-8 mb-12">
        About  
      </h2>
      
      <div className="h-[600px] w-full">
        <Carousel
          className="rounded-xl"
          autoplay={false}
          loop={true}
          placeholder=""
          transition={{ duration: 0.5 }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-green-500" : "w-4 bg-green-200"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {interests.map((interest, index) => (
            <Interest
              key={index}
              title={interest.title}
              description={interest.description}
              images={interest.photos ? 
                interest.photos.map(photo => photo.icon) :
                interest.technologies.map(tech => tech.icon)
              }
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default About;