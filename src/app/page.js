import PendingQuestion from '@/components/cards/pendingQuestion';
import DashBoardBottom from '@/components/section/dashBoardBottom';
import DashBoardTop from '@/components/section/dashBoardTop';
import 'react-circular-progressbar/dist/styles.css';


export default function Home() {
  return (
    <div>
      {/* This is the top part of the Dashboard*/}
      <DashBoardTop />
      <hr className="mt-6 text-gray-300" />
      {/* This is the bottom part of the Dashboard*/}
      <DashBoardBottom />
    </div>




  );
}
