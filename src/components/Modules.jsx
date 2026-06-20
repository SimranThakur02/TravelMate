import layover from "../assets/tools/layover.svg";
import stayfinder from "../assets/tools/stay.svg";
import roambudget from "../assets/tools/budget.svg";
import nomadscout from "../assets/tools/nomad.svg";
import { useNavigate } from "react-router-dom";

function Modules() {
    const navigate = useNavigate();
    const tools = [
        {
            title: "Layover Roulette",
            image: layover,
            description:
                "Generate smart itineraries for airport layovers.",
            route: "/layover"
        },
        {
            title: "StayFinder",
            image: stayfinder,
            description:
                "Find budget hotels, hostels, PGs and couchsurfing options.",
            route: "/stayfinder"
        },
        {
            title: "RoamBudget",
            image: roambudget,
            description:
                "Track travel expenses and split bills.",
            route: "/roambudget"
        },
        {
            title: "NomadScout",
            image: nomadscout,
            description:
                "Discover digital nomad friendly neighborhoods.",
            route: "/nomadscout"
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
                    <div
                        className="module-card"
                        key={index}
                        onClick={() => navigate(tool.route)}
                    >
                        <img
                            src={tool.image}
                            alt={tool.title}
                            className="tool-image"
                        />

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