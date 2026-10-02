import { useState } from "react";

function Hero() {

    const [destination, setDestination] = useState("");

    const handleSearch = () => {

        if (!destination.trim()) {
            return;
        }

        const searchUrl = `https://en.wikivoyage.org/w/index.php?search=${encodeURIComponent(
            destination.trim()
        )}`;

        window.open(searchUrl, "_blank");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <section className="hero">

            <div className="hero-left">

                <h1>
                    Plan Less.
                    <br />
                    <span className="blue-text">Explore</span> More.
                </h1>

                <p>
                    Discover destinations, optimize packing,
                    manage expenses and plan layovers —
                    all in one place.
                </p>

                <div className="search-box">

                    <input
                        type="text"
                        placeholder="Search any destination..."
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />

                    <button onClick={handleSearch}>
                        Search
                    </button>

                </div>

                <div className="hero-buttons">

                    <button
                        className="primary-btn"
                        onClick={() => {
                            document
                                .querySelector(".destinations")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Explore Destinations
                    </button>

                    <button
                        className="secondary-btn"
                        onClick={() => {
                            document
                                .querySelector(".modules")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Learn More
                    </button>

                </div>

            </div>

            <div className="hero-right">

                <img
                    src="/world-map.svg"
                    alt="World Map"
                />

                <div className="stat-card stat-1">
                    <h3>50+</h3>
                    <p>Countries</p>
                </div>

                <div className="stat-card stat-2">
                    <h3>10K+</h3>
                    <p>Destinations</p>
                </div>

                <div className="stat-card stat-3">
                    <h3>1M+</h3>
                    <p>Travelers</p>
                </div>

                <div className="stat-card stat-4">
                    <h3>24/7</h3>
                    <p>Support</p>
                </div>

            </div>

        </section>
    );
}

export default Hero;