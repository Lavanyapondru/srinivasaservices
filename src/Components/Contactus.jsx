import { useState } from "react";
import Swal from "sweetalert2";
function Contactus() {
     const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

if (!validate()) return;

  const data = {
    access_key: "7f417e55-d2d0-4a46-86bc-dbb53475324e", // Replace with your Web3Forms Access Key
    subject: "New Contact Form Submission",
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(data),   // ✅ must stringify
});

  const result = await response.json();

  if (result.success) {
    // alert("Message sent successfully!");
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting me. I'll get back to you soon.",
      confirmButtonColor: "#0d6efd",
    });

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Clear validation errors
    setErrors({});
  } else {
    // alert("Something went wrong!");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong. Please try again!",
      confirmButtonColor: "#dc3545",
    });
    console.log(result);
  }
};

    return ( 
        <div>
            <div className="container">
                <div className="contact">
                    <h1 className="text-center">Contact Us</h1>
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d243615.88519913304!2d78.44003839999999!3d17.4358528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1783746765435!5m2!1sen!2sin" width="550" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" className="map"></iframe>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                            <h2 className="mb-4">Contact With Us</h2>
                            <p className="fs-5 lh-2 d-flex"><i className="bi bi-geo-alt-fill text-warning me-3"></i>abc street,Kukatpally,<br/> Hyderabad, 500001</p>
                            <p className="fs-5 lh-2 d-flex"><i className="bi bi-telephone-fill text-warning me-3"></i>Monday - Friday: 10 am - 10pm <br/>Sunday: 11 am - 9pm <br/></p>
                           <p className="para fs-5 lh-2 d-flex"><i className="bi bi-arrow-return-right text-warning me-3 fw-bold"></i> <a href="https://wa.me/919652735720" target='_blank' className="text-decoration-none text-dark">12 3456 7890</a> </p>
                            <p className="para fs-5 lh-2 d-flex"><i className="bi bi-envelope text-warning me-2"></i> <a href="mailto:srinivascourierservice@gmail.com" className="text-decoration-none text-dark">srinivasacourierservices@gmail.com</a> </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-5 mb-5">
                        <img src="/callback.png" className="w-50"/>
                        <h6 className="text-danger fw-bold mt-4">
                    REQUEST A CALLBACK
                </h6>

                <h1 className="">
                    We will contact in <br/>
                    the shortest time.
                </h1>

                <p className="text-secondary">
                    Monday to Friday, 9am-5pm.
                </p>
                    </div>



                    <div className="col-lg-6 mt-5 mb-5">
                        <form onSubmit={handleSubmit}>

                    <input type="text"
                           className="form-control form-input mb-3"
                           placeholder="Name" id="name" value={formData.name} onChange={handleChange}/>
          {errors.name && <small className="text-danger">{errors.name}</small>}


                    <input type="email"
                           className="form-control form-input mb-3"
                           placeholder="Email" id="email" value={formData.email}
            onChange={handleChange}/>
          {errors.email && <small className="text-danger">{errors.email}</small>}


                    <textarea
                        className="form-control form-input mb-4"
                        rows="6" id="message"
                        placeholder="Message"  value={formData.message}
            onChange={handleChange}></textarea>
          {errors.message && <small className="text-danger">{errors.message}</small>}


                    <button className="btn btn-outline-danger border-secondary py-3"  type="submit">
                        Send Message
                        <i className="bi bi-send-fill ms-2"></i>
                    </button>

                </form> 
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Contactus;