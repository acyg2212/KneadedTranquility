import React from 'react';


function User(props) {
    return (
        <>
            <strong>Email:</strong> {props.user.email}<br />
            <hr />
        </>
    );
}
export default User;