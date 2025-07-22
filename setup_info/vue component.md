---
aliasesaliases:
---

---

### 1. **What is a Component in Vue.js?**

A **Vue component** is essentially a reusable block of code that controls a part of the UI (e.g., a button, a list, a header). Vue components have their own **template**, **script**, and **style**. They can be imported and used in other components to create a larger UI.

---

### 2. **How Components Are Structured**

Let’s assume you have two components: `Header.vue` and `App.vue`.

#### `Header.vue` (Component)

```vue
<template>
  <header>
    <h1>Welcome to My Vue App</h1>
    <slot></slot> <!-- Slot for dynamic content -->
  </header>
</template>

<script setup>
// No need to explicitly export the component
// Vue automatically handles this in the <script setup> syntax
</script>

<style scoped>
header {
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
}
</style>
```

### Key Points in `Header.vue`:

- **`<template>`**: Contains the HTML structure for the component.
- **`<script setup>`**: Vue automatically registers the component, so there’s no need to export it manually.
- **`<style>`**: Optional styling specific to this component, and `scoped` ensures the styles don’t leak to other parts of the app.

---

#### `App.vue` (Parent Component that uses `Header.vue`)

```vue
<template>
  <div>
    <Header>
      <template #default>
        <p>This is some custom content in the header.</p>
      </template>
    </Header>
  </div>
</template>

<script setup>
// Import components directly, and Vue will handle registration
import Header from './components/Header.vue';
</script>
```

### Key Points in `App.vue`:

- **`import Header from './components/Header.vue';`**: This imports the `Header` component from the `Header.vue` file. By importing it, Vue makes the `Header` component available for use in the current file (`App.vue`).
    
- **No need for `components: { Header }`**: In the `<script setup>` syntax, components are automatically available in the template after being imported.
    
- **Using the Component**:
    
    - Inside the `<template>`, you use `<Header>` just like an HTML tag. This is where the **component is rendered** in the app.
    - You can also pass content **into the component** using **slots** (like the `<template #default>` tag).
    - This lets you inject custom content (in this case, a `<p>` tag) inside the `Header` component’s `<slot>`.

---

### 3. **The Role of `props` and `events`**

Components can communicate with each other via **props** (passing data to a child component) and **events** (sending messages from a child to a parent).

#### Example of Passing Props and Emitting Events:

##### `TaskItem.vue` (Child Component)

```vue
<template>
  <div>
    <h3>{{ taskTitle }}</h3>
    <button @click="toggleStatus">Toggle Status</button>
  </div>
</template>

<script setup>
defineProps({
  taskTitle: String, // Accept taskTitle as a prop
});

const emit = defineEmits();

function toggleStatus() {
  emit('toggle-task');  // Emit an event to the parent
}
</script>
```

##### `App.vue` (Parent Component)

```vue
<template>
  <div>
    <TaskItem :taskTitle="task.title" @toggle-task="toggleTask" />
  </div>
</template>

<script setup>
import TaskItem from './components/TaskItem.vue';

const task = {
  title: 'Learn Vue',
};

function toggleTask() {
  console.log('Task status toggled!');
}
</script>
```

### How It Works:

1. **Passing Props**:
    - In `App.vue`, you pass data to the `TaskItem` component using **props**. The syntax `:taskTitle="task.title"` binds the value of `task.title` to the `taskTitle` prop of `TaskItem`.
2. **Emitting Events**:
    - In `TaskItem.vue`, when the button is clicked, it triggers the `toggleStatus` method, which emits a `toggle-task` event to the parent (`App.vue`).
    - In `App.vue`, you listen for that event using `@toggle-task="toggleTask"`. When the event is emitted, the `toggleTask` method is called in the parent.

---

### 4. **Summary: Importing and Exporting Components**

- **Exporting Components**:
    
    - In Vue 3 with `<script setup>`, there's no need to manually use `export default {}`. Components are automatically available once imported into the parent file.
- **Importing Components**:
    
    - You use `import Header from './components/Header.vue';` in a parent component to bring the `Header` component into that file.
    - With `<script setup>`, imported components are automatically registered and available for use in the template.

---

### 5. **Component Hierarchy**

1. **Parent Component (`App.vue`)**:
    - Imports child components.
    - Passes data to child components via **props**.
    - Listens to events emitted by children to update its own state.
2. **Child Components (e.g., `Header.vue`, `TaskItem.vue`)**:
    - Receives data through **props**.
    - Emits events to communicate back to the parent.

---

### Conclusion

With Vue 3's `<script setup>`, component import and registration are streamlined, making the process simpler and more concise. You don’t need the traditional `export default` block for each component when using this syntax, and the component is automatically registered once imported.