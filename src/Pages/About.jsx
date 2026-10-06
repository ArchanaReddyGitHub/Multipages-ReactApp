import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="container page-section">
            <div className="page-header">
                <p className="section-label">ABOUT</p>
                <h1>About This Application</h1>
                <p>
                    This project demonstrates how a React application can be
                    organized into multiple pages using React Router and
                    reusable functional components.
                </p>
            </div>

            <div className="row g-4 mt-2">
                <div className="col-md-6">
                    <div className="info-card">
                        <h4>Technologies Used</h4>
                        <ul>
                            <li>React JS</li>
                            <li>React Router</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>Custom CSS</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="info-card">
                        <h4>React Concepts</h4>
                        <ul>
                            <li>Functional Components</li>
                            <li>useState</li>
                            <li>useEffect</li>
                            <li>useParams</li>
                            <li>useNavigate</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Link to="/" className="btn btn-primary mt-4"> ← Back to Home </Link>
        </div>
    );
}

export default About;