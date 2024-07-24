document.addEventListener('DOMContentLoaded', () => {
    
    
});
const burger = document.getElementById('burger');
const  sidenav = document.querySelector('.sidenav');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

function toggleNav() {
        if(burger.checked){
            sidenav.classList.add('sidenav-opened');
            sidenav.classList.remove('sidenav-closed');
            body.classList.add('no-scroll');
            body.classList.remove('can-scroll');
        }
        else{
            sidenav.classList.add('sidenav-closed');
            sidenav.classList.remove('sidenav-opened');
            body.classList.add('can-scroll');
            body.classList.remove('no-scroll');
        }
}


const treeviewParent = document.querySelector('.menu-item-container');
const treeview = document.querySelector('.treeview');
const angleDown = document.querySelector('.menu-item-container i');
treeviewParent.addEventListener('click', () =>{
    if(treeview.classList.contains('open-treeview')){
        treeview.classList.remove('open-treeview');
        angleDown.classList.remove('rotate-icon');
    }
    else{
        treeview.classList.add('open-treeview');
        angleDown.classList.add('rotate-icon');
    }
});