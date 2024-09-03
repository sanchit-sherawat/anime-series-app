import { useState } from 'react';
import './login.css'
import goAouthService from '../../services/aouth/Aouth';
import { redirect,useNavigate } from 'react-router-dom';
const Login = () => {
    // let history = useHistory();
    const navigate = useNavigate();
    const [name,setName]=useState("")
    const [email,setEmail] = useState("")
    const [passwword,setPassword]=useState("")

    const onSave = async(e) =>{
        e.preventDefault()
    
        // {"username": "johndoe", "password": "password123"}
        try{
        let payload = {
            username:name,
            password:passwword,
            email:email
        }
        // console.log(name)
        // alert(`gggg`+name)
        // await goApiService.post()t 

        let result = await goAouthService.login(payload)
        console.log(result)
        
        alert(result.data.message+"sdfs")
        localStorage.setItem("accessToken", result.data.token);
        localStorage.setItem("login", "true");
        // navigate("/anime-cards")
        window.location.reload();
    
        // redirect("http://localhost:3002//anime-cards")

    }catch(err){
        alert(err.message+"j")
    }

        // setName("")
        // setEmail("")
        // setPassword("")

    }

    return (
        <div className="containers1">
            <div className="container2">

                <div className='devname'>Login</div>
                {/* <h4>User Name</h4> */}
                <div className='divforinput'>
                    <span class="input-icon">
                <i class="fa fa-user"> </i></span>
                    <input onChange={(e)=>{setName(e.target.value) 
                        }} value={name} className='inputfild' placeholder="User Name" />
                </div>
                {/* <h4>Email.</h4> */}
                <div className='divforinput'>
                <span class="input-icon">
                <i class="fa fa-envelope"> </i> </span>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email}  className='inputfild' placeholder=" Email" />
                </div>
                {/* <h4>Password</h4> */}
                <div className='divforinput'>
                <span class="input-icon">
                <i class="fa fa-key"></i></span>
                    <input onChange={(e)=>setPassword(e.target.value)}  value={passwword} className='inputfild' placeholder=" Password" />
                </div>

                <div className='button1'>
                    <button onClick={(e)=>onSave(e)} className='buttons'> login </button></div>

            </div>
        </div>
    )

}

export default Login;