let apiKey = "1";

class IngredientSet {
        async getRandomRecipe() {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php?apiKey=${apiKey}`);
                const data = await response.json();
                const cocktail = data.drinks[0];
                const name = cocktail.strDrink;
                const ingredMeasure = [];
                const ingredients = [];
                const imageURL = `${cocktail.strDrinkThumb}/preview`;
    
                for (let i = 1; i <= 15; i++) {
                    const ingredient = cocktail[`strIngredient${i}`];
                    const measure = cocktail[`strMeasure${i}`];
                    if (ingredient) {
                        ingredMeasure.push(`${measure} ${ingredient}`);
                        ingredients.push(`${ingredient}`);
                    }
                }
    
                return { name, ingredMeasure, imageURL, ingredients };
        }

        async getRecommendation(ingredient) {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?api_key=${apiKey}&i=${ingredient}
                `)
                const data = await response.json()
                let cocktailToGet = Math.floor(Math.random() * data.drinks.length);
                let cocktail = data.drinks[cocktailToGet].strDrink;
                return cocktail;
        }

}