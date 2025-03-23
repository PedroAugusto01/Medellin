var table = ``

async function getData() {
    const url = "https://3pbarwrn5jwlnue3nrebdco4u40dedtv.lambda-url.us-east-1.on.aws";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        table = `
                <div class="dbgCont" style="width: 100%; grid-auto-rows: auto;">
                    <div class="container mt-4">
                        <div class="row">
                            <div class="col-5 row-heading">
                                Item
                            </div>
                            <div class="col-3 row-heading">
                                Valor
                            </div>
                            <div class="col-2 row-heading">
                                Quantidade
                            </div>
                            <div class="col-2 row-heading">
                                Total
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-5">
                                ${json[0]['nomeItemCompleto']} (Min= R$ ${json[0]['valorMinimoVenda']} | Max= R$ ${json[0]['valorMaximovenda']})
                            </div>
                            <div class="col-3">
                                <input type="number" value="${json[0]['valorMinimoVenda'].replace(/[.]/g, '')}" class="price" id="price_sniper" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <input type="number" class="muni" value="0" id="qtd_sniper" style="width: 100%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <label id="sniperTotalMuniCalc">R$ 0,00</label>
                                <!--<input type="number" class="totalMuni" value="R$ 0,00" id="total_fal" style="width: 100%; text-align: center;"/> -->
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col-5">
                                ${json[1]['nomeItemCompleto']} (Min= R$ ${json[1]['valorMinimoVenda']} | Max= R$ ${json[1]['valorMaximovenda']})
                            </div>
                            <div class="col-3">
                                <input type="number" value="${json[1]['valorMinimoVenda'].replace(/[.]/g, '')}" class="price" id="price_g36" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <input type="number" class="muni" value="0" id="qtd_g36" style="width: 100%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <label id="g36TotalMuniCalc">R$ 0,00</label>
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col-5">
                                ${json[2]['nomeItemCompleto']} (Min= R$ ${json[2]['valorMinimoVenda']} | Max= R$ ${json[2]['valorMaximovenda']})
                            </div>
                            <div class="col-3">
                                <input type="number" class="price" value="${json[2]['valorMinimoVenda'].replace(/[.]/g, '')}" id="price_ram" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <input type="number" class="muni" value="0" id="qtd_ram" style="width: 100%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <label id="ramTotalMuniCalc">R$ 0,00</label>
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col-5">
                                ${json[3]['nomeItemCompleto']} (Min= R$ ${json[3]['valorMinimoVenda']} | Max= R$ ${json[3]['valorMaximovenda']})
                            </div>
                            <div class="col-3">
                                <input type="number" class="price" value="${json[3]['valorMinimoVenda'].replace(/[.]/g, '')}" id="price_mpx" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <input type="number" class="muni" value="0" id="qtd_mpx" style="width: 100%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <label id="mpxTotalMuniCalc">R$ 0,00</label>
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col-5">
                                ${json[4]['nomeItemCompleto']} (Min= R$ ${json[4]['valorMinimoVenda']} | Max= R$ ${json[4]['valorMaximovenda']})
                            </div>
                            <div class="col-3">
                                <input type="number" class="price" value="${json[4]['valorMinimoVenda'].replace(/[.]/g, '')}" id="price_m4a4" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <input type="number" class="muni" value="0" id="qtd_m4a4" style="width: 100%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <label id="m4a4TotalMuniCalc">R$ 0,00</label>
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col-5">
                                ${json[5]['nomeItemCompleto']} (Min= R$ ${json[5]['valorMinimoVenda']} | Max= R$ ${json[5]['valorMaximovenda']})
                            </div>
                            <div class="col-3">
                                <input type="number" class="price" value="${json[5]['valorMinimoVenda'].replace(/[.]/g, '')}" id="price_scah" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <input type="number" class="muni" value="0" id="qtd_scah" style="width: 100%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <label id="scahTotalMuniCalc">R$ 0,00</label>
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col-5">
                                ${json[6]['nomeItemCompleto']} (Min= R$ ${json[6]['valorMinimoVenda']} | Max= R$ ${json[6]['valorMaximovenda']})
                            </div>
                            <div class="col-3">
                                <input type="number" class="price" value="${json[6]['valorMinimoVenda'].replace(/[.]/g, '')}" id="price_mtar" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <input type="number" class="muni" value="0" id="qtd_mtar" style="width: 100%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <label id="mtarTotalMuniCalc">R$ 0,00</label>
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col-5">
                                ${json[7]['nomeItemCompleto']} (Min= R$ ${json[7]['valorMinimoVenda']} | Max= R$ ${json[7]['valorMaximovenda']})
                            </div>
                            <div class="col-3">
                                <input type="number" class="price" value="${json[7]['valorMinimoVenda'].replace(/[.]/g, '')}" id="price_ak47" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <input type="number" class="muni" value="0" id="qtd_ak47" style="width: 100%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <label id="ak47TotalMuniCalc">R$ 0,00</label>
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col-5">
                                ${json[8]['nomeItemCompleto']} (Min= R$ ${json[8]['valorMinimoVenda']} | Max= R$ ${json[8]['valorMaximovenda']})
                            </div>
                            <div class="col-3">
                                <input type="number" class="price" value="${json[8]['valorMinimoVenda'].replace(/[.]/g, '')}" id="price_mp9" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <input type="number" class="muni" value="0" id="qtd_mp9" style="width: 100%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <label id="mp9TotalMuniCalc">R$ 0,00</label>
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col-5">
                                ${json[9]['nomeItemCompleto']} (Min= R$ ${json[9]['valorMinimoVenda']} | Max= R$ ${json[9]['valorMaximovenda']})
                            </div>
                            <div class="col-3">
                                <input type="number" class="price" value="${json[9]['valorMinimoVenda'].replace(/[.]/g, '')}" id="price_machine" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <input type="number" class="muni" value="0" id="qtd_machine" style="width: 100%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <label id="machineTotalMuniCalc">R$ 0,00</label>
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col-5">
                                ${json[10]['nomeItemCompleto']} (Min= R$ ${json[10]['valorMinimoVenda']} | Max= R$ ${json[10]['valorMaximovenda']})
                            </div>
                            <div class="col-3">
                                <input type="number" class="price" value="${json[10]['valorMinimoVenda'].replace(/[.]/g, '')}" id="price_50" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <input type="number" class="muni" value="0" id="qtd_50" style="width: 100%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <label id="50TotalMuniCalc">R$ 0,00</label>
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col-5">
                                ${json[11]['nomeItemCompleto']} (Min= R$ ${json[11]['valorMinimoVenda']} | Max= R$ ${json[11]['valorMaximovenda']})
                            </div>
                            <div class="col-3">
                                <input type="number" class="price" value="${json[11]['valorMinimoVenda'].replace(/[.]/g, '')}" id="price_five" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <input type="number" class="muni" value="0" id="qtd_five" style="width: 100%; text-align: center;" oninput="calculateTotal()"/>
                            </div>
                            <div class="col-2">
                                <label id="fiveTotalMuniCalc">R$ 0,00</label>
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col-5 text-right total">
                                Total
                            </div>
                            <div class="col-3 total-val-BRL">
                                
                            </div>
                            <div class="col-2 total-val-BRL">
                                <span id="total_value_quantidade">0</span>
                            </div>
                            <div class="col-2 total-val-BRL">
                                <span id="total_value">0</span>
                            </div>
                        </div>
                    </div>
                </div>
                `
        document.getElementById('sellTable').innerHTML = table;
    } catch (error) {
        console.error(error.message);
    }
}

getData();


