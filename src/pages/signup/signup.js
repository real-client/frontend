import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [title, setTitle] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setFamilyName] = useState("");
  const [active_email, setEmail] = useState("");
  const [father_name, setFatherName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [date_of_birth, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [residence, setResidence] = useState("");
  const [special_needs, setSpecial] = useState("");

  const [member, setMember] = useState(true);
  const [faculty, setFaculty] = useState("");
  const [branch, setBranch] = useState("");
  const [uni_email, setUlEmail] = useState("");
  const [uni_role, setStatus] = useState("");
  const [student_id, setUlIdNumb] = useState("");

  const [currentSection, setCurrentSection] = useState(1);

  const handleSubmit = (e) => {
    try{
      e.preventDefault();
      // console.log(email, password)
      const body = {
        title : title,
        first_name: first_name,
        last_name: last_name,
        active_email: active_email,
        father_name: father_name,
        phone:phone,
        password: password,
        date_of_birth: date_of_birth,
        gender: gender,
        nationality: nationality,
        residence :residence,
        special_needs: special_needs,
        is_lu_students: member,
        faculty:faculty,
        branch:branch,
        uni_email:uni_email,
        uni_role:uni_role,
        student_id:student_id
      }
      axios.post("http://localhost:5000/user/register", 
        body
       )
        .then((response) => { 
          // console.log(body);
          console.log("hey")
          toast.success("Signup Done !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }); 
    } catch (error) {
      console.log(error)
    }
    };

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };
  const handlePrevious = () => {
    setCurrentSection(currentSection - 1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="signup-container">
        <ToastContainer/>
        
        {currentSection === 1 && (
          
          <div className="card">
      <h1 className="signup-title">Sign Up</h1>

            <h2>Personal Information</h2>
            <div className="form-group">
              <div className="label-input">
            <label>Title</label>
            <select
              id="title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="input-email"
            >
              <option value=""></option>
              <option value="mr">Mr</option>
              <option value="miss">Miss</option>
              <option value="ms">Ms</option>
              <option value="mrs">Mrs</option>
              <option value="Dr">Dr</option>               
              <option value="prof">Prof</option>
              <option value="eng">Eng</option>
              <option value="student">Student</option>
            </select>
            </div>
            <br />
            <br />
            <div className="label-input">
            <label>First Name</label>
            <input
              type="text"
              value={first_name}
              onChange={(event) => setFirstName(event.target.value)}
              className="input-email"
            />
            </div>
            </div>
            <br />
            <br />
            <div className="form-group">
              <div className="label-input">
            <label>Family Name</label>
            <input
              type="text"
              value={last_name}
              onChange={(event) => setFamilyName(event.target.value)}
              className="input-email"
            />
            </div>
            <br />
            <br />
            <div className="label-input">
            <label>Father Name</label>
            <input
              type="text"
              value={father_name}
              onChange={(event) => setFatherName(event.target.value)}
              className="input-email"
            />
            </div>
            </div>
            <br />
            <br />
            <div className="form-group">
            <div className="label-input">
            <label>Email</label>
            <input
              type="email"
              value={active_email}
              onChange={(event) => setEmail(event.target.value)}
              className="input-email"
            />
            </div>
            <br />
            <br />
            <div className="label-input">
            <label>Phone Number</label>
            <input
              type="number"
              value={phone}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className="input-email"
            />
            </div>
            </div>
            <br />
            <br />
            
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="input-email"
            />
           
            <br />
            <br />
            <button type="button" onClick={handleNext} className="btn-login">
              Next
            </button>
          </div>
        )}
        {currentSection === 2 && (
          <div className="card">

            <h2>About Me</h2>
            <div className="form-group">
            <div className="label-input">
            <label>Date Of Birth </label>
            <input
              type="date"
              value={date_of_birth}
              onChange={(event) => setDate(event.target.value)}
              className="input-email"
            />
            </div>
            <br />
            <br />
            <div className="label-input">
            <label>Gender </label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(event) =>{ setGender(event.target.value)}
              }
              className="input-email"
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            </div>
            </div>
            <br />
            <br />
            <div className="form-group">
            <div className="label-input">
            <label>Nationality </label>
            <select
              id="nationality"
              name="nationality"
              value={nationality}
              onChange={(event) => setNationality(event.target.value)}
              className="input-email"
            >
              <option value=""></option>
              <option value="lebanon">Lebanon</option>
              <option value="algeria">Algeria</option>
              <option value="argentina">Argentina</option>
              <option value="australia">Australia</option>
              <option value="bahrain">Bahrain</option>
              <option value="bahamas">Bahamas</option>
              <option value="cameroon">Cameroon</option>
              <option value="canada">Canada</option>
              <option value="chile">Chile</option>
              <option value="china">China</option>
              <option value="cuba">Cuba</option>
              <option value="denmark">Denmark</option>
              <option value="djibouti">Djibouti</option>
              <option value="egypt">Egypt</option>
              <option value="finland">Finland</option>
              <option value="france">France</option>
              <option value="india">India</option>
              <option value="iran">Iran</option>
              <option value="iraq">Iraq</option>
              <option value="italy">Italy</option>
              <option value="japan">Japan</option>
              <option value="jordan">Jordan</option>
              <option value="kuwait">Kuwait</option>
              <option value="libya">Libya</option>
              <option value="palestine">Palestine</option>
              <option value="poland">Poland</option>
              <option value="portugal">Portugal</option>
              <option value="qatar">Qatar</option>
              <option value="russia">Russia</option>
              <option value="saudi-arabia">Saudi Arabia</option>
              <option value="serbia">Serbia</option>
              <option value="spain">Spain</option>
              <option value="syria">Syria</option>
              <option value="ukraine">Ukraine</option>
              <option value="united-arab-emirates">United Arab Emirates</option>
              <option value="united-kingdom">United Kingdom</option>
              <option value="united-states-of-america">
                United States of America
              </option>
              <option value="yemen">Yemen</option>
            </select>
            </div>
            <br/>
            <br />
            <div className="label-input">
            <label>residence country </label>
            <select
              id="residence"
              name="residence"
              value={residence}
              onChange={(event) => setResidence(event.target.value)}
              className="input-email"
            >
              <option value=""></option>
              <option value="Lebanon">Lebanon</option>
              <option value="Algeria">Algeria</option>
              <option value="Argentina">Argentina</option>
              <option value="Australia">Australia</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Cuba">Cuba</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Egypt">Egypt</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="India">India</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Italy">Italy</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Libya">Libya</option>
              <option value="Palestine">Palestine</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Qatar">Qatar</option>
              <option value="Russia">Russia</option>
              <option value="Saudi-arabia">Saudi Arabia</option>
              <option value="Serbia">Serbia</option>
              <option value="Spain">Spain</option>
              <option value="Syria">Syria</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United-arab-emirates">United Arab Emirates</option>
              <option value="United-kingdom">United Kingdom</option>
              <option value="United-states-of-america">
                United States of America
              </option>
              <option value="Yemen">Yemen</option>
            </select>
            </div>
            </div>
            <br />
            <br />
            
            <label>Person with special need </label>
            <select
              id="special_need"
              name="special_need"
              value={special_needs}
              onChange={(event) => setSpecial(event.target.value)}
              className="input-email"
            >
              <option value=""></option>
              <option value="false">No</option>
              <option value="true">Yes</option>
              
            </select>
              
            <br />
            <br />
            <button type="button" onClick={handlePrevious} className="btn-login">
              Previous
            </button>
            <button type="button" onClick={handleNext} className="btn-login">
              Next
            </button>
          </div>
        )}
        {currentSection === 3 && (
          <div className="card">
            <h2>University Information</h2>
            <div className="form-group">
            <div className="label-input">
            <label>Lebanese University Member </label>
            <select
              id="uni-member"
              name="uni-member"
              value={member}
              onChange={(event) => {setMember(event.target.value);}}
              className="input-email"
            >
              <option value=""></option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            </div>
            <br />
            <br />
            <div className="label-input">
            <label>Faculty </label>
            <select
              id="faculty"
              name="faculty"
              value={faculty}
              onChange={(event) => setFaculty(event.target.value)}
              className="input-email"
            >
              <option value=""></option>
              <option value="Tourism and Hospitality Management">Tourism and Hospitality Management</option>
              <option value="Information">Information</option>
              <option value="Letters and Human Sciences">Letters and Human Sciences</option>
              <option value="Pedagogy">Pedagogy</option>
              <option value="Technology">Technology</option>
              <option value="Law and Political and Administrative Sciences">Law and Political and Administrative Sciences</option>
              <option value="Agronomy">Agronomy</option>
              <option value="Public Health">Public Health</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Science">Science</option>
              <option value="Economics and Business Administration">Economics and Business Administration</option>
              <option value="Medical Science">Medical Science</option>
              <option value="Fine Arts and Architecture">Fine Arts and Architecture</option>
              <option value="Engineering">Engineering</option>
              <option value="Dental Medicine">Dental Medicine</option>
            </select>
            </div>
            </div>
            <br/>
            <br />

            <div className="form-group">
            <div className="label-input">
            <label>Branch </label>
            <select
              id="branch"
              name="branch"
              value={branch}
              onChange={(event) => setBranch(event.target.value)}
              className="input-email"
            >
              <option value=""></option>
              <option value="Online">Online</option>
              <option value="Deanship">Deanship</option>
              <option value="1st Branch">1st Branch</option>
              <option value="2nd Branch">2nd Branch</option>
              <option value="3rd Branch">3rd Branch</option>
              <option value="4th Branch">4th Branch</option>
              <option value="5th Branch">5th Branch</option>
              <option value="6th Branch">6th Branch</option>
              <option value="Centre MINE Hadath">Centre MINE Hadath</option>
              <option value="Centre MINE Tripoli">Centre MINE Tripoli</option>
              <option value="Center for Languages and Translation">Center for Languages and Translation</option>
              <option value="Center of Language Sciences and Communication">Center of Language Sciences and Communication</option>
              <option value="Filière - French Section">Filière - French Section</option>
              <option value="Restoration Center">Restoration Center</option>
            </select>
            </div>
            <br/>
            <br />
            <div className="label-input">
             <label>UL Email</label>
            <input
              type="email"
              value={uni_email}
              onChange={(event) => setUlEmail(event.target.value)}
              className="input-email"
            />
            </div>
            </div>
            <br />
             <br/>
      
             <div className="form-group">
             <div className="label-input">
             <label>Status </label>
            <select
              id="status"
              name="status"
              value={uni_role}
              onChange={(event) => setStatus(event.target.value)}
              className="input-email"
            >
              <option value=""></option>
              <option value="LU Student">LU Student</option>
              <option value="LU Alumni">LU Alumni</option>
              <option value="LU Academic Staff">LU Academic Staff</option>
              <option value="LU Administrative Staff">LU Administrative Staff</option>
              <option value="Not LU Student">Not LU Student</option>
              </select>
              </div>
              <br/>
              <br />
              <div className="label-input">
             <label>UL ID Number</label>
            <input
              type="text"
              value={student_id}
              onChange={(event) => setUlIdNumb(event.target.value)}
              className="input-email"
            />
            </div>
</div>
            <br />
            
            <button type="button" onClick={handlePrevious} className="btn-login">
              Previous
            </button>
            <button type="submit" className="btn-login">Sign Up</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Signup;
