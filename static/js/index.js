"use strict";

var htmlhtml = "";
for (var i in arrs) {
  var item = arrs[i];
  if (item.text == "办公室装修") {
    htmlhtml += "\n          <div class=\"lf\" style=\"width:14%; padding-left:1%;float:left;height:180px;\">\n              <h3><a style=\"color:black;\" href=\"product.html?type1=" + item.text + "\">" + item.text + "</a></h3>\n          ";
  } else {
    htmlhtml += "\n          <div class=\"lf\" style=\"width:14%; padding-left:1%;border-left:1px solid black;float:left;height:180px;\">\n              <h3><a style=\"color:black;\" href=\"product.html?type1=" + item.text + "\">" + item.text + "</a></h3>\n          ";
  }

  for (var _j in item.children) {
    var child = item.children[_j];
    htmlhtml += "<a style=\"float:left;width:49%;padding:10px 0px;\" href=\"product.html?type1=" + item.text + "&type2=" + child + "\">" + child + "</a>";
  }
  htmlhtml += "</div>";
}

$("#itemList").html(htmlhtml);

var html = "      <div class=\"nr_top\">\n    <b>\u6770\u5320\u88C5\u9970 \xB7\n      <em>\u516C\u88C5\u5185\u5BB9</em>\n    </b>\n  </div>";
for (var i = 0; i < arrs.length; i++) {
  console.log(arrs[i]);
  if (!isPc && i > 2) {
    break;
  }
  var float = "fl";

  if (i % 2 != 0) {
    float = "fr";
  }
  html += "\n  <div class=\"nr01 " + float + "\">\n    <div class=\"nr01-top\">\n      <strong>" + arrs[i].text + "</strong>\n    </div>\n    <p>" + arrs[i].desc + " </p>\n\n    <a href=\"product.html?type1=" + arrs[i].text + "\" title=\"\u67E5\u770B\u8BE6\u60C5\" target=\"_blank\" rel=\"nofollow\">&gt;&gt;\u67E5\u770B\u8BE6\u60C5</a>\n   \n    <span>\n      <i>\n        <a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=3292757596&site=qq&menu=yes\" title=\"\u5728\u7EBF\u54A8\u8BE2\" rel=\"nofollow\">\n          \u5728\u7EBF\u54A8\u8BE2\n        </a>\n      </i>\n      <em>\u54A8\u8BE2\u70ED\u7EBF\uFF1A\n        <a id=\"phones2\" href=\"tel:0771-3925356\">0771-3925356</a>\n      </em>\n    </span>\n  </div>\n  <div class=\"nr02 " + float + "\">\n    <p class=\"clearfix\">";
  for (var j = 0; j < arrs[i].children.length; j++) {
    html += "\n      <a  href=\"product.html?type1=" + arrs[i].text + "&type2=" + arrs[i].children[j] + "\" target=\"_blank\" title=\"" + arrs[i].children[j] + "\" rel=\"nofollow\">" + arrs[i].children[j] + "</a>\n      ";
  }
  if (isPc) {
    html += "\n      </p>\n      <!-- banner\u8F6E\u64AD\u7EC4\u4EF6 -->\n      <div class=\"banner\">\n        <div id=\"carousel-example" + i + "-generic\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"3000\">\n          <!-- \u56FE\u7247\u7EC4\u4EF6 -->\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"item active\">\n              <img src=\"https://jiejiangs-1253930943.file.myqcloud.com/images/" + arrs[i].image + "\" alt=\"1 slide\" style=\"height:350px\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    ";
  } else {
    html += "\n      </p>\n      ";
    var type1 = arrs[i].text;
    var k = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = demos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var demoItem = _step.value;

        if (demoItem.type1 == type1) {
          k++;
          if (k <= 4) {
            html += "\n              <a class=\"mobile_demo_parent\" href=\"./product.html?type1=" + demoItem.type1 + "&type2=" + demoItem.type2 + "&title=" + demoItem.title + "\">\n                <img class=\"mobile_demo_img\"  src=\"" + demoItem.image + "\">  \n                <span class=\"mobile_demo_span\" >" + demoItem.title + "</span>\n              </a>\n            ";
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
}

$("#itemList2").html(html);