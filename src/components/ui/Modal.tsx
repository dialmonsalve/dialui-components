
import { Button } from './Button';
import { useHandlerAnimations } from '../../hooks';
import { ClassModal, ModalMessageType } from '../../type';

interface Props {
  content?: string;
  classModal?: ClassModal;
  title?: string;
  type?: ModalMessageType;
}

export const Modal = ({
  content = 'Are you sure?',
  title = 'success',
  ...props
}: Props) => {

  const { classModal, handleModal, modalMessageType, closeModal } = useHandlerAnimations();

  const color = () => {

    switch (modalMessageType) {
      case 'danger':
        return '#ff0000';
      case 'info':
        return '#022BFF';
      case 'warning':
        return '#ffd900';
      default:
        return '#37ff00';
    }
  }

  const backgroundColor = () => {

    switch (modalMessageType) {
      case 'danger':
        return 'red';
      case 'info':
        return 'blue';
      case 'warning':
        return 'green';
      default:
        return 'green';
    }
  }

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation(); // Stop event propagation
  };


  return (


    <div
      className={`modal ${handleModal ? `modal-show-${classModal}` : `hide-modal-fade`}`}
      onClick={closeModal}
      {...props}
    >
      <div className='modal-content' onClick={handleContentClick} >

        <div className='modal-content__frame' >
          <p className='modal-content__frame--title'
            style={{ color: color() }}
          >{title}</p>
          <p className='modal-content__frame--message'
            style={{ color: color() }}
          >{content}</p>
          <div className={`${modalMessageType}`} ></div>
        </div>
        <div className='modal-content__buttons'>
          <Button
            label='ok'
            backgroundColor={backgroundColor()}
            onClick={closeModal}
          />
        </div>
      </div>
    </div>

  )
}
