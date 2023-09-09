import React from 'react';

const ModalDelete = ({handleDelete, handleCancel}) => {
    return (
        <div className="z-10 fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delete Confirmation</h2>
                <p className="text-gray-600 mb-4">Are you sure you want to delete this item?</p>
                <div className="flex justify-end">
                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mr-2">
                        Delete
                    </button>
                    <button onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;
