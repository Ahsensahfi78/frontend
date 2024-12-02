import React from "react";


function News() {

    const newimg = [
        { image: '../../assets/img/blog/blog-1.jpg' },
        { image: '../../assets/img/blog/blog-2.jpg' },
        { image: '../../assets/img/blog/blog-3.jpg' },
        { image: '../../assets/img/blog/blog-4.jpg' },
        { image: '../../assets/img/blog/blog-5.jpg' },
        { image: '../../assets/img/blog/blog-6.jpg' },
        { image: '../../assets/img/blog/blog-7.jpg' },
        { image: '../../assets/img/blog/blog-8.jpg' },
        { image: '../../assets/img/blog/blog-9.jpg' }
    ];

    return (
        <div>
        <div className="breadcrumb-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-text">
                            <h2>Blog</h2>
                            <div className="bt-option">
                                <a href="./home.html">Home</a>
                                <span>Blog Grid</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Breadcrumb Section End */}

        {/* Blog Section Begin */}
        <section className="blog-section blog-page spad">
            <div className="container">
                <div className="row">
                    {newimg.map((item, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="blog-item set-bg" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="bi-text">
                                    <span className="b-tag">Category</span>
                                    <h4><a href="./blog-details.html">Blog Title</a></h4>
                                    <div className="b-time"><i className="icon_clock_alt"></i> Date</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-lg-12">
                        <div className="load-more">
                            <a href="#" className="primary-btn">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Blog Section End */}
    </div>
    )
}

export default News;