const Dev = function(){
    constructor(name, idade, principalLinguaguem, tipodev){
      this.name = name;
      this.idade = idade;
      this.principalLinguaguem = principalLinguaguem;
      this.tipodev = tipodev;
    }
  
    this.saudacao = function(){
      console.log(`Oi sou dev ${this.tipodev}  ${this.principalLinguaguem} e me chamo ${this.name} e tenho ${this.idade}`)
    }
     
  }
  
  const Frontend = function ()  {
    constructor(name, idade, principalLinguaguem, tipodev){
      super(name, idade, principalLinguaguem, tipodev);
    }
  }
  
  const frontend = new Frontend("João", 25, "JavaScript, HTML, CSS",  'frontend');
  console.log(frontend)