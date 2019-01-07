import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public maVariable: string = "Hello";

  public monImage: String = 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiev4uirdvfAhUQz4UKHV9CCb8QjRx6BAgBEAU&url=http%3A%2F%2Fobjectif-photographe.fr%2Fphoto-de-paysage-8-questions%2F&psig=AOvVaw3Vmazvc3D6SIuKPTe8vdCt&ust=1546939612248150';

  constructor() { }

  ngOnInit() {
  }

  switch() {
    console.log("Salut tout le monde!");
  }
}
