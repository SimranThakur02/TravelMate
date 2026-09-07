import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import stays from "../assets/data/stays";


function StayFinder() {
    return (
        <>
            <Navbar />

            <section className="stayfinder-hero">

                <div className="stayfinder-content">

                    <span className="stayfinder-badge">
                        🏠 StayFinder
                    </span>

                    <h1>
                        Find the perfect stay,
                        <br />
                        anywhere.
                    </h1>

                    <p>
                        Hotels, hostels, homestays and budget stays —
                        all in one place.
                    </p>

                    <div className="stayfinder-search">

                        <input
                            type="text"
                            placeholder="Where do you want to go?"
                        />

                        <input
                            type="date"
                        />

                        <input
                            type="date"
                        />

                        <select>
                            <option>1 Guest</option>
                            <option>2 Guests</option>
                            <option>3 Guests</option>
                            <option>4 Guests</option>
                        </select>

                        <button>
                            Search
                        </button>

                    </div>

                </div>

            </section>
            <section className="stay-results">

                <div className="filters">

                    <h3>Filters</h3>

                    <div className="filter-group">
                        <h4>Accommodation Type</h4>

                        <label>
                            <input type="checkbox" />
                            Hotel
                        </label>

                        <label>
                            <input type="checkbox" />
                            Hostel
                        </label>

                        <label>
                            <input type="checkbox" />
                            Homestay
                        </label>

                        <label>
                            <input type="checkbox" />
                            PG
                        </label>

                    </div>

                </div>

                <div className="results-grid">

                    {stays.map((stay) => (

                        <div
                            className="stay-card"
                            key={stay.id}
                        >

                            <img
                                src={stay.image}
                                alt={stay.name}
                            />

                            <div className="stay-info">

                                <h3>{stay.name}</h3>

                                <p>{stay.location}</p>

                                <span>{stay.type}</span>

                                <div className="stay-meta">

                                    <strong>
                                        ₹{stay.price}/night
                                    </strong>

                                    <span>
                                        ⭐ {stay.rating}
                                    </span>

                                </div>

                                <button>
                                    View Details
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            <Footer />
        </>
    );
}

export default StayFinder;