// let name = 'Steve'
// let email = 'steve@steve.com'
// let apiJson = 'http://localhost:3000/users'
// function submitData(userName, email) {
// const users = {
//       name: userName,
//       email: email
// }
// fetch(apiJson, {
//       method: 'POST',
//       headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//       },
//       body: JSON.stringify(users)
// }) .then(res => res.json())
// .then(data => console.log(data))
// }
// submitData()
function submitData(userName,email){
      return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers:{
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
            },
            body: JSON.stringify({
                  name:userName,
                  email: email
            })
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err=>{
            document.querySelector('div').innerHTML=err;
      })

}