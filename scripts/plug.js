var dom=document.querySelector("#container");
var myChart = echarts.init(dom);

var Goods={};
var option = {
    title: {
        left: 'center',
        text: '',
    },
    xAxis: {
        type: 'category',
        data: []
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [],
        type: 'line'
    }]
};

var MyinitialGoods=function(number, sender){
    initialGoods(number, sender);
    CollectData();
} 
 
var CollectData=function(){
    var tbody=document.querySelector("#blackMarket tbody");
    Array.from(tbody.children).forEach(function(item){
        var name=item.children[0].textContent;
        var value=item.children[1].textContent;
        if(!(Goods[name]))Goods[name]=[];
        Goods[name].push(value);

        item.onclick=function(){
            console.log("触发"+name);
            SetChart(name);
        }
    });
}

var BuildArr=function(index){
    var arr=[];
    for(var i=0;i<index;i++){
        arr.push(i);
    }
    return arr;
}

var SetChart=function(name){
    option.series[0].data=Goods[name];
    option.xAxis.data=BuildArr(Goods[name].length);
    option.title.text=name;
    myChart.setOption(option, true);
}
