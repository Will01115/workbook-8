fetch("http://localhost:3000/todos/5", {
    method: "DELETE"
}) .then(function (response) {
    console.log(response.status, response);
})