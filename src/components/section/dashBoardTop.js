import AccountProgress from "@/components/cards/accountProgress";
import FinancialWellbeing from "@/components/cards/financialWellbeing";
import FranchiseesOnboard from "@/components/cards/franchiseesOnboard";
import SectionBox from "@/components/layout/bigSectionBox";
import SmallSectionBox from "@/components/layout/smallSection";
import KeyInsightsCard from "@/components/cards/keyInsights";
import ProspectLeads from "@/components/cards/prospectLeads";

export default function DashBoardTop() {
  return (
    // Main flex container to arrange the big card and the grid side by side
    <div className="flex flex-col  lg:flex-row gap-4 items-center justify-center">

      {/* Left side: Big section box containing Account Progress */}

        <SectionBox>
          <AccountProgress />
        </SectionBox>

      {/* Right side: Grid layout for four small cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Each SmallSectionBox wraps a different dashboard card */}
        <SmallSectionBox>
          <FranchiseesOnboard />
        </SmallSectionBox>

        <SmallSectionBox>
          <KeyInsightsCard />
        </SmallSectionBox>

        <SmallSectionBox>
          <FinancialWellbeing />
        </SmallSectionBox>

        <SmallSectionBox>
          <ProspectLeads />
        </SmallSectionBox>

      </div>
    </div>
  )
}
