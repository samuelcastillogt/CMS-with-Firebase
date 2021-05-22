const filtro =(querySnapshot) => {
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
    
    ;
    export default filtro
