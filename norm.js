const domain = "https://jsonplaceholder.typicode.com";

// TASK a) i

async function ai() {
    get(domain + "/posts/")
    .then(posts => console.log(sortPosts(posts)));
}



async function get(url) {

    const response = await fetch(url);

    const data = await response.json();

    return data;
}

function sortPosts(data) {
    return data.sort((a, b) => b.title.length - a.title.length)
}


// TASK a) ii
function aii(){
    get(domain + "/comments")
    .then(comments => console.log(sortComments(comments)));
}


function sortComments(data) {
    return data.sort((a,b) => b.name - a.name);
}



// TASK b) i
async function bi() {
    console.log("b)");
    
    const users = await get(domain + "/users");
    
    console.log("1. id: \n" + users.map(i => i.id));
    console.log("2. name: \n" + users.map(i => i.name));
    console.log("3. username: \n" + users.map(i => i.username));
    console.log("4. email: \n" + users.map(i => i.email));
    console.log("5. phone: \n" + users.map(i => i.phone));
}


async function bii() {
     console.log("b) ii");
     var todos = await get(domain + "/todos")
     console.log(
        todos.map(i =>  i.completed === false ? i : null)
     );
    }

bii();