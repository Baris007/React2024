import React ,{useState,useEffect}from 'react'
import axios from 'axios'

function Loginscreen() {
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')

    async function login(){
            const user = {
                email,
                password
            }
            try{
                const results = await axios.post("/api/user/login", user).data

            }catch (error){
                console.log(error)
            }
    }
  
  
    return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5'>
                <div className='bs'>
                    <h1>Giriş Yap</h1>
                    <input type='text' className='form-control' placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                    <input type='text' className='form-control' placeholder='şifre' value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>

                    <button className='btn btn-primary mt-3 ' onClick={login}>Giriş Yap</button>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Loginscreen
