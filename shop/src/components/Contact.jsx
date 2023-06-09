import { useState } from "react";

export function Contact() {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  function onFullNameChange(event) {
  setFullName(event.target.value);
  }

  function onSubjectChange(event) {
    setSubject(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onBodyChange(event) {
    setBody(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      if (!fullName || !subject || !email || !body) {
        console.log("Please fill in required fields");
        alert("Please fill in required fields")
      return;
    }
    console.log("Form submitted:", { fullName, subject, email, body });
    setFullName("");
    setSubject("");
    setEmail("");
    setBody("");
  }

  return (
    <div className="container justify-content-center">
      <div className="align-self-center text-align-center justify-content-center d-flex pt-5"><h1>Contact Us</h1></div>
      <form className="pt-5">
      <div className="form-outline mb-4">
        <label htmlFor="fullName" className="form-label" for="fullName">Fullname</label>
        <input required minLength={3} onChange={onFullNameChange} type="text" value={fullName} id="fullName" className="form-control" />
      </div>
        
      <div className="form-outline mb-4">
        <label htmlFor="subject" className="form-label" for="subject">Subject</label>
        <input required minLength={3} onChange={onSubjectChange} type="text" value={subject} id="subject" className="form-control" />
      </div>

      <div className="form-outline mb-4">
        <label htmlFor="email" className="form-label" for="email">Email address</label>
        <input required onChange={onEmailChange} type="email" value={email} id="email" className="form-control" />
      </div>

      <div className="form-outline mb-4">
        <label htmlFor="body" className="form-label" for="body">Message</label>
        <textarea required minLength={3} onChange={onBodyChange} className="form-control" value={body} id="body" rows="4"></textarea>
        </div>
        
      <div className="d-flex justify-content-end">
        <button onClick={handleSubmit} className="btn btn-dark btn-block mb-4">Send</button>
      </div>
    </form>
    </div>
  );
}
