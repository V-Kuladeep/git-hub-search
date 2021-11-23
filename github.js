// SpeechRecognition = webkitSpeechRecognition; // vendoer prefix
// let recognition = new SpeechRecognition();

// recognition.addEventListener("result" , e => {
// console.log(e); 
// console.log(e.results[0][0].transcript);
// });


// recognition.start();

let searchInput = document.getElementById("search");
let template = document.getElementById("details");
searchInput.addEventListener("keyup", event => {
 let searchText = event.target.value;
 if(e.key === "Enter"){
 githubUser(searchText);
 window.localStorage.setItem('text',searchText);
 }
 
});

// speech
let btn = document.getElementById("btn");
var value=1
btn.addEventListener("click" , e => {
 window.SpeechRecognition = window.webkitSpeechRecognition;
 let speech = new SpeechRecognition();
 console.log(speech);
 speech.addEventListener("result" , e => {
 let text = e.results[0][0].transcript;
 console.log(text);
 let final = (searchInput.value = text);
 word = final.replace(/\s+/g ,"");
 console.log(word);
 window.localStorage.setItem(`Key:${value}`,text);
 value++;
 githubUser(word); 
 
 
 })


 speech.start();
});


async function githubUser(searchValue){

 let URL = "https://api.github.com/users";

 let data = await window.fetch(`${URL}/${searchValue}`);
 
 
 let user = await data.json();
 
 let { login , avatar_url , html_url ,company,location,bio} = user;
 

 template.innerHTML = `
 <main>
 <div>
 <img src=${avatar_url} alt${login}/>
 <h2>username : ${login}</h2>
 <h2>Github Id : ${html_url}</h2>
 <h2>company name : ${company}</h2>
 <h2>location : ${location}</h2>
 <h2>designation : ${bio}</h2>
 
 </div>
 </main>`
 

}



// let searchinput= document.getElementById("search");
// let template=document.getElementById("template");
// searchinput.addEventListener("keyup",e=>{
//  // console.log(e.target.value);
//  if(e.key==="Enter"){
//  let searchtext=e.target.value;
//  gituser(searchtext);
//  }
 
// })
// let btn=document.getElementById("btn");
// btn.addEventListener("click", e=>{
//  window.SpeechRecognition=window.webkitSpeechRecognition;
//  let Speech=new SpeechRecognition();
//  Speech.addEventListener("result",e => {
//  let text=e.results[0][0].transcript;
//  let finalword=(searchinput.value=text);
//  gituser(finalword);
//  window.localStorage.setItem(text,finalword);
//  });
//  Speech.start();
// });
// async function gituser(cinput){

//  let URL="https://api.github.com/users";
//  let data=await window.fetch(`${URL}/${cinput}`);
//  let users= await data.json();
//  console.log(users);
//  let {login,avatar_url,repos_url,company,location,bio}=users;
//  template.innerHTML=`
//  <main>
//  <div>

//  <img src=${avatar_url} alt=${login}/>
//  <h1>name:${login}</h1>
//  <h1>location:${location}</h1>
//  <h1>company:${company}</h1>


//  </div>

//  </main>
 
//  `

 
 
// }


// let search = document.getElementById('search')
// let template = document.getElementById('template');
// search.addEventListener("keyup",e=>{
// let searchtext=e.target.value
// searchUser(searchtext);
// });
// async function searchUser(searchValue){
// let URL = "https://jsonplaceholder.typicode.com/users";
// let Data =await window.fetch(`${URL}/${searchValue}`)
// let JSON =await Data.json();

// let {id,name,company}=JSON
// template.innerHTML = `
// <h3>${id}</h3>
// <h3>${name}</h3>
// <h3>${company.name}</h3>
// `
// };

// const me = () => { name: "rahul" };
// me();
