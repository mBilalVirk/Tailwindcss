## Today we Will Start the tailwindcss

To install Tailwind CSS in your Vite project, follow these steps:

### 1. Install Tailwind CSS:

First, navigate to your project directory and run the following command to install Tailwind CSS along with its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

### 2. Generate Tailwind configuration files:

Next, create the `tailwind.config.js` and `postcss.config.js` files by running:

```bash
npx tailwindcss init -p
```

This will generate two configuration files:

- `tailwind.config.js`
- `postcss.config.js`

### 3. Configure the `tailwind.config.js` file:

In your `tailwind.config.js` file, specify the paths to all of your template files so Tailwind can tree-shake unused styles:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Add paths to your files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 4. Create Tailwind CSS file:

In your `src` directory, create a CSS file (e.g., `src/index.css`) and add the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Import the CSS file in your project:

In your main `index.jsx`, `App.jsx`, or any entry file, import the Tailwind CSS file:

```js
import "./index.css";
```

### 6. Start your Vite development server:

Finally, run the Vite development server:

```bash
npm run dev
```

Tailwind CSS should now be working in your Vite project! You can start using Tailwind classes in your components.

You can also check it on
https://tailwindcss.com/docs/installation

For Color:
https://tailwindcss.com/docs/customizing-colors

To add authentication to your React (Vite) and Laravel backend project, you can use Laravel's built-in authentication system with API tokens (e.g., Sanctum or JWT) and manage the authentication flow in your React frontend.

I'll walk you through how to implement authentication using **Laravel Sanctum** for token-based authentication and manage it on the React side.

### Steps to Implement Authentication with Laravel Sanctum and React

---

### **Backend (Laravel) Setup**

#### Step 1: Install Laravel Sanctum

You’ll need to install Laravel Sanctum in your Laravel app to handle authentication.

1. Install Sanctum via Composer:

   ```bash
   composer require laravel/sanctum
   ```

2. Publish the Sanctum configuration:

   ```bash
   php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
   ```

3. Run the migration to create the necessary tables:

   ```bash
   php artisan migrate
   ```

4. In `config/sanctum.php`, if you're building a SPA (Single Page Application) with the frontend and backend on different domains, ensure that `stateful` domains are configured properly:

   ```php
   'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 'localhost,127.0.0.1:8000,127.0.0.1')),
   ```

5. Enable Sanctum middleware in `config/cors.php`:

   ```php
   'supports_credentials' => true,
   ```

6. Add Sanctum's middleware in `app/Http/Kernel.php` to the API group:

   ```php
   'api' => [
       \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
       'throttle:api',
       \Illuminate\Routing\Middleware\SubstituteBindings::class,
   ],
   ```

#### Step 2: Set Up Authentication Routes

Laravel provides built-in login, registration, and logout features. Let’s define some API routes for authentication.

In `routes/api.php`:

```php
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Example protected route
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
```

#### Step 3: Create the `AuthController`

In `app/Http/Controllers/AuthController.php`, you can create the register, login, and logout functionality.

```php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['message' => 'User registered successfully']);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['token' => $token]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }
}
```

---

### **Frontend (React) Setup**

#### Step 4: Create Authentication Context

We will use the React context API to manage the authentication state across the app.

1. Create a `context/AuthContext.js` file:

```jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      getUser();
    }
  }, [token]);

  const getUser = async () => {
    try {
      const response = await axios.get("/api/user");
      setUser(response.data);
    } catch (error) {
      setUser(null);
    }
  };

  const login = async (email, password) => {
    const response = await axios.post("/api/login", { email, password });
    const token = response.data.token;
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = async () => {
    await axios.post("/api/logout");
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
```

#### Step 5: Protect Routes Based on Authentication

You can protect routes by checking if a user is authenticated before allowing access to certain components.

1. Wrap your app with the `AuthProvider` in `App.jsx`:

```jsx
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
```

2. Create a `PrivateRoute` component to guard your protected routes:

```jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
```

#### Step 6: Create the Login Component

Here’s an example of a login form that connects to the backend:

```jsx
import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
```

---

### **Handling Authentication Flow**

1. **Login:** When a user logs in, the React app sends a request to the Laravel API, which authenticates the user and returns a token.
2. **Authenticated Routes:** Use `PrivateRoute` to ensure only authenticated users can access certain routes like a dashboard.
3. **Logout:** The logout button will send a request to the Laravel API to invalidate the token and remove it from local storage on the client-side.

By using Sanctum on the backend and managing tokens on the React frontend, you can build a secure and flexible authentication system.
