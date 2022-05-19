import User from "./User";

const Users = (props) => {
    return (
        <div className="user-list">
            {props.users.map((user) => (
                <User
                    user={user}
                    key={`${Math.random() * 1000} ${user.username}`}
                />
            ))}
        </div>
    );
};

export default Users;
