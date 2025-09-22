// LocalStorage simulation

let users = JSON.parse(localStorage.getItem('users')) || [];

let videos = [

  {title:"Free Fire Battle", desc:"Epic Gameplay"},

  {title:"Custom Match", desc:"Fun Join"},

  {title:"Winner Winner", desc:"Victory Video"},

];

// Show / Hide Pages

function showLogin(){ document.getElementById('loginPage').style.display='block'; document.getElementById('registerPage').style.display='none'; document.getElementById('forgotPage').style.display='none'; document.getElementById('homePage').style.display='none';}

function showRegister(){ document.getElementById('loginPage').style.display='none'; document.getElementById('registerPage').style.display='block'; document.getElementById('forgotPage').style.display='none';}

function showForgotPassword(){ document.getElementById('loginPage').style.display='none'; document.getElementById('forgotPage').style.display='block';}

// Register

function registerUser(){

  let uid=document.getElementById('uid').value;

  let name=document.getElementById('regName').value;

  let pass=document.getElementById('regPassword').value;

  let confirm=document.getElementById('regConfirm').value;

  if(pass!==confirm){alert("Password mismatch"); return;}

  users.push({uid,name,pass});

  localStorage.setItem('users',JSON.stringify(users));

  alert("Registered!");

  showLogin();

}

// Login

function loginUser(){

  let name=document.getElementById('loginName').value;

  let pass=document.getElementById('loginPassword').value;

  let user=users.find(u=>u.name===name && u.pass===pass);

  if(user){

    document.getElementById('loginPage').style.display='none';

    document.getElementById('homePage').style.display='block';

    document.getElementById('memberCount').innerText=users.length;

    document.getElementById('profileName').innerText=user.name;

    displayVideos(videos);

  } else alert("Invalid Login");

}

// Forgot Password Simulation

function generateCode(){ let code=Math.floor(10000+Math.random()*90000); document.getElementById('fpCode').value=code; alert("Code: "+code);}

function resetPassword(){ alert("Password Reset!"); showLogin();}

// 3-dot Menu

function toggleMenu(){ let menu=document.getElementById('dotMenu'); menu.style.display=menu.style.display==='block'?'none':'block';}

// Dummy functions

function openAllChat(){alert("All Chat Opened");}

function openCustomerService(){alert("Customer Service Opened");}

function openNotification(){alert("Notification Opened");}

function logoutUser(){ showLogin(); }

// Admin Long Press

let pressTimer;

function adminPressStart(){ pressTimer=setTimeout(adminUnlock,5000); }

function adminPressEnd(){ clearTimeout(pressTimer); }

function adminUnlock(){ let pwd=prompt("Admin Password:"); if(pwd==="2025.FF"){ document.getElementById('homePage').style.display='none'; document.getElementById('adminPage').style.display='block';} else alert("Wrong Password");}

// Admin Page Dummy Functions

function uploadVideo(){ alert("Video Upload (Simulation)"); }

function viewJoinRequest(){ alert("Join Requests (Simulation)"); }

function updateNotice(){ alert("Notification Update (Simulation)"); }

function adminChat(){ alert("Admin Chat (Simulation)"); }

function viewAllUsers(){ alert("All Users (Simulation)"); }

// Profile Picture

function changeProfile(){ document.getElementById('profileUpload').click(); }

function uploadProfile(event){

  let reader=new FileReader();

  reader.onload=function(){ document.getElementById('profilePic').src=reader.result; }

  reader.readAsDataURL(event.target.files[0]);

}

// Video Feed Display & Search

function displayVideos(arr){

  let container=document.getElementById('videoFeed');

  container.innerHTML="";

  arr.forEach(v=>{

    let div=document.createElement('div');

    div.innerHTML=`<b>${v.title}</b><p>${v.desc}</p>`;

    div.style.background="rgba(255,255,255,0.3)";

    div.style.margin="5px 0"; div.style.padding="5px"; div.style.borderRadius="5px";

    container.appendChild(div);

  });

}

function filterVideos(){

  let val=document.querySelector('.searchBox').value.toLowerCase();

  let filtered=videos.filter(v=>v.title.toLowerCase().includes(val)||v.desc.toLowerCase().includes(val));

  displayVideos(filtered);

}