import React from 'react';
import { Container } from 'react-bootstrap';

const Result = () => {
    return (
        <Container>
            <div className='d-flex justify-content-center'><h5 classNameName='p-4  text-center'>ACADEMIC RESULT</h5>
            </div>
            <div className='d-flex justify-content-center '>
                <form className='w-50 border border-primary rounded p-3 m-4'>
                    <div className="form-group mb-2">
                        <label className="mb-2" for="exampleFormControlSelect1">Session</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Select</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-2" for="exampleFormControlSelect1">Class</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Select</option>
                            <option>10</option>
                            <option>9</option>
                            <option>8</option>
                            <option>7</option>
                            <option>6</option>
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-2" for="exampleFormControlSelect1">Section</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Select</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-2" for="exampleInputroll">Roll</label>
                        <input className="form-control" placeholder="Enter your roll" />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-2" for="exampleInputPassword1">Date Of Birth</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-2" for="exampleFormControlSelect1">Examination</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Select</option>
                            <option>Half Yearly</option>
                            <option>Test</option>
                            <option>Annual</option>
                            <option>Class Test</option>
                            <option>Scholarship Exam</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 mb-4 w-50 ">Submit</button>
                </form>
            </div>
        </Container>
    );
};

export default Result;