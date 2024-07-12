import React ,{useState,useEffect}from 'react'
import axios from 'axios'

function Registerscreen() {
    const[name,setname] = useState('')
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')
    const[cpassword,setcpassword] = useState('')

    async function register(){
        if(password == cpassword){
            const user = {
                name,
                email,
                password,
                cpassword
            }
            try{
                const result = await axios.post("/api/users/register", user).data

            }catch (error){
                console.log(error)
            }
        }
        else{
            alert('şifre uyumsuz')
        }
    }
  
  
    return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5'>
                <div className='bs'>
                    <h1>Kayıt Ol</h1>
                    <input type='text' className='form-control' placeholder='ad' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
                    <input type='text' className='form-control' placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                    <input type='text' className='form-control' placeholder='şifre' value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
                    <input type='text' className='form-control' placeholder='şifreyi doğrula' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} ></input>

                    <button className='btn btn-primary mt-3 ' onClick={register}>Kayıt Ol</button>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Registerscreen
