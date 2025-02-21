export default function Login() {
    return (
        <div className="container min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm space-y-6">
                <h1 className="text-2xl font-semibold text-center">Bienvenido de nuevo</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input className="w-full px-3 py-2 border rounded-md" type="email" placeholder="nombre@ejemplo.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Contraseña</label>
                        <input className="w-full px-3 py-2 border rounded-md" type="password" placeholder="********" />
                    </div>
                    <button className="w-full py-2 text-white bg-orange-500 rounded-md">Iniciar sesión</button>
                </form>
                <div className="text-center text-sm">
                    ¿No tienes una cuenta? <a href="auth//register" className="text-orange-500">Regístrate</a>
                </div>
            </div>
        </div>
    );
}