import { SidebarState } from '.';

type SidebarActionType =
  | { type: '[Sidebar] - open sidebar' }
  | { type: '[Sidebar] - close sidebar' }

export const sidebarReducer = (state: SidebarState, action: SidebarActionType): SidebarState => {

  switch (action.type) {
    case '[Sidebar] - open sidebar':
      return {
        ...state,
        isOpenSidebar: true
      }

    case '[Sidebar] - close sidebar':
      return {
        ...state,
        isOpenSidebar: false
      }

    default:
      return state;
  }
}