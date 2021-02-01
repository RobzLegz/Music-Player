import { v4 as uuidv4 } from "uuid";


const songInfo = () => {
  return [
    {
        name: "Bluetooth Ringtone",
        artist: "Aviino",
        id: uuidv4(),
        active: true,
        cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10446",
    },
    {
      name: "Keep Going",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tumbling",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9225",
      id: uuidv4(),
      active: false,
    },
    {
        name: "Sleepover",
        artist: "Nymano, JK the Sage",
        id: uuidv4(),
        active: false,
        cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
      },
    {
      name: "Nightfall",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      id: uuidv4(),
      active: false,
    },

    {
        name: "Girls Just Wanna Have Sun",
        artist: "SAINT WKND",
        id: uuidv4(),
        active: false,
        cover: "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=7930",
    },
    {
      name: "Deeper",
      artist: "Aviino",
      id: uuidv4(),
      active: false,
      cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10460",
    },
    {
      name: "Backyard Puddles",
      artist: "Sleepy Fish",
      id: uuidv4(),
      active: false,
      cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10032",
    },
    {
      name: "Velocities",
      artist: "Sleepy Fish",
      id: uuidv4(),
      active: false,
      cover: "https://chillhop.com/wp-content/uploads/2020/07/9e04907d0cf68c974c4a5f530b082a8d83a2d41f-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7988",
    },
    {
      name: "Daylight",
      cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      id: uuidv4(),
      active: false,
    },
  ];
}

export default songInfo;