import maldives from "../assets/destinations/maldives.jpg";
import switzerland from "../assets/destinations/switzerland.jpg";
import venice from "../assets/destinations/venice.jpg";
import japan from "../assets/destinations/japan.jpg";

function Destinations() {

    const destinations = [
        {
            name: "Maldives",
            image: maldives,
            link: "https://en.wikivoyage.org/wiki/Maldives",
        },
        {
            name: "Switzerland",
            image: switzerland,
            link: "https://en.wikivoyage.org/wiki/Switzerland",
        },
        {
            name: "Venice",
            image: venice,
            link: "https://en.wikivoyage.org/wiki/Venice",
        },
        {
            name: "Japan",
            image: japan,
            link: "https://en.wikivoyage.org/wiki/Japan",
        },
    ];

    return (
        <section className="destinations">

            <div className="section-header">
                <h2>Popular Destinations</h2>
                <p>Explore trending places around the world</p>
            </div>

            <div className="destination-row">

                {destinations.map((place, index) => (

                    <a
                        href={place.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="small-card"
                        key={index}
                    >
                        <img
                            src={place.image}
                            alt={place.name}
                        />

                        <h4>{place.name}</h4>
                    </a>

                ))}

            </div>

        </section>
    );
}

export default Destinations;