oninput = function name() {
    const secret_key = "No name";
   // document.getElementById('your_name').innerHTML = document.getElementById("name").value;
    let data = document.getElementById("name").value;
    document.getElementById('your_name').innerHTML = data;
    localStorage.setItem(secret_key, data);
};
