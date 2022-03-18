
// TOAST NOTIFICATION 
const saveBtn = document.getElementById('saveBtn');
const toastContainer = document.getElementById('toast-container');

saveBtn.addEventListener('click',() => {
  createNotification();
  console.log("working");
});
function createNotification() {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.innerText = 'SETTINGS SAVED';
  toastContainer.appendChild(notif);
  setTimeout(() =>{
    notif.remove();
  }, 2000);
}
