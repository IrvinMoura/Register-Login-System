import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="bg-secondary flex justify-between m-2 py-[1rem] px-[5rem] font-sans font-bold text-white border-none rounded-[5rem] items-center">
                <Link
                    to="/">
                    Logo
                </Link>
                <div className="flex gap-[2rem] items-center">
                    <Link
                        to="/">
                        Home
                    </Link>
                    <div className="flex gap-3">
                        <Link
                            to="/login"
                            className="bg-primary hover:bg-terciary py-2 px-5 rounded-[5rem]">
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="bg-primary hover:bg-terciary py-2 px-5 rounded-[5rem]">
                            Registrar
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
