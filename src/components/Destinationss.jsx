import maldives from "../assets/destinations/maldives.jpg";
import switzerland from "../assets/destinations/switzerland.jpg";
import venice from "../assets/destinations/venice.jpg";
import japan from "../assets/destinations/japan.jpg";

function Destinations() {
    const destinations = [
        {
            name: "Maldives",
            image: maldives,
        },
        {
            name: "Switzerland",
            image: switzerland,
        },
        {
            name: "Venice",
            image: venice,
        },
        {
            name: "Japan",
            image: japan,
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
                    <div className="small-card" key={index}>
                        <img src={place.image} alt={place.name} />
                        <h4>{place.name}</h4>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Destinations;