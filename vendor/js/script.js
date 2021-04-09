console.clear();

var app = new Vue({
  el: 'main#app',
  data: {
    message: 'Hello from Vue!',
    colors: {
      trans: 'transparent',
      white: getComputedStyle(document.documentElement).getPropertyValue("--white-color"),
      black: getComputedStyle(document.documentElement).getPropertyValue("--black-color"),
      pink: getComputedStyle(document.documentElement).getPropertyValue("--pink-color"),
      blue: getComputedStyle(document.documentElement).getPropertyValue("--blue-color"),
      gray: getComputedStyle(document.documentElement).getPropertyValue("--gray-color"),
      green: getComputedStyle(document.documentElement).getPropertyValue("--green-color"),
      yellow: getComputedStyle(document.documentElement).getPropertyValue("--yellow-color"),
      red: getComputedStyle(document.documentElement).getPropertyValue("--red-color"),
      
      link: getComputedStyle(document.documentElement).getPropertyValue("--link-color"),
      main: getComputedStyle(document.documentElement).getPropertyValue("--main-color"),
    },
  },
  methods: {
  },
});