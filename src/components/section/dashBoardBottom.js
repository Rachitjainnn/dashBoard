import PendingQuestions from "../cards/pendingQuestion";
import ChatbotWelcome from "../cards/aiChatBot";
export default function DashBoardBottom() {
    return (
        <div className="flex flex-col lg:flex-row w-full gap-4">
            {/* This is the left pending question section */}
            <div className="flex-1">
                <PendingQuestions />
            </div>
            {/* This is the right chatbot section */}
            <div className="flex-1">
                <ChatbotWelcome />
            </div>
        </div>
    );
}