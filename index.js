function submitData(userName, email) {
      const users = {
            name: userName,
            email: email
      };
      return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
            },
            body: JSON.stringify(users)
      })
            .then(res => res.json())
            .then(data => {
                  console.log(data);
            })
            .catch(message => {
                  document.querySelector('p').innerHTML = message;
            });

}
console.log(submitData('Samuel', 'sammysam@hotmail.com'))