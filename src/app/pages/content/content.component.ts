import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://images.unsplash.com/photo-1499332309261-096aa86a939d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1623&q=80";
  contentTitle: string = "Conteudo";
  contentDescription: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellat ullam nobis amet. Distinctio, sed quibusdam aut earum omnis minus ad. Illum culpa qui, laudantium debitis beatae modi! Corporis, nostrum.";

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      console.log(value.get('id'));
    });
  }

}
