import { Component } from "@angular/core";

//export tipo o método main do java
//metadado, avisa o angular que isso é un component
@Component({
    selector: 'ola-angular',
        templateUrl: './ola-angular.component.html',
        // template: `
        // <p>
        //     Olá, {{framework}}
        // </p>`//Interpoelação {{}}, um tipo de Data Biding
        styleUrls:['./ola-angular.component.css']
})
export class OlaAngularComponent{

    framework = 'React'
}

