function user() {
    const secret_key = "No name";
    document.getElementById('your_name').innerHTML = localStorage.getItem(secret_key);
};
user();