import {} from "./telegram-web-app.js";
function legacyCopy(value) {
    const ta = document.createElement('textarea')
    ta.value = value ?? ''
    ta.style.position = 'absolute'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    ta.remove()
  }
  



const scriptsInEvents = {

	async Gamecode_Event3_Act5(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			Telegram.WebApp.ready();
			window.Telegram.WebApp.enableClosingConfirmation();
		}
	},

	async Gamecode_Event91_Act2(runtime, localVars)
	{
		runtime.callFunction("SaveData");
	},

	async Gamecode_Event160_Act1(runtime, localVars)
	{
 legacyCopy(`https://t.me/share/url?url=https://t.me/frognutbot?startapp=${ runtime.globalVars.User_ID }&text=💰Catizen: Unleash, Play, Earn - Where Every Game Leads to an Airdrop Adventure!🎁Let's play-to-earn airdrop right now!`);
	},

	async Loadingcode_Event57_Act31(runtime, localVars)
	{
		const LastTime = new Date(runtime.globalVars.LastTime);
		const CurrentTime = new Date(runtime.globalVars.CurrentTime);
		
		const timeDiffer = CurrentTime.getTime() - LastTime.getTime();
		let timeDiffInSeconds = Math.floor(timeDiffer / 1000);
		
		console.log("TimeDifference----------------->", timeDiffInSeconds);
		
		const interval_sum = runtime.globalVars.B1Value + runtime.globalVars.B2Value + runtime.globalVars.B3Value + runtime.globalVars.B4Value + runtime.globalVars.B5Value + runtime.globalVars.B6Value + runtime.globalVars.B7Value + runtime.globalVars.B8Value + runtime.globalVars.B9Value;
		
		if(timeDiffInSeconds > 10800) timeDiffInSeconds = 10800;
		runtime.globalVars.FarmingValue = timeDiffInSeconds * interval_sum;
		
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

