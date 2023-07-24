import { ClassModal, ModalMessageType } from '../../type';
import { HandlerAnimationState } from './';

type HandlerAnimationsActionType =
  | { type: '[HandlerAnimations] - Toggle sidebar', payload: boolean }
  | { type: '[HandlerAnimations] - Open modal', payload:ClassModal }
  | { type: '[HandlerAnimations] - Close modal' }
  | { type: '[HandlerAnimations] - Type message modal', payload:ModalMessageType }
  | { type: '[HandlerAnimations] - Set class modal', payload:ModalMessageType }

export const handlerAnimationReducer = (state: HandlerAnimationState, action: HandlerAnimationsActionType): HandlerAnimationState => {

  switch (action.type) {
    case '[HandlerAnimations] - Toggle sidebar':
      return {
        ...state,
        toggleSidebar: action.payload
      }

    case '[HandlerAnimations] - Open modal':
      return {
        ...state,
        handleModal: true,
        classModal:action.payload
      }

    case '[HandlerAnimations] - Close modal':
      return {
        ...state,
        handleModal: false
      }

    case '[HandlerAnimations] - Type message modal':
      return {
        ...state,
        modalMessageType: action.payload
      }

    default:
      return state;
  }
}