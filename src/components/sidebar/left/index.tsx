import { Link } from "react-router-dom"
import Item from "./Item"

const Left = ()=>{
    return(
        <div className="h-[calc(100vh-4rem)] col-span-2">
          <div className="h-12">
            <Link to="/new-chat" className="w-32 flex bg-[#F5F5F5] rounded-full py-2 px-2 mt-2 gap-1">
              <img
                height={22}
                width={22}
                src="/img/icons/plus.svg"
              />
              <h3>New chat</h3>
            </Link>
          </div>
          <div className="h-[calc(100vh-7rem)] overflow-y-scroll">
            <h2>Recent</h2>
            <ul>
              {
                  [0,1,2,3,4,5,6,7,8,9,10].map((item)=> <Item
                      key={item}
                  />)
              }
            </ul>
          </div>
        </div>
    )
}
export default Left