import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center min-vh-75">
                        {/* left column */}
                        <div className="col-lg-7 py-5">
                            <p className="hero-label">
                                REACT JS • ROUTING • COMPONENTS
                            </p>
                            <h1 className="hero-title">
                                React Multi-Page
                                <span> Application</span>
                            </h1>
                            <p className="hero-text">
                                A modern React application demonstrating
                                routing, reusable components, dynamic user
                                pages and responsive design.
                            </p>
                            <div className="d-flex gap-3 flex-wrap">
                                <Link to="/users" className="btn btn-primary px-4">
                                    Explore Users
                                </Link>
                                <Link to="/about" className="btn btn-outline-primary px-4">
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        {/* right column */}
                        <div className="col-lg-5">
                            <div className="hero-card">
                                <div className="hero-card-icon">⚛</div>
                                <h3>Built with React</h3>

                                <p>Functional components, React Router, hooks and reusable UI structure.</p>

                                <div className="hero-features">
                                    <span>Components</span>
                                    <span>Routing</span>
                                    <span>Hooks</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Overview Section */}
            <section className="container py-5">
                <div className="text-center mb-4">
                    <p className="section-label">APPLICATION OVERVIEW</p>
                    <h2 className="section-title">
                        Simple React Concepts
                    </h2>
                </div>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="info-card">
                            <h4>React Components</h4>
                            <p>
                                The application is divided into reusable
                                components and pages.
                            </p>
                        </div>
                    </div>

                    {/* React Routing */}
                    <div className="col-md-4">
                        <div className="info-card">
                            <h4>React Routing</h4>
                            <p>
                                Navigate between Home, About, Users and
                                individual User Details pages.
                            </p>
                        </div>
                    </div>

                    {/* React Hooks */}
                    <div className="col-md-4">
                        <div className="info-card">
                            <h4>React Hooks</h4>
                            <p>
                                useState and useEffect are used where they
                                provide meaningful functionality.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="welcome-box mt-5">
                    <h3>Welcome to the application</h3>
                    {showWelcome && (
                        <p>
                            This project demonstrates a multi-page React
                            application with routing and dynamic user details.
                        </p>
                    )}
                    <button className="btn btn-sm btn-outline-primary" onClick={() => setShowWelcome(!showWelcome)}>
                        {showWelcome ? 'Hide Message' : 'Show Message'}
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;