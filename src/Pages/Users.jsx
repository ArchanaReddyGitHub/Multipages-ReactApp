import { useState } from 'react';
import { Link } from 'react-router-dom';
import { users } from '../Data/users';

function Users() {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter users based on the search term (case-insensitive)
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="container page-section">
            <div className="page-header">
                <p className="section-label">USERS</p>
                <h1>Users Directory</h1>
                <p>
                    Select a user to view their complete details.
                </p>
            </div>
            {/* Seach value */}
            <div className="search-box mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search users by name..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>

            <div className="row g-4">
                {filteredUsers.map((user) => (
                    <div className="col-md-6 col-lg-4" key={user.id}>
                        <div className="user-card">
                            <div className="user-avatar">
                                {user.name.charAt(0)}
                            </div>
                            <h3>{user.name}</h3>
                            <p className="user-role">
                                {user.role}
                            </p>
                            <p className="user-email">
                                {user.email}
                            </p>
                            <Link to={`/users/${user.id}`} className="btn btn-primary btn-sm">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {filteredUsers.length === 0 && (
                <div className="empty-state">
                    No users found.
                </div>
            )}
        </div>
    );
}

export default Users;