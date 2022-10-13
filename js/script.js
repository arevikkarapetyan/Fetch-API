
"use strict";

// GET մեթոդով ստանում եք ինչ-որ փոստ, ու ըստ էդ փոստի ձևավորում եք վյորստկա (HTML), 
// ու էդ փոստի տակից քոմենթներ եք դնում ու նկարներ բոլորը էդ սերվերից

const posts = "https://jsonplaceholder.typicode.com/posts/";

const wrapper = document.createElement("div");
const postsLists = document.createElement("div");

document.body.prepend(wrapper);
wrapper.append(postsLists);


let i = 1;
const getPosts = setInterval(() => {
    fetch(`${posts}`)
    .then(data => data.json())
    .then(data => {
        postsLists.innerHTML += `
            <div style = "margin-bottom: 40px>
            <p>${data.title}</p>
            <p>${data.body}</p>
        `;
    if(i === 15){
        clearInterval(getPosts); 
    }
    i++;
        });
    }, 1000);


const photos = "https://jsonplaceholder.typicode.com/photos/";

const photosList = document.createElement("div");
postsLists.append(photosList);

let j = 1;
const getPhotos = setInterval(() => {
    fetch(`${photos}`)
    .then(data => data.json())
    .then(data => {
        photosList.innerHTML += `
            <img src = ${data.url} alt =${data.title} style = "display: block; max-width: 500px; width: 100%; margin-bottom: 20px;">
        `;
    if(j === 3){
        clearInterval(getPhotos); 
    }
    j++;
        });
    }, 1000);



const comments = "https://jsonplaceholder.typicode.com/comments/";

const commentsList = document.createElement("div");
photosList.append(commentsList);

let k = 1;
const getComments = setInterval(() => {
    fetch(`${comments}`)
    .then(data => data.json())
    .then(data => {
        commentsList.innerHTML += `
            <div style = "margin-bottom: 40px>
            <p>${data.title}</p>
            <p>${data.body}</p>
        `;
    if(k === 3){
        clearInterval(getComments); 
    }
    k++;
        });
    }, 1000);



/* 
    3. POST ստեղծում եք JSON ու ուղարկում եք որը իր մեջ պետք ա պարունակի էն ամեն ինչը, ինչը որ էդ 
        կայքում կա՝ այդի, վերնագիր, տեքստ, քոմենթներ, նկարի հղումներ
*/

const data = {
    id: 150,
    title: "some title",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla cupiditate numquam, sunt consequuntu",
    comments: [
        {
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam "
        },
        {
            email: "Hayden@althea.biz",
            body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore"
        },
        {
            email: "Noemie@marques.me",
            body: "deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque"
        }
    ],
    photos: [
        {
            title: "photo1",
            url: "https://via.placeholder.com/600/92c952"
        },
        {
            titile: "photo2",
            url: "https://via.placeholder.com/600/771796"
        },
        {
            title: "reprehenderit est deserunt velit ipsam",
            url: "https://via.placeholder.com/600/d32776",
        }
    ]
};

fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)
});