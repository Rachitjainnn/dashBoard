export default function QuestionsItem({questionUser}){
    return(
        <div className="flex items-start space-x-3 py-3 overflow-hidden">
        <div className="relative w-10 h-10">
          <img
            src={questionUser.profilePicture}
            alt={questionUser.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-sm">{questionUser.name}</span>
            <span className="text-gray-600 text-xs">{questionUser.lastSeen} ago</span>
          </div>
          <div className="text-gray-600 text-xs mb-1">{questionUser.id}</div>
          <div className=" text-gray-600 text-sm overflow-hidden">
           {questionUser.question}
          </div>
        </div>
      </div>
    )
}