import React from 'react';
import './parentSays.css'
const parentSays = () => {
    return (
        <body background="./Images/Group 33.png">
        <section className="testimonial-section">
            <h2>What Our Parents Says</h2>
            <div className="testimonial-container">
                <div className="testimonial">
                    <div className="testimonial-image">
                        <img src="./Images/left-quote 2.png" alt="Jasmeen Bhatia" className="left-quote"/>
                        <img src="./Images/Group 34.png" alt="Shilpa Kumar" className='image-alignment' />
                    </div>
                    <h3>Shilpa Kumar</h3>
                    <p>
                        The school is living up to the standards of parents' expectations. The staff, whether teaching
                        faculty or governance or transportation, are immensely understanding and supportive. The canteen
                        and mess are applaudable regarding healthy food. The managing committee and principal are
                        receptive to negative points and take necessary actions. We are happy with how the children are
                        taught both academics and values. Kudos to DPS faculty for doing so.
                    </p>
                </div>
                <div className="testimonial">
                    <div className="testimonial-image">
                        <img src="./Images/left-quote 2.png" alt="Jasmeen Bhatia" className="left-quote"/>
                        <img src="./Images/Group 35.png" alt="Jasmeen Bhatia" className='image-alignment'/>
                    </div>
                    <h3>Jasmeen Bhatia</h3>
                    <p>
                        DPS YNR is a school every parent could dream of for their child. A school with intriguing staff,
                        infrastructure, studies, and everything necessary for a perfect education. An epitome of
                        excellence in education and sports, giving every student an opportunity for all-round growth.
                    </p>
                </div>
            </div>
        </section>
        </body>
    );
}
export default parentSays;