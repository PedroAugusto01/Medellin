const header= `
   <a href="index.html" class="navbar-brand d-flex align-items-center text-center">
        <div class="icon p-2 me-2">
            <img class="img-fluid" src="img/LOGO_10.png" alt="Icon" style="width: 30px; height: 30px;">
        </div>
        <h1 class="m-0 text-primary">TURQUIA</h1>
    </a>
    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto">
            <a href="index.html" class="nav-item nav-link active">Calc. Vendas</a>
            <a href="calcBancada.html" class="nav-item nav-link">Calc. Bancada 30%</a>
            <a href="calcBancada0.html" class="nav-item nav-link">Calc. Bancada 0%</a>
            <!-- <a href="" class="nav-item nav-link">Entrega de farm</a> -->
            <a href="https://discord.gg/r9aEVxp2KT" class="nav-item nav-link">Discord</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">...</a>
                <div class="dropdown-menu rounded-0 m-0">
                    <a href="" class="dropdown-item">...</a>
                    <a href="" class="dropdown-item">...</a>
                    <a href="" class="dropdown-item">...</a>
                </div>
            </div>
        </div>
        <a href="" class="btn btn-primary px-3 d-none d-lg-flex">Login</a>
    </div>
   `
   
document.getElementById('navigationBar').innerHTML = header;