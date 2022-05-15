import React, {useState} from 'react'
import style from './style.module.css'

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleNameChange=(e)=>{
        setName(e.target.value);
        

    };

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
        

    };

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
        

    };


    const handleSubmit=(e)=>{

        let userInfor = {
            name,
            email,
            password,
        }
        e.preventDefault();
        console.log(userInfor);
        

    };


  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
            <div>
                <h1> this is an registration Form</h1>
            </div>
            <div className={style.formstyle}>
            <label htmlFor='name'>Name: </label>
            <input className={style.inputstyle} type="text" name='name' id='name' onChange={handleNameChange} value={name} required/>
            </div>

            <div className={style.formstyle}>
            <label htmlFor='email'>Email: </label>
            <input className={style.inputstyle} type="email" name='email' id='email' onChange={handleEmailChange} value={email} required/>
            </div>


            <div className={style.formstyle}>
            <label htmlFor='password'>password: </label>
            <input className={style.inputstyle} type="password" name='password' id='password' onChange={handlePasswordChange} value={password} required/>
            </div>
            <div>
                <button type="submit" className={style.formstyle}> submit </button>
            </div>
        </form>
    </div>
  )
}
