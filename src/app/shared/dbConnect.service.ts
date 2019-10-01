import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class dbConnect {
    
    addRecipeToDB(recipe:any){
        //console.log("Recipe is added!");
        this.http.post('https://raul-tcs.firebaseio.com/recipe.json', recipe).subscribe(myData=>{
            console.log(myData);
        })
    }
    
    loadRecipeFromDB(){
         return this.http
          .get(
            'https://raul-tcs.firebaseio.com/recipe.json'
          )
          .pipe(
            map(responseData => {
              const postsArray: any[] = [];
              for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                  postsArray.push({ ...responseData[key], id: key });
                }
              }
              return postsArray;
            })
          );
    }
    
    constructor(private http:HttpClient){
            //this.addRecipeToDB
        }
}