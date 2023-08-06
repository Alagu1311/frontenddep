const content=document.getElementById("#content")
fetch("https://deploytask.onrender.com/students")
    .then((response) => response.json())
    .then((data) => {
        log(data)
        data.forEach(arr => {
            const studobj = {
                name: arr.Name,
                Batch: arr.Batch,
                Qualifactionualication:arr.Qualifaction
              
            }
            createCountry(studobj)
        })
    })
    .catch((err) => log(err))

function createstudent(elements) {
    content.innerHTML += `
    <h3>Name:${elements.Name}</h3><br>
    <h3>Batch:${elements.Batch}</h3><br>
    <h3>Qualifications:${elements.Qualifaction}</h3><br>
    `
}
createstudent()