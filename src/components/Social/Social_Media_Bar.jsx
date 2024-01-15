import React, { useState } from 'react';
import Insta from './airbnb_logo.jpeg';

const App = () => {


    const socialMedia = [
        {
          name: "Facebook",
          logo: {Insta},
          url: "https://www.facebook.com/",
        },
        {
          name: "Twitter",
          logo: "https://abs.twimg.com/symbols/twitter/brand/bird-white-400x400.png",
          url: "https://twitter.com/",
        },
        {
            name: "Twitter",
            logo: "https://abs.twimg.com/symbols/twitter/brand/bird-white-400x400.png",
            url: "https://twitter.com/",
          },
        // Add more platforms with logos and URLs...
      ];

      

      
        return (
          <div className="flex items-center gap-10 w-[10%] mx-auto absolute">
            {socialMedia.map((platform) => (
              <a
                href={platform.url}
                target="_blank"
                key={platform.name}
                className="cursor-pointer rounded-full p-2 shadow-md hover:bg-gray-100"
              >
                <img src={platform.logo} alt={platform.name} className="w-6 h-6" />
              </a>
            ))}
          </div>
        );
      
      


}

export default App;








































