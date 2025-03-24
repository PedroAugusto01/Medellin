document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://rsbuk2s0od.execute-api.us-east-1.amazonaws.com/v1/getItem";
    const authToken = "q8zNngJFQ31MFd5ZIFzni3T1hDEgTfyb1vTlZRKf"; // 🔹 Token de autenticação

    fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(responseData => {
        // Converter o body de string JSON para objeto JavaScript
        const data = JSON.parse(responseData.body);
    
        if (!data || data.length === 0) {
            console.warn("Nenhum dado recebido da API.");
            return;
        }
    
        const tabelaHead = document.getElementById("tabela-head");
        const tabelaItens = document.getElementById("tabela-itens");
    
        // 🔹 Verifica se o primeiro item é um objeto antes de usar Object.keys()
        if (typeof data[0] !== "object" || data[0] === null) {
            console.error("Os dados recebidos não são válidos.");
            return;
        }
    
        // Criar cabeçalhos dinamicamente
        const colunas = Object.keys(data[0]); 
        let headRow = "<tr>";
        colunas.forEach(coluna => {
            headRow += `<th>${coluna}</th>`;
        });
        headRow += "</tr>";
        tabelaHead.innerHTML = headRow;
    
        // Criar linhas com inputs editáveis
        data.forEach((item, index) => {
            const row = document.createElement("tr");
            row.classList.add(index % 2 === 0 ? "row-even" : "row-odd");
            row.setAttribute("data-id", item.idItem);
    
            let rowHTML = "";
            colunas.forEach(coluna => {
                rowHTML += `
                    <td>
                        <input type="text" class="input-style" value="${item[coluna]}" id="${coluna}-${item.idItem}">
                    </td>`;
            });
    
            row.innerHTML = rowHTML;
            tabelaItens.appendChild(row);
        });
    })
    .catch(error => console.error("Erro ao buscar dados:", error));
    

    // Evento para salvar todos os itens
    document.getElementById("salvar-tudo").addEventListener("click", async () => {
        const linhas = document.querySelectorAll("#tabela-itens tr");
        let dadosParaEnviar = [];

        for (let row of linhas) {
            const id = row.getAttribute("data-id");
            const inputs = row.querySelectorAll("input");

            let payload = { idItem: id };
            let camposVazios = false;

            inputs.forEach(input => {
                const key = input.id.split("-")[0];
                const value = input.value.trim();

                if (value === "") {
                    camposVazios = true;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "1px solid #ddd";
                    payload[key] = isNaN(value) ? value : parseFloat(value);
                }
            });

            if (camposVazios) {
                alert("Preencha todos os campos antes de salvar!");
                return;
            }

            dadosParaEnviar.push(payload);
        }

        try {
            // Requisição OPTIONS (CORS Preflight)
            await fetch(apiUrl, {
                method: "OPTIONS",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                }
            });

            // Requisição POST
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                },
                body: JSON.stringify(dadosParaEnviar)
            });

            const responseData = await response.json();
            console.log("Resposta da API:", responseData);

            if (response.ok) {
                alert("Todos os itens foram atualizados com sucesso!");
            } else {
                alert("Erro ao atualizar os itens. Verifique o console.");
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            alert("Ocorreu um erro ao salvar os dados.");
        }
    });
});
