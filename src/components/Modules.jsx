function Modules() {
    const tools = [
        {
            title: "Layover Roulette",
            icon: "✈",
            description:
                "Generate smart itineraries for airport layovers."
        },

        {
            title: "StayFinder",
            icon: "🏠",
            description:
                "Find budget hotels, hostels, PGs and couchsurfing options near your destination."
        },
        {
            title: "RoamBudget",
            icon: "💰",
            description:
                "Track travel expenses and split bills."
        },
        {
            title: "NomadScout",
            icon: "🌍",
            description:
                "Find digital nomad friendly neighborhoods."
        }
    ];

    return (
        <section className="modules">

            <div className="section-header">
                <h2>TravelMate Tools</h2>

                <p>
                    Everything you need to travel smarter.
                </p>
            </div>

            <div className="module-grid">
                {tools.map((tool, index) => (
                    <div className="module-card" key={index}>
                        <div className="module-icon">
                            {tool.icon}
                        </div>

                        <h3>{tool.title}</h3>

                        <p>{tool.description}</p>

                        <button>
                            Explore →
                        </button>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Modules;