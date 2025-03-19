import React from 'react'


function StarCards({text}) {
    return (
        <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-3 shadow-md w-full md:w-50 hover:scale-110 transition-all px-12">
          {/* Icon */}
          <div className="w-6 h-6 flex items-center justify-center text-blue-600 text-xl">
            ⭘
          </div>
          {/* Text */}
          <p className="text-gray-800 font-medium">{text}</p>
        </div>
    )
}

export default StarCards;