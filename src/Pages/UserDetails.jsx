import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { users } from '../Data/users';

function UserDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const selectedUser = users.find((user) => user.id === Number(id));
        setUser(selectedUser);

        document.title = selectedUser ? `${selectedUser.name} | User Details` : 'User Not Found';

        return () => {
            document.title = 'React Multi-Page App';
        };
    }, [id]);

    if (!user) {
        return (
            <div className="container page-section text-center">
                <div className="empty-state">
                    <h2>User Not Found</h2>
                    <p>
                        The user with ID {id} does not exist.
                    </p>

                    <button className="btn btn-primary" onClick={() => navigate('/users')}>
                        ← Back to Users
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container page-section">
            <div className="user-detail-card">
                <div className="user-detail-avatar">
                    {user.name.charAt(0)}
                </div>

                <p className="section-label">USER PROFILE</p>
                <h1>{user.name}</h1>
                <p className="user-role">
                    {user.role}
                </p>

                <div className="details-list">
                    <div>
                        <span>ID</span>
                        <strong>{user.id}</strong>
                    </div>

                    <div>
                        <span>Name</span>
                        <strong>{user.name}</strong>
                    </div>

                    <div>
                        <span>Email</span>
                        <strong>{user.email}</strong>
                    </div>

                    <div>
                        <span>Role</span>
                        <strong>{user.role}</strong>
                    </div>
                </div>

                <button className="btn btn-outline-primary" onClick={() => navigate('/users')}>
                    ← Go Back to Users
                </button>
            </div>
        </div>
    );
}

export default UserDetails;