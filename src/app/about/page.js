'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import {useTranslations} from 'next-intl'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
import TestimonialSlider01 from "@/components/slider/TestimonialSlider01"
export default function Home() {
    const t = useTranslations()
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t('breadcrum_title')}>
                {/* about-section */}
                <section className="about-section pt_120 pb_120">
                    <div className="pattern-layer rotate-me"></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_one">
                            <div className="image-box pr_90 mr_40">
                                <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                <figure className="image"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                                <div className="rating-box">
                                <ul className="rating mb_5 clearfix">
                                    <li><i className="icon-9"></i></li>
                                    <li><i className="icon-9"></i></li>
                                    <li><i className="icon-9"></i></li>
                                    <li><i className="icon-9"></i></li>
                                    <li><i className="icon-9"></i></li>
                                </ul>
                                <h6>{t('rating_title')}</h6>
                                </div>
                                <div className="experience-box">
                                <div className="inner">
                                    <h2>40</h2>
                                    <h6>{t('experience_years')}</h6>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                            <div className="content-box ml_40">
                                <div className="sec-title mb_20">
                                <h6>{t('breadcrum_title')}</h6>
                                <h2>{t('about_section_title')}</h2>
                                </div>
                                <div className="text-box mb_40">
                                <p>{t('about_text')}</p>
                                </div>
                                <div className="inner-box mb_45">
                                <div className="single-item">
                                    <div className="icon-box"><i className="icon-10"></i></div>
                                    <h3>{t('solutions_title')}</h3>
                                    <p>{t('solutions_text')}</p>
                                </div>
                                <div className="single-item">
                                    <div className="icon-box"><i className="icon-11"></i></div>
                                    <h3>{t('success_rate_title')}</h3>
                                    <p>{t('success_rate_text')}</p>
                                </div>
                                </div>
                                <div className="btn-box">
                                <Link href="/about" className="theme-btn btn-one">Discover More</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* about-section end */}

                {/* funfact-section */}
                <section className="funfact-section about-page pt_95 pb_120">
                    <div className="auto-container">
                            <div className="inner-container clearfix">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-21"></i></div>
                                    <div className="count-outer count-box">
                                        <CounterUp end={50} /><span>k+</span>
                                    </div>
                                    <p>{t('funfact_clients')}</p>
                                </div>
                            </div>
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-22"></i></div>
                                    <div className="count-outer count-box">
                                        <CounterUp end={90} /><span>Bn</span>
                                    </div>
                                    <p>{t('funfact_transactions')}</p>
                                </div>
                            </div>
                            {/* <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-23"></i></div>
                                    <div className="count-outer count-box">
                                        <CounterUp end={40} /><span>+</span>
                                    </div>
                                    <p>{t('unfact_branches')}</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                 </section>
                 {/* funfact-section end */}

                {/* video-section */}
                <section className="video-section alternat-2 centred">
                    <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/video-bg.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="inner-box">
                        <h2>{t('video_section_title')}</h2>
                            {/* <div className="video-btn">
                                <VideoPopup />
                            </div> */}
                        </div>
                    </div>
                </section>
                {/* video-section end */}

                {/* feature-style-three */}
                <section className="feature-style-three pt_120 pb_90">
                    <div className="auto-container">
                        <div className="sec-title mb_70 centred">
                        <h6>{t('why_us_title')}</h6>
                        <h2>{t('why_us_subtitle')}</h2>
                        </div>
                        <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-5"></i></div>
                                <h4><Link href="/service">{t('feature_secure_transactions')}</Link></h4>
                                <p>{t('secure_transactions_text')}</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-6"></i></div>
                                <h4><Link href="/service">{t('feature_support')}</Link></h4>
                                <p>{t('support_text')}</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-7"></i></div>
                                <h4><Link href="/service">{t('feature_low_fees')}</Link></h4>
                                <p>{t('low_fees_text')}</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-8"></i></div>
                                <h4><Link href="/service">{t('feature_fast_loans')}</Link></h4>
                                <p>{t('fast_loans_text')}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* feature-style-three end */}

                {/* apps-section */}
                {/* <section className="apps-section about-page pb_120">
                    <div className="light-icon" style={{ backgroundImage: 'url(assets/images/icons/icon-4.png)' }}></div>
                    <div className="auto-container">
                        <div className="inner-container">
                        <div className="shape">
                            <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-4.png)' }}></div>
                            <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image image-1"><img src="assets/images/resource/mockup-1.png" alt="" /></figure>
                                <figure className="image image-2"><img src="assets/images/resource/mockup-2.png" alt="" /></figure>
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title mb_20">
                                <h6>Mobile App</h6>
                                <h2>Get the Fastest and Most Secure Banking</h2>
                                </div>
                                <div className="text-box mb_50">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
                                </div>
                                <div className="btn-box">
                                <Link href="/about" className="play-store mr_20">
                                    <img src="assets/images/icons/icon-2.png" alt="" />
                                    <span>get it on</span>
                                    Google Play
                                </Link>
                                <Link href="/about" className="play-store">
                                    <img src="assets/images/icons/icon-3.png" alt="" />
                                    <span>Download on the</span>
                                    App Store
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section> */}
                {/* apps-section end */}


                {/* testimonial-style-two */}
                <section className="testimonial-style-two pt_120 pb_120">
                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/testimonial-bg-2.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                            <div className="sec-title mr_70">
                            <h6>{t('testimonial_title')}</h6>
                            <h2>{t('testimonial_client_feedback')}</h2>
                            <p>{t('find_peace_text')}</p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                {/*Theme Carousel*/}
                                <TestimonialSlider01 />
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* testimonial-style-two end */}

                {/* subscribe-section */}
                {/* <section className="subscribe-section">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
                    <div className="auto-container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                            <div className="text-box">
                            <h2>Subscribe us to Receive Latest Updates</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                            <div className="form-inner ml_40">
                            <form method="post" action="contact">
                                <div className="form-group">
                                <input type="email" name="email" placeholder="Your email" required />
                                <button type="submit" className="theme-btn btn-two">Subscribe Now</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </section> */}
                {/* subscribe-section end */}


                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}


