import { Button } from "@/components/ui/button"
import { Img1 } from "../../constants/constants";
import Footer from "./footer";


export default function About() {
    return (
      <div className="bg-gray-50 min-h-screen ">
        <div className="max-w-6xl mx-auto px-6 py-12 font-serif">
          
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
            About <span className="text-blue-500">eVento</span>
          </h2>
          <p className="mt-4 text-gray-600 text-center text-lg max-w-3xl mx-auto">
            Your all-in-one platform for seamless event planning, ticket management, and attendee engagement.
          </p>
  
          {/* About Content */}
          <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
            
            {/* Left Side: Image */}
            <div className="md:w-1/2">
              <img 
                src={Img1} 
                alt="Event Planning"
                className="rounded-xl shadow-lg"
              />
            </div>
  
            {/* Right Side: Text */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">
                Simplify Event Planning & Maximize Engagement
              </h3>
              <p className="mt-4 text-gray-600 text-lg">
                EventO is designed to help organizers create, manage, and promote events effortlessly. 
                Whether you're planning a corporate conference, a music festival, or a private gathering, 
                we provide the tools you need for a **stress-free** and **successful** event.
              </p>
  
              {/* Features List */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-2xl">✔</span>
                  <p className="text-gray-700 text-lg">Easy event creation and management</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-2xl">✔</span>
                  <p className="text-gray-700 text-lg">Seamless ticketing and attendee tracking</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-2xl">✔</span>
                  <p className="text-gray-700 text-lg">Real-time analytics and insights</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-2xl">✔</span>
                  <p className="text-gray-700 text-lg">Powerful integrations with marketing tools</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Ready to make your next event a success?
            </h3>
            <a href="/" >
                <Button className={'w-full my-16 md:w-auto md:h-12 cursor-pointer bg-black hover:bg-gray-700 text-white font-bold transition'}>Get Started. It's free👆</Button>
            </a>
          </div>
  
        </div>

        <div>
            <Footer/>
        </div>

      </div>
    );
  }
  