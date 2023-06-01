import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";

const fetchProduct = async (id) => {
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  return res.json();
};

function Product() {
  const params = useParams()
  const [product] = createResource(params.id, fetchProduct) // pass id to fetchProduct()

  return (
    <div class="my-7">
      <Show when={product()} fallback={<p>Loading...</p>}>
        <div className="grid grid-cols-5 gap-7">
          <div className="col-span-2">
            <img src={product().image} alt="product image" />
          </div>

          <div className="col-span-3">
            <h2 className="text-3xl font-bold mb-7">{product().title}</h2>
            <p>{ product().description }</p>
            <p className="my-7 text-2xl">Only ${ product().price }</p>
          </div>
        </div>
      </Show>
    </div>
  )
}
export default Product;
