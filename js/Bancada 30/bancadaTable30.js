async function getData() {
    const url = "https://3pbarwrn5jwlnue3nrebdco4u40dedtv.lambda-url.us-east-1.on.aws";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.status}`);
        }

        const json = await response.json();

        // Verifica se retornou dados
        if (!Array.isArray(json) || json.length === 0) {
            throw new Error("Nenhum dado disponível.");
        }

        // Criar tabela de itens
        let tableItens = `
            <div class="row g-2">
                <div class="col-md-10">
                    <div class="row g-2">
                        <div class="container-fluid mb-5 wow fadeIn" style="right: 35px;">
                            <table id="t">
                                <thead>
                                    <tr>
                                        <th>Munição</th>
                                        <th>Qtd. Farm</th>
                                    </tr>
                                </thead>                                
                                <tbody>
                                    ${json.map(item => `
                                        <tr>
                                            <td>${item.nomeItemCompleto}</td>
                                            <td><p id="${item.idCalcBancada}">${item.valorBancada}</p></td>
                                        </tr>
                                    `).join("")}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('bancadaItensTable').innerHTML = tableItens;

        // Criar tabela de cálculo
        let tableCalc = `
            <div class="dbgCont" style="width: 100%;">
                <div class="row table-header">
                    <div class="col-6">Item</div>
                    <div class="col-3">Quantidade de farm</div>
                    <div class="col-3">Mun. a ser produzida</div>
                </div>
                <div class="container mt-4">
                    ${json.map((item, index) => `
                        <div class="row table-row ${index % 2 === 0 ? 'row-even' : 'row-odd'}">
                            <div class="col-6">${item.nomeItemCompleto}</div>
                            <div class="col-3">
                                <input type="number" value="0" class="farm input-style" id="${item.qtyCalcBancada}" oninput="calculateTotal(true)"/>
                            </div>
                            <div class="col-3">
                                <input type="number" class="muni input-style" value="0" id="${item.priceCalcBancada}" oninput="calculateTotal(false)"/>
                            </div>
                        </div>
                    `).join("")}
                </div>
                <div class="row table-footer">
                    <div class="col-6 text-end total">Total</div>
                    <div class="col-3 total-val"><span id="total_value_farm">0</span></div>
                    <div class="col-3 total-val"><span id="total_value_muni">0</span></div>
                </div>
            </div>
        `;
        document.getElementById('calcTable').innerHTML = tableCalc;

    } catch (error) {
        console.error(error.message);
        document.getElementById('bancadaItensTable').innerHTML = `<p style="color:red;">Erro: ${error.message}</p>`;
    }
}

getData();