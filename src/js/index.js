import '../scss/main.scss'

const App = class {

  constructor() {
    
    console.log(`Let's do this, yeah?!`);
    
    document.documentElement.classList.remove('is-loading');
  }
  
};

new App();
