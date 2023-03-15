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
                            <li data-filter=".filter-app">Group</li>
                            <li data-filter=".filter-card">contentest</li>
                            <li data-filter=".filter-web">Seminar</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img style={{ height: "400px" }} src="assets/images/codepie_photos/1.webp" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div style={{ marginBottom: "-2rem" }} className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img style={{ height: "300px" }} src="assets/images/codepie_photos/2.webp" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img style={{ height: "400px" }} src="assets/images/codepie_photos/3.webp" className="img-fluid" alt="" />

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div style={{ marginTop: "80px" }} className="portfolio-wrap">
                            <img src="assets/images/codepie_photos/4.webp" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div style={{ position: "relative", top: "-100px" }} className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img style={{ height: "330px" }} src="assets/images/codepie_photos/team.webp" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/images/codepie_photos/5.webp" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}