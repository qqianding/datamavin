function recursion (){
        var o = myData.data;
        function process(key,value) {
            //var str='';
            //str += "<p>"+key + " : " + value + "</p>";
            //$('.test2').append(str);
            var str1 = [],
                str2 = [];
            str1.push(key,value);
            console.log('str1:'+str1);

            for(x in str1){
                document.getElementById('test').innerHTML+=str1[x].count+'<br />';
            }
        }
        console.log(o);


        function traverse(o,func) {
            for (i in o) {
                func.apply(this,[i,o[i]]);      
                if (typeof(o[i])=="object") {
                    //递归
                    traverse(o[i],func);
                }
            }
        }
        traverse(o, process);
 }