import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getUser } from '../Actions/UserAction'


const demoProfilePicture = "https://www.citypng.com/public/uploads/preview/png-round-blue-contact-user-profile-icon-11639786938sxvzj5ogua.png"


const User = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getUser(id))
    },[])

    const user = useSelector((state)=> state.userReducer.userData)
    
    if(!user) return "Loading...."

  return (
<div class="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
  <div class="card w-96 mx-auto bg-white  rounded shadow-xl hover:shadow">
     <img class="w-48 h-48 mx-auto rounded-full -mt-20 border-4 border-white" src={user?.image || demoProfilePicture} alt={user.username} />
     <div class="text-center mt-2 text-3xl font-medium">{user.fullName}</div>
     <div class="text-center mt-2 font-light text-xl">@{user.username}</div>
     <div class="text-center font-normal text-lg">Who Am I?</div>
     <div class="px-6 text-center mt-2 font-light text-xl">
       <p>
         MERN Stack Developer, Love to play. Love to take a long walk, swim(don't know)
       </p>
     </div>
     <hr class="mt-8" />
     <div class="flex p-4">
       <div class="w-1/2 text-center">
         <span class="font-bold">{user?.enrolledQuiz.length}</span> Enrolled Quiz
       </div>
       <div class="w-0 border border-gray-300">
         
       </div>
       <div class="w-1/2 text-center">
         <span class="font-bold">{user?.takenQuiz.length}</span> Quiz Taken
       </div>
     </div>
  </div>
</div>
  )
}

export default User