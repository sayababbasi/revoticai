import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";


import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import BlogSidebar from "../../Components/Blogs/BlogSidebar";

import bblog1 from "../../assets/img/blog/bblog1.png";
import blogDetailsb2 from "../../assets/img/blog/blog-detailsb2.png";
import straightQuotes from "../../assets/img/blog/straight-quotes.png";
import Form from "../../Components/Shared/Form/Form";
import { socialIcons } from "../../Utlits/socilIcons";

const BlogDetails = () => {

  return (
    <>
      <PageHeader
        heading={"How AI-Powered Automation is Shaping the Future of Business"}
        page={"AI-Powered Automation in Business"}
      />
      <section className="blog__bsection pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="blog__bleft__wrapper">
                <div className="blog__bitem" data-aos="fade-up" data-aos-duration="1000">
                  <Link to="" className="thumb">
                    <img src={bblog1} alt="img" />
                  </Link>
                  <div className="content__two">
                    <div className="text__box mb-30" data-aos="fade-up" data-aos-duration="1400">
                      <span className="text__de">
                        By: admin / AI & Business / Posted on August 5, 2025 / Comments: 0
                      </span>
                      <p className="fz-16 pra ttext__one">
                        AI-powered automation is no longer a futuristic concept it's actively transforming how businesses operate, grow, and serve customers. From intelligent chatbots handling customer queries in real time to back-end systems optimizing logistics without human intervention, automation is redefining what’s possible.
                      </p>
                      <p className="fz-16 pra">
                        At RevoticAI, we believe automation isn't just about efficiency it’s about freeing human minds to focus on strategy, creativity, and innovation. Whether it's streamlining workflows, personalizing customer experiences, or reducing operational costs, AI is helping companies scale smarter and faster.
                      </p>
                    </div>

                    <div className="quite__box mb-30">
                      <img src={straightQuotes} alt="img" />
                      <p>
                        “The companies that will thrive in the next decade are the ones that embrace automation today not as a trend, but as a strategic advantage.”
                      </p>
                      <Link to="">RevoticAI Team</Link>
                    </div>

                    <p className="fz-16 pra ttext__one mb__cus60">
                      Take customer service, for instance. With AI models handling up to 80% of routine inquiries, support teams can now focus on high-value conversations that build loyalty. Meanwhile, AI in finance is helping firms detect fraud in real time and predict cash flow with remarkable accuracy.
                    </p>

                    <h3 className="white mb-30">
                      Why Automation is No Longer Optional
                    </h3>
                    <div className="thumb mb-30">
                      <img src={blogDetailsb2} alt="img" />
                    </div>
                    <p className="fz-16 pra ttext__one mb-30">
                      Businesses that resist automation risk falling behind. Consumers expect speed and personalization. Teams need tools that reduce repetitive work. And decision-makers need accurate insights faster than ever before. AI-powered systems make all of this not only possible but scalable.
                    </p>

                    <div className="text__box mb-30" data-aos="fade-up" data-aos-duration="1600">
                      <ul className="challenge__list">
                        <li>
                          Automating customer support leads to faster response times and improved satisfaction.
                        </li>
                        <li>
                          AI-driven analytics allow businesses to forecast trends and make proactive decisions.
                        </li>
                        <li>
                          Smart automation reduces human error and enhances operational reliability.
                        </li>
                      </ul>
                    </div>

                    <p className="fz-16 pra ttext__one mb-30">
                      The future of business is intelligent. Companies that integrate AI into their operations now are setting themselves up to lead not just survive in the years ahead. At RevoticAI, we’re proud to help organizations take that step forward.
                    </p>
                  </div>

                  <div className="post__in cmn__bg mb__cus60">
                    <div className="post__left">
                      <span className="fz-20 fw-500 white">Posted in :</span>
                      <Link to="">AI</Link>
                      <Link to="">Automation</Link>
                    </div>
                    <div className="post__right">
                      <span className="fz-20 fw-500 white">Share :</span>
                      <ul className="social-cus d-flex align-items-center">
                        {socialIcons.map(({ id, icon }) => (
                          <li key={id}>
                            <Link to="">
                              <i>{icon}</i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Form isColTwo={true} />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default BlogDetails;
