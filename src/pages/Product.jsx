import { useParams } from "@solidjs/router";
import { Show, createResource, createSignal } from "solid-js";
import { useCartContext } from "../context/CartContext";

const fetchProduct = async (id) => {
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  return res.json();
};

function Product() {
  const params = useParams();
  const [product] = createResource(params.id, fetchProduct); // pass id to fetchProduct()
  const { items, setItems } = useCartContext();
  const [adding, setAdding] = createSignal(false);

  const addProduct = () => {
    setAdding(true);
    setTimeout(() => setAdding(false), 2000);
    // check if product exists
    const exists = items.find((p) => p.id === product().id);

    if (exists) {
      setItems(
        (p) => p.id === product().id,
        "quantity",
        (q) => q + 1
      );
    } else {
      setItems([...items, { ...product(), quantity: 1 }]);
    }
  };

  return (
    <div class="my-7">
      <Show when={product()} fallback={<p>Loading...</p>}>
        <div className="grid grid-cols-5 gap-7">
          <div className="col-span-2">
            <img src={product().image} alt="product image" />
          </div>

          <div className="col-span-3">
            <h2 className="text-3xl font-bold mb-7">{product().title}</h2>
            <p>{product().description}</p>
            <p className="my-7 text-2xl">Only ${product().price}</p>

            <button class="btn" onClick={addProduct} disabled={adding()}>
              Add to Cart
            </button>

            <Show when={adding()}>
              <div className="m-2 p-2 border-amber-500 border-2 rounded-md inline-block">
                {product().title} was added to the cart
              </div>
            </Show>
          </div>
        </div>
      </Show>
    </div>
  );
}
export default Product;
