import React, { useEffect, useState } from 'react';
import '../styles/profileUser.css'

const ProfileUser = () => {
// State //
const [user, setUser] = useState(" ")



// Montage //
useEffect(()=>{
const urlApi ="https://randomuser.me/api/";
//console.log(urlApi);
fetch(urlApi)
.then((resp)=>{
    return resp.json()
    //console.log(resp.status);
})
.then((res)=>{
//console.log(res.results[0]);
return setUser (res.results[0]);
})

})
function handelClick() {
    //console.log("teste ok");
    return displayUser(user) 
   
}
function displayUser(user) {
  const name = document.getElementById("name");
  const gender = document.getElementById('gender');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const location = document.getElementById('location');
  const image = document.getElementById('image');
  name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;  
  gender.innerText = `${user.gender}`;  
  email.innerText = `${user.email}`;  
  phone.innerText = `${user.phone}`;  
  location.innerText = `${user.location.country}`; 
  image.setAttribute('src', `${user.picture.large}`)
}

    return (
    <div>
        <div className='user-profile'>
            <div className='profile-top'>
                <img id='image' src='https://randomuser.me/api/portraits/men/15.jpg' alt='profileUser'/>
                <div className='profile-info'>
                    <span id='name'>Name</span>
                    <span> | </span>
                    <span id='gender'>Gender</span>
                </div>
            </div>             
            <div className='profile-bottom'>
                <div className='profile-info'>
                    <span class="material-icons">email</span>
                    <span id='email'>Email</span>
                </div>
                <div className='profile-info'>
                   <span class="material-icons">call</span>
                    <span id='phone'>Phone</span>
                </div>
                <div className='profile-info'>
                    <span class="material-icons">location_on</span>
                    <span id='location'>Location</span>
                </div>
            </div>
        </div>
        <button onClick={handelClick} >New user</button>
    </div>
    );
};

export default ProfileUser;