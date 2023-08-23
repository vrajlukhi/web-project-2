const Navbar=()=>{
    return `
    <header class="navbar navbar-expand-lg bg-black">
        <div class="container">
            <button class="navbar-toggler border-0 shadow-none bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#dropdown" aria-controls="navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
              </button>
            <nav class="collapse navbar-collapse" id="dropdown">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item fs-5 px-5 fw-normal text-capitalize"><a href="../index.html" class="nav-link text-white">home</a></li>
                    <li class="nav-item fs-5 px-5 fw-normal text-capitalize"><a href="../pages/product.html" class="nav-link text-white">product</a></li>
                    <li class="nav-item fs-5 px-5 fw-normal text-capitalize"><a href="../pages/cart.html" class="nav-link text-white">cart</a></li>
                    <li class="nav-item fs-5 px-5 fw-normal text-capitalize"><a href="../pages/login.html" class="nav-link text-white">login</a></li>
                    <li class="nav-item fs-5 px-5 fw-normal text-capitalize"><a href="../pages/signup.html" class="nav-link text-white">signup</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `
}
export default Navbar