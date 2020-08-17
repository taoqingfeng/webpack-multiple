/*
 * @Author: your name
 * @Date: 2020-07-29 09:44:01
 * @LastEditTime: 2020-08-08 14:58:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ccdc-website\animate.js
 */
$('.box').addClass('animate__animated animate__fadeIn animate__slow');
function ani(claname: any, type1: string) {
  $(window).scroll(() => {
    if (((<any>$(`.${claname}`)).offset().top - <any>$(window).scrollTop()) < <any>$(window).height()) {
      $(`.${claname}`).addClass(type1);
    }
  });
}
if ($('.section1').length > 0) {
  ani('section1', 'animate__animated animate__flipInX');
}
if ($('.section2').length > 0) {
  ani('section2', 'animate__animated animate__lightSpeedInLeft');
}
if ($('.section3').length > 0) {
  ani('section3', 'animate__animated animate__lightSpeedInRight');
}
if ($('.section4').length > 0) {
  ani('section4', 'animate__animated animate__lightSpeedInRight');
}
// ani("section2","animate__animated animate__lightSpeedInLeft");
// ani("section3","animate__animated animate__lightSpeedInRight");
// ani("section4","animate__animated animate__lightSpeedInRight");
if ($('.section-1').length > 0) {
  ani('section-1', 'animate__animated animate__flipInX');
}
if ($('.section-2').length > 0) {
  ani('section-2', 'animate__animated animate__lightSpeedInRight');
}
if ($('.section-3').length > 0) {
  ani('section-3', 'animate__animated animate__lightSpeedInLeft');
}
if ($('.section-4').length > 0) {
  ani('section-4', 'animate__animated animate__lightSpeedInRight');
}
if ($('.section-5').length > 0) {
  ani('section-5', 'animate__animated animate__flipInY');
}
if ($('.section-6').length > 0) {
  ani('section-6', 'animate__animated animate__flipInY');
}
if ($('.section-7').length > 0) {
  ani('section-7', 'animate__animated animate__flipInY');
}
