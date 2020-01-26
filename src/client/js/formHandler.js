function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const data = { formText };
    const options = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/addUserInput', options)
    .then(response => response.json())
    .then(function(response) {
        document.getElementById('results').innerHTML = response.formText
    })
}
// exports.handleSubmit = handleSubmit;

export { handleSubmit }
