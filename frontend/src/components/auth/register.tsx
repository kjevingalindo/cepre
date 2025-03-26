"use client"
import Link from "next/link"
import TypingText from "./text-login"

export default function Register() {
    return (
        <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-orange-500" />
                <div className="relative z-20 mt-auto">
                    <TypingText />
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-3xl font-semibold tracking-tight">Crear una cuenta</h1>
                        <p className="text-muted-foreground">Regístrate para comenzar</p>
                    </div>
                    <div className="grid gap-6">
                        <button className="w-full flex items-center justify-center border border-gray-300 rounded-md p-3 text-sm font-medium hover:bg-orange-200">
                            <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                                <path
                                    fill="currentColor"
                                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                />
                            </svg>
                            Registrarse con Google
                        </button>
                        <div className=" text-center text-lg">
                            ¿Ya tienes una cuenta?{" "}
                            <Link href="/auth/login" className="text-orange-500 hover:underline font-semibold">
                                Iniciar sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
