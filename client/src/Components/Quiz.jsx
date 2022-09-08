import React from 'react'
import { Link } from 'react-router-dom'
import { FaList } from 'react-icons/fa'
import { IoMdTimer } from 'react-icons/io'
import { MdQuiz } from 'react-icons/md'

const Quiz = ({data}) => {
  return (
    <>
    <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
      <div className="bg-cover h-48 relative overflow-hidden pb-10 mb-2">
        <img src="https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900" alt="" />
      </div>
      <div className="p-4 flex-1 flex flex-col" >
        <h3 className="mb-4 text-center text-2xl font-bold text-gray-700">{data.quizTitle}</h3>
        <div className="mb-4 text-grey-darker font-semibold text-md flex-1">
          <p>Number of Questions: {data.questions.length}</p>
        </div>
        <hr className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide" />
      </div>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
              <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                  { data.freePlay ? <>
                  <MdQuiz className="h-6 w-6 inline mr-2 text-green-500" />
                  <span className="font-medium text-gray-700" >This is a free quiz</span> </>
                  : <>
                  <MdQuiz className="h-6 w-6 inline mr-2 text-red-500" />
                  <span className="font-medium text-gray-700" >This is a free quiz</span> </>
                  }
              </div>
      </div>
        <hr className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide" />

      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
              <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                  <FaList className="h-6 w-6 inline mr-2 text-green-500" />
                  { data.playedBy.length ? 
                  <span className="font-medium text-gray-700" >Quiz Is Taken By {data.playedBy.length} Person</span>
                  : <span className="font-medium text-gray-700" >Nobody participated this quiz</span>}
              </div>
              <div className="font-medium text-gray-700">
                  <IoMdTimer className="h-6 w-6 inline mr-2 text-red-500" />
                  <span>
                    Time: {data.quizTime}
                  </span>
              </div>
      </div>
      <div className="text-center pb-6">
        <Link to={`/quiz/${data._id}`}>
              <span className="transition duration-500 transform hover:translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                Participate Quiz
              </span>
        </Link>
      </div>
    </div>  
  </div>
  </>
  )
}

export default Quiz


// <div classNameNameName="flex items-center justify-center">
// <div classNameNameName="">
//     <div classNameNameName="bg-white shadow-xl rounded-lg overflow-hidden">
//         <div classNameNameName="bg-cover bg-center h-56 p-4">
//             <div classNameNameName="flex justify-end">
//               <img src = "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt= "" />
//             </div>
//         </div>
//         <div classNameNameName="p-4">
//             <p classNameNameName="uppercase tracking-wide text-2xl font-bold text-gray-900">{data.quizTitle}</p>
//             <p classNameNameName="text-xxl text-gray-900">$750,000</p>
//             <p classNameNameName="text-gray-700">742 Evergreen Terrace</p>
//         </div>
//         <div classNameNameName="flex p-4 border-t border-gray-300 text-gray-700">
//             <div classNameNameName="flex-1 inline-flex items-center">
//                 <svg classNameNameName="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                     <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
//                 </svg>
//                 <p><span classNameNameName="text-gray-900 font-bold">3</span> Bedrooms</p>
//             </div>
//             <div classNameNameName="flex-1 inline-flex items-center">
//                 <svg classNameNameName="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                     <path fill-rule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
//                 </svg>
//                 <p><span classNameNameName="text-gray-900 font-bold">2</span> Bathrooms</p>
//             </div>
//         </div>
        // <div classNameNameName="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
        //     <div classNameNameName="text-xs uppercase font-bold text-gray-600 tracking-wide">Realtor</div>
        //     <div classNameNameName="flex items-center pt-2">
        //         {/* <div classNameNameName="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80)">
        //         </div> */}
        //         <div>
        //             <p classNameNameName="font-bold text-gray-900">Tiffany Heffner</p>
        //             <p classNameNameName="text-sm text-gray-700">(555) 555-4321</p>
        //         </div>
        //     </div>
        // </div>
//     </div>
// </div>
// </div>



{/* <ul classNameName="flex flex-col items-center justify-center">
  <li classNameName="p-4  border-white-300 bg-white-200">
    <div classNameName="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div classNameName="md:flex">
        <div classNameName="md:flex-shrink-0">
          <img classNameName="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store"/>
        </div>
        <div classNameName="p-8">
          <div classNameName="uppercase tracking-wide text-2xl text-green-500 font-semibold">{data.quizTitle}</div>
          <a href="#" classNameName="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Discover the flavors of Southeast Asia</a>
          <p classNameName="mt-2 text-gray-500">a</p>
        </div>
        <div>
        <div classNameNameName="flex p-4 border-t border-gray-300 text-gray-700">
            <div classNameNameName="flex-1 inline-flex items-center">
                <svg classNameNameName="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                </svg>
                <p><span classNameNameName="text-gray-900 font-bold">3</span> Bedrooms</p>
            </div>
            <div classNameNameName="flex-1 inline-flex items-center">
                <svg classNameNameName="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
                </svg>
                <p><span classNameNameName="text-gray-900 font-bold">2</span> Bathrooms</p>
            </div>
        </div>
        </div>
             
      </div>
    </div>
  </li>
</ul> */}