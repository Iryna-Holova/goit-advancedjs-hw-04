import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  zindex: 999,
  timeout: 5000,
  resetOnHover: true,
  position: 'bottomCenter',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
});

function showError(message) {
  iziToast.show({
    backgroundColor: '#E38359',
    message,
  });
}

function showWarning(message) {
  iziToast.show({
    backgroundColor: '#E1CB10',
    message,
  });
}

function showSuccess(message) {
  iziToast.show({
    backgroundColor: '#87D662',
    message,
  });
}

export { showError, showWarning, showSuccess };
