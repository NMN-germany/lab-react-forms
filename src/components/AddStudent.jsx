import { useState } from "react";
import studentsData from "../assets/students.json";

export default function AddStudent(handleAddStudent) {
    const [fullName, setFullName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [program, setProgram] = useState("--None--");
    const [graduationYear, setGraduationYear] = useState(2023);
    const [graduated, setGraduated] = useState(false);
    const [students, setStudents] = useState(studentsData);
      
    //funtions
    const handleFullNameInput = (e) => setFullName(e.target.value);
    const handleImageInput = (e) => setImage(e.target.value);
    const handlePhoneInput = (e) => setPhone(e.target.value);
    const handleEmailInput = (e) => setEmail(e.target.value);
    const handleProgramInput = (e) => setProgram(e.target.value);
    const handleGraduationYearInput = (e) => setGraduationYear(e.target.value);
    const handleGraduated = (e) => setGraduated(e.target.value);
    const handleAddStudent = (e) => setAddStudent(e.target.value);

    const handleSubmit = (e) => {
     e.preventDefault();
    const newStudent = {fullName, image, phone, email, program, graduationYear, graduated}

    console.log("Submitted", newStudent);
  
    setStudents([newStudent, ...students])

    // reset the state
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("--None--");
    setGraduationYear(2023);
    setGraduated(false);
     }

    return (
        <form onSubmit={handleSubmit}>

        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" 
              value={fullName} onChange={handleFullNameInput}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" 
              value={image} onChange={handleImageInput}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" 
              value={phone} onChange={handlePhoneInput}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" 
              value={email} onChange={handleEmailInput}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleProgramInput}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear} onChange={handleGraduationYearInput}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" 
              checked={graduated} onChange={handleGraduated}/>
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
    )
}