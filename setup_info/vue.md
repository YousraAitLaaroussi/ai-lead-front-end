Tags: [[Programming]], [[Web Development]], [[Frontend]]

Status: [[Doing]]

# **1. What is Vue.js?**

**Vue** is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.
## *1.1. Core Features:
 - *Declarative Rendering:* Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state.
 - *Reactivity:* Vue automatically tracks JavaScript state changes and efficiently updates the *DOM* when changes happen.

## *1.2. The Progressive Framework:*
 Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways:

 - Enhancing static HTML without a build step
 - Embedding as Web Components on any page
 - Single-Page Application (SPA)
 - Fullstack / Server-Side Rendering (SSR)
 - Jamstack / Static Site Generation (SSG)
 - Targeting desktop, mobile, WebGL, and even the terminal

## *1.3. Single-File Components:*
 Vue components use an HTML-like file format called **SFC** (*AKA* **Single-File Component**). A Vue *SFC*, as the name suggests, encapsulates the component's logic (JavaScript), template (HTML), and styles (CSS) in a single file.

# **2. Installation:**

- *Vue CLI (Command Line Interface):*
This installs the CLI globally, making the `vue` command available anywhere.
```shell
npm install -g @vue/cli
vue create my-first-vue-app
cd my-first-vue-app
npm run serve
```

- *Vite (recommended for speed):*
```shell
npm create vite@latest my-first-vue-app --template vue
cd my-first-vue-app
npm install
npm run dev
```

# **3. Creating a Vue Application:**

## *3.1. The application instance:*
 Every Vue application starts by creating a new **application instance** with the `createApp` function in `main.js` file:
```js
import { createApp } from 'vue'

createApp(/* root component options */)
```

## *3.2. The Root Component:*
 The object we are passing into `createApp` is in fact a component. Every app requires a *"root component"* that can contain other components as its children.

 If you are using Single-File Components, we typically import the root component from another file:
```js
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

createApp(App)
```

## *3.3. Mounting the App:*
 An application instance won't render anything until its `.mount()` method is called. It expects a "container" argument:
```js
createApp(App).mount('#app')
```

```vue
<template>
<!-- content -->
</template>
```

 The content of the app's root component will be rendered inside the container element. The container element itself is not considered part of the app.
 
## *3.4. In-DOM Root Component Template:*
 The template for the root component is usually part of the component itself, but it is also possible to provide the template separately by writing it directly inside the mount container:
```vue
<template>
  <button @click="count++">{{ count }}</button>
</template>
```

```js
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')
```

  Vue will automatically use the container's `innerHTML` as the template if the root component does not already have a `template` option.

  In-DOM templates are often used in applications that are [using Vue without a build step](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn). They can also be used in conjunction with server-side frameworks, where the root template might be generated dynamically by the server.

# **4. Template Syntax**

Vue uses an HTML-based template, all Vue templates are syntactically valid HTML. Under the hood, Vue compiles the templates into JavaScript code.

## *4.1. Text Interpolation:*
 The most basic form of data binding is text interpolation using the *"Mustache"* syntax (double curly braces):
```vue
<span>Message: {{ msg }}</span>
```

 *The mustache* tag will be replaced with the value of the `msg` property from the corresponding component instance. It will also be updated whenever the `msg` property changes.

## *4.2. Attribute Bindings:*
 Mustaches cannot be used inside HTML attributes. Instead, use a **`v-bind`** directive:
```vue
<div v-bind:id="dynamicId"></div>
```

 The **`v-bind`** directive instructs Vue to keep the element's `id` attribute in sync with the component's `dynamicId` property. If the bound value is `null`or `undefined`, then the attribute will be removed from the rendered element.

- ### *Shorthand:*
  Because *`v-bind`* is so commonly used, it has a dedicated shorthand syntax:
```vue
<div :id="dynamicId"></div>
```

- ### *Same-name Shorthand:*
  If the attribute has the same name with the JavaScript value being bound, the syntax can be further shortened to omit the attribute value:
```vue
<!-- same as :id="id" -->
<div :id></div>

<!-- this also works -->
<div v-bind:id></div>
```

- ### *Boolean Attributes:*
  `v-bind` works a bit differently in this case:
```vue
<button :disabled="isButtonDisabled">Button</button>
```

  The `disabled` attribute will be included if `isButtonDisabled` has a truthy value. It will also be included if the value is an empty string, maintaining consistency with `<button disabled="">`. For other falsy values the attribute will be omitted.

- ### *Dynamically Binding Multiple Attributes:*
  If you have a JavaScript object representing multiple attributes that looks like this:
```js
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}
```

  You can bind them to a single element by using `v-bind` without an argument:
```vue
<div v-bind="objectOfAttrs"></div>
```

## *4.3. Using JavaScript Expressions:*
 Vue supports the full power of JavaScript expressions inside all data bindings:
```vue
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```
 These expressions will be evaluated as JavaScript in the data scope of the current component instance.

 In Vue templates, JavaScript expressions can be used in the following positions:

 - Inside text interpolations (mustaches)
 - In the attribute value of any Vue directives (special attributes that start with `v-`)

- ### *Expressions Only:*
  Each binding can only contain **one single expression**. An expression is a piece of code that can be evaluated to a value. A simple check is whether it can be used after `return`.

  Therefore, the following will **NOT** work:
```vue
<!-- this is a statement, not an expression: -->
{{ var a = 1 }}

<!-- flow control won't work either, use ternary expressions -->
{{ if (ok) { return message } }}
```

- ### *Calling Functions:*
  It is possible to call a component-exposed method inside a binding expression:
```vue
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
```

>❗TIP
>  Functions called inside binding expressions will be called every time the component updates, so they should **not** have any side effects, such as changing data or triggering asynchronous operations.

## *4.5. Directives:*
 **Directives** are special attributes with the `v-` prefix. Vue provides a number of built-in directives, including `v-html` and `v-bind`.

 Directive attribute values are expected to be single JavaScript expressions (with the exception of `v-for`, `v-on` and `v-slot`). A directive's job is to reactively apply updates to the DOM when the value of its expression changes. Take `v-if` as an example:
```vue
<p v-if="seen">Now you see me</p>
```

 Here, the `v-if` directive would remove or insert the `<p>` element based on the truthiness of the value of the expression `seen`.

- ### *Arguments:*
  Some directives can take an "argument", denoted by a colon after the directive name. For example, the `v-bind` directive is used to reactively update an HTML attribute:
```vue
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```
  Here, `href` is the argument, which tells the `v-bind` directive to bind the element's `href` attribute to the value of the expression `url`. In the shorthand, everything before the argument (i.e., `v-bind:`) is condensed into a single character, `:`.

  Another example is the `v-on` directive, which listens to DOM events:
```vue
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```
  Here, the argument is the event name to listen to: `click`. `v-on` has a corresponding shorthand, namely the `@` character.

- ### *Modifiers:*
  Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way. For example, the `.prevent` modifier tells the `v-on` directive to call `event.preventDefault()`on the triggered event:
```vue
<form @submit.prevent="onSubmit">...</form>
```
![directive syntax graph](https://vuejs.org/assets/directive.DtZKvoAo.png)
# **5. Components Basics:**

**Components** allow us to split the UI into independent and reusable pieces, and think about each piece in isolation. It's common for an app to be organized into a tree of nested components:
![Component Tree](https://vuejs.org/assets/components.B1JZbf0_.png)

## *5.1. Defining a Component:*
 When using a build step, we typically define each Vue component in a dedicated file using the `.vue` extension - known as a *SFC*:
```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
```

 When not using a build step, a Vue component can be defined as a plain JavaScript object containing Vue-specific options:
```js
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
  // Can also target an in-DOM template:
  // template: '#my-template-element'
}
```
 The template is inlined as a JavaScript string here. You can also use an ID selector pointing to an element (usually native `<template>` elements) - Vue will use its content as the template source.

 The example above defines a single component and exports it as the default export of a `.js` file, but you can use named exports to export multiple components from the same file.

## *5.2. Using a Component:*
 To use a child component, we need to import it in the parent component. Assuming we placed our counter component inside a file called`ButtonCounter.vue`, the component will be exposed as the file's default export:
```vue
<script setup>
import ButtonCounter from './ButtonCounter.vue'
</script>

<template>
  <ButtonCounter />
</template>
```
 With `<script setup>`, imported components are automatically made available to the template.

 It's also possible to globally register a component, making it available to all components in a given app without having to import it.

 Components can be reused as many times as you want:
```vue
<ButtonCounter />
<ButtonCounter />
<ButtonCounter />
```
 Each time you use a component, a new **instance** of it is created.

 In SFCs, it's recommended to use `PascalCase` tag names for child components to differentiate from native HTML elements. Although native HTML tag names are case-insensitive, Vue SFC is a compiled format so we are able to use case-sensitive tag names in it. We are also able to use `/>` to close a tag.

 If you are authoring your templates directly in a DOM (e.g. as the content of a native `<template>` element), the template will be subject to the browser's native HTML parsing behavior. In such cases, you will need to use `kebab-case` and explicit closing tags for components:

```vue
<!-- if this template is written in the DOM -->
<button-counter></button-counter>
<button-counter></button-counter>
<button-counter></button-counter>
```

## *5.3. Passing Props:*
 Props are a way to pass data **from a parent component to a child component**.
 Props are custom attributes you can register on a component, using the `defineProps` macro:
```vue
<!-- BlogPost.vue -->
<script setup>
defineProps(['title'])
</script>

<template>
  <h4>{{ title }}</h4>
</template>
```
 `defineProps` is a compile-time macro that is only available inside `<script setup>`. Declared props are automatically exposed to the template.
 
 `defineProps` also returns an object that contains all the props passed to the component, so that we can access them in JavaScript if needed:
```js
const props = defineProps(['title'])
console.log(props.title)
```

 If you are not using `<script setup>`, props should be declared using the `props` option, and the props object will be passed to `setup()` as the first argument:
```js
export default {
  props: ['title'],
  setup(props) {
    console.log(props.title)
  }
}
```

 A component can have as many props as you like and, by default, any value can be passed to any prop.

 Once a prop is registered, you can pass data to it as a custom attribute, like this:
```vue
<BlogPost title="My journey with Vue" />
<BlogPost title="Blogging with Vue" />
<BlogPost title="Why Vue is so fun" />
```

 In a typical app, you'll likely have an array of posts in your parent component:
```js
const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])
```

 Then want to render a component for each one, using `v-for`:
```vue
<BlogPost
  v-for="post in posts"
  :key="post.id"
  :title="post.title"
 />
```

## *5.4. Listening to Events:*
 Some features may require communicating back up to the parent. For example, we may decide to include an accessibility feature to enlarge the text of blog posts, while leaving the rest of the page at its default size.
 
 ##### Steps for Event Communication:
1. Emit an event from the child using `this.$emit()`.
2. Listen for the event in the parent using `v-on` or `@`.

 In the parent, we can support this feature by adding a `postFontSize` ref:
```js
const posts = ref([
  /* ... */
])

const postFontSize = ref(1)
```

Which can be used in the template to control the font size of all blog posts:
```vue
<div :style="{ fontSize: postFontSize + 'em' }">
  <BlogPost
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
   />
</div>
```

Now let's add a button to the `<BlogPost>` component's template:

vue

```
<!-- BlogPost.vue, omitting <script> -->
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button>Enlarge text</button>
  </div>
</template>
```

The button doesn't do anything yet - we want clicking the button to communicate to the parent that it should enlarge the text of all posts. To solve this problem, components provide a custom events system. The parent can choose to listen to any event on the child component instance with `v-on` or `@`, just as we would with a native DOM event:

template

```
<BlogPost
  ...
  @enlarge-text="postFontSize += 0.1"
 />
```

Then the child component can emit an event on itself by calling the built-in [**`$emit`** method](https://vuejs.org/api/component-instance#emit), passing the name of the event:

vue

```
<!-- BlogPost.vue, omitting <script> -->
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>
```

Thanks to the `@enlarge-text="postFontSize += 0.1"` listener, the parent will receive the event and update the value of `postFontSize`.


We can optionally declare emitted events using the [`defineEmits`](https://vuejs.org/api/sfc-script-setup#defineprops-defineemits) macro:

vue

```
<!-- BlogPost.vue -->
<script setup>
defineProps(['title'])
defineEmits(['enlarge-text'])
</script>
```

This documents all the events that a component emits and optionally [validates them](https://vuejs.org/guide/components/events#events-validation). It also allows Vue to avoid implicitly applying them as native listeners to the child component's root element.

Similar to `defineProps`, `defineEmits` is only usable in `<script setup>` and doesn't need to be imported. It returns an `emit` function that is equivalent to the `$emit` method. It can be used to emit events in the `<script setup>` section of a component, where `$emit` isn't directly accessible:

vue

```
<script setup>
const emit = defineEmits(['enlarge-text'])

emit('enlarge-text')
</script>
```

See also: [Typing Component Emits](https://vuejs.org/guide/typescript/composition-api#typing-component-emits) 

If you are not using `<script setup>`, you can declare emitted events using the `emits` option. You can access the `emit` function as a property of the setup context (passed to `setup()` as the second argument):

js

```
export default {
  emits: ['enlarge-text'],
  setup(props, ctx) {
    ctx.emit('enlarge-text')
  }
}
```

That's all you need to know about custom component events for now, but once you've finished reading this page and feel comfortable with its content, we recommend coming back later to read the full guide on [Custom Events](https://vuejs.org/guide/components/events).













# *References:*

[Vue.js documentation](https://vuejs.org/guide/introduction.html).
[ChatGPT](https://suirita.github.io/Vue.js_self_training).