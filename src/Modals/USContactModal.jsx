import React, { useEffect, useState } from "react";
import './custom.css';

export default function USContactModal() {
    const [contactData, setContactData] = useState([]);

    useEffect(() => {
        fetch("https://contact.mediusware.com/api/contacts/")
            .then((res) => res.json())
            .then((data) => {
                const usContacts = data.results.filter(
                    (contact) => contact.country.name === "United States"
                );
                setContactData(usContacts);
            });
    }, []);

    return (
        <div className="modal-w rounded-1 p-2">
            {contactData.map((contact) => (
                <div key={contact.id}>
                    <div className="flex justify-between">
                        <div >
                            <h3 className="fs-5 fw-semibold">Country: {contact.country.name} </h3>
                            <h5 className="fs-6 fw-semibold">Contact Id: {contact.id} </h5>
                            <p className="fs-6">Contact: {contact.phone} </p>
                        </div>
                        <div className="flex justify-end w-full">
                            <button className="btn-custom border-0 rounded-1 mb-2" >view details</button>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}