function WhyTravelMate() {
    const features = [
        {
            title: "All-in-One Platform",
            desc: "Plan, stay, budget and explore from one place."
        },
        {
            title: "Travel Smarter",
            desc: "Make informed decisions with useful travel tools."
        },
        {
            title: "Save Time",
            desc: "Get everything you need without switching apps."
        }
    ];

    return (
        <section className="why-travelmate">

            <div className="section-header">
                <h2>Why TravelMate?</h2>
                <p>
                    Designed to simplify every stage of your journey.
                </p>
            </div>

            <div className="why-grid">
                {features.map((item, index) => (
                    <div className="why-card" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default WhyTravelMate;