'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import {useTranslations} from 'next-intl'
import { useState } from 'react'
export default function Home() {
    const t = useTranslations()
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="General FAQ’s">
                <div>


                    <section className="faq-section pt_120 pb_100">
                        <div className="auto-container">
                            <div className="sec-title centred mb_70">
                                <h6>{t('faq_title')}</h6>
                                <h2>{t('faq_subtitle')}</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 accordion-column">
                                    <ul className="accordion-box">
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                <div className="icon-box"></div>
                                                <h4>{t('question_1')}</h4>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">
                                                        <p>{t('answer_1')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <div className="icon-box"></div>
                                                <h4>{t('question_2')}</h4>
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">
                                                        <p>{t('answer_2')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                <div className="icon-box"></div>
                                                <h4>{t('question_3')}</h4>
                                            </div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>{t('answer_3')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                <div className="icon-box"></div>
                                                <h4>{t('question_4')}</h4>
                                            </div>
                                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>{t('answer_4')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 accordion-column">
                                <ul className="accordion-box">
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                                <div className="icon-box"></div>
                                                <h4>{t('question_1')}</h4>
                                            </div>
                                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>{t('answer_1')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                                <div className="icon-box"></div>
                                                <h4>{t('question_2')}</h4>
                                            </div>
                                            <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>{t('answer_2')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                <div className="icon-box"></div>
                                                <h4>{t('question_3')}</h4>
                                            </div>
                                            <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>{t('answer_3')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(7)}>
                                                <div className="icon-box"></div>
                                                <h4>{t('question_4')}</h4>
                                            </div>
                                            <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>{t('answer_4')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* faq-form-section end */}
                    <section className="faq-form-section pt_120 pb_120">
                        <div className="auto-container">
                            <div className="sec-title mb_70 centred">
                                <Link href="/contact">
                                    <h6>{t('asked_question')}</h6>
                                    <h2>{t('get_answer')}</h2>
                                </Link>
                            </div>
                            {/* <div className="form-inner">
                                <form  action="faq">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="name" placeholder="Your name" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Your email" required />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="phone" placeholder="Phone number" required />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Type message"></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                            <button type="submit" className="theme-btn btn-one">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div> */}
                        </div>
                    </section>
                    {/* faq-form-section end */}

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

                </div>

            </Layout>
        </>
    )
}

