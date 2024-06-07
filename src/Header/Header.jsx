function Header() {
    return (
        <>
            <div className="bg-[red] flex justify-between py-[1rem] px-[5rem]">
                <a href="/">Logo</a>
                <div className="flex gap-[3rem] ">
                    <a href="/">Home</a>
                    <a href="/">Login</a>
                    <a href="/">Registar</a>
                </div>
            </div>
        </>
    )
}

export default Header
