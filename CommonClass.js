function requestMethod(par1,par2,par3,callback) {
//创建请求对象xhr
    var xhr = new XMLHttpRequest();
//建立与服务器的连接
    xhr.open(par1,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+par2);
//设置头信息，让数据以表单形式传递给服务器
    xhr. setRequestHeader("content-type"," application/x-www-form-urlencoded");
//第三步发送请求
    xhr. send (par3) ;
//第四步接受服务器端返回的数据
    xhr. onreadystatechange=function ( ) {
        //xhr. readyState==4代表ajax数据请求完成
        //xhr. status==200表示数据成功返回
        if (xhr. readyState==4&xhr.status==200) {
            //responseText中包含了服务端返回的数据
            var res=JSON.parse(xhr.responseText);
            var str =res.data;
            callback (str) ;
        }
    }


}