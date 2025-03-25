async function getData() {
    const url = "https://rsbuk2s0od.execute-api.us-east-1.amazonaws.com/v1/getItem?login=true";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    const users = await getData();

    const user = users.find(user => user.login === login && user.senha === senha);

    if (user) {
        alert("Login bem-sucedido!");
        localStorage.setItem("authenticated", "true");  // Armazenando informação no localStorage
        window.location.href = "changeData.html";  // Redirecionando para a página changeData.html
    } else {
        document.getElementById("error-message").style.display = "block";
    }
});
