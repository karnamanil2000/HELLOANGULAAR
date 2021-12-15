import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component(
    {
        selector: "app-home",
        templateUrl: "./home.component.html",
        styleUrls: ["./home.component.css"]
    }
)
export class HomeComponent {
    constructor(private activatedRoute: ActivatedRoute){
        //In the same component if url parameters is not going to change use Snapshot.
        console.log(`From Snapshot ${activatedRoute.snapshot.paramMap.get("name")}`);
        activatedRoute.paramMap.subscribe((item) => {
            //In the same component if url parameters is going to change use Observable.
            console.log(`From Paramap ${item.get('name')}`);
        });
    }
}