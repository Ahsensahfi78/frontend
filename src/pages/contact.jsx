import React, { useState } from "react";




function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f13f87a4-e10c-4d21-be5b-0c2f99a01643");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


    return(

       <div> 
        {/* Contact Section Begin */}
        <section className="contact-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact-text">
                            <h2>Contact Info</h2>
                            <p>In Anytime We Offer You Feel To Free Contact Us.</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="c-o">Address:</td>
                                        <td>Seabreeze Restaurant & Gust in 430 Beach Road Sainthamaruthu 8</td>
                                    </tr>
                                    <tr>
                                        <td className="c-o">Phone:</td>
                                        <td>(12) 345 67890</td>
                                    </tr>
                                    <tr>
                                        <td className="c-o">Email:</td>
                                        <td>seabreeze2004@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="c-o">Head Number:</td>
                                        <td>067 22 22 864</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-7 offset-lg-1">
                        <form action="#" onSubmit={onSubmit} className="contact-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Your Name" name="name" required />
                                </div>
                                <div className="col-lg-6">
                                    <input type="email" placeholder="Your Email" name="email" required/>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Your Phone NUmber" name="number" required/>
                                </div>
                                <div className="col-lg-12">
                                    <textarea name="message" placeholder="Your Message"></textarea>
                                    <button type="submit">Submit Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0606825994123!2d-72.8735845851828!3d40.760690042573295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e85b24c9274c91%3A0xf310d41b791bcb71!2sWilliam%20Floyd%20Pkwy%2C%20Mastic%20Beach%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1578582744646!5m2!1sen!2sbd"
                        height="470" style={{ border: 0 }} allowFullScreen></iframe>
                </div>
            </div>
        </section>
        {/* Contact Section End */}
        
        </div>
    )
        
    
}

export default Contact;