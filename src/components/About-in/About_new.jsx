import React, { useState }  from 'react';
import logo from './airbnb_logo.jpeg';
import Me from './Me.png';
import Sponsors from './sponsors/Sponsors'
const AboutMe = () => {

    const moviesData = [
        {
          id: 1,
          name: 'Location Unknown',
          year: 2021,
          duration: '1hr 38min',
          rating: 4.2,
          genres: ['Italian', 'Drama', 'Indie'],
          description: 'Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.',
          cast: [
            'https://i.postimg.cc/jqgkqhSb/cast-11.jpg',
            'https://i.postimg.cc/8P7X7r7r/cast-12.jpg',
            'https://i.postimg.cc/2SvHwRFk/cast-13.jpg',
          ],
          poster: 'https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg',
        }
      ];
    
      const [hoveredMovie, setHoveredMovie] = useState(null);
    
  return (


    
    <>

    

    

    <div className="min-h-screen w-[100%] flex items-center justify-around mx-auto md:pt-[-80%] md:mt-0 mt-[-40%] bg-black pb-0 mb-0">
      <div className="md:w-2/4 w-4/4 bg-black text-white p-12 md:pt-12 pt-0 mt-[-8%]">
        <h2 className="md:text-8xl text-7xl font-bold mb-4 ">Hi,</h2>
        <h2 className="md:text-8xl text-7xl font-bold mb-10">I'm <span className='text-violet-700'>Anirudh</span></h2>
        <p className="text-white text-4xl font-thin">
        <span className='text-violet-600'>Web Developer</span> who create<span className='text-violet-600'> websites</span> and apps for <span className='text-violet-600'>humans</span> not just for <span className='text-violet-600'>screens</span>
        </p>

        <div className='mt-10'>
            
        </div>
      </div>
      
      <div className="w-1/4 h-full bg-purple-500 rounded-md overflow-hidden md:visible invisible mb-20">
        <img
          src={logo}
          alt="Profile"
          className="object-cover w-full h-full z-50 "
        />
      </div>
      
      
    </div>


    


    <Sponsors />


    <div className='text-6xl font-bold bg-black text-center md:pb-20 text-violet-700 md:pt-20'>My Experience</div>
    
    
    
    <div id="movies" className="w-full flex flex-wrap justify-center bg-black">
        {moviesData.map((movie) => (
          <div
            key={movie.id}
            className="movie relative border border-gray-800 rounded w-full md:w-1/5 lg:w-1/5 xl:w-1/5 mb-20 md:mb-6 lg:mb-8 md:mx-2 lg:mx-4 mx-4"
            onMouseEnter={() => setHoveredMovie(movie.id)}
            onMouseLeave={() => setHoveredMovie(null)}
          >
            <div className="poster relative overflow-hidden">
              <img src={movie.poster} alt={movie.name} className="w-full h-full object-cover" />
            </div>
            {hoveredMovie === movie.id && (
              <div className="details absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="text-xl font-semibold mb-2">{movie.name}</h3>
                <span className="rating">
                  {[...Array(5)].map((star, index) => (
                    <i key={index} className={`fas fa-star ${index < Math.floor(movie.rating) ? 'text-yellow-400' : 'text-gray-400'}`}></i>
                  ))}
                  <span className="ml-1">{movie.rating}/5</span>
                </span>
                <div className="tags mt-2">
                  {movie.genres.map((genre, index) => (
                    <span key={index} className="tag bg-blue-500 px-2 py-1 rounded-full mr-2">
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="desc text-sm mt-2">{movie.description}</p>
                <div className="cast mt-2">
                  <h3 className="text-sm font-semibold">Cast</h3>
                  <ul className="flex gap-1">
                    {movie.cast.map((castImage, index) => (
                      <li key={index}>
                        <img src={castImage} alt={`Cast ${index + 1}`} className="w-6 h-6 object-cover rounded-full border border-white" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>


    </>
  );
};

export default AboutMe;
