import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import { FoodService } from "../services/food.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Input() recipes!: any[];

  criteria: string = "";
  favorite: boolean = false;
  favorites: any[] = [];
  hidden: boolean = true;
  index!: number|null;
  math = Math;
  calories!: string;
  diet!: string;
  to!: string;
  clicked!: boolean;

  // filterText: string = "";

  constructor(private foodService: FoodService) {}

  addFavorite(recipe: any) {
    recipe.favorite = !recipe.favorite;
    if (recipe.favorite === true) {
      this.favorites.push(recipe);
    } else {
      this.favorites.splice(recipe, 1);
    }
    this.foodService.setFavorite(this.favorites);
  }

  setIndex(indexNumber: number) {
    this.index = indexNumber;
    this.clicked = true;
  }

  hideRecipe() {
    this.index = null;
    this.clicked = !this.clicked;
  }

  ngOnInit() {
    console.log(this.favorites);
    this.foodService.getRecipe(this.criteria, this.calories, this.diet);
  }
}
