
  import firebaseConfig from "../db.js"
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  db.collection("blog").where("categoria", "==", "<%= categoria %>").limit("3")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const post= doc.data()
        const id= doc.id
        console.log(id)
        document.getElementById("relacionadas").innerHTML+=`
        <a href="/blog/${id}"><div class="card" id="${id}">
            <img class="cardImg" src="${post.imgDes}">
            <h2 class="cardTitle">${post.titulo}</h2>
            </div></a>`               
          })
        }
    
    )
    
