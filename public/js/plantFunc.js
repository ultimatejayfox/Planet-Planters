
const singlePost = document.querySelectorAll('.singlePost')
// console.log(singlePost);
// singlePost.forEach(fetchyBoy());

// function fetchyBoy(){
for (let i=0; i<singlePost.length; i++){

let url =
  "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=" +
  singlePost[i].children[3].textContent.toLowerCase();
let imgUrl =
  "http://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageimages&format=json&piprop=original&pilicense=any&titles=" +
  singlePost[i].children[3].textContent.toLowerCase();
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data.query.search[0].pageid)
    // console.log(data);
    let wikiPageId = data.query.search[0].pageid;
    return fetch(imgUrl)
      .then(function (repsonse) {
        return repsonse.json();
      })
      .then(function (data) {
        // console.log(data);
        // console.log(data.query.pages[wikiPageId].original.source)
        singlePost[i].children[1].setAttribute(
          "src",
          data.query.pages[wikiPageId].original.source
        );
      });
  });
// );
// }
}




// function singlePicture(){

// const plantName = document.getElementById("plantName").value;
// const plantImg = document.getElementById("plantImg");

//   let url =
//     "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=" +
//     plantName.textContent.toLowerCase();
//   let imgUrl =
//     "http://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageimages&format=json&piprop=original&pilicense=any&titles=" +
//     plantName.textContent.toLowerCase();
//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // console.log(data.query.search[0].pageid)
//       console.log(data);
//       let wikiPageId = data.query.search[0].pageid;
//       return fetch(imgUrl)
//         .then(function (repsonse) {
//           return repsonse.json();
//         })
//         .then(function (data) {
//           console.log(data);
//           // console.log(data.query.pages[wikiPageId].original.source)
//           plantImg.setAttribute(
//             "src",
//             data.query.pages[wikiPageId].original.source
//           );
//         });
//     });

//   }

//   document.onload(singlePicture);