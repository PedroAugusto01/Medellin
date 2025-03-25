document.addEventListener("DOMContentLoaded", async () => {
    const apiUrl = "https://rsbuk2s0od.execute-api.us-east-1.amazonaws.com/v1/getItem?login=false";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const data = json;

        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Nenhum dado disponível.");
        }

        const tabelaHead = document.getElementById("tabela-head");
        const tabelaItens = document.getElementById("tabela-itens");

        if (typeof data[0] !== "object" || data[0] === null) {
            throw new Error("Os dados recebidos não são válidos.");
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
                let valor = item[coluna];

                // Apenas para "valorMinimoVenda" e "valorMaximoVenda", garantir três casas decimais
                if ((coluna === "valorMinimoVenda" || coluna === "valorMaximoVenda") && !isNaN(valor) && valor !== "") {
                    valor = Number(valor).toFixed(3);
                }

                rowHTML += `
                    <td>
                        <input type="text" class="input-style" value="${valor}" id="${coluna}-${item.idItem}">
                    </td>`;
            });

            row.innerHTML = rowHTML;
            tabelaItens.appendChild(row);
        });
    } catch (error) {
        console.error(error.message);
    }

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
                let value = input.value.trim();

                if (value === "") {
                    camposVazios = true;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "1px solid #ddd";
                    
                    // Aplicar a formatação de três casas decimais APENAS para os campos desejados
                    if ((key === "valorMinimoVenda" || key === "valorMaximoVenda") && !isNaN(value) && value !== "") {
                        value = Number(value).toFixed(3);  
                    }

                    payload[key] = value;
                }
            });

            if (camposVazios) {
                alert("Preencha todos os campos antes de salvar!");
                return;
            }

            dadosParaEnviar.push(payload);
        }

        try {
            let jsonPayLoad = JSON.stringify(dadosParaEnviar);

            // Requisição POST
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: jsonPayLoad,  // Usando JSON.stringify aqui
            });

            const responseData = await response.json();

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