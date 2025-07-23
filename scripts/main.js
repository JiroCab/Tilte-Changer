
Events.on(ClientLoadEvent, () => {
	Core.graphics.setTitle(
		//Just edit this if you need it to be something else lol
		"Mindustry - " + Vars.player.name
	);
});