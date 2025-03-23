async function getData() {
    const url = "https://3pbarwrn5jwlnue3nrebdco4u40dedtv.lambda-url.us-east-1.on.aws";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        getElement(json);
        return json
    } catch (error) {
        console.error(error.message);
    }
}

getData();

var valuePorcent = (1 - (30/100));
var isFarm = false;
var result;

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

})(jQuery);

function getElement(json) {
    result = json; 
}

function calculateTotal(isFarm = false) {
    var totalFarm = 0;
    var totalMuni = 0;
    self.isFarm = isFarm;
    if (isFarm == true) {
        let returnFarmToMuni = calculateFarmToMuni();
        totalFarm = returnFarmToMuni[0];
        totalMuni = returnFarmToMuni[1];
    } else {
        let returnMuniToFarm = calculateMuniToFarm();
        totalFarm = returnMuniToFarm[0];
        totalMuni = returnMuniToFarm[1];
    }

    $("#total_value_farm").text(totalFarm);
    $("#total_value_muni").text(totalMuni);

}

function calculateFarmToMuni() {
    let item_price = []
    let item_farm = []
    console.log("func 1")
    for(var item in result) {
        let itemHtml = "#"+result[item]['qtyCalcBancada']
        let priceHtml = "#"+result[item]['priceCalcBancada']
        let itemValue = parseInt(((parseInt($(itemHtml).val() , 10) * valuePorcent) / result[item]['valorBancada']), 10);
        if (!isNaN(itemValue)) {
            item_price[item] = itemValue
            item_farm[item] = parseInt($(itemHtml).val() , 10)
            $(priceHtml).val(item_price[item]);
        } else {
            item_price[item] = 0
            item_farm[item] = 0
            $(priceHtml).val(0);
        }
    }
    
    let totalFarm = item_farm.reduce((partialSum, a) => partialSum + a, 0);
    let totalMuni = item_price.reduce((partialSum, a) => partialSum + a, 0);

    return [totalFarm, totalMuni];
}

function calculateMuniToFarm() {
    let item_price = []
    let item_farm = []
    console.log("func 2")
    for(var item in result) {
        let itemHtml = "#"+result[item]['qtyCalcBancada']
        let priceHtml = "#"+result[item]['priceCalcBancada']
        let itemValue = parseInt(((parseInt($(priceHtml).val() , 10) * result[item]['valorBancada']) / valuePorcent), 10) 
        console.log(result[item]['nomeItemResumido'])
        console.log(isNaN(itemValue))
        if (!isNaN(itemValue)) {
            item_price[item] = itemValue
            item_farm[item] = parseInt($(priceHtml).val() , 10)
            $(itemHtml).val(item_price[item]);
        } else {
            item_price[item] = 0
            item_farm[item] = 0
            $(itemHtml).val(0);
        }
    }
    
    let totalFarm = item_farm.reduce((partialSum, a) => partialSum + a, 0);
    let totalMuni = item_price.reduce((partialSum, a) => partialSum + a, 0);

    return [totalMuni, totalFarm];
}

function cbChange(obj) {
    var cbs = document.getElementsByClassName("cb");
    var text = document.getElementById("text");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;

    switch (obj.id) {
        case "opt0":
            text.innerText = "Valor selecionado: Membro - 20%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        case "opt1":
            text.innerText = "Valor selecionado: Membro - 15%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        case "opt2":
            text.innerText = "Valor selecionado: Recrutador - 10%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        case "opt3":
            text.innerText = "Valor selecionado: Elite - 8%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        case "opt4":
            text.innerText = "Valor selecionado: Gerente - 5%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        case "opt5":
            text.innerText = "Valor selecionado: Sub-Líder - 3%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        case "opt6":
            text.innerText = "Valor selecionado: Líder - 0%"
            valuePorcent = (1 - ((parseInt(obj.name))/100))
            console.log(valuePorcent)
            break;
        default:
            //What ever you want do to
            break;
    }
    calculateTotal(isFarm);
}