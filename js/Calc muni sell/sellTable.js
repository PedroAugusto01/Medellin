var result;
getData();

async function getData() {
    const url = "https://3pbarwrn5jwlnue3nrebdco4u40dedtv.lambda-url.us-east-1.on.aws";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        result = json; // Armazenando o JSON
        createTable(json);
    } catch (error) {
        console.error(error.message);
    }
}

function createTable(json) {
    let table = `
        <div class="dbgCont" style="width: 100%; grid-auto-rows: auto;">
            <div class="container mt-4">
                <div class="row table-header">
                    <div class="col-2">Item</div>
                    <div class="col-3">Valor</div>
                    <div class="col-3">Quantidade</div>
                    <div class="col-3">Total</div>
                </div>
    `;

    json.forEach(item => {
        table += `
            <div class="row my-3">
                <div class="col-2">
                    ${item.nomeItemCompleto} (Min= R$ ${item.valorMinimoVenda} | Max= R$ ${item.valorMaximovenda})
                </div>
                <div class="col-3">
                    <input type="number" class="price input-style" value="${item.valorMinimoVenda.replace(/[.]/g, '')}" id="price_${item.nomeItemResumido}" oninput="calculateTotal()"/>
                </div>
                <div class="col-3">
                    <input type="number" class="muni input-style" value="0" id="qtd_${item.nomeItemResumido}" oninput="calculateTotal()"/>
                </div>
                <div class="col-3">
                    <label id="total_${item.nomeItemResumido}" class="total-val">R$ 0,00</label>
                </div>
            </div>
        `;
    });

    table += `
        <div class="row table-header">
            <div class="col-2">Total</div>
            <div class="col-3"></div>
            <div class="col-3"><span id="total_value_quantidade">0</span></div>
            <div class="col-3"><span id="total_value">R$ 0,00</span></div>
        </div>
        </div>
    </div>`;

    document.getElementById('sellTable').innerHTML = table;
}

function calculateTotal() {
    let BRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    let totalQuantidade = 0;
    let totalPrice = 0;

    result.forEach(item => {
        const price = parseInt(document.getElementById(`price_${item.nomeItemResumido}`).value, 10) || 0;
        const qtd = parseInt(document.getElementById(`qtd_${item.nomeItemResumido}`).value, 10) || 0;
        const total = price * qtd;

        totalQuantidade += qtd;
        totalPrice += total;

        document.getElementById(`total_${item.nomeItemResumido}`).innerText = BRL.format(total);
    });

    document.getElementById("total_value_quantidade").innerText = totalQuantidade;
    document.getElementById("total_value").innerText = BRL.format(totalPrice);
}