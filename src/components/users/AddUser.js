import { useState } from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(0);

    const changeHandler = (event) => {
        event.preventDefault();
        switch (event.target.name) {
            case "username":
                setUsername(event.target.value);
                break;
            case "age":
                setAge(event.target.value);
                break;
            default:
                return;
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.addUser({
            username: username,
            age: age,
        });
    };

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">User name</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    id="username"
                    onChange={changeHandler}
                />
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    name="age"
                    value={age}
                    id="age"
                    onChange={changeHandler}
                />
                <button>Add</button>
            </form>
        </Card>
    );
};

export default AddUser;
