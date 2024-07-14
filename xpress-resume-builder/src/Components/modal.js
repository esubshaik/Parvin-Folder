import React from 'react';
import { useNavigate } from 'react-router-dom';


const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
    maxWidth: '100%',
    textAlign: 'center',
};

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
};

const BasicModal = ({ open, setOpen }) => {
    const navigate = useNavigate();
    const handleClose = () => 
        {
            setOpen(false);
            navigate('/login');
        }
    return (
        <>
            {open && (
                <div style={overlayStyle}>
                    <div style={modalStyle} className='bg-gray-900'>
                        <p className='my-4 text-white'>Dear user, You have registered successfully, please login now!</p>
                        <button
                            type="submit"
                            class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                            onClick={handleClose}
                        >
                            Continue to Login
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default BasicModal;
