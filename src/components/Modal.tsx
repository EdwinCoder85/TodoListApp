import { faHand, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ModalProps = {
  setToggleModal: () => void;
  currentColor: string;
}

export const Modal = ({ setToggleModal, currentColor }: ModalProps) => {

  console.log(currentColor)

  return (
    <div className="modal">
      <div className="modal__container">
        <FontAwesomeIcon className={`modal__close ${currentColor}--color`} icon={faTimes} onClick={setToggleModal} />
        <div className={`modal__success ${currentColor}--success`}>
          <FontAwesomeIcon className={`modal__icon ${currentColor}--color`} icon={faHand} />
        </div>
        <h2>Warning Message</h2>
        <p className="modal__paragraph">Enter your task please 😥</p>
      </div>
    </div>
  );
};