import Card from "../UI/Card";

const User = ({ user }) => {
    return (
        <Card>
            <div className="user">
                <h2>{user.username}</h2>
                <p>{user.age}</p>
            </div>
        </Card>
    );
};

export default User;
