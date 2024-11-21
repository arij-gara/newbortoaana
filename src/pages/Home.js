import React , {useState}from 'react'
import Header from '../components/Header'
import  SideBar from "../components/Home/SideBar"
import JellyVideo from "../assests/videos/videojelly.gif"
import Rectangle from '../assests/images/rectangle.png'
import Jellyfish1 from '../assests/images/jellyfish.png'
import imageVideo from  "../assests/images/video1.png"
import youtubeIcon from "../assests/images/icons/youtube.png"
import InstagramIcon from "../assests/images/icons/instagram.png"
import whatsup from  "../assests/images/icons/whatsup.png"
import X from  "../assests/images/icons/x.png"
import Snapchat from  "../assests/images/icons/snapchat.png"
import FacebookIcon from  "../assests/images/icons/facebook.png"
import JellyFish from  "../components/Home/JellyFish"
import Cross from "../assests/images/cross.png"
export default function Home() {
  const [isZoomed, setIsZoomed] = useState(false);
  return (
    <div className='h-screen  relative overflow-hidden'>
      
    <img
    className='absolute top-0 left-0 w-full h-full object-cover z-1'
    src={JellyVideo}  // JellyVideo should be renamed to something like JellyGif as it is a gif
    alt="Jellyfish background"
     /> 
    {/* Dark overlay */}
    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-95 z-5'></div>
    {/* content */}
    <div className='relative z-10'>
      <div className='pt-10'>
     <Header/>
     {/* main content div */}

       {/* left screen */}
       {!isZoomed && (
      <div className='flex items-center justify-center flex-col absolute bottom-28 left-7 z-20'>
      <img src={imageVideo} alt="Personne" className="  " />
       
      <div style={{ width: '350px', wordWrap: 'break-word' }} className=' text-center z-30'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      </div>
       )}
      {/* end left screen */}
      {/* cross button */}
      <div>
            {/* Cross Button for Zoom Exit */}
            {isZoomed && (
        <button
        onClick={() => setIsZoomed(false)}
        className="absolute top-20 right-48 z-[100] bg-white p-2 rounded-full border border-red-500"
        aria-label="Close zoom"
      >
        <img src={Cross} alt="Close button" className="w-6 h-6" />
      </button>
      )}
      </div>
      {/* end cross button */}
      <div className='bg-red-200'>
     <JellyFish   isZoomed={isZoomed} setIsZoomed={setIsZoomed}/>
     </div>
     {!isZoomed && (
     <div className='absolute top-32 right-10'>
     <SideBar/>
     </div>
     )}
     </div>
     </div>
     
    </div>
  )
}