import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { TeamModalsContext } from '../Content';
import { membersApi } from "../../../api/members";

import Modal from 'react-modal';

export default function AddMemberModal() {
    Modal.setAppElement('#__next');

    const { isAddMemberModalOpen, onClose } = useContext(TeamModalsContext);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const response = await membersApi.post("/members", {
            name: data.memberName,
            role: data.memberRole,
            email: data.memberEmail,
            phoneNumber: data.memberPhoneNumber,
        });

        setValue('memberName', '');
        setValue('memberRole', '');
        setValue('memberEmail', '');
        setValue('memberPhoneNumber', '');
        
    }

    return (
        <Modal
            isOpen={isAddMemberModalOpen}
            onRequestClose={onClose}
            contentLabel="Add New Member"
            className="bg-white p-6 rounded-lg shadow-lg w-[500px]"
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <h2 className="text-2xl font-bold mb-4">Add New Member</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="memberName" className="block font-medium mb-1">
                            Member Name
                        </label>
                        <input
                            type="text"
                            id="memberName"
                            className="border rounded-md px-3 py-2 w-full"
                            {...register("memberName")}
                        />
                    </div>
                    <div>
                        <label htmlFor="memberRole" className="block font-medium mb-1">
                            Role
                        </label>
                        <input
                            type="text"
                            id="memberRole"
                            className="border rounded-md px-3 py-2 w-full"
                            {...register("memberRole")}
                        />
                    </div>
                    <div>
                        <label htmlFor="memberEmail" className="block font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            id="memberEmail"
                            className="border rounded-md px-3 py-2 w-full"
                            {...register("memberEmail")}
                        />
                    </div>
                    <div>
                        <label htmlFor="memberPhoneNumber" className="block font-medium mb-1">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="memberPhoneNumber"
                            className="border rounded-md px-3 py-2 w-full"
                            {...register("memberPhoneNumber")}
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <button
                        type="button"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md mr-2"
                        onClick={onClose}
                    >
                    Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
                    >
                    Save
                    </button>
                </div>
            </form>
        </Modal>
    )
}