const btnShowMenu = document.getElementById('btnOpenMenu');
const btnCloseMenu = document.getElementById('btnCloseMenu');
const navBar = document.getElementById('navBar');

btnShowMenu.addEventListener("click", ()=>{
  navBar.classList.remove('hidden');
});

btnCloseMenu.addEventListener("click", ()=>{
  navBar.classList.add('hidden');
})

// function detectarAnchuraWindow(){
//   if(window.innerWidth > 800){
//     btnCloseMenu.classList.add("hide");
//     btnShowMenu.classList.add("hide");
//   }else{
//     btnShowMenu.classList.remove("hide");
//     btnCloseMenu.classList.remove("hide");
//   }
// }

// window.addEventListener("resize", ()=>{
//   detectarAnchuraWindow();
//   console.log(`Ancho actual: ${window.innerWidth}`);
// })