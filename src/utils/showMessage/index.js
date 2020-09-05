import { showMessage } from 'react-native-flash-message';
import { colors } from '../colors';

export const showError = (message) => {
  showMessage({
    message,
    type: 'default',
    backgroundColor: colors.flash.failed,
    color: colors.text.secondary,
  });
};

export const showSuccess = (message) => {
  showMessage({
    message,
    type: 'default',
    backgroundColor: colors.flash.success,
    color: colors.text.secondary,
  });
};
