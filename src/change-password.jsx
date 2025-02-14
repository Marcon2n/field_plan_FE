import React from 'react';

const ChangePassword = () => {
    const handleChangePassword = () => {
        window.location.href = 'http://localhost:8080/realms/test/login-actions/required-action?execution=UPDATE_PASSWORD&client_id=account-console&tab_id=aXwf5L0OVrw&client_data=eyJydSI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWFsbXMvdGVzdC9hY2NvdW50L2FjY291bnQtc2VjdXJpdHkvc2lnbmluZy1pbiIsInJ0IjoiY29kZSIsInJtIjoicXVlcnkiLCJzdCI6IjQ0NGMwODE0LTZhNWQtNDdkMS1iNDQzLWQyNWQ5NDdkNDhjZiJ9';
    };

    return (
        <div>
            <h2>Change Password</h2>
            <button onClick={handleChangePassword}>Change Password</button>
        </div>
    );
};

export default ChangePassword;
