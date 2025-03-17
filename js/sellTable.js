const minSniper = "6.600"; const maxSniper = "6.800"
const minG36 = "6.200"; const maxG36 = "6.500"
const minRam = "6.100"; const maxRam = "6.400"
const minMpx = "6.000"; const maxMpx = "6.200"
const minM4a4 = "0"; const maxM4a4 = "0";
const minScah = "5.100"; const maxScah = "5.400"
const minMtar = "4.800"; const maxMtar = "5.200"
const minAk = "4.800"; const maxAk = "5.000"
const minMp9 = "4.600"; const maxMp9 = "4.800"
const minMachine = "3.100"; const maxMachine = "3.400"
const minPistol = "2.000"; const maxPistol = "2.100"
const minFive = "2.000"; const maxFive = "2.100"

const table = `
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
                SNIPER RIFLE (Min= R$ ${minSniper} | Max= R$ ${maxSniper})
            </div>
            <div class="col-3">
                <input type="number" value="${minSniper.replace(/[.]/g, '')}" class="price" id="price_sniper" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
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
                M-G36 (Min= R$ ${minG36} | Max= R$ ${maxG36})
            </div>
            <div class="col-3">
                <input type="number" value="${minG36.replace(/[.]/g, '')}" class="price" id="price_g36" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
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
                RAM-7 (Min= R$ ${minRam} | Max= R$ ${maxRam})
            </div>
            <div class="col-3">
                <input type="number" class="price" value="${minRam.replace(/[.]/g, '')}" id="price_ram" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
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
                MPX (Min= R$ ${minMpx} | Max= R$ ${maxMpx})
            </div>
            <div class="col-3">
                <input type="number" class="price" value="${minMpx.replace(/[.]/g, '')}" id="price_mpx" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
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
                M-M4A4 (Min= R$ ${minM4a4} | Max= R$ ${maxM4a4})
            </div>
            <div class="col-3">
                <input type="number" class="price" value="${minM4a4.replace(/[.]/g, '')}" id="price_m4a4" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
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
                SCAH (Min= R$ ${minScah} | Max= R$ ${maxScah})
            </div>
            <div class="col-3">
                <input type="number" class="price" value="${minScah.replace(/[.]/g, '')}" id="price_scah" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
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
                M-MTAR21 (Min= R$ ${minMtar} | Max= R$ ${maxMtar})
            </div>
            <div class="col-3">
                <input type="number" class="price" value="${minMtar.replace(/[.]/g, '')}" id="price_mtar" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
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
                M-AK47 (Min= R$ ${minAk} | Max= R$ ${maxAk})
            </div>
            <div class="col-3">
                <input type="number" class="price" value="${minAk.replace(/[.]/g, '')}" id="price_ak47" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
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
                MP9 (Min= R$ ${minMp9} | Max= R$ ${maxMp9})
            </div>
            <div class="col-3">
                <input type="number" class="price" value="${minMp9.replace(/[.]/g, '')}" id="price_mp9" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
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
                M-MACHINE (Min= R$ ${minMachine} | Max= ${maxMachine})
            </div>
            <div class="col-3">
                <input type="number" class="price" value="${minMachine.replace(/[.]/g, '')}" id="price_machine" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
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
                PISTOL.50 (Min= R$ ${minPistol} | Max= R$ ${maxPistol})
            </div>
            <div class="col-3">
                <input type="number" class="price" value="${minPistol.replace(/[.]/g, '')}" id="price_50" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
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
                M-FIVE (Min= R$ ${minFive} | Max= R$ ${maxFive})
            </div>
            <div class="col-3">
                <input type="number" class="price" value="${minFive.replace(/[.]/g, '')}" id="price_five" style="width: 70%; text-align: center;" oninput="calculateTotal()"/>
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
