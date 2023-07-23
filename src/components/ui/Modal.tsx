
import { Button } from './Button';
import { useHandlerAnimations } from '../../hooks';

type Hide =
  | 'fadeout' | 'toUp' | 'toDown' | 'toRight' | 'toLeft'
  | 'jumpToLeft' | 'jumpToUp' | 'jumpToRight' | 'jumpToDown'

interface Props {
  content?: string;
  hide?: Hide;
  title?: string;
  type?: 'success' | 'danger' | 'warning' | 'info';
}

export const Modal = ({
  content = 'Are you sure?',
  title = 'success',
  ...props
}: Props) => {

  const { classModal, handleModal, radioButton, closeModal } = useHandlerAnimations();

  const color = () => {

    switch (radioButton) {
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

    switch (radioButton) {
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
          <div className={`${radioButton}`} ></div>
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
