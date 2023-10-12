import { Link } from "react-router-dom"

const Header = ()=>{
    return(
        <div className="bg-[#FBBF3B] h-16 mb-4">
            <div className="flex justify-between mx-auto px-5">
                <div className="flex items-center h-16 gap-5">
                    <img
                        height={30}
                        width={30}
                        src="/img/icons/Hamburger.svg"
                    />
                    <Link to="/">
                        <img
                            height={30}
                            width={95}
                            src="/img/logo.png"
                        />
                    </Link>
                </div>
                <div className="flex items-center h-16 gap-3">
                    <div className="bg-white h-[52px] w-[52px] rounded-full flex items-center justify-center">
                        <img
                            height={24}
                            width={24}
                            src="/img/icons/cup.svg"
                            // className="block mx-auto my-auto"
                        />
                    </div>
                    <div className="bg-white h-[52px] w-auto rounded-full flex items-center justify-center px-1 gap-1">
                        <div>
                            <img
                                height={46}
                                width={46}
                                src="/img/profile.png"
                                // className="block mx-auto my-auto"
                            />
                        </div>
                        <div className="flex flex-col pr-3">
                            <h2 className="m-0 p-0">Usman Zafar</h2>
                            <h5 className="m-0 p-0">usmanzafar089@gmail.com</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Header