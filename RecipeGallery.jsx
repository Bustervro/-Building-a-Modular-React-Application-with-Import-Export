import React from "react";

function RecipeGallery() {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Pasta", "Eggs", "Parmesan Cheese", "Bacon", "Black Pepper"],
      image:
        "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Chicken Salad",
      ingredients: ["Chicken Breast", "Lettuce", "Tomatoes", "Cucumber", "Olive Oil"],
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Pancakes",
      ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"],
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Veggie Pizza",
      ingredients: ["Pizza Dough", "Cheese", "Bell Peppers", "Olives", "Tomato Sauce"],
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Recipe Gallery</h1>

      <div style={styles.gallery}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={styles.card}>
            <img
              src={recipe.image}
              alt={recipe.title}
              style={styles.image}
            />
            <h2 style={styles.title}>{recipe.title}</h2>

            <h3 style={styles.subheading}>Ingredients:</h3>
            <ul style={styles.list}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    marginBottom: "30px",
    color: "#333",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "15px",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    margin: "15px 0 10px",
    color: "#222",
  },
  subheading: {
    marginBottom: "10px",
    color: "#555",
  },
  list: {
    textAlign: "left",
    paddingLeft: "20px",
    color: "#444",
  },
};

export default RecipeGallery;
