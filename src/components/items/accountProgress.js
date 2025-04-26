'use client'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function Progress({percentage}) {

  return (
    <div className=" p-6 w-full pb-4 ">
      <h2 className="text-center font-bold mb-4">Account Progress</h2>
      <div className="w-40 h-40 mx-auto ">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: '16px',
            pathColor: '#2196F3',
            textColor: '#000',
            trailColor: '#E0E0E0',
          })}
        />
      </div>
    </div>
  );
}
