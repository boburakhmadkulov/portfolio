const li_btn = document.querySelectorAll('.li-btn');
for (let i = 0; i < li_btn.length; i++) {
    li_btn[i].addEventListener('click', () => {
        li_btn[0].classList.remove('active');
        li_btn[1].classList.remove('active');
        li_btn[2].classList.remove('active');
        li_btn[i].classList.toggle('active');
    });
}