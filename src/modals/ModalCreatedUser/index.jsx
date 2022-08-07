import Modal from 'react-modal'
import { ReactComponent as Close } from '../../assets/close.svg'
import { ModalContainer } from './styles';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '40%',
        height: '25%',
        bottom: 'auto',
        marginRight: '-50%',
        background: '#F2A516',
        transform: 'translate(-50%, -50%)',

    },
    overlay: {
        background: 'rgba(0,0,0,0.5)',
    }
};

export default function ModalUser({ modalUser, setModalUser }) {
    return (
        <Modal
            isOpen={modalUser}
            style={customStyles}
            onRequestClose={() => setModalUser(false)}
        >
            <ModalContainer>
                <Close onClick={() => setModalUser(false)}/>
                <span>Cadastro realizado com sucesso!</span>
            </ModalContainer>
        </Modal>
    )
}
