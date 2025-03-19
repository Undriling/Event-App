import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { carouselImg1 } from "../../../constants/constants"


function Carousell() {
  return (
        <Carousel className={"w-full cursor-pointer"}>
            <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4">
                    <img src={carouselImg1} alt='carouselImg1' className='object-cover rounded-3xl shadow-lg'/>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4">
                    <img src={carouselImg1} alt='carouselImg1' className='object-cover rounded-3xl shadow-lg'/>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4">
                    <img src={carouselImg1} alt='carouselImg1' className='object-cover rounded-3xl shadow-lg'/>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
  )
}

export default Carousell;