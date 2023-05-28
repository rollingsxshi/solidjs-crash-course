import { For, Show, createResource } from "solid-js";
import Card from "../components/Card";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

function Home() {
  const [products] = createResource(fetchProducts);

  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
      <div class="grid grid-cols-4 gap-10 my-4">
        <For each={products()}>
          {(product) => (
            <Card rounded={true} flat={true}>
              <img src={ product.image } alt="product img" />
              <h2 class="my-3 font-bold">{ product.title }</h2>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
}
export default Home;
