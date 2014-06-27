/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-06-24 13:34:59
 * @version $Id$
 */
(function(){
	$.fn.timer = function(iYear){
		var CID = "year";
		var myDate = new Date();
		var nYear = myDate.getFullYear();
		var nMonth = myDate.getMonth();
		var nDate = myDate.getDate();
		var nTime = myDate.getTime();//毫秒数
		var sTime="", sMonth="",sDay="",sYear="";
		
		var RemainTime = function(){
			var iMonth,iDay,iHour,iMinute,iSecond;
		    if (iTime>=nTime){
				iMonth = 11-nMonth;
				switch(nMonth){
					case 0:  iDay = 31-nDate;
					case 1:  iDay = 31-nDate;
					case 2: 
						if(nYear%400==0||(nYear%4==0&&nYear%100!=0)){
							 iDay = 29-nDate;
						}else{
							 iDay = 28-nDate;
						}
					case 3:  iDay = 30-nDate;
					case 4:  iDay = 31-nDate;
					case 5:  iDay = 30-nDate;
					case 6:  iDay = 31-nDate;
					case 7:  iDay = 31-nDate;
					case 8:  iDay = 30-nDate;
					case 9:  iDay = 31-nDate;
					case 10: iDay = 30-nDate;
					case 11: iDay = 31-nDate;
				}
		        iHour   = parseInt(((iTime-nTime)/3600000)%24);
		        iMinute = parseInt(((iTime-nTime)/60000)%60);
		        iSecond = parseInt((iTime-nTime)/1000%60);
				sYear   = iYear-nYear-1;
			    sMonth  = iMonth;
			    sDay    = iDay-1;
			    sHour   = (iHour<10)?"0"+iHour:iHour;
		        sMinute = (iMinute<10)?"0"+iMinute:iMinute;
		        sSecond = (iSecond<10)?"0"+iSecond:iSecond;

		    	if(sYear>0){
		    		sTime  = sYear+"年 ";
		    	}else{
					sTime = "";
				}
				if(sMonth>0){
		    		sTime += sMonth+"月 ";
		    	}else{
					sTime = "";
				}
				if(sDay>0){
			    	sTime += sDay+"天 ";
			    }else{
					sTime = "";
				}
				
				sTime += sHour+"小时 "+sMinute+"分钟 "+sSecond + "秒";

		        if(iTime==0){
		           clearTimeout(Account);
		           sTime="<span style='color:green'>时间到了！</span>";
		        }else{
		           Account = setTimeout(RemainTime,1000);
		        }
		        iTime=iTime-1000;
		    }else{
		        sTime="<span style='color:red'>您设置的时间已经过期！</span>";
		    }
			$("#"+CID).html(sTime);
		}
		if(CID != null){
		    var iTime = Date.parse('Jan 1, '+iYear);
		    var Account;
			RemainTime();
		}
	}
})(jQuery);