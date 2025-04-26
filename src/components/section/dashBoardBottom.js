import PendingQuestions from "../cards/pendingQuestion";
import ChatbotWelcome from "../cards/aiChatBot";
export default function DashBoardBottom() {
    return (
        <div className='flex flex-row '>
            {/* This is the left pending question section*/}
            <PendingQuestions />
            {/* This is the right chatbot section*/}
            <ChatbotWelcome />
        </div>
    );
}