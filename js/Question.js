 class Question{

 constructor(){
  this.name1 = createInput("Name");
  this.correct = createInput('correctOption');
  this.title = createElement('h2');
  this.question = createElement('h3');
  this.option1 = createElement('h4');
  this.option2 = createElement('h4');
}

hide(){
    this.nameB.hide();
    this.correct.hide();
    this.title.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide()
}

display(){
  this.title.html("My Quiz Game");
  this.title.position(775,0);

  this.question.html("Question :- What starts and Ends with the letter 'e', but has only one letter? ");
  this.question.position(500, 80);

  this.option1.html(" 1: Everyone")
  this.option1.position(550,125);

  this.option2.html(" 2: Envelope")
  this.option2.position(550,150);

  this.name1.position(525,225);

  this.correct.position(850,225)



}



 }