import { ModeToggle } from "../darkMode/modeToggle"
const Header = () => {
    return (
        <>
            <header className="w-full text-center py-5 border-b flex justify-center items-center">
                <h1 className="text-4xl font-medium font-montserrat hover:cursor-pointer w-2/3" onClick={() => window.location.href = '/'}>
                    Short URL
                </h1>
                <ModeToggle/>
            </header>
        </>
    )
}

export default Header