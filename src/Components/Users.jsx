import { useState, useEffect } from "react";
import axios from 'axios';

const usersList = [{
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
},
{
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
},
{
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
},
{
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
},
{
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
},
{
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
}];

const Users = () => {
    const [users, setUsers] = useState([]);
    const [serverData, setServerData] = useState({});

    useEffect(()=>{

        axios.get('https://reqres.in/api/users?page=2')
        .then(function (response) {
            // handle success
            console.log("Response from reqres: ", response);
            setServerData(response.data);
            setUsers(response.data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
        
    }, []);

    return (
        <div className="container">
            <div className="row">
                {users.map((user)=>{
                    return (
                        <div className="col-sm-3" key={user.id}>
                            <div className="card mt-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-start">
                                        <img src=
                                        { user.avatar??"//via.placeholder.com/400/000000/ffffff?text=User" } className="img-circle" alt="" />
                                        <div className="ms-3">
                                            <h5>{user.first_name + " " + user.last_name}</h5>
                                            <p className="text-secondary">{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="row">
                <div className="col">
                    <p>Showing {serverData.per_page} of {serverData.total} records.</p>
                </div>
            </div>
        </div>
    );
}

export default Users;