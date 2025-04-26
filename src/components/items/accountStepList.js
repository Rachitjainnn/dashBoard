import StepItem from "./stepItems";

export default function StepsList() {
  return (
    <div className="p-4">
      <hr className="my-2 text-gray-300 mb-4" />
      <div className="bg-gray-100 rounded-lg p-4 mb-6">
        <h3 className="font-semibold mb-2">Steps Completed</h3>
        <StepItem label="Profile Setup" done />
        <StepItem label="Initial Training" done />
        <StepItem label="Legal Documents" done />
      </div>
      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="font-semibold mb-2">Steps Remaining</h3>
        <StepItem label="Financial Integration" />
        <StepItem label="Final Review" />
      </div>
    </div>
  );
}
