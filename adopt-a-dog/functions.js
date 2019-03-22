function murphyAlert() {

  let murphyAlert = alert ('I am Murphy. A large mix, You can bring me home for $123.45')

  console.log(murphyAlert);

}

function poppyAlert() {

  let poppyAlert = alert ('I am Poppy. A Shih Tzu. You can bring me home for $123.45')

  console.log(poppyAlert);

}

function jackAlert() {

  let jackAlert = alert ('I am Jack. A young beagle. You can bring me home for $123.45')

  console.log(jackAlert);

}
function duffyAlert() {

  let duffyAlert = alert ('I am Duffy. A pitbull terrier. You can bring me home for $123.45')

  console.log(duffyAlert);

}
function lucasAlert() {

  let lucasAlert = alert ('I am Lucas. A shepherd mix. You can bring me home for $123.45')

  console.log(lucasAlert);

}
function jakeAlert() {

  let jakeAlert = alert ('I am Jake. A yellow lab. You can bring me home for $123.45')

  console.log(jakeAlert);

}
function angusAlert() {

  let angusAlert = alert ('I am Angus. A beagle. You can bring me home for $123.45')

  console.log(angusAlert);

}
function violetAlert() {

  let violetAlert = alert ('I am Violet. A beagle. You can bring me home for $123.45')

  console.log(violetAlert);

}
function piperAlert() {

  let piperAlert = alert ('I am Piper. An Irish Setter. You can bring me home for $123.45')

  console.log(piperAlert);

}
function maximusAlert() {

  let maximusAlert = alert ('I am Maximus. A Schnauzer. You can bring me home for $123.45')

  console.log(maximusAlert);

}
function lunaAlert() {

  let lunaAlert = alert ('I am Luna. A Golden Lab. You can bring me home for $123.45')

  console.log(lunaAlert);

}
function stellaAlert() {

  let stellaAlert = alert ('I am Stella. A Chihuahua. You can bring me home for $123.45')

  console.log(stellaAlert);

}

let total = 0;

function runningTotal() {
  total = total + 123.45;
  alert('Your total is $' + total)
}

// const blogPosts = [
//   {
//     headline: 'Blog headline',
//     body: 'Blog content'
//   },
//   {
//     headline: 'Another post',
//     body: 'Second blog content'
//   }
// ];
//
// console.log(blogPosts[0].headline);
//
// let blogPost = document.querySelector('article');
//
// console.log(blogPosts);
//
// blogPosts.innerHTML = '<h2>' + blogPosts[0].body + '</p>'
//
// for (let i = 0; i < blogPosts.length; i++) {
//
// }
//
// const blogPosts = [
// {
//   headline: 'Thing about a thing',
//   body: 'some words'
// },
// {
//   headline: 'another blog post',
//   body: 'words have many letters'
//
// }
// ];
//
// // blog attempt
//
// cont blogPosts =
// [
//   {
//     headline: 'Traveling with your Dog',
//     body: 'Lorem ipsum etc...',
//     image: '..images/patrick-hendry-221863-unsplash.jpg',
//     alt: 'photo by patrick hendry of dog at grand canyon'
//   }
// ];
// let blogPost1 = document.getElementById('blog1');
//
// blogPost1.innerHTML = '<h2 class="Traveling with your Dog">' + blogPosts[0].headline + blogPosts[0].body + blogPosts[0].image + blogPosts[0].alitatuscit
// //not sure where to go from here
//
// //form attempt
// let formElement = document.querySelector('form');
// console.log(formElement);
//
// formElement.addEventListener('submit',function(e){
//   e.preventDefault();
//
//   const inputValue = formElement.elements[0].value;
//   const dogName = formElement.elements[1].value;
//   //do code//
//   const dataToSubmit = {
//   name: inputValue,
//   dog: dogName
// };
//
//   console.log(dataToSubmit);
// })
const blogPosts = [
  {
    image: 'images/wyatt-ryan-367017-unsplash.jpg',
    alt: 'dog that needs a friend',
    headline: 'Traveling with your dog',
    blogText: 'Lorem ipsum and so on and so on'
  }
]

const blogPostContainer = document.querySelector('.blog-container');

console.log(blogPostContainer);

for (let i = 0; i < blogPosts.length; i++) {
  let blogPost = document.createElement('article');
  blogPost.innerHTML = '<h1>' + blogPosts[i].headline + '</h1>' + '<p>' + blogPosts[i].blogText +;
  blogPostContainer.appendChild(blogPost)
}
