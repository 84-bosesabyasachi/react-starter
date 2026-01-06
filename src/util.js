import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "No Copyright Music Lofi",
      cover: "https://cdn.pixabay.com/audio/2025/04/20/19-17-03-210_200x200.jpg",
      artist: "lkoliks",
      audio: "/assets/lofi.mp3", 
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
            name: "Soft House",
            cover: "https://cdn.pixabay.com/audio/2025/12/28/10-43-20-309_200x200.jpg",
            artist: "Nature_Music",
            audio: "/assets/lofi-1.mp3",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },

        {
            name: "Gardens - Stylish Chill",
            cover: "https://cdn.pixabay.com/audio/2025/02/19/22-25-20-336_200x200.png",
            artist: "penguinmusic",
            audio: "/assets/lofi-2.mp3",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        { 
            name:"Background Music Upbeat",
            cover:"https://cdn.pixabay.com/audio/2025/09/16/07-21-47-846_200x200.png",
            artist:"DELOSound",
            audio:"/assets/lofi-3.mp3",
            color:["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "New Beginnings",
            cover: "https://cdn.pixabay.com/audio/2022/10/06/03-04-33-598_200x200.jpg",
            artist: "BeauWalker",
            audio: "/assets/lofi-4.mp3",
            color: ["#E5D9D9", "#E5D9D9"],
            id: uuidv4(),
            active: false,
        },
        {
            name:"20 Galaxies_piano edit",
            cover:"https://cdn.pixabay.com/audio/2022/12/06/20-07-16-764_200x200.png",
            artist:"JMidiBytes",
            audio:"/assets/lofi-5.mp3",
            color:["#4E496C", "#B3B1C6"],
            id: uuidv4(),
            active: false,
        },
  ];
}

export default chillHop;

        
