function Hero() {
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
                    />

                    <button>
                        Search
                    </button>
                </div>

                <div className="hero-buttons">
                    <button className="primary-btn">
                        Explore Destinations
                    </button>

                    <button className="secondary-btn">
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