import { Modal } from 'antd';
import classes from './ModalHome.module.css';

export default function ModalHome({ open, onClose, cardData }) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      className={classes.modal}
      width={800}
    >
      <div className={classes.modalContent}>
        <div className={classes.imageContainer}>
          <img 
            src={cardData?.imageUrl} 
            alt={cardData?.title} 
            className={classes.modalImage}
          />
        </div>
        <div className={classes.textContent}>
          <h2 className={classes.modalTitle}>{cardData?.title}</h2>
          <p className={classes.brand}>{cardData?.additionalText}</p>
          <p className={classes.description}>{cardData?.description}</p>
          <button className={classes.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}