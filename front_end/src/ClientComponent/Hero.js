
function Hero () {
    return (
        <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

            <div class="carousel-inner" role="listbox">

                <div id="car" class="carousel-item active">
                <div class="carousel-container">
                    <div class="carousel-content animate__animated animate__fadeInUp">
                    <h2>Welcome to <span>Stacky Code</span></h2>
                    <input id="search" className="form-control transparent-input" placeholder="Enter Your Search ..." />
                    <div class="text-center"><a href="" class="btn-get-started">Read More</a></div>
                    </div>
                </div>
                </div>

            </div>

            </div>
        </section>
    )
}

export default Hero