const { useState, useEffect } = React;

function App() {
  const foodApi =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";

  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCartPage, setShowCartPage] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(foodApi)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  const addToCart = (food) => {
    const existing = cart.find((item) => item.idMeal === food.idMeal);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.idMeal === food.idMeal
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, qty: 1 }]);
    }
  };

  const filteredFoods = foods.filter((food) =>
    food.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  const Header = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: "#fff",
        borderBottom: "1px solid #ccc",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "24px", color: "orange" }}>🍔</div>

      <input
        type="text"
        placeholder="Search vegetarian food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "250px",
          padding: "8px",
        }}
      />

      <div
        style={{ cursor: "pointer", fontSize: "20px" }}
        onClick={() => setShowCartPage(true)}
      >
        🛒 {cart.length}
      </div>
    </div>
  );

  const Main = () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "15px",
        padding: "20px",
      }}
    >
      {filteredFoods.map((food) => (
        <div
          key={food.idMeal}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <img src={food.strMealThumb} width="120" height="100" />
          <p>{food.strMeal}</p>

          <span
            style={{
              background: "green",
              color: "white",
              padding: "2px 8px",
              fontSize: "12px",
            }}
          >
            Veg 🌱
          </span>

          <br />
          <button
            onClick={() => addToCart(food)}
            style={{
              marginTop: "8px",
              padding: "5px 10px",
            }}
          >
            ADD
          </button>
        </div>
      ))}
    </div>
  );

  const CartPage = () => (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setShowCartPage(false)}>⬅ Back</button>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.idMeal}>
            {item.strMeal} - Qty: {item.qty}
          </div>
        ))
      )}
    </div>
  );

  const Footer = () => (
    <div
      style={{
        background: "#111",
        color: "white",
        textAlign: "center",
        padding: "15px",
      }}
    >
      © Veg Food App
    </div>
  );

  return (
    <div>
      <Header />
      {showCartPage ? <CartPage /> : <Main />}
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
