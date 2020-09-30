const QueryUserinvInfo = require('./CurrentUserinvFun.js');

const WeatherInfo = require('../modules/weatherAPI/weatherAPI.js');

module.exports = function UserInvQuery(userid) {
    return QueryUserinvInfo(userid).then(function(result){
        // console.log("GettingInvData: " + JSON.stringify(result) + " " + typeof result);
        let ItemInfo = result
        return WeatherInfo().then(function(result){
                console.log("GettingWeathData: " + JSON.stringify(result) + " " + typeof result);
                console.log("GettingInvData: " + JSON.stringify(ItemInfo) + " " + typeof ItemInfo);
                let WeatherInfo = result

                let ItemList = []
                
                for (let inx = 0; inx < ItemInfo.length; inx++) {
                        var temp = WeatherInfo.temp - ItemInfo[inx].item.idealtemp
                        Ntemp = (((temp) - -10)/(40 - -10)) + 1
                        // console.log(WeatherInfo.temp + " " + ItemInfo[0].item.idealtemp + " " + temp + " " + Ntemp)
        
                        function HourFun(hour) {
                            return (hour >= 21 && hour <= 24 || hour >= 00 && hour <= 03) ? 0 
                            : (hour >= 04 && hour <= 06) ? 1
                            : (hour >= 07 && hour <= 09) ? 2
                            : (hour >= 10 && hour <= 12) ? 3
                            : (hour >= 13 && hour <= 15) ? 4
                            : (hour >= 16 && hour <= 18) ? 5
                            : 6
                        };
        
                        var hour = HourFun(WeatherInfo.hour) - HourFun(ItemInfo[inx].item.idealtod)
                        Nhour = (((hour) - 0)/(0 - 6)) + 1
                        // console.log(HourFun(WeatherInfo.hour) + " " + HourFun(ItemInfo[0].item.idealtod) + " " + hour + " " + Nhour)
        
                        var weather = HourFun(WeatherInfo.weather) - HourFun(ItemInfo[inx].item.idealweather)
                        Nweather = (((weather) - 0)/(0 - 4)) + 1
                        // console.log(HourFun(WeatherInfo.weather) + " " + HourFun(ItemInfo[0].item.idealweather) + " " + weather + " " + Nweather);
        
                        var Total = Math.round((Ntemp + Nhour + Nweather) /3 * 100) / 100
                        // console.log(Total * 100)

                        let Pers = Total

                        if (Total < 1) {
                            Pers = Math.round((1 - Total) * 100) / 100
                        }
        
                        var ModCost = Math.round((ItemInfo[inx].item.cost * Total) * 100) / 100
        
                        Item = {
                            Amount: ItemInfo[inx].amount,    
                            name: ItemInfo[inx].item.item_name,
                            owner: ItemInfo[inx].user.user_name,
                            cost: ItemInfo[inx].item.cost,
                            MODcost: ModCost,
                            costPer: Pers,
                            popularity: ItemInfo[inx].item.popularity,
                            image: ItemInfo[inx].item.item_image
                        }

                        ItemList.push(Item)
                }

                console.log(ItemList)
                return ItemList
            })
    });
}