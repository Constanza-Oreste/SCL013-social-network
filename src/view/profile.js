
import {createComment} from '../lib/index.js'


export const profile =() =>{
    const viewProfile=`
    <section id="section-father">
    <section class="profile">
        
            
                <div class="profile-image-container">
                    <img src="img/profile.jpg" class="profilePhoto">
                    <h1>NOMBRE</h1>
                    <p class="city">Santiago</p>
                    <p class="description">Descripcion perfil</p>
                    
                </div>
            
        
    </section>
    <section class="posts">
        <div class="posts-container">
            <h2>Escribe tu post</h2>
            <form>
                <textarea placeholder="Escribe aquí tu comentario" id="txtcomment" ></textarea>
                <div class="button-post"></div>
                <input type="button" class="btn" id="btn-comment" value="Postear">
                
            </form>
        </div>
        <div class="commentsContainer">
        <p id="prueba"></p>
        </div>
    </section>
</section>
`
const divProfile=document.createElement('div');

    console.log("Entra a la funcion leer");
    //let readComment=divProfile.querySelector("#comments-container");
    divProfile.innerHTML = viewProfile;

    const muro=divProfile.querySelector("#prueba");
    console.log(muro);
    firebase.firestore().collection("comentarios").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().comment}`);
         muro.innerHTML+=`
         <p>${doc.data().comment}</p>
         `
          
          
      });
    });
  

const btnComment = divProfile.querySelector('#btn-comment')
btnComment.addEventListener('click', () => {
   
    createComment();

})
return divProfile;
}
