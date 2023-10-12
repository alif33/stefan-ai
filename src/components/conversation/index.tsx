const Conversation = ()=>{
    return(
        <div className="flex">
            <div className="basis-1/12">
                <img
                    height={50}
                    width={50}
                    src="/img/icons/user.png"
                />
            </div>
            <div className="bg-white basis-11/12 p-3 rounded-lg shadow-sm">
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, cupiditate?</p>
                </div>
                <div className="flex gap-2 pt-5">
                    <img
                        height={24}
                        width={24}
                        className="cursor-pointer"
                        src="/img/icons/like.svg"
                    />
                    <img
                        height={24}
                        width={24}
                        className="cursor-pointer"
                        src="/img/icons/unlike.svg"
                    />
                    <img
                        height={24}
                        width={24}
                        className="cursor-pointer"
                        src="/img/icons/copy.svg"
                    />
                    <img
                        height={24}
                        width={24}
                        className="cursor-pointer"
                        src="/img/icons/share.svg"
                    />
                </div>
            </div>
        </div>
    )
}
export default Conversation