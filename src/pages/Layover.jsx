import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    MapPin,
    Clock3,
    Plane,
    Sparkles,
    ArrowRight
} from "lucide-react";

function Layover() {

    const [airport, setAirport] = useState("");
    const [hours, setHours] = useState("");
    const [interest, setInterest] = useState("");
    const [result, setResult] = useState(null);

    const itineraries = {

        explore: [
            {
                title: "City Explorer",
                description:
                    "Use your layover to explore a nearby landmark, enjoy a local meal and return with enough time for your flight.",
                stops: [
                    "Airport → City Center",
                    "Explore a local landmark",
                    "Try a local meal",
                    "Return to airport"
                ]
            },
            {
                title: "Quick City Escape",
                description:
                    "A short adventure designed for travellers who want to step outside the airport without rushing.",
                stops: [
                    "Leave the airport",
                    "Visit a nearby attraction",
                    "Coffee or local snack",
                    "Head back to airport"
                ]
            }
        ],

        food: [
            {
                title: "Local Food Hunt",
                description:
                    "Turn your layover into a small food adventure and discover something local.",
                stops: [
                    "Leave the airport",
                    "Find a local food spot",
                    "Try a local specialty",
                    "Return to airport"
                ]
            },
            {
                title: "Taste & Relax",
                description:
                    "A relaxed food-focused itinerary for travellers who prefer good food over sightseeing.",
                stops: [
                    "Find a nearby restaurant",
                    "Enjoy a local meal",
                    "Coffee or dessert",
                    "Return to airport"
                ]
            }
        ],

        relax: [
            {
                title: "Slow Layover",
                description:
                    "Take it easy, eat something good and give yourself plenty of time before your next flight.",
                stops: [
                    "Find a comfortable lounge",
                    "Have a meal",
                    "Coffee & rest",
                    "Walk back to your gate"
                ]
            },
            {
                title: "Recharge Mode",
                description:
                    "A low-stress plan focused on food, rest and getting ready for your next flight.",
                stops: [
                    "Find a quiet place",
                    "Grab some food",
                    "Rest & recharge",
                    "Return to your gate"
                ]
            }
        ]

    };


    const spinRoulette = () => {

        if (!airport || !hours || !interest) {
            alert("Please select all options first.");
            return;
        }

        const options = itineraries[interest];

        const randomPlan =
            options[Math.floor(Math.random() * options.length)];

        setResult({
            ...randomPlan,
            airport,
            hours
        });

    };


    return (


        <div className="layover-page">

            {/* HERO */}

            <section className="layover-hero">
                <Navbar />
                <div className="layover-hero-container">


                    <div className="layover-badge">
                        ✈️ Layover Roulette
                    </div>

                    <h1>
                        Turn your layover into
                        <span> an adventure.</span>
                    </h1>

                    <p>
                        Tell us how much time you have and what you feel
                        like doing. We'll spin up a simple travel plan for you.
                    </p>


                    {/* SEARCH CARD */}

                    <div className="layover-search">

                        <div className="layover-search-header">

                            <div>
                                <h2>Plan your layover</h2>

                                <p>
                                    A few details. One unexpected itinerary.
                                </p>
                            </div>

                            <div className="layover-search-icon">
                                <Sparkles size={22} />
                            </div>

                        </div>


                        <div className="layover-form">

                            {/* Airport */}

                            <div className="layover-field">

                                <label>
                                    <MapPin size={16} />
                                    Airport
                                </label>

                                <select
                                    value={airport}
                                    onChange={(e) =>
                                        setAirport(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select airport
                                    </option>

                                    <option value="Delhi">
                                        Delhi
                                    </option>

                                    <option value="Mumbai">
                                        Mumbai
                                    </option>

                                    <option value="Bengaluru">
                                        Bengaluru
                                    </option>

                                    <option value="Dubai">
                                        Dubai
                                    </option>

                                    <option value="Singapore">
                                        Singapore
                                    </option>

                                </select>

                            </div>


                            {/* Time */}

                            <div className="layover-field">

                                <label>
                                    <Clock3 size={16} />
                                    Layover time
                                </label>

                                <select
                                    value={hours}
                                    onChange={(e) =>
                                        setHours(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select time
                                    </option>

                                    <option value="3 hours">
                                        3 hours
                                    </option>

                                    <option value="5 hours">
                                        5 hours
                                    </option>

                                    <option value="7 hours">
                                        7 hours
                                    </option>

                                    <option value="10+ hours">
                                        10+ hours
                                    </option>

                                </select>

                            </div>


                            {/* Interest */}

                            <div className="layover-field">

                                <label>
                                    <Plane size={16} />
                                    I'm interested in
                                </label>

                                <select
                                    value={interest}
                                    onChange={(e) =>
                                        setInterest(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select interest
                                    </option>

                                    <option value="explore">
                                        Exploring
                                    </option>

                                    <option value="food">
                                        Food
                                    </option>

                                    <option value="relax">
                                        Relaxing
                                    </option>

                                </select>

                            </div>


                            {/* Button */}

                            <button
                                className="spin-button"
                                onClick={spinRoulette}
                            >

                                <Sparkles size={18} />

                                Spin the Roulette

                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* RESULT */}

            {result && (

                <section className="layover-result-section">

                    <div className="layover-result-container">

                        <div className="layover-result-heading">

                            <h2>
                                Your <span>Layover Plan</span>
                            </h2>

                            <p>
                                Here's one way to make the most of your time.
                            </p>

                        </div>


                        <div className="layover-result-card">

                            <div className="layover-result-top">

                                <div className="layover-result-title">

                                    <span className="layover-result-label">
                                        YOUR ROULETTE RESULT
                                    </span>

                                    <h3>
                                        {result.title}
                                    </h3>

                                    <p>
                                        {result.description}
                                    </p>

                                </div>


                                <div className="layover-result-meta">

                                    <div>
                                        <MapPin size={17} />
                                        <span>
                                            {result.airport}
                                        </span>
                                    </div>

                                    <div>
                                        <Clock3 size={17} />
                                        <span>
                                            {result.hours}
                                        </span>
                                    </div>

                                </div>

                            </div>


                            {/* ITINERARY */}

                            <div className="layover-itinerary">

                                {result.stops.map((stop, index) => (

                                    <div
                                        className="layover-step"
                                        key={index}
                                    >

                                        <div className="layover-step-number">
                                            {index + 1}
                                        </div>

                                        <span>
                                            STEP {index + 1}
                                        </span>

                                        <h4>
                                            {stop}
                                        </h4>

                                    </div>

                                ))}

                            </div>


                            {/* TIP */}

                            <div className="layover-tip">

                                <strong>Travel tip:</strong>{" "}

                                Always leave enough buffer for airport
                                security, terminal transfers and boarding.

                            </div>


                            {/* AGAIN */}

                            <button
                                className="spin-again"
                                onClick={spinRoulette}
                            >

                                Spin Again

                                <ArrowRight size={17} />

                            </button>

                        </div>

                    </div>

                </section>

            )}


            {/* HOW IT WORKS */}

            <section className="layover-how">

                <div className="layover-how-container">

                    <div className="section-header">

                        <h2>
                            How Layover Roulette Works
                        </h2>

                        <p>
                            Turn your waiting time into something memorable.
                        </p>

                    </div>


                    <div className="layover-how-grid">

                        <div className="layover-how-card">

                            <div className="layover-how-icon">
                                <MapPin size={24} />
                            </div>

                            <h3>
                                1. Choose your airport
                            </h3>

                            <p>
                                Tell us where your layover is happening.
                            </p>

                        </div>


                        <div className="layover-how-card">

                            <div className="layover-how-icon">
                                <Clock3 size={24} />
                            </div>

                            <h3>
                                2. Tell us your time
                            </h3>

                            <p>
                                Select how many hours you have available.
                            </p>

                        </div>


                        <div className="layover-how-card">

                            <div className="layover-how-icon">
                                <Sparkles size={24} />
                            </div>

                            <h3>
                                3. Spin your plan
                            </h3>

                            <p>
                                Get a simple itinerary based on your choices.
                            </p>

                        </div>

                    </div>

                </div>


            </section>
            <Footer />
        </div>

    );
}

export default Layover;