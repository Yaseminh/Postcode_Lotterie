# Deutsche Postcode Lotterie

**Senior Fullstack Developer [Trial Task]**

## 1 - First, we have ... Questions:

We want to know more about you, your experience and your thoughts on some topics.
If you don't know the answer to a question, just say so, we are not looking for perfection, just for your honest opinion.

### 1.1 - **What is the most important thing you learned in the last 6 months?**

I learned how the Rag method, which tests artificial intelligence software, works and what it does. I learned that with the Rag method, after finding out if there is any hallucination in the response of each artificial intelligence in the artificial intelligence software, it can correct itself and transform the response of the artificial intelligence into a more logical form.

### 1.2. - **What is your favorite programming language and why?**

Visual studio method document is more beautiful and understandable. In my previous work experience, it was requested to collect alarm system data with SIA protocol in IP receiver application with c#. There were many calculations here and these calculations had to be done via pointers. C# being high level and using pointers as unsafety helped many people. That's why my favorite programming language is c#.
### 1.3. - **How do you feel about the following piece of code?**

This is obviously to get you talking, there is no right answer!
We will discuss your thoughts in the next interview.

```javascript
Array.prototype.unique = function() {
  return this.filter((value, index, self) => self.indexOf(value) === index);
};

Array.prototype.unique = function() {
 return this.filter((value, index, self) => self.indexOf(value) === index);
};
#This code removes dublicate values.
With unique, repetition is prevented. But in the other example, a continuously repeating code piece is created.
This is the benefit of use. In other words, a sample is actually taken each time.
example 1
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray1 = array.unique(); // [1, 2, 3, 4, 5]
const uniqueArray2 = uniqueArray1.unique(); // [1, 2, 3, 4, 5]
console.log(uniqueArray1); // Çıktı: [1, 2, 3, 4, 5]
console.log(uniqueArray2); // Çıktı: [1, 2, 3, 4, 5]
example 2
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray1 = array.filter((value, index, self) => self.indexOf(value) === index);
const uniqueArray2 = uniqueArray1.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArray1); // Çıktı: [1, 2, 3, 4, 5]
console.log(uniqueArray2); // Çıktı: [1, 2, 3, 4, 5]
Performance:
The code may not be the most efficient, especially for large arrays. Since indexOf is called repeatedly for each element,
it can have a worst case O(n²) time complexity.
// Array.prototype.unique yöntemini Set ile yeniden tanımlıyoruz
Array.prototype.unique = function() {
  return [...new Set(this)];
};
// Example 3
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.unique();
console.log(uniqueArray); // oytput: [1, 2, 3, 4, 5]
Since set stores unique values, it is better in terms of performance. This method has O(n) time complexity.

```

### 1.4. - **What does this do?**
```javascript
Array.prototype.unique = function() {
 return this.filter((value, index, self) => self.indexOf(value) === index);
};
#This code removes dublicate values.
With unique, repetition is prevented. But in the other example, a continuously repeating code piece is created.
This is the benefit of use. In other words, a sample is actually taken each time.
example 1
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray1 = array.unique(); // [1, 2, 3, 4, 5]
const uniqueArray2 = uniqueArray1.unique(); // [1, 2, 3, 4, 5]
console.log(uniqueArray1); // output: [1, 2, 3, 4, 5]
console.log(uniqueArray2); // output: [1, 2, 3, 4, 5]
example 2
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray1 = array.filter((value, index, self) => self.indexOf(value) === index);
const uniqueArray2 = uniqueArray1.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArray1); // output: [1, 2, 3, 4, 5]
console.log(uniqueArray2); // output: [1, 2, 3, 4, 5]
Performance:
The code may not be the most efficient, especially for large arrays. Since indexOf is called repeatedly for each element,
it can have a worst case O(n²) time complexity.
// Array.prototype.unique yöntemini Set ile yeniden tanımlıyoruz
Array.prototype.unique = function() {
  return [...new Set(this)];
};
// Example 3
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.unique();
console.log(uniqueArray); // output: [1, 2, 3, 4, 5]
Since set stores unique values, it is better in terms of performance. This method has O(n) time complexity.


```javascript
let queue = [root], refSet = new Set();

const handle = async ({ key, value, parent, slug, props }) => {
  if (value === null || value === undefined) return;
  if (test(key, value, parent)) await mutate(key, value, slug, props, parent);
  else if (isObject(value)) {
    if (refSet.has(value)) return;
    refSet.add(value);
    Object.entries(value).map(([key, child]) =>
      queue.push({ key, value: child, parent: value, slug, props })
    );
  }
};

while (queue.length) {
  const pull = queue;
  queue = [];
  await Promise.all(pull.map(node => handle(node)));
}
```

### 1.5. - **What is your take on JWT and session management?**

Sessions are stored as an id and a different user information in the backend and provide session management in the backend, but JWT is stored on the client side and is in json format.

## 2. - Coding Challenge

### 2.1. - **Give the complete type definition for [].unique we defined in 1.3.**
Array.prototype.unique = function <T>(this: T[]): T[] {
  return this.filter((value, index, self) => self.indexOf(value) === index);
};
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.unique();
console.log(uniqueArray); // output: [1, 2, 3, 4, 5]


### 2.2. - **Implement a "table" component**

The takes accepts a list of objects and renders a table with the list data.

It should be styled with tailwind and be written in pure tsx without any external libraries.

props: **list**, **headers**, **rows**

- **list**: an array of objects
- **headers**: an array of strings (optional, default to object keys)
- **rows**: a number (optional, default to infinity) constrain the number of rows to show (use scrollbars to show more)

#### What we are looking for:

- Functionality
- Design
- Good use of typescript, react and tailwind
- Clean code
- Tests

#### How to submit:

- We expect you to deliver a ready to use npm package, so we could install it and use it in a next.js project.
- We want it as a git repository with your code (as link or as a zip file)
- Include this markdown file with your answers
- Include a README.md with instructions on how to run the code and the tests
- Remove the node_modules folder please ;D

## Next Steps

If you pass this trial, we will invite you to a technical interview where we will discuss your answers and the code you submitted.
