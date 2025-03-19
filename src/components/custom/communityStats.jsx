import StarCards from "./small compo/starCards";

export default function CommunityStats() {
    return (
      <div className="p-6 md:p-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 flex items-center gap-2">
          Where Connections Thrive and Ideas Flourish 
          <span className="text-blue-500 text-3xl">✨</span> 
          <span className="text-gray-900 font-bold"></span>
        </h2>
  
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <StarCards text="Happy Community" />
          <StarCards text="210% Boost in Engagement" />
          <StarCards text="172+ Ranked Communities" />
        </div>
      </div>
    );
  }
  