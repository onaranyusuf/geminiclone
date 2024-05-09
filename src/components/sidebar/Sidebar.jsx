import { assets } from "../../assets/assets.js";
import { useContext, useState } from "react";
import { Context } from "../../context/Context.jsx";
const Sidebar = () => {
	const [extended, setExtended] = useState(false);
	const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

	const loadPreviousPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};
	return (
		<div className="min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-2 px-3 sidebarview sidebartrans">
			<div className="mt-4">
				<img
					src={assets.menu_icon}
					className="w-5 block ml-2 cursor-pointer"
					alt="menu-icon"
					onClick={() => {
						setExtended((prev) => !prev);
					}}
				/>
				<div className="mt-12 inline-flex items-center bg-gray-200 text-sm cursor-pointer gap-2.5 py-2.5 px-3.5 rounded-full" onClick={()=>{
                        newChat()
                    }} >
					<img className="w-4" src={assets.plus_icon} alt="" onClick={()=>{
                        newChat()
                    }} />
					{extended ? <p className="text-black font-medium">Yeni Sohbet</p> : null}
				</div>
				{extended ? (
					<div className="flex flex-col sideanimation">
						<p className="mt-8 mb-2 font-medium">En Son</p>
						{prevPrompts.map((item, index) => {
							return (
								<div onClick={()=>{
                                    loadPreviousPrompt(item)
                                }} className="flex p-1 pr-3 text-[#282828] cursor-pointer gap-2.5 rounded-full items-start hover:bg-[#e2e6eb]">
									<img className="w-5 mt-1" src={assets.message_icon} alt="" />
									<p className="">{item.slice(0, 18)}...</p>
								</div>
							);
						})}
					</div>
				) : null}
			</div>
			<div className="flex flex-col">
				<div className="pr-2 cursor-pointer flex p-1 text-[#282828] gap-2 rounded-full items-start hover:bg-[#e2e6eb] " style={{ marginTop: '-5px' }}>
					<img className="w-6" src={assets.question_icon} alt="" />
					{extended ? <p className="sideanimationhelp">Help</p> : null}
				</div>
				<div className="pr-2 cursor-pointer flex p-1 text-[#282828] gap-2 rounded-full items-start hover:bg-[#e2e6eb]">
					<img className="w-6" src={assets.history_icon} alt="" />
					{extended ? <p className="sideanimationhelp">Activity</p> : null}
				</div>
				<div className="pr-2 cursor-pointer flex p-1 text-[#282828] gap-2 rounded-full items-start hover:bg-[#e2e6eb]">
					<img className="w-6" src={assets.setting_icon} alt="" />
					{extended ? <p className="sideanimationhelp">Settings</p> : null}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;