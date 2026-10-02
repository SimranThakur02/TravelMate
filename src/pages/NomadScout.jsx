import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
    MapPin,
    Wifi,
    Briefcase,
    Wallet,
    Coffee,
    ArrowRight,
    Search
} from "lucide-react";

function NomadScout() {

    const [city, setCity] = useState("");
    const [priority, setPriority] = useState("");
    const [result, setResult] = useState(null);

    const neighborhoods = {

        bangalore: [
            {
                name: "Koramangala",
                description:
                    "A lively neighborhood with startups, cafes, restaurants and a strong remote-work atmosphere.",
                cost: "Mid - High",
                internet: "Fast",
                coworking: "Excellent",
                vibe: "Social & Startup"
            },
            {
                name: "HSR Layout",
                description:
                    "A more residential option with cafes, coworking spaces and good access to Bengaluru's startup areas.",
                cost: "Mid",
                internet: "Fast",
                coworking: "Very Good",
                vibe: "Balanced"
            },
            {
                name: "Indiranagar",
                description:
                    "A popular urban neighborhood with cafes, restaurants, nightlife and easy access to workspaces.",
                cost: "Mid - High",
                internet: "Fast",
                coworking: "Very Good",
                vibe: "Urban & Social"
            }
        ],

        mumbai: [
            {
                name: "Andheri West",
                description:
                    "A practical base with good transport connections, cafes and access to coworking options.",
                cost: "Mid",
                internet: "Fast",
                coworking: "Good",
                vibe: "Convenient"
            },
            {
                name: "Bandra",
                description:
                    "A lively neighborhood with cafes, restaurants, creative spaces and a strong city lifestyle.",
                cost: "High",
                internet: "Fast",
                coworking: "Very Good",
                vibe: "Creative & Social"
            },
            {
                name: "Powai",
                description:
                    "A quieter planned area with modern housing, workspaces and a more relaxed environment.",
                cost: "Mid",
                internet: "Fast",
                coworking: "Good",
                vibe: "Quiet & Modern"
            }
        ],

        goa: [
            {
                name: "Anjuna",
                description:
                    "A popular nomad area with cafes, community spaces and a relaxed beach lifestyle.",
                cost: "Mid",
                internet: "Good",
                coworking: "Good",
                vibe: "Beach & Social"
            },
            {
                name: "Vagator",
                description:
                    "A scenic coastal neighborhood with cafes, restaurants and a growing remote-work community.",
                cost: "Mid",
                internet: "Good",
                coworking: "Good",
                vibe: "Relaxed & Creative"
            },
            {
                name: "Assagao",
                description:
                    "A quieter North Goa option for people who prefer a slower environment while staying near popular areas.",
                cost: "Mid",
                internet: "Good",
                coworking: "Moderate",
                vibe: "Quiet & Green"
            }
        ],

        delhi: [
            {
                name: "Hauz Khas",
                description:
                    "A lively neighborhood with cafes, restaurants, creative spaces and a younger atmosphere.",
                cost: "Mid",
                internet: "Good",
                coworking: "Good",
                vibe: "Creative & Social"
            },
            {
                name: "Connaught Place",
                description:
                    "A central business and lifestyle district with strong transport connections and many cafes.",
                cost: "High",
                internet: "Fast",
                coworking: "Very Good",
                vibe: "Central & Busy"
            },
            {
                name: "Gurugram",
                description:
                    "A major business hub with modern infrastructure, coworking spaces and corporate connectivity.",
                cost: "Mid - High",
                internet: "Fast",
                coworking: "Excellent",
                vibe: "Professional"
            }
        ]
    };


    const scoutNeighborhood = () => {

        if (!city || !priority) {
            alert("Please select both options first.");
            return;
        }

        const options = neighborhoods[city];

        let selected = options;

        if (priority === "budget") {
            selected = options.filter(
                (place) =>
                    place.cost === "Mid" ||
                    place.cost === "Mid - High"
            );
        }

        if (priority === "work") {
            selected = options.filter(
                (place) =>
                    place.coworking === "Excellent" ||
                    place.coworking === "Very Good"
            );
        }

        if (priority === "social") {
            selected = options.filter(
                (place) =>
                    place.vibe.includes("Social") ||
                    place.vibe.includes("Creative")
            );
        }

        if (selected.length === 0) {
            selected = options;
        }

        setResult(selected);

    };


    return (

        <div className="nomad-page">

            {/* HERO */}
            <Navbar />

            <section className="nomad-hero">

                <div className="nomad-hero-container">

                    <div className="nomad-badge">
                        🧭 NomadScout
                    </div>

                    <h1>
                        Find your
                        <span> ideal neighborhood.</span>
                    </h1>

                    <p>
                        Discover neighborhoods that match the way you
                        work, live and explore.
                    </p>


                    {/* SEARCH CARD */}

                    <div className="nomad-search">

                        <div className="nomad-search-header">

                            <div>
                                <h2>
                                    Scout your next base
                                </h2>

                                <p>
                                    Tell us where you're going and what matters most.
                                </p>
                            </div>

                            <div className="nomad-search-icon">
                                <Search size={22} />
                            </div>

                        </div>


                        <div className="nomad-form">

                            {/* CITY */}

                            <div className="nomad-field">

                                <label>
                                    <MapPin size={16} />
                                    Destination
                                </label>

                                <select
                                    value={city}
                                    onChange={(e) =>
                                        setCity(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select city
                                    </option>

                                    <option value="bangalore">
                                        Bengaluru
                                    </option>

                                    <option value="mumbai">
                                        Mumbai
                                    </option>

                                    <option value="goa">
                                        Goa
                                    </option>

                                    <option value="delhi">
                                        Delhi NCR
                                    </option>

                                </select>

                            </div>


                            {/* PRIORITY */}

                            <div className="nomad-field">

                                <label>
                                    <Briefcase size={16} />
                                    My priority
                                </label>

                                <select
                                    value={priority}
                                    onChange={(e) =>
                                        setPriority(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select priority
                                    </option>

                                    <option value="work">
                                        Work & Coworking
                                    </option>

                                    <option value="budget">
                                        Budget
                                    </option>

                                    <option value="social">
                                        Social & Lifestyle
                                    </option>

                                </select>

                            </div>


                            <button
                                className="nomad-scout-button"
                                onClick={scoutNeighborhood}
                            >

                                <Search size={18} />

                                Scout Neighborhoods

                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* RESULTS */}

            {result && (

                <section className="nomad-results">

                    <div className="nomad-results-container">

                        <div className="nomad-results-heading">

                            <h2>
                                Neighborhoods for
                                <span> your lifestyle</span>
                            </h2>

                            <p>
                                Explore a few areas that match your selected priorities.
                            </p>

                        </div>


                        <div className="nomad-grid">

                            {result.map((place, index) => (

                                <div
                                    className="nomad-card"
                                    key={index}
                                >

                                    <div className="nomad-card-top">

                                        <div className="nomad-card-icon">
                                            <MapPin size={22} />
                                        </div>

                                        <span>
                                            MATCH {index + 1}
                                        </span>

                                    </div>


                                    <h3>
                                        {place.name}
                                    </h3>

                                    <p className="nomad-description">
                                        {place.description}
                                    </p>


                                    <div className="nomad-details">

                                        <div>
                                            <Wallet size={17} />
                                            <span>
                                                {place.cost}
                                            </span>
                                        </div>

                                        <div>
                                            <Wifi size={17} />
                                            <span>
                                                {place.internet} internet
                                            </span>
                                        </div>

                                        <div>
                                            <Briefcase size={17} />
                                            <span>
                                                {place.coworking} coworking
                                            </span>
                                        </div>

                                        <div>
                                            <Coffee size={17} />
                                            <span>
                                                {place.vibe}
                                            </span>
                                        </div>

                                    </div>


                                    <button className="nomad-explore">

                                        Explore area

                                        <ArrowRight size={17} />

                                    </button>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

            )}


            {/* HOW IT WORKS */}

            <section className="nomad-how">

                <div className="nomad-how-container">

                    <div className="section-header">

                        <h2>
                            How NomadScout Works
                        </h2>

                        <p>
                            Find a neighborhood that fits your way of living and working.
                        </p>

                    </div>


                    <div className="nomad-how-grid">

                        <div className="nomad-how-card">

                            <div className="nomad-how-icon">
                                <MapPin size={24} />
                            </div>

                            <h3>
                                1. Choose a destination
                            </h3>

                            <p>
                                Select the city where you want to build your next base.
                            </p>

                        </div>


                        <div className="nomad-how-card">

                            <div className="nomad-how-icon">
                                <Briefcase size={24} />
                            </div>

                            <h3>
                                2. Set your priority
                            </h3>

                            <p>
                                Tell us whether work, budget or lifestyle matters most.
                            </p>

                        </div>


                        <div className="nomad-how-card">

                            <div className="nomad-how-icon">
                                <Search size={24} />
                            </div>

                            <h3>
                                3. Scout your area
                            </h3>

                            <p>
                                Explore neighborhoods that fit your selected needs.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
            <Footer />
        </div>

    );
}

export default NomadScout;