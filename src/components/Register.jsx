import React, { useState } from 'react';

export const Register = () => {
    const [teamSize, setTeamSize] = useState(2);

    const handleTeamSizeChange = (e) => {
        setTeamSize(e.target.value);
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
                    <label htmlFor="team-size">Team Size:</label>
                    <select onChange={handleTeamSizeChange} id="team-size" className="form-select" defaultValue={2}>
                        <option value={2}>2 - Duo</option>
                        <option value={3}>3 - Trio</option>
                    </select>

                    <br />

                    <label htmlFor="team-name">Team Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Team Name" id="team-name" />

                    <br />

                    <label>Team Leader Details</label>
                    <div className="row">
                        <div className="col-sm-12 col-md">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter College ID" />
                                <span className="input-group-text">@charusat.edu.in</span>
                            </div>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Full name" />
                        </div>
                    </div>

                    <br />

                    <label>Team Member 2 Details</label>
                    <div className="row">
                        <div className="col-sm-12 col-md">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter College ID" />
                                <span className="input-group-text">@charusat.edu.in</span>
                            </div>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Full name" />
                        </div>
                    </div>

                    <br />

                    {teamSize > 2 && (
                        <>
                            <label>Team Member 3 Details</label>
                            <div className="row">
                                <div className="col-sm-12 col-md">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Enter College ID" />
                                        <span className="input-group-text">@charusat.edu.in</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Full name" />
                                </div>
                            </div>

                            <br />
                        </>
                    )}
                    <button
                        type="submit"
                        className="btn btn-md "
                        style={{ backgroundColor: 'rgb(73, 55, 166)', color: 'white' }}
                    >
                        Register
                    </button>
                </form>
            </div>
        </section>
    );
};
