/* Recupera la descripción del
 * navegador en que se ejecuta
 * este código. */
const USER_AGENT =
  navigator.userAgent ||
  navigator.vendor ||
  window["opera"];
if (/android/i.test(USER_AGENT)) {
  document.body.classList
    .add("android");
}
if (/iPad|iPhone|iPod|Mac/.
  test(USER_AGENT) &&
  !window.MSStream) {
  document.body.classList.
    add('ios');
}