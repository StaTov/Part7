import React from 'react';
import UserBlogsCount from "./UserBlogsCount";

const Users = ({users}) => {

    return (
        <div>
            <table>
                <thead>
                <tr >
                    <td>
                        <h2>Users</h2>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td>
                        <strong>blogs created</strong>
                    </td>
                </tr>
                {users.map(user =>
                    <UserBlogsCount
                        key={user.id}
                        user={user}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default Users;