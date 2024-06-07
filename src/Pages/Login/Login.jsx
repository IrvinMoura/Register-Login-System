import Header from "../../Header/Header"

function Login() {
    return (
        <>
            <Header />
            <div className="h-[20rem] flex items-center justify-center">
                <div className="flex flex-col gap-3 items-center justify-center p-2 border-secondary border-[2px] rounded-[1rem]">
                    <input placeholder="Email" className="border w-[13rem] p-2 rounded-[2rem]"></input>
                    <input placeholder="Senha" className="border w-[13rem] p-2 rounded-[2rem]"></input>
                    <button className="bg-primary hover:bg-secondary hover:duration-500 border-none p-2 px-4 rounded-[2rem] text-white"> Login </button>
                </div>
            </div>
        </>
    )
}

export default Login
