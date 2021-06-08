import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private racipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Scezwan Noodle',
      imageUrl: 'assets/images/schezwan-noodles.jpg',
      ingredients: ['Noodle', 'Rice', 'AjinoMoto'],
    },
    {
      id: 'r2',
      title: 'Veg Noodle',
      imageUrl: 'assets/images/Veg-Hakka-Noodles.jpg',
      ingredients: ['Noodle', 'Rice', 'AjinoMoto'],
    },
    {
      id: 'r3',
      title: 'Non-Veg Noodle',
      imageUrl: 'assets/images/Non-veg-noodles.jpg',
      ingredients: ['Noodle', 'Rice', 'AjinoMoto'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.racipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.racipes.find((recipe) => recipe.id === recipeId),
    };
  }

  deleteRecipes(recipeId: string) {
    this.racipes = this.racipes.filter((recipe) => recipe.id !== recipeId);
  }
}
