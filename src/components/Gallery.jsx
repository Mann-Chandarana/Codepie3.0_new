import React from 'react'

export const Gallery = () => {
    return (
        <section id="Gallery" className="portfolio">
            <div className="container">

                <div className="section-title">
                    <h2>Photo Gallery</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img style={{ height: "400px" }} src="assets/images/codepie_photos/1.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 1</h4>
                                <p>App</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: "-2rem" }} className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img style={{ height: "300px" }} src="assets/images/codepie_photos/2.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img style={{ height: "400px" }} src="assets/images/codepie_photos/3.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 2</h4>
                                <p>App</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="assets/images/codepie_photos/4.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Card 2</h4>
                                <p>Card</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ position: "relative", top: "-100px" }} className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img style={{ height: "330px" }} src="assets/images/codepie_photos/team.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 3</h4>
                                <p>App</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/images/codepie_photos/5.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Web 2</h4>
                                <p>Web</p>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
