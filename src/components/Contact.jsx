import { CONTACT } from "../ constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4"> 
        <h2 className="my-20 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter">
            <a href='#' className="border-b">{CONTACT.linkedin}</a>
        </div>
        <div className="text-center tracking-tighter">
            <a href='#' className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  );
};

export default Contact;