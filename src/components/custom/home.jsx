import React from 'react'
import { Button } from "@/components/ui/button"
import { setDialogOpen } from '../../store/dialogSlice';
import { useGoogleLogin } from '@react-oauth/google';
import { addUserInfo } from '../../store/userSlice';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { HomeImg, RoundImg } from '../../constants/constants';

import CommunityStats from './communityStats';
import HyperText from './small compo/hyperText';
import Carousell from './small compo/carousel';
import ResizeablePanel from './small compo/resizeablePanel';
import Footer from './footer';
  


function Home() {
  const dispatch = useDispatch();
  const dialogOpen = useSelector((state) => state.dialog.open);
  const user = useSelector((state) => state.user.userInfo);


  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
        try {
            const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            });

            dispatch(addUserInfo(userInfo.data));
            dispatch(setDialogOpen(false)); 
        } catch (error) {
            console.error("Google Auth Error:", error);
        }
    },
    onError: (error) => console.error("Login Failed:", error),

});

const handleSignIn = () => {
  if (!user) {
    dispatch(setDialogOpen(true));
    return;
} else {
    dispatch(setDialogOpen(false));
}
}



  return (
    <div className='flex flex-col items-center px-6 font-bold font-serif mt-5'>
        <h1 className='text-3xl md:text-5xl md:mx-50 col-9 text-center'><span className='text-[#209CEE]'>Connecting people of all faiths through events and community support</span></h1>
        <p className='text-center text-sm md:text-xl text-gray-600 py-6 md:py-10'>Discover Your Next Event with us</p>

        <h2 className='my-5 md:px-0 sm:px-0 px-10'>Please Sign In to continue - Sign In to Explore Events & Create Events</h2>

        <div>
            <Dialog open={dialogOpen} onOpenChange={(isOpen) => dispatch(setDialogOpen(isOpen))} >
                <DialogContent className={"bg-white text-black"}>
                    <DialogHeader>
                    <DialogTitle>.</DialogTitle>
                        <DialogDescription>
                            <img src="./vite.svg" alt="logo" />
                            <h2 className="text-2xl font-serif font-bold mt-5">Sign in to continue</h2>
                            <p>Please sign in with Google authentication securely</p>
                        </DialogDescription>
                    </DialogHeader>
                    <Button onClick={() => login()} className={"text-md mt-5 flex gap-4 items-center w-full cursor-pointer bg-black text-white"}> <FcGoogle className='h-6 w-6'/> Sign in with Google </Button>
                </DialogContent>
            </Dialog>
        </div>

        <div>
            <Button onClick={handleSignIn} className={'w-full md:w-auto md:h-12 cursor-pointer bg-black hover:bg-gray-700 text-white font-bold'}>Get Started. It's free👆</Button>
        </div>

        <div className='my-20'>
          <img src={HomeImg} alt='Home Image' className='md:w-[700px] md:h-[500px] rounded-3xl cursor-pointer hover:scale-110 transition-all'
            onClick={() => {
              window.location.href = '/create-event';
            }}
          />
        </div>

        <div className='bg-gray-500 rounded-3xl md:mx-2 py-5'>
            <h1 className='text-3xl md:text-5xl md:mx-50 col-9 text-center text-[#209CEE]'>Uniting Communities Through <br/>✦ Inspiring Events</h1>
            <p className='text-xl md:text-2xl md:mx-50 col-9 text-gray-200 text-center py-10 '>At Communion, we're committed to organizing events that foster connections, inspire personal and professional growth, and bring people together 
                to share meaningful experiences. From workshops to conferences, every event is designed to leave a lasting impact on our attendees.</p>
            <p className='text-lg md:text-xl md:mx-50 col-9 text-gray-200 text-center py-5'>Trusted by Over 15k+ Individuals Worldwide</p>

            <img src={RoundImg} alt='RoundImg' className='bg-transparent w-36 mx-[25%] sm:mx-[46%] md:mx-[46%] py-5 cursor-pointer'/>
            <Button className='text-lg md:text-xl mx-[20%] sm:mx[43%] md:mx-[43%] bg-black col-9 text-white text-center py-5 cursor-pointer'>Explore Events ➡️</Button>
        </div>

        <div>
           <CommunityStats/>
        </div>

        <div className='px-10 md:px-36 py-16'>
            <Carousell/>
        </div>

        <div>
            <HyperText/>
        </div>

        <div className='px-16 py-10'>
            <ResizeablePanel/>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Home;