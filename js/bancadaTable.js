
async function getData() {
    const url = "https://3pbarwrn5jwlnue3nrebdco4u40dedtv.lambda-url.us-east-1.on.aws";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        var tableItens = `
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
                                        <tr>
                                            <td>${json[0]["nomeItemCompleto"]}</td>
                                            <td><p id="${json[0]["idCalcBancada"]}">${json[0]["valorBancada"]}</p></td>
                                        </tr>
                                        <tr>
                                            <td>${json[1]["nomeItemCompleto"]}</td>
                                            <td><p id="${json[1]["idCalcBancada"]}">${json[1]["valorBancada"]}</p></td>
                                        </tr>
                                        <tr>
                                            <td>${json[2]["nomeItemCompleto"]}</td>
                                            <td><p id="${json[2]["idCalcBancada"]}">${json[2]["valorBancada"]}</p></td>
                                        </tr>
                                        <tr>
                                            <td>${json[3]["nomeItemCompleto"]}</td>
                                            <td><p id="${json[3]["idCalcBancada"]}">${json[3]["valorBancada"]}</p></td>
                                        </tr>
                                        <tr>
                                            <td>${json[4]["nomeItemCompleto"]}</td>
                                            <td><p id="${json[4]["idCalcBancada"]}">${json[4]["valorBancada"]}</p></td>
                                        </tr>
                                        <tr>
                                            <td>${json[5]["nomeItemCompleto"]}</td>
                                            <td><p id="${json[5]["idCalcBancada"]}">${json[5]["valorBancada"]}</p></td>
                                        </tr>
                                        <tr>
                                            <td>${json[6]["nomeItemCompleto"]}</td>
                                            <td><p id="${json[6]["idCalcBancada"]}">${json[6]["valorBancada"]}</p></td>
                                        </tr>
                                        <tr>
                                            <td>${json[7]["nomeItemCompleto"]}</td>
                                            <td><p id="${json[7]["idCalcBancada"]}">${json[7]["valorBancada"]}</p></td>
                                        </tr>
                                        <tr>
                                            <td>${json[8]["nomeItemCompleto"]}</td>
                                            <td><p id="${json[8]["idCalcBancada"]}">${json[8]["valorBancada"]}</p></td>
                                        </tr>
                                        <tr>
                                            <td>${json[9]["nomeItemCompleto"]}</td>
                                            <td><p id="${json[9]["idCalcBancada"]}">${json[9]["valorBancada"]}</p></td>
                                        </tr>
                                        <tr>
                                            <td>${json[10]["nomeItemCompleto"]}</td>
                                            <td><p id="${json[10]["idCalcBancada"]}">${json[10]["valorBancada"]}</p></td>
                                        </tr>
                                        <tr>
                                            <td>${json[11]["nomeItemCompleto"]}</td>
                                            <td><p id="${json[11]["idCalcBancada"]}">${json[11]["valorBancada"]}</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                `
        document.getElementById('bancadaItensTable').innerHTML = tableItens;

        var tablePorcent = `
                    <div class="dbgCont">
                        <input class="cb" name="30" type="checkbox" id="opt0" onchange="cbChange(this)" />
                        <label for="dbgMembro">Padrão - 30%</label>
                    </div>
                    <div class="dbgCont">
                        <input class="cb" name="15" type="checkbox" id="opt1" onchange="cbChange(this)" />
                        <label for="dbgMembro">Membro - 15%</label>
                    </div>
                    <div class="dbgCont">
                        <input class="cb" type="checkbox" name="10" id="opt2" onchange="cbChange(this)" />
                        <label for="dbgRecrutador">Recrutador - 10%</label>
                    </div>
                    <div class="dbgCont">
                        <input class="cb" type="checkbox" name="8" id="opt3" onchange="cbChange(this)" />
                        <label for="dbgElite">Elite - 8%</label>
                    </div>
                    <div class="dbgCont">
                        <input class="cb" type="checkbox" name="5" id="opt4" onchange="cbChange(this)" />
                        <label for="dbgGerente">Gerente - 5%</label>
                    </div>
                    <div class="dbgCont">
                        <input class="cb" type="checkbox" name="3" id="opt5" onchange="cbChange(this)" />
                        <label for="dbgSublider">Sub-Lider - 3%</label>
                    </div>
                    <div class="dbgCont">
                        <input class="cb" type="checkbox" name="0" id="opt6" onchange="cbChange(this)" />
                        <label for="dbgLider">Lider - 0%</label>
                    </div>
                    <p id="text" style="display:block">Valor selecionado: 30%</p>
                `

            document.getElementById('porcentTable').innerHTML = tablePorcent;

            var tableCalc = `
                    <div class="dbgCont" style="width: 100%;">
                        <div class="container mt-4">
                            <div class="row">
                                <div class="col-6 row-heading">
                                    Item
                                </div>
                                <div class="col-3 row-heading">
                                    Quantidade de farm
                                </div>
                                <div class="col-2 row-heading">
                                    Mun. a ser produzida
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-6">
                                    ${json[0]["nomeItemCompleto"]}
                                </div>
                                <div class="col-3">
                                    <input type="number" value="0" class="farm" id="${json[0]["qtyCalcBancada"]}" style="width: 70%; text-align: center;" oninput="calculateTotal(true)"/>
                                </div>
                                <div class="col-2">
                                    <input type="number" class="muni" value="0" id="${json[0]["priceCalcBancada"]}" style="width: 100%; text-align: center;" oninput="calculateTotal(false)"/>
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-6">
                                    ${json[1]["nomeItemCompleto"]}
                                </div>
                                <div class="col-3">
                                    <input type="number" value="0" class="farm" id="${json[1]["qtyCalcBancada"]}" style="width: 70%; text-align: center;" oninput="calculateTotal(true)"/>
                                </div>
                                <div class="col-2">
                                    <input type="number" class="muni" value="0" id="${json[1]["priceCalcBancada"]}" style="width: 100%; text-align: center;" oninput="calculateTotal(false)"/>
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-6">
                                    ${json[2]["nomeItemCompleto"]}
                                </div>
                                <div class="col-3">
                                    <input type="number" class="farm" value="0" id="${json[2]["qtyCalcBancada"]}" style="width: 70%; text-align: center;" oninput="calculateTotal(true)"/>
                                </div>
                                <div class="col-2">
                                    <input type="number" class="muni" value="0" id="${json[2]["priceCalcBancada"]}" style="width: 100%; text-align: center;" oninput="calculateTotal(false)"/>
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-6">
                                    ${json[3]["nomeItemCompleto"]}
                                </div>
                                <div class="col-3">
                                    <input type="number" class="farm" value="0" id="${json[3]["qtyCalcBancada"]}" style="width: 70%; text-align: center;" oninput="calculateTotal(true)"/>
                                </div>
                                <div class="col-2">
                                    <input type="number" class="muni" value="0" id="${json[3]["priceCalcBancada"]}" style="width: 100%; text-align: center;" oninput="calculateTotal(false)"/>
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-6">
                                    ${json[4]["nomeItemCompleto"]}
                                </div>
                                <div class="col-3">
                                    <input type="number" class="farm" value="0" id="${json[4]["qtyCalcBancada"]}" style="width: 70%; text-align: center;" oninput="calculateTotal(true)"/>
                                </div>
                                <div class="col-2">
                                    <input type="number" class="muni" value="0" id="${json[4]["priceCalcBancada"]}" style="width: 100%; text-align: center;" oninput="calculateTotal(false)"/>
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-6">
                                    ${json[5]["nomeItemCompleto"]}
                                </div>
                                <div class="col-3">
                                    <input type="number" class="farm" value="0" id="${json[5]["qtyCalcBancada"]}" style="width: 70%; text-align: center;" oninput="calculateTotal(true)"/>
                                </div>
                                <div class="col-2">
                                    <input type="number" class="muni" value="0" id="${json[5]["priceCalcBancada"]}" style="width: 100%; text-align: center;" oninput="calculateTotal(false)"/>
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-6">
                                    ${json[6]["nomeItemCompleto"]}
                                </div>
                                <div class="col-3">
                                    <input type="number" class="farm" value="0" id="${json[6]["qtyCalcBancada"]}" style="width: 70%; text-align: center;" oninput="calculateTotal(true)"/>
                                </div>
                                <div class="col-2">
                                    <input type="number" class="muni" value="0" id="${json[6]["priceCalcBancada"]}" style="width: 100%; text-align: center;" oninput="calculateTotal(false)"/>
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-6">
                                    ${json[7]["nomeItemCompleto"]}
                                </div>
                                <div class="col-3">
                                    <input type="number" class="farm" value="0" id="${json[7]["qtyCalcBancada"]}" style="width: 70%; text-align: center;" oninput="calculateTotal(true)"/>
                                </div>
                                <div class="col-2">
                                    <input type="number" class="muni" value="0" id="${json[7]["priceCalcBancada"]}" style="width: 100%; text-align: center;" oninput="calculateTotal(false)"/>
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-6">
                                    ${json[8]["nomeItemCompleto"]}
                                </div>
                                <div class="col-3">
                                    <input type="number" class="farm" value="0" id="${json[8]["qtyCalcBancada"]}" style="width: 70%; text-align: center;" oninput="calculateTotal(true)"/>
                                </div>
                                <div class="col-2">
                                    <input type="number" class="muni" value="0" id="${json[8]["priceCalcBancada"]}" style="width: 100%; text-align: center;" oninput="calculateTotal(false)"/>
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-6">
                                    ${json[9]["nomeItemCompleto"]}
                                </div>
                                <div class="col-3">
                                    <input type="number" class="farm" value="0" id="${json[9]["qtyCalcBancada"]}" style="width: 70%; text-align: center;" oninput="calculateTotal(true)"/>
                                </div>
                                <div class="col-2">
                                    <input type="number" class="muni" value="0" id="${json[9]["priceCalcBancada"]}" style="width: 100%; text-align: center;" oninput="calculateTotal(false)"/>
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-6">
                                    ${json[10]["nomeItemCompleto"]}
                                </div>
                                <div class="col-3">
                                    <input type="number" class="farm" value="0" id="${json[10]["qtyCalcBancada"]}" style="width: 70%; text-align: center;" oninput="calculateTotal(true)"/>
                                </div>
                                <div class="col-2">
                                    <input type="number" class="muni" value="0" id="${json[10]["priceCalcBancada"]}" style="width: 100%; text-align: center;" oninput="calculateTotal(false)"/>
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-6">
                                    ${json[11]["nomeItemCompleto"]}
                                </div>
                                <div class="col-3">
                                    <input type="number" class="farm" value="0" id="${json[11]["qtyCalcBancada"]}" style="width: 70%; text-align: center;" oninput="calculateTotal(true)"/>
                                </div>
                                <div class="col-2">
                                    <input type="number" class="muni" value="0" id="${json[11]["priceCalcBancada"]}" style="width: 100%; text-align: center;" oninput="calculateTotal(false)"/>
                                </div>
                            </div>

                            <div class="row my-3">
                                <div class="col-6 text-right total">
                                    Total
                                </div>
                                <div class="col-3 total-val">
                                    <span id="total_value_farm">0</span>
                                </div>
                                <div class="col-2 total-val">
                                    <span id="total_value_muni">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `

    document.getElementById('calcTable').innerHTML = tableCalc;
    } catch (error) {
        console.error(error.message);
    }
}

getData();


