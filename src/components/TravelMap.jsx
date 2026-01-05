
import React from 'react';
import { ComposableMap, Geographies, Geography, Marker, Line } from '@vnedyalk0v/react19-simple-maps';
import { useNavigate } from 'react-router-dom';

const INDIA_TOPO_JSON = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-districts.json";

const TravelMap = ({ travels }) => {
    const navigate = useNavigate();

    // Accurate coordinates for cities
    const cityCoordinates = {
        "Chennai": [80.27, 13.08],
        "Bengaluru": [77.59, 12.97],
        // Add more cities as needed
    };

    return (
        <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            position: 'relative',
            background: 'transparent',
            padding: '1rem',
        }}>
            <h3 style={{ color: 'var(--spotify-white)', marginBottom: '1rem', textAlign: 'center' }}>My Journey</h3>

            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 1000,
                    center: [78.9629, 20.5937] // Center of India
                }}
                style={{ width: "100%", height: "auto" }}
            >
                <Geographies geography={INDIA_TOPO_JSON}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="transparent"
                                stroke="var(--spotify-light-gray)"
                                strokeWidth={0.5}
                                style={{
                                    default: { outline: "none" },
                                    hover: { outline: "none" },
                                    pressed: { outline: "none" },
                                }}
                            />
                        ))
                    }
                </Geographies>

                {/* Travel Path */}
                {travels.length > 1 && (
                    <Line
                        from={cityCoordinates[travels[0].location]}
                        to={cityCoordinates[travels[1].location]}
                        stroke="red"
                        strokeWidth={2}
                        strokeLinecap="round"
                    />
                )}

                {/* City Markers */}
                {travels.map((stop, index) => {
                    const coords = cityCoordinates[stop.location];
                    if (!coords) return null;

                    return (
                        <Marker
                            key={index}
                            coordinates={coords}
                            onClick={() => navigate(`/ memory / ${stop.location} `)}
                            style={{ cursor: 'pointer' }}
                        >
                            <circle r={4} fill="var(--spotify-white)" />
                            <circle r={8} stroke="red" strokeWidth={1} fill="transparent" />
                            <text
                                textAnchor="middle"
                                y={-10}
                                style={{ fontFamily: "system-ui", fill: "var(--spotify-white)", fontSize: "10px", fontWeight: "bold" }}
                            >
                                {stop.location}
                            </text>
                        </Marker>
                    );
                })}
            </ComposableMap>
        </div>
    );
};

export default TravelMap;

