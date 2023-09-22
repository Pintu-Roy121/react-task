import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import AllContactsModal from "../Modals/AllContactsModal";
import USContactModal from "../Modals/USContactModal";
import './custom-styles.css';

const Problem2 = () => {
    const [open, setOpen] = useState(false);
    const [openContact, setOpenContact] = useState(false);

    const onOpenAllContactModal = () => setOpen(true);
    const onCloseAllContactModal = () => setOpen(false);
    const onOpenUSContactModal = () => setOpenContact(true);
    const onCloseUSContactModal = () => setOpenContact(false);
    return (
        <div className="container">
            <Modal open={open} onClose={onCloseAllContactModal} center>
                <AllContactsModal />
            </Modal>
            <Modal open={openContact} onClose={onCloseUSContactModal} center>
                <USContactModal />
            </Modal>
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        className="btn btn-lg btn-outline-primary"
                        type="button"
                        onClick={onOpenAllContactModal}
                    >
                        All Contacts
                    </button>

                    <button
                        className="btn btn-lg btn-outline-warning"
                        type="button"
                        onClick={onOpenUSContactModal}
                    >
                        US Contacts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Problem2;