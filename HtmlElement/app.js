var HtmlElement_ = /** @class */ (function () {
    function HtmlElement_(name, closing, textCon) {
        this.tagName = name;
        this.selfClosingTag = closing;
        this.textContent = textCon;
        this.attributes = new Array();
        this.style = new Array();
        this.nestedTags = new Array();
    }
    HtmlElement_.prototype.setAttributte = function (atrName, val) {
        var x = " " + atrName + "=" + '"' + val + '";';
        this.attributes.push(x);
    };
    HtmlElement_.prototype.setStyle = function (styleName, val) {
        var x = styleName + ':' + val + ';';
        this.style.push(x);
    };
    HtmlElement_.prototype.addItemEnd = function (addElmentEnd) {
        this.nestedTags.unshift(addElmentEnd);
    };
    HtmlElement_.prototype.addItemBegin = function (addElmentBegin) {
        this.nestedTags.push(addElmentBegin);
    };
    HtmlElement_.prototype.getHTML = function () {
        var str;
        var style = ' style="';
        var attributes = " ";
        var st = "";
        var st1 = "";
        for (var i = 0; i < this.nestedTags.length; i++) {
            if (this.nestedTags[i].nestedTags.length == 0) {
                if (this.nestedTags[i].style.length > 0)
                    for (var j = 0; j < this.nestedTags[i].style.length; j++) {
                        if (style == "")
                            style = ' style="';
                        style += this.nestedTags[i].style[j];
                        style += " ";
                        if (j == this.nestedTags[i].style.length - 1)
                            style += '"';
                    }
                else {
                    style = "";
                }
                if (this.nestedTags[i].attributes.length > 0)
                    for (var k = 0; k < this.nestedTags[i].attributes.length; k++) {
                        attributes += this.nestedTags[i].attributes[k];
                        attributes += " ";
                    }
                else {
                    attributes = "";
                }
                if (this.selfClosingTag == true) {
                    str = '<' + this.nestedTags[i].tagName + style + attributes + '>' + this.nestedTags[i].textContent + '>';
                }
                else {
                    str = '<' + this.nestedTags[i].tagName + style + attributes + '>' + this.nestedTags[i].textContent + '</' + this.nestedTags[i].tagName + '>';
                }
                attributes = "";
                style = "";
                st += str;
            }
            else {
                st1 = this.nestedTags[i].getHTML();
                st += st1;
            }
        }
        if (this.style.length > 0)
            for (var j = 0; j < this.style.length; j++) {
                if (style == "")
                    style = ' style="';
                style += this.style[j];
                style += " ";
                if (j == this.style.length - 1)
                    style += '"';
            }
        else {
            style = "";
        }
        if (this.attributes.length > 0)
            for (var k = 0; k < this.attributes.length; k++) {
                attributes += this.attributes[k];
                attributes += " ";
            }
        if (this.selfClosingTag == true) {
            str = '<' + this.tagName + style + attributes + '>' + this.textContent + st + '>';
        }
        else {
            str = '<' + this.tagName + " " + style + attributes + '>' + this.textContent + st + '</' + this.tagName + '>';
        }
        return str;
    };
    return HtmlElement_;
}());
var p1 = new HtmlElement_("p", false, "Lorem Ipsum is fish text often used in print and web design. Lorem Ipsum has been the standard \"fish\" for Latin texts\nsince the early 16th century. At the time, an unnamed printer created a collection of large font sizes and shapes using Lorem Ipsum to print samples. Lorem Ipsum not only\nsuccessfully survived five centuries without disturbance, but also stepped into electronic design. Its popularization in modern times has been the release of Letraset sheets\nwith samples of Lorem Ipsum in the 60s functions and, more recently, electronic typesetting such as Aldus PageMaker, in the templates of which Lorem Ipsum programs were used.");
var div1 = new HtmlElement_("div", false, "");
var div2 = new HtmlElement_("div", false, "");
var div3 = new HtmlElement_("div", false, "");
var p2 = new HtmlElement_("p", false, "2");
var h3 = new HtmlElement_("h3", false, "What is Lorem Ipsum?");
var img = new HtmlElement_("img", false, "");
var a1 = new HtmlElement_("a", true, "More...");
p1.setStyle("text-align", "jastify");
p1.setStyle("margin", "20px");
h3.setStyle("margin", "30px");
div1.setStyle("display", "flex");
div1.setStyle("margin", "100px");
div1.setAttributte("id", "wrapper");
div2.setAttributte("class", "table");
div3.setAttributte("class", "table");
div2.setStyle("width", "300px");
div2.setStyle("margin", "10px");
img.setStyle("width", "100%");
img.setAttributte("src", "lipsum.jpg");
img.setAttributte("alt", "Lorem Ipsum");
a1.setAttributte("href", "https://www.lipsum.com");
a1.setAttributte("target", "_blank");
div3.setStyle("width", "300px");
div3.setStyle("margin", "10px");
div3.setStyle("background-color", "rgb(323, 210, 87)");
//p1.addItemBegin(a1);
//div2.addItemBegin(h3);
//div2.addItemBegin(img);
//div2.addItemBegin(p1);
//div3.addItemBegin(h3);
//div3.addItemBegin(img);
//div3.addItemBegin(p1);
//div1.addItemBegin(div2);
//div1.addItemBegin(div3);
//document.write(div1.getHTML());
p1.addItemEnd(a1);
div2.addItemBegin(h3);
div2.addItemBegin(img);
div2.addItemBegin(p1);
div3.addItemEnd(h3);
div3.addItemEnd(img);
div3.addItemEnd(p1);
div1.addItemEnd(div3);
div1.addItemEnd(div2);
document.write(div1.getHTML());
//# sourceMappingURL=app.js.map