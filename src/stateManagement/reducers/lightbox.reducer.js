import LightboxActions from '../actions/lightbox.actions';

export default function lightbox(state = false, action) {
  switch (action.type) {
    /**
     * Toggle the lightbox
     */
    case 'TOGGLE_LIGHTBOX':
      return !state;
    default:
      return state;
  }
}