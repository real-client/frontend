import React, { useEffect, useState } from "react";
import TeamCard from "../../components/team/TeamCard";
import classes from "../founders/team.module.css";
import axios from "axios";

function Volunteers() {
  const [volunteers, setVolunteers] = useState([]);
  const [newVolunteer, setNewVolunteer] = useState({
    name: "",
    title: "",
    faculty: "",
    branch: "",
    startDate: "",
    endDate: "",
    image: null
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/Volunteers")
      .then((response) => {
        console.log(response.data);
        setVolunteers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewVolunteer((prevVolunteer) => ({
      ...prevVolunteer,
      [name]: value
    }));
  };

  const handleFileChange = (event) => {
    setNewVolunteer((prevVolunteer) => ({
      ...prevVolunteer,
      image: event.target.files[0]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", newVolunteer.name);
    formData.append("title", newVolunteer.title);
    formData.append("faculty", newVolunteer.faculty);
    formData.append("branch", newVolunteer.branch);
    formData.append("startDate", newVolunteer.startDate);
    formData.append("endDate", newVolunteer.endDate);
    formData.append("image", newVolunteer.image);
    axios
      .post("http://localhost:3000/api/Volunteers", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((response) => {
        console.log(response.data);
        setVolunteers((prevVolunteers) => [...prevVolunteers, response.data]);
        setNewVolunteer({
          name: "",
          title: "",
          faculty: "",
          branch: "",
          startDate: "",
          endDate: "",
          image: null
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/Volunteers/${id}`)
      .then((response) => {
        console.log(response.data);
        setVolunteers((prevVolunteers) =>
          prevVolunteers.filter((volunteer) => volunteer.id !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (id, updateVolunteer) => {
    axios
      .put(`http://localhost:3000/api/Volunteers/${id}`, updateVolunteer)
      .then((response) => {
        console.log(response.data);
        setVolunteers((prevVolunteers) =>
          prevVolunteers.map((volunteer) =>
            volunteer.id !== id ? response.data : volunteer
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <div className={classes.teamWrapper}>
        <div className={classes.container}>
          <h1 align="center">Volunteers</h1>
          <p align="center">Something about our team</p>
          <div className={classes.teamGrid}>
            {volunteers.map((volunteer) => (
              <TeamCard
                key={volunteer.id}
                imgSrc={volunteer.photo}
                name={volunteer.name}
                title={volunteer.title}
                faculty={volunteer.faculty}
                branch={volunteer.branch}
                startDate={volunteer.startDate}
                endDate={volunteer.endDate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteers;