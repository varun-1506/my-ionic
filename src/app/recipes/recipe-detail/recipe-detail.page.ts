import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private altCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paraMap) => {
      if (!paraMap.has('recipeId')) {
        return;
      }

      const recipeId = paraMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.altCtrl
      .create({
        header: 'Are you sure?',
        message: 'You really want to delete Recipe?',
        buttons: [
          {
            text: 'Cancel',
            role: 'Cancel',
          },
          {
            text: 'Delete',
            handler: ()=>{
              this.recipeService.deleteRecipes(this.loadedRecipe.id);
              this.router.navigate(['./recipes']);
            }
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }
}
