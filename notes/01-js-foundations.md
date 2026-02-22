# Javascript Foundations Cheat Sheet

These concepts are essential for understanding `Promises`, `async/await`, `the fetch() method`, and `destructured arrays`. Which are all used in **Flicker.**

---

## 1. Promises

A Promise represents a value that may not be available yet but will be resolved in the future. It has three states: `pending`, `fulfilled` (success), and `rejected` (failure). You create a Promise by passing an executor function with two parameters: `resolve` and `reject`. Call `resolve()` when the operation succeeds and `reject()` when it fails.

You handle the results using `.then()` for success and `.catch()` for errors. Promises prevent deeply nested callbacks and make asynchronous code more readable.

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Success!");
  else reject("Failed!");
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

---

## 2. Async / Await & Event Loop

`async` declares a function as asynchronous and always returns a *Promise*. Inside an async function, `await` pauses execution until a Promise resolves, letting your code read like synchronous code. Combine `await` with `try/catch` to handle errors gracefully.

JavaScript's event loop handles asynchronous operations in the background, so your program doesn't freeze while waiting for data. Async/await is just syntactic sugar over Promises.

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchData();
```

---

## 3. fetch()

The `fetch()` function makes *HTTP requests* and always returns a *Promise*. The first parameter is the *API endpoint*, and the second is an optional options object (`method`, `headers`, etc.). Many APIs require a valid key in the headers or URL to return data.

Even if a server responds with an error (like 404), `fetch` resolves the Promise—you must check `response.ok` to confirm success. You can make multiple fetch calls inside one async function.

```javascript
const res = await fetch("https://api.example.com/movies", {
  method: "GET",
  headers: { "Authorization": "Bearer API_KEY" }
});
if (!res.ok) throw new Error("HTTP error");
const data = await res.json();
console.log(data);
```

---

## 4. Destructured Arrays

Array destructuring lets you extract values from arrays and assign them to variables in a single line. This avoids repeatedly using indices like `[0]` or `[1]`.

React/React Native uses array destructuring frequently, for example in `useState` hooks, where the first element is the value and the second is a function to update it.

```javascript
const fruits = ["apple", "banana", "cherry"];
const [first, second] = fruits;
console.log(first);  // apple
console.log(second); // banana

// Rest operator
const [one, ...rest] = fruits;
console.log(rest); // ["banana", "cherry"]

// Example in React
const [count, setCount] = useState(0);
```
