import React, { useState } from 'react';
import { Input, Button } from 'antd';
import "../styles/register.css";
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';


const Register = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phoneNumber: "",
        password: "",
        reEnterPassword: ""
    })

    const [dataErr, setDataErr] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phoneNumber: "",
        password: "",
        reEnterPassword: ""
    })

    const handleInputChange = (e) => {
        if (e.target.name == "firstName") {
            setState({ ...state, firstName: e.target.value });
            if (e.target.value !== "") {
                setDataErr({ ...dataErr, firstName: "" });
            }
        }
        if (e.target.name == "lastName") {
            setState({ ...state, lastName: e.target.value });
            if (e.target.value !== "") {
                setDataErr({ ...dataErr, lastName: "" });
            }
        }
        if (e.target.name == "userName") {
            setState({ ...state, userName: e.target.value });
            if (e.target.value !== "") {
                setDataErr({ ...dataErr, userName: "" });
            }
        }
        if (e.target.name == "email") {
            setState({ ...state, email: e.target.value });
            if (e.target.value !== "") {
                setDataErr({ ...dataErr, email: "" });
            }
        }
        if (e.target.name == "phoneNumber") {
            setState({ ...state, phoneNumber: e.target.value });
            if (e.target.value !== "") {
                setDataErr({ ...dataErr, phoneNumber: "" });
            }
        }
        if (e.target.name == "password") {
            setState({ ...state, password: e.target.value });
            if (e.target.value !== "") {
                setDataErr({ ...dataErr, password: "" });
            }
        }
        if (e.target.name == "reEnterPassword") {
            setState({ ...state, reEnterPassword: e.target.value });
            if (e.target.value !== "") {
                setDataErr({ ...dataErr, reEnterPassword: "" });
            }
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (state.userName == "" && state.password == "" && state.firstName == "" && state.lastName == "" && state.email == "" && state.reEnterPassword == "" ) {
            setDataErr({ userName: "error", password: "error", firstName: "error", lastName: "error", phoneNumber: "error", email: "error", reEnterPassword: "error" });
        }

        console.log(state);
    }


    return (

        <div className='register-container'>
            <h1 className='heading'>REGISTER HERE</h1>
            <form>
                <div className='name-container'>
                    <Input status={dataErr.firstName} onChange={(e) => handleInputChange(e)} value={state.firstName} name='firstName' type='text' className='inps' placeholder="FIRST NAME" />
                    <Input status={dataErr.lastName} onChange={(e) => handleInputChange(e)} value={state.lastName} name='lastName' type='text' className='inps' placeholder="LAST NAME" />
                </div>
                <Input status={dataErr.userName} onChange={(e) => handleInputChange(e)} value={state.userName} name='userName' type='text' className='inp' placeholder="USER NAME" />
                <Input status={dataErr.email} onChange={(e) => handleInputChange(e)} value={state.email} name='email' type='email' className='inp' placeholder="EMAIL" />
                <Input status={dataErr.phoneNumber} onChange={(e) => handleInputChange(e)} value={state.phoneNumber} name='phoneNumber' className='inp' placeholder="PHONE NUMBER" />
                <div className='password-container'>
                    <Input.Password status={dataErr.password} onChange={(e) => handleInputChange(e)} value={state.password} name='password' type='password' className='inps' placeholder="PASSWORD" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <Input.Password status={dataErr.reEnterPassword} onChange={(e) => handleInputChange(e)} value={state.reEnterPassword} name='reEnterPassword' type='password' className='inps' placeholder="CONFIRM PASSWORD" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </div>
                <Button onClick={handleSubmit} className='register-btn' type="primary">REGISTER</Button>
            </form>
        </div>
    )
}

export default Register;