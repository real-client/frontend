import React, { useEffect, useState } from "react";
import classes from "../founders/team.module.css";
import axios from "axios";
import VolunteerCard from "./volunteerCard";

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
      .get("http://localhost:5000/volunteer")
      .then((response) => {
        console.log(response.data);
        setVolunteers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(volunteers);

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
console.log(volunteers);
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
      .post("http://localhost:5000/volunteer", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((response) => {
        console.log(response.data);
        setVolunteers((prevVolunteers) => [...prevVolunteers, response.data]);
        setNewVolunteer({
          firstName: "",
          lastName: "",
          image: null,
          title: "",
          faculty: "",
          branch: "",
          startingDate: "",
          endingDate: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/volunteer/${id}`)
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
      .put(`http://localhost:5000/volunteer/${id}`, updateVolunteer)
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
              <VolunteerCard
                key={volunteer._id}
                imgSrc={volunteer.photo}
                firstName={volunteer.firstName}
                lastName={volunteer.lastName}
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