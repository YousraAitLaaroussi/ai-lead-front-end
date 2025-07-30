
## ✅ **Laravel 12 Learning Roadmap** (for PHP devs joining your AI backend project)

### 🎯 Goal

Get your team ready to:

- Build and maintain **REST APIs** and **Inertia-based UI**
    
- Connect with **Vue.js 3**
    
- Use **PostgreSQL** with Eloquent ORM
    
- Integrate with your **AI call system** logic
    

---

## 🗓️ **Day-by-Day Guide**

---

### 🧭 **Day 1: Laravel Basics + Setup**

**Objective**: Understand Laravel's structure and install a fresh project.

#### Topics:

- What is Laravel (framework philosophy)?
    
- Project structure: `routes/`, `app/`, `resources/`, `database/`
    
- Install Laravel 12:
    

```bash
composer create-project laravel/laravel my-app
```

- Set up PostgreSQL `.env`:
    

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=ai_backend
DB_USERNAME=your_user
DB_PASSWORD=your_pass
```

- Artisan CLI basics: `php artisan`, `php artisan serve`
    

✅ **Practice**: Create a basic welcome route and Blade view.

---

### 🚦 **Day 2: Routing + Controllers + REST API**

**Objective**: Build REST APIs with controllers and routes.

#### Topics:

- `routes/api.php` vs `routes/web.php`
    
- Basic route example (GET, POST, PUT, DELETE)
    
- Creating controllers:
    

```bash
php artisan make:controller LeadController
```

- Returning JSON response:
    

```php
return response()->json(['message' => 'Hello AI']);
```

✅ **Practice**: Build CRUD routes for a `Lead` model using REST in `api.php`.

---

### 🏗️ **Day 3: Models + Migrations + Eloquent ORM**

**Objective**: Store and retrieve data using PostgreSQL and Eloquent.

#### Topics:

- Create a model and migration:
    

```bash
php artisan make:model Lead -m
```

- Eloquent basics: `Lead::all()`, `Lead::find($id)`, `$lead->save()`
    
- Migrate DB:
    

```bash
php artisan migrate
```

✅ **Practice**: Build `leads` table with fields: name, phone, status, and connect it to controller logic.

---

### 💡 **Day 4: Request Validation + Resources**

**Objective**: Secure input and return clean API responses.

#### Topics:

- Validate incoming requests with `FormRequest` or inline `$request->validate([...])`
    
- Use API Resources:
    

```bash
php artisan make:resource LeadResource
```

- Return structured data:
    

```php
return new LeadResource($lead);
```

✅ **Practice**: Protect your POST/PUT APIs with validation and return resources.

---

### ⚡ **Day 5: Inertia.js + Vue.js Integration**

**Objective**: Add client-side rendering using Inertia.js and Vue 3.

#### Topics:

- Install Inertia.js + Vue.js:
    

```bash
composer require inertiajs/inertia-laravel
npm install @inertiajs/inertia @inertiajs/inertia-vue3 vue@^3
```

- Set up Inertia middleware
    
- Create Inertia page (e.g., `resources/js/Pages/Dashboard.vue`)
    
- Use `Inertia::render('Dashboard')` in a controller
    

✅ **Practice**: Build a basic dashboard that shows list of leads using Inertia + Vue.

---

### 🔐 **Day 6: Auth (Optional if your app has users)**

**Objective**: Add authentication with Laravel Breeze or Sanctum (API-based).

- Install Laravel Breeze (Inertia + Vue):
    

```bash
composer require laravel/breeze --dev
php artisan breeze:install vue
npm install && npm run dev
php artisan migrate
```

✅ **Practice**: Add login/logout and protect a page or route.

---

### 🧠 **Day 7: Connect AI Call Logic + APIs**

**Objective**: Make your Laravel backend work with your AI logic.

#### Topics:

- Accept incoming webhook requests (e.g., from FastAPI)
    
- Store call logs, intents, or transcriptions
    
- Serve API data to Vue.js or external services
    

✅ **Practice**:

- Build endpoint `/api/calls`
    
- Accept POST from FastAPI
    
- Save call session info
    
- View call history in Vue (via Inertia)
    

---

## 🧰 Tools They’ll Use

- `php artisan` for commands
    
- `composer` for dependencies
    
- `PostgreSQL` for DB
    
- `npm run dev` for frontend (Vite)
    
- Postman or Thunder Client for API testing
    
