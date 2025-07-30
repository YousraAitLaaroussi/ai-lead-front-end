

## 🧪 Laravel + Inertia + Vue3 + PostgreSQL – AI Project Prototype

### 📁 Project Structure (Overview)

```
ai-backend/
│
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── LeadController.php   ← API + Inertia
│   │   └── Requests/
│   │       └── StoreLeadRequest.php
│
├── database/
│   └── migrations/
│       └── create_leads_table.php
│
├── routes/
│   ├── api.php          ← REST API routes
│   └── web.php          ← Inertia pages
│
├── resources/
│   └── js/
│       ├── Pages/
│       │   └── Leads.vue   ← Vue component
│
├── public/
├── .env
└── ...
```

---

### 🚀 Step-by-Step Setup

---

### 1. **Create Laravel 12 project**

```bash
composer create-project laravel/laravel ai-backend
cd ai-backend
```

---

### 2. **Set up PostgreSQL in `.env`**

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=ai_backend
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

---

### 3. **Install Inertia + Vue 3**

```bash
composer require inertiajs/inertia-laravel
php artisan inertia:middleware
npm install vue@^3 @inertiajs/inertia @inertiajs/inertia-vue3
```

Update `resources/js/app.js`:

```js
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

createInertiaApp({
  resolve: name => require(`./Pages/${name}.vue`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
```

---

### 4. **Create Lead model & migration**

```bash
php artisan make:model Lead -m
```

Update migration:

```php
$table->id();
$table->string('name');
$table->string('phone');
$table->string('status')->default('pending');
$table->timestamps();
```

```bash
php artisan migrate
```

---

### 5. **Create Controller + Form Request + Resource**

```bash
php artisan make:controller LeadController
php artisan make:request StoreLeadRequest
php artisan make:resource LeadResource
```

#### `StoreLeadRequest.php`

```php
public function rules(): array {
    return [
        'name' => 'required|string',
        'phone' => 'required|string',
    ];
}
```

#### `LeadController.php`

```php
use App\Models\Lead;
use App\Http\Requests\StoreLeadRequest;
use App\Http\Resources\LeadResource;
use Inertia\Inertia;

class LeadController extends Controller
{
    public function index() {
        $leads = Lead::latest()->get();
        return Inertia::render('Leads', ['leads' => $leads]);
    }

    public function store(StoreLeadRequest $request) {
        $lead = Lead::create($request->validated());
        return redirect()->back()->with('success', 'Lead added');
    }

    public function apiIndex() {
        return LeadResource::collection(Lead::all());
    }
}
```

---

### 6. **Add Routes**

#### `routes/web.php`

```php
use App\Http\Controllers\LeadController;

Route::get('/leads', [LeadController::class, 'index']);
Route::post('/leads', [LeadController::class, 'store']);
```

#### `routes/api.php`

```php
use App\Http\Controllers\LeadController;

Route::get('/leads', [LeadController::class, 'apiIndex']);
```

---

### 7. **Vue Page (resources/js/Pages/Leads.vue)**

```vue
<template>
  <div class="p-4">
    <h1 class="text-xl mb-4">AI Leads</h1>
    <form @submit.prevent="submit">
      <input v-model="form.name" placeholder="Name" class="border p-1 mr-2" />
      <input v-model="form.phone" placeholder="Phone" class="border p-1 mr-2" />
      <button type="submit" class="bg-blue-500 text-white px-2 py-1">Add Lead</button>
    </form>

    <ul class="mt-4">
      <li v-for="lead in leads" :key="lead.id">
        {{ lead.name }} - {{ lead.phone }} ({{ lead.status }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useForm } from '@inertiajs/inertia-vue3'

const props = defineProps({ leads: Array })

const form = useForm({
  name: '',
  phone: '',
})

function submit() {
  form.post('/leads')
}
</script>
```

---

### 8. **Compile frontend**

```bash
npm install
npm run dev
```

---

### ✅ Result

* `http://localhost:8000/leads`: Inertia page with form + leads
* `http://localhost:8000/api/leads`: JSON API for external services (e.g., FastAPI)

