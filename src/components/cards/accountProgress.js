import Progress from "../items/accountProgress"
import StepsList from "../items/accountStepList"
export default function AccountProgress() {
    return (
        <div>
            <Progress percentage={85} />
            <StepsList />
        </div>
    )
}