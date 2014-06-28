var hangyeNum = {
    '001':'服饰鞋包',
    '002':'3C数码',
    '003':'生活服务',
    '004':'游戏/话费',
    '005':'食品/保健',
    '006':'母婴',
    '007':'家装家饰',
    '008':'美容护理',
    '009':'家居用品',
    '010':'珠宝/配饰',
    '011':'运动/户外',
    '012':'汽车配件',
    '013':'玩乐/收藏',
    '014':'书籍音像',
    '015':'服务市场',
    '016':'其它行业',
    '017':'淘宝新行业',
    '018':'近期无经营',
    '099':'未知'
};
var shengfenNum = {
  '01':'北京',
  '02':'天津',
  '03':'上海',
  '04':'重庆',
  '05':'河北',
  '06':'河南',
  '07':'云南',
  '08':'辽宁',
  '09':'黑龙江',
  '10':'湖南',
  "11":'安徽',
  '12':'山东',
  '13':'新疆',
  '14':'江苏',
  '15':'浙江',
  '16':'江西',
  '17':'湖北',
  '18':'广西',
  '19':'甘肃',
  '20':'山西',
  '21':'内蒙古',
  '22':'陕西',
  '23':'吉林',
  '24':'福建',
  '25':'贵州',
  '26':'广东',
  '27':'青海',
  '28':'西藏',
  '29':'四川',
  '30':'宁夏',
  '31':'海南',
  '32':'台湾',
  '33':'香港',
  '34':'澳门',
  '88':'海外',
  '99':'未知'
}

var = categorystat {
  'shopnumdict_percent':'商家数百分比',
  'totalsalesdict_percent':'销售额百分比',
  'salesnumdict':'销量',
  'totalsalesdict':'销售额',
  'salesnumdict_percent':'销量百分比',
  'shopnumdict':'商家数',

}
var DSRcode = {
  'dsr_fh_com_trend':'行业发货平均',
  'dsr_zl_trend':'本店质量',
  'dsr_fh_trend':'本店发货',
  'dsr_fw_com_trend':'行业服务平均',
  'dsr_zl_com_trend':'行业质量平均',
  'dsr_fw_trend':'本店服务平均'
}
var fw30code = {
  'punish_trend_com':'行业处罚率平均',
  'refund_com_trend':'行业退货率平均',
  'punish_trend':'本店处罚率',
  'dispute_trend':'本店投诉率',
  'refund_trend':'本店退货率',
  'dispute_com_trend':'行业投诉率平均'
}
var shopTrendOther = {
  'startrend':'星级',
  'salesnum_trend':'商品销量',
  'totalsales_trend':'销售额'
}

var apiURL = 'http://api.datamavin.com/',
    key = '1cbeff468a9faaf5f5c21edddd5783c2d4017211';
//tab 选项卡 支持 锚点
    function resetTabs(){
        $("#content > div").hide(); //隐藏所有内容
        $("#tabs a").attr("id",""); // id重置     
    }

    var myUrl = window.location.href; //获取当前连接
    var myUrlTab = myUrl.substring(myUrl.indexOf("#")); // 本地主机锚点
    var myUrlTabName = myUrlTab.substring(0,4); //对于上面例子 myUrlTabName=＃标签

    (function(){
        $("#content > div").hide(); // 起初隐藏内容
        $("#tabs li:first a").attr("id","current"); // 默认第一个选项卡
        $("#content > div:first").fadeIn(); // 显示第一个选项卡内容
        
        $("#tabs a").on("click",function(e) {
            e.preventDefault();
            if ($(this).attr("id") == "current"){ //检测当前标签页#锚点
             return       
            }
            else{             
            resetTabs();
            $(this).attr("id","current"); // 激活
            $($(this).attr('name')).fadeIn(); // 显示内容为当前选项卡
            }
        });

        for (i = 1; i <= $("#tabs li").length; i++) {
          if (myUrlTab == myUrlTabName + i) {
              resetTabs();
              $("a[name='"+myUrlTab+"']").attr("id","current"); // 启动url#锚点
              $(myUrlTab).fadeIn(); // 显示锚点内容
          }
        }
    })()