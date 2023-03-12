
export default function ServiceItem ({ data }) {
    const numService = data.services.length;
    const midPoint = Math.ceil( numService / 2 );
    const leftCol = data.services.slice( 0, midPoint );
    const rightCol = data.services.slice( midPoint );

    return (
        <div className="wrap">
            <div className="service-title">
                <h3>{data.category}</h3>
            </div>
            <div className="row">
                <div className="column">
                    {leftCol.map((services) => (
                        <div className="service-item">
                            <h5>{services.item}</h5>
                            <div className="mi-meta">
                                <p>{services.description}</p>
                                <div className="service-price">{services.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="column">
                    {rightCol.map((services) => (
                        <div className="service-item">
                            <h5>{services.item}</h5>
                            <div className="mi-meta">
                                <p>{services.description}</p>
                                <div className="service-price">{services.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}