import Image from "next/image";
import AuthForm from "./components/AuthForm";


export default function home() {
    return (
        <div
            className="
                flex
                min-h-full
                flex-col
                justify-center
                py-12
                sm:px-6
                lg:px-8
                bg-gray-100
            "
            style={{backgroundImage: "url(/images/fundo.png)"}}
        >
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    alt="Logo"
                    height="48"
                    width="48"
                    priority={true}
                    className="mx-auto w-auto"
                    src="/images/Simbolo_power_3.png"
                />
                <h2
                    className="
                        mt-6
                        text-center
                        text-3xl
                        font-bold
                        trancking-tight
                        text-green-500
                    "
                >
                    Faça login na sua conta Power!
                </h2>
            </div>
            <AuthForm/>
        </div>
    );
}
