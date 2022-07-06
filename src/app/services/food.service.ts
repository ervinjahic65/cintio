import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "a30e2cfbb73fc3dea624656c24d5e8ee";
const APP_ID = "2f9c222e";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  private favorites: any[] = [];
  constructor(private http: HttpClient) {}

  getRecipe(criteria: string, calories: string, diet: string): Observable<any> {
    return this.http.get("https://api.edamam.com/search?", {
      params: {
        app_key: API_KEY,
        app_id: APP_ID,
        q: criteria,
        calories: `0-${calories}`,
        diet: diet,
        to: "30"
      }
    });
  }

  getFavorite(): any[] {
    return this.favorites;
  }

  setFavorite(favorites:any): void {
    this.favorites = favorites;
  }
}
