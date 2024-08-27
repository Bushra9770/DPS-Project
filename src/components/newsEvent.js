/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './newsEvent.css'
const newsEvent = () => {
    return (
        <body>

        <section className="main-section">
            <div>
                <h4 className="mb-4">Discover the Best Co-ed CBSE School</h4>
                <img src="./Images/Untitled-2 1.png" className="images"/>
            </div>
            <div className="content-right">
                <h4 className="mb-4">News and Events</h4>
                <div className="events-grid">
                    <div className="event-card">
                        <img src="./Images/Rectangle 41.png" alt="Janmashtami Celebration"/>
                        <div className="last-card">
                            <h3><strong>Janmashtami Celebration</strong></h3>
                            <small>
                                <small>
                                    <small className="font-size">The school organized various Online Activities on
                                        Janmashtami such as Matki and Flute Decoration, Bal Krishna Painting, Krishna
                                        Bhajan, Speech on Krishna Leela, and many more.</small>
                                </small>
                            </small>
                        </div>
                    </div>
                    <div className="event-card">
                        <img src="./Images/image 6.png" alt="MUN 4.0"/>
                        <div className="last-card">
                            <h3><strong>MUN 4.0</strong></h3>
                            <small>
                                <small>
                                    <small>DPS YNR organized MUN 4.0 from August 27 to 29, 2021 in which more than 200
                                        delegates
                                        from
                                        different states participated.</small>
                                </small>
                            </small>
                        </div>
                    </div>
                    <div className="event-card">
                        <img src="./Images/image 7.png" alt="Sports Meet 2021-22"/>
                        <div className="last-card">
                            <h3><strong>Sports Meet 2021-22</strong></h3>
                            <small>
                                <small>
                                    <small>Sports Meet was organized from August 27 to 29, 2021. Mr. Yogeshwar Dutt
                                        (Olympic Gold
                                        medalist) graced this event with his presence.</small>
                                </small>
                            </small>
                        </div>
                    </div>
                    <div className="event-card">
                        <img src="./Images/image 7.png" alt="Sports Meet 2021-22"/>
                        <div className="last-card">
                            <h3><strong>Sports Meet 2021-22</strong></h3>
                            <small>
                                <small>
                                    <small>Sports Meet was organized from August 27 to 29, 2021. Mr. Yogeshwar Dutt (Olympic Gold medalist) graced this event with his presence.</small>
                                </small>
                            </small>
                        </div>
                    </div>
                </div>
                <h2><img src="./Images/Read More.png" alt="Sports Meet 2021-22"/>
                    <img src="./Images/Arrow 1.png" alt="Sports Meet 2021-22"/></h2>
            </div>
        </section>
        </body>
    );
}
export default newsEvent;