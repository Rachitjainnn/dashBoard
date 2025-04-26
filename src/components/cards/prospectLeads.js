export default function ProspectLeads() {
    const leads = [
        { name: "Wade Warren", stage: "Initial Inquiry", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Ava Wright", stage: "Initial Inquiry", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Cody Fisher", stage: "Initial Inquiry", img: "https://randomuser.me/api/portraits/men/12.jpg" },
    ];

    return (
        <div className="p-4 space-y-4">
            <h2 className="font-semibold">Prospect Leads</h2>
            <div className="space-y-3">
                {leads.map((lead, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                        <div className="flex items-center gap-3">
                            <img src={lead.img} alt={lead.name} className="w-10 h-10 rounded-full" />
                            <span className="font-medium">{lead.name}</span>
                        </div>
                        <div className="text-sm">
                            <span className="text-gray-500">Stage: </span>
                             {lead.stage}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
