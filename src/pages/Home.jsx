import { createResource } from "solid-js";
import Card from "../components/Card";

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}

function Home() {
  const [products] = createResource(fetchProducts);

  return (
    <div class="grid grid-cols-4 gap-10 my-4">
      <Card rounded={true} flat={false}>
        <h2>Ninja Tee, Black</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, vel
          iure? Velit id nam tenetur?
        </p>
        <button class="btn">view</button>
      </Card>
      <Card rounded={false} flat={true}>
        <h2>Ninja Tee, White</h2>
        <button class="btn">view</button>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, vel
          iure? Velit id nam tenetur?
        </p>
        <p>Only $10</p>
      </Card>

      <p>{ console.log(products(), products.loading) }</p>
    </div>
  );
}
export default Home;
