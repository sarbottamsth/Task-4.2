
$(document).ready(function () {
    $('.modal').modal();
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
    addCards(cardList);
});
// const cardList = [
//     {
//         title: "Timex UFC Pro Automatic 45mm Silicone Strap Watch",
//         image: "img/1.webp",
//         link: "https://timex.com/products/timex-ufc-pro-automatic-45mm-silicone-strap-watch-tw2v86500",
//         desciption: "Color: Black/Gold-Tone/Gold-Tone/Gold-Tone"
//     },
//     {
//         title: "Timex UFC King 45mm Silicone Strap Watch",
//         image: "img/2.webp",
//         link: "https://timex.com/products/timex-ufc-rush-52mm-pu-strap-watch-tw5m59100",
//         desciption: "Color: Black/Black"
//     },
//     {
//         title: "Timex UFC Rush 52mm PU Strap Watch",
//         image: "img/3.webp",
//         link: "https://timex.com/products/timex-ufc-king-45mm-silicone-strap-watch-tw2v99300",
//         desciption: "45 mm 2 Colors"
//     }
// ]


async function displayItems() {
    try {
        const response = await fetch("/api/items");
        const items = await response.json();

        items.forEach(item => {
            let itemToAppend = '<div class="col s4 center-align">' +
                '<div class="card"><div class="card-image"><img src="' + item.item_image_url + '">' +
                '</div><div class="card-content">' +
                '<h4 class="card-title">' + item.item_name + '</div>' +
                '<p class="card-text"><b>' + item.item_color + '</b></p>' +
                '<p class="card-text">' + item.item_description + '</p>' +
                '<div class="card-action"><a href="">Visit Page</a>' +
                '</a></div></div>';
            $("#item-collection").append(itemToAppend)
        });
    } catch (err) {
        console.error(err);
    }
}

displayItems();

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}


// const addCards = (items) => {
//     items.forEach(item => {
//         let itemToAppend = '<div class="col s4 center-align">' +
//             '<div class="card"><div class="card-image"><img src="' + item.image + '">' +
//             '</div><div class="card-content">' +
//             '<h4 class="card-title">' + item.title + '</div>' +
//             '<p class="card-text">' + item.desciption + '</p>' +
//             '<div class="card-action"><a href=' + item.link + '">Visit Page</a>' +
//             '</a></div></div>';
//         $("#item-collection").append(itemToAppend)
//     });
// }

// function submitForm() {
//     let formData = {};
//     formData.first_name = $('#first_name').val();
//     formData.last_name = $('#last_name').val();
//     formData.password = $('#password').val();
//     formData.email = $('#email').val();
//     console.log("Form Data Submitted: ", formData);
// }