import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { RecipeBookAppComponent } from "./recipe-book.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
import { RecipeData } from './shared/recipedata.service';

import { LikeComponent } from './like/like.component';
import { ChildModule } from './child.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    RecipeBookAppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule, ChildModule, SharedModule, FormsModule
  ],
  providers: [RecipeData],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
