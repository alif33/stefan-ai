import { Link } from "react-router-dom"

const Item = ()=>{
    return(
        <li className="my-2">
            <Link className="flex gap-2" to={"/c/dsf567"}>
                <img
                    height={24}
                    width={24}
                    src="/img/icons/message.svg"
                    alt="message icon"
                />
                <h5 className="text-[#52525B] text-sm font-normal">Mowgli Baloo's best ...</h5>
            </Link>
        </li>
    )
}
export default Item