'use client'

import useRentModal from "@/app/hooks/useRentModal";

import Modal from "./Modal";

enum STEPS {
    
}

const RentModal = () => {
    const rentModal = useRentModal()
    return (
        <Modal 
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={rentModal.onClose}
            actionLabel='Submit'
            title='JourneySpot your home!'
        />
    );
}
 
export default RentModal;