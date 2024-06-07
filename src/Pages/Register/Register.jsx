import { Link } from "react-router-dom"
import Header from "../../Header/Header"

function Register() {
    return (
        <>
            <Header />
            <div className="h-[20rem] flex items-center justify-center">
                <div className="flex flex-col gap-3 items-center justify-center p-2 border-secondary border-[2px] rounded-[1rem]">
                    <input placeholder="Nome" className="border w-[13rem] p-2 rounded-[2rem] outline-secondary"></input>
                    <input placeholder="Email" className="border w-[13rem] p-2 rounded-[2rem] outline-secondary"></input>
                    <input placeholder="Senha" className="border w-[13rem] p-2 rounded-[2rem] outline-secondary"></input>
                    <input placeholder="Confirme a senha" className="border w-[13rem] p-2 rounded-[2rem] outline-secondary"></input>

                    <div className="flex gap-2">
                        <button className="bg-primary hover:bg-secondary hover:duration-500 border-none p-2 px-4 rounded-[2rem] text-white"> Registrar </button>
                        <Link to="/login" className="bg-primary hover:bg-secondary hover:duration-500 border-none p-2 px-4 rounded-[2rem] text-white"> Ja tenho uma conta </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
