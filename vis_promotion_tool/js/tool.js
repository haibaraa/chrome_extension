$(function(){
    $('#btn').click(function(){
        var originParam = $('#originParam').val();
        var errorMsg = $('#errorMsg').val();
        if (!originParam) {
            alert("请输入“批量报名供应商SKU ID”!");
            return;
        }
        if (!errorMsg) {
            alert("请输入“页面提示错误”!");
            return;
        }

        var paramList = originParam.split("\n");
        var errorList = errorMsg.replace(/第三方接口查不到商品信息.供应商SKU ID:/, "").split(",");
        var resultList = [];
        for (var i = 0; i < paramList.length; i++) {
            if($.inArray(paramList[i], errorList) === -1){
                resultList.push(paramList[i]);
            }
        }

        if (resultList.length === 0 ) {
            alert("没有可用的供应商SKU ID！");
        } else {
            $('#result').val(resultList.join("\n"));
        }
    });
})