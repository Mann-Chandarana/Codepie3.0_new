import React, { useState } from 'react';
import './registeranim.css';
import { HiUserGroup} from 'react-icons/hi';
import { GiCaptainHatProfile } from "react-icons/gi";
import { ImUserTie } from "react-icons/im";
import { AiOutlineNumber } from "react-icons/ai";

export const Register = () => {
    const [teamSize, setTeamSize] = useState('');
    const [department, setDepartment] = useState('')
    const [semester, setSemester] = useState('')
    const [teamName,setTeamName] = useState('');
    const[Leader,setLeader] = useState({
        email:"",
        phone:"",
        name:"",
        department:"",
        semester:"",
        rollno:""
    })

    const[member_1,setmember_1] = useState({
        email:"",
        phone:"",
        name:"",
        department:"",
        semester:"",
        rollno:""
    })

    const handleTeamSizeChange = (e) => {
        setTeamSize(e.target.value);
    };
    const handleDepartment = (e) => {
        setDepartment(e.target.value);
    };
    const handleSemester = (e) => {
        setSemester(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section id="Register" className="contact section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Register</h2>
                    <p>Register for your teams, there should be 2 members per teams </p>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <AiOutlineNumber />
                    <label htmlFor="team-size">Team Size:</label>
                    <select onChange={handleTeamSizeChange} id="team-size" className="form-select" defaultValue={0}>
                        <option value={1} disabled>Select any option</option>
                        <option value={2}>2 - Duo</option>
                        <option value={3}>3 - Trio</option>
                    </select>
                    
                    <br />
                    <HiUserGroup /> 
                    <label htmlFor="team-name">Team Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Team Name" id="team-name" />
                    <button className="btn btn-md ">Verify</button>
                    <br />
                    <GiCaptainHatProfile />
                    <label>Team Leader Details</label>
                    <div className="row">
                        <div className="col-sm-12 col-md">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Full name" />
                                
                            </div>
                        </div>
                        <div className="col">
                                <input type="text" className="form-control"  placeholder="Enter Roll ID" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter College ID" />
                                <span className="input-group-text">@charusat.edu.in</span>
                                
                            </div>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Contact Number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md">
                            <div className="input-group mb-3">
                                
                            <label htmlFor="department">Department:</label> <span>
                    <select onChange={handleDepartment} id="department" className="form-select" defaultValue={1}>
                        <option value={1} disabled>Select any option</option>
                        <option value={2}>CSPIT - CSE</option>
                        <option value={3}>CSPIT - CE</option>
                        <option value={4}>CSPIT - IT</option>
                        <option value={5}>DEPSTAR - CSE</option>
                        <option value={6}>DEPSTAR - CE</option>
                        <option value={7}>DEPSTAR - CE</option>
                    </select>
                    </span>
                            </div>
                        </div>
                        <div className="col">
                        <label htmlFor="semester">Semester:</label><span>
                    <select onChange={handleSemester} id="semester" className="form-select" defaultValue={1}>
                        <option value={1} disabled>Select any option</option>
                        <option value={2}>1</option>
                        <option value={3}>2</option>
                        <option value={4}>3</option>
                        <option value={5}>4</option>
                        <option value={6}>5</option>
                        <option value={7}>6</option>
                        <option value={8}>7</option>
                        <option value={9}>8</option>
                    </select>
                    </span>
                        </div>
                    </div>

                    <br />
                    <ImUserTie />
                    <label>Team Member 2 Details</label>
                    <div className="row">
                        <div className="col-sm-12 col-md">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Full name" />
                            </div>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Enter Roll ID" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter College ID" />
                                <span className="input-group-text">@charusat.edu.in</span>
                                
                            </div>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Contact Number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md">
                            <div className="input-group mb-3">
                                
                            <label htmlFor="department">Department:</label> <span>
                    <select onChange={handleDepartment} id="department" className="form-select" defaultValue={1}>
                        <option value={1} disabled>Select any option</option>
                        <option value={2}>CSPIT - CSE</option>
                        <option value={3}>CSPIT - CE</option>
                        <option value={4}>CSPIT - IT</option>
                        <option value={5}>DEPSTAR - CSE</option>
                        <option value={6}>DEPSTAR - CE</option>
                        <option value={7}>DEPSTAR - CE</option>
                    </select>
                    </span>
                            </div>
                        </div>
                        <div className="col">
                        <label htmlFor="semester">Semester:</label><span>
                    <select onChange={handleSemester} id="semester" className="form-select" defaultValue={1}>
                        <option value={1} disabled>Select any option</option>
                        <option value={2}>1</option>
                        <option value={3}>2</option>
                        <option value={4}>3</option>
                        <option value={5}>4</option>
                        <option value={6}>5</option>
                        <option value={7}>6</option>
                        <option value={8}>7</option>
                        <option value={9}>8</option>
                    </select>
                    </span>
                        </div>
                    </div>
                    <br />

                    {teamSize > 2 && (
                        <>
                            <ImUserTie />
                            <label>Team Member 3 Details</label>
                            <div className="row">
                                <div className="col-sm-12 col-md">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Full name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Enter Roll ID" />
                                </div>
                                <div className="row">
                        <div className="col-sm-12 col-md">
                            <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Enter College ID" />
                                        <span className="input-group-text">@charusat.edu.in</span>
                                
                            </div>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Contact Number" />
                        </div>
                    </div>
                            </div>
                            <div className="row">
                        <div className="col-sm-12 col-md">
                            <div className="input-group mb-3">
                                
                            <label htmlFor="department">Department:</label> <span>
                    <select onChange={handleDepartment} id="department" className="form-select" defaultValue={1}>
                        <option value={1} disabled>Select any option</option>
                        <option value={2}>CSPIT - CSE</option>
                        <option value={3}>CSPIT - CE</option>
                        <option value={4}>CSPIT - IT</option>
                        <option value={5}>DEPSTAR - CSE</option>
                        <option value={6}>DEPSTAR - CE</option>
                        <option value={7}>DEPSTAR - CE</option>
                    </select>
                    </span>
                            </div>
                        </div>
                        <div className="col">
                        <label htmlFor="semester">Semester:</label><span>
                    <select onChange={handleSemester} id="semester" className="form-select" defaultValue={1}>
                        <option value={1} disabled>Select any option</option>
                        <option value={2}>1</option>
                        <option value={3}>2</option>
                        <option value={4}>3</option>
                        <option value={5}>4</option>
                        <option value={6}>5</option>
                        <option value={7}>6</option>
                        <option value={8}>7</option>
                        <option value={9}>8</option>
                    </select>
                    </span>
                        </div>
                    </div>
                            <br />
                        </>
                    )}
                    <button
                        type="submit"
                        className="btn btn-md "
                        style={{ backgroundColor: 'rgb(73, 55, 166)', color: 'white' , padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '0px 280px'}}
                    >
                        Register
                    </button>
                </form>
            </div>
        </section>
    );
};
