import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import "../styles/login.css";


const Login = () => {

    const [data, setData] = useState({
        userName: "",
        password: ""
    })
    const [dataErr, setDataErr] = useState({
        userName: "",
        password: ""
    })

    const handleInputChange = (e) => {
        if (e.target.name == "userName") {
            setData({ ...data, userName: e.target.value });
            if (e.target.value !== "") {
                setDataErr({ ...dataErr, userName: "" });
            }
        }
        if (e.target.name == "password") {
            setData({ ...data, password: e.target.value });
            if (e.target.value !== "") {
                setDataErr({ ...dataErr, password: "" });
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.userName == "" && data.password == "") {
            setDataErr({ userName: "error", password: "error" });

        }
        console.log(data)

    }

    return (
        <div className='login-container'>
            <h1>LOGIN HERE</h1>
            <div>
                <Input status={dataErr.userName} onChange={(e) => handleInputChange(e)} value={data.userName} name='userName' type='text' className='userNameInput' placeholder="USER NAME" />
                <Input.Password status={dataErr.password} onChange={(e) => handleInputChange(e)} value={data.password} name='password' type='password' className='passwordInput' placeholder="PASSWORD" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                <Button onClick={handleSubmit} className='login-btn' type="primary">LOGIN</Button>
            </div>
        </div>
    )
}

export default Login;