import React, {useState, useEffect} from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

const Home = () =>  {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    async function getUsers() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers (data);
    }

    useEffect(() =>  {
        getUsers ();
    }, []);
    return (
<div className="container">
  <div className="row">
    <div className="user-list">
     {users.map((user) => (
      <div className="user" key={user.id} onClick={() => navigate(`${user.id}`)}>
        <div className="user-card">
          <div className="user-card__container">
            <h3>{user.name}</h3>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>Phone:</b> {user.phone}
            </p>
            <p>
              <b>Website:</b>
              {user.website}
            </p>
          </div>
        </div>
      </div>
     ))}
    </div>
  </div>
</div>
    );
};

export default Home;
     
