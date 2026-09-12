export default function Login() {

    return (
        <main>
            <h1>Iniciar sesión</h1>

            <form>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                />

                <button>
                    Ingresar
                </button>
            </form>
        </main>
    )
}