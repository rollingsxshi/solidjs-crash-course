# SolidJS Crash Course

## Getting started
- run `npx degit solidjs/templates/js {projectName}`
- `cd {projectName}`
- `pnpm i` to install dependencies
- `pnpm run dev` to run the project
- `src/App.jsx` is the root component of our app

## Components
- create `components` folder
- similar to React components

## Global styles & Tailwind
- `pnpm add -D tailwindcss postcss autoprefixer` and `npx tailwindcss init -p`
- follow tailwind docs guide for subsequent steps

## Props
- similar way to React, but can't destructure the props i.e have to use the word `props`
- can use props for dynamic styling along with `classList`
- to use `props.children`, the component must be `<Component></Component>` with child elements in between

## Signals - state management
- `createSignal()` similar to useState
- use a function to get value of state
- 3 ways to change value of a state:
  ```js
  const [bool, setBool] = createSignal(true)

  setBool(false) // 1
  setBool(!bool()) // 2
  setBool((prev) => !prev) // 3
  ```
- `createSignal` is good for numbers, strings, boolean but not optimised for arrays & objects
- use `createStore` instead

## Event handlers
- `onClick={() => }` for buttons
- `type='text' onInput={ (e) => setName(e.target.value) value={name()} }` for inputs, `value` is optional and for 2-way binding

## Solid Router
- separate package, run `pnpm i @solidjs/router`
- wrap `<App />` component with `<Router></Router>` in index.jsx
- In `App.jsx`:
  ```js
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Routes>
  ```

## Fetching data
- for mocking server in local computer, ensure `json-server` package is installed globally
- else run `npm i -g json-server`
- run `json-server -w -p 4000 ./data/db.json`
- for ease of use, we will be using Fake Store Api `https://fakestoreapi.com/products`

## Route params
- In route, `path="/product/:id"`
- useParams() in Component to extract route parameter
  ```js
    const params = useParams()
    const [product] = createResource(params.id, fetchProduct) // pass id to fetchProduct()
  ```

## Using Stores for state management
- createStore()
- when used in component, not invoked
  ```js
    const [products, setProducts] = createStore([ // array of objects
      { tittle: 'ninja tee', price: 10, id: 1 },
      { tittle: 'ninja hoodie', price: 20, id: 2 },
    ])

    function changeProduct(id) {
      // setProducts(0, 'price', 25)
      setProducts((p) => p.id === id, 'price', 50)
    }

    return (
      <div>
        <For each={products}>
          {(p) => (
            <p>{p.title} - ${p.price}</p>
          )}
        </For>

        <button onClick={() => changeProduct(2)}>change a product</button>
      </div>
    )
  ```

