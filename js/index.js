/**閫氱敤鐨凧S**/
//閫氱敤杩斿洖椤堕儴
$(function(){
    //棣栧厛灏�#back-to-top闅愯棌
    $("#slider-goTop").hide();
    //褰撴粴鍔ㄦ潯鐨勪綅缃浜庤窛椤堕儴100鍍忕礌浠ヤ笅鏃讹紝璺宠浆閾炬帴鍑虹幇锛屽惁鍒欐秷澶�
    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $("#slider-goTop").fadeIn();
        }else{
            $("#slider-goTop").fadeOut();
        }
    });
    //褰撶偣鍑昏烦杞摼鎺ュ悗锛屽洖鍒伴〉闈㈤《閮ㄤ綅缃�
    $("#slider-goTop").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
    //杩斿洖椤堕儴绛夋粦鍧梙over浜嬩欢
    $('#slider-chat,#slider-qq,#slider-phone,#slider-wechat').hover(
        function(){
            $(this).next().show();
        },
        function(){
            $(this).next().hide();
        }
    );
});

//閫氱敤waves绾挎潯鍔ㄧ敾
$(function() {
    function a() {
        var a = $(window).width(),
            b = (768 - a) / 768 + 1,
            c = 1;
        fmhPara = $(".feature-mi").height() < 641 || $(".feature-ai").height() < 641 || $(".feature-bi").height() < 641 ? 0 : 1, 768 > a ? ($(".mi-headline-bg").css("height", $(".feature-mi").height() + 28 * b * c + "px"), $(".ai-headline-bg").css("height", $(".feature-ai").height() + 28 * b * c + "px"), $(".bi-headline-bg").css("height", $(".feature-bi").height() + 28 * b * c + "px"), $(".ee-headline-bg").css("height", $(".feature-ee").height() + parseInt($(".feature-ee").css("padding-top")) + 20 * b + "px")) : ($(".mi-headline-bg").removeAttr("style"), $(".ai-headline-bg").removeAttr("style"), $(".bi-headline-bg").removeAttr("style"), $(".ee-headline-bg").removeAttr("style"))
    }
    setTimeout(function() {
        a()
    }, 100), $(window).resize(function() {
        a()
    })
}), function(a, b) {
    "use strict";
    "function" == typeof define && "object" == typeof define.amd ? define([], function() {
        return b(a)
    }) : a.SineWaves = b(a)
}(this, function() {
    "use strict";

    function a(a) {
        if (this.options = i.defaults(this.options, a), this.el = this.options.el, delete this.options.el, !this.el) return false; //throw "No Canvas Selected";鍒樻槑鎺掗敊娉ㄩ攢
        if (this.ctx = this.el.getContext("2d"), this.waves = this.options.waves, delete this.options.waves, !this.waves || !this.waves.length) throw "No waves specified";
        this.dpr = window.devicePixelRatio || 1, this.updateDimensions(), window.addEventListener("resize", this.updateDimensions.bind(this)), this.setupUserFunctions(), this.easeFn = i.getFn(n, this.options.ease, "linear"), this.rotation = i.degreesToRadians(this.options.rotate), i.isType(this.options.running, "boolean") && (this.running = this.options.running), this.setupWaveFns(), this.loop()
    }
    function b(a, b) {
        return i.isType(a, "number") ? a : (a = a.toString(), a.indexOf("%") > -1 ? (a = parseFloat(a), a > 1 && (a /= 100), b * a) : a.indexOf("px") > -1 ? parseInt(a, 10) : void 0)
    }
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var b = Array.prototype.slice.call(arguments, 1),
            c = this,
            d = function() {},
            e = function() {
                return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
            };
        return d.prototype = this.prototype, e.prototype = new d, e
    });
    for (var c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !window.requestAnimationFrame; ++d) window.requestAnimationFrame = window[c[d] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c[d] + "CancelAnimationFrame"] || window[c[d] + "CancelRequestAnimationFrame"];
    if (!window.requestAnimationFrame) {
        var e = 0;
        window.requestAnimationFrame = function(a) {
            var b = (new Date).getTime(),
                c = Math.max(0, 16 - (b - e)),
                d = window.setTimeout(function() {
                    a(b + c)
                }, c);
            return e = b + c, d
        }
    }
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    });
    var f = Math.PI / 180,
        //鍘熸潵鐨勫€间负g=2 * Math.PI 鐢ㄤ簬淇sineinout鍙宠竟鐨勬寮﹀€�
        g = 2.6 * Math.PI,
        h = Math.PI / 2,
        i = {},
        j = i.isType = function(a, b) {
            var c = {}.toString.call(a).toLowerCase();
            return c === "[object " + b.toLowerCase() + "]"
        },
        k = i.isFunction = function(a) {
            return j(a, "function")
        },
        l = i.isString = function(a) {
            return j(a, "string")
        },
        m = (i.isNumber = function(a) {
            return j(a, "number")
        }, i.shallowClone = function(a) {
            var b = {};
            for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
            return b
        }),
        n = (i.defaults = function(a, b) {
            j(b, "object") || (b = {});
            var c = m(a);
            for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
            return c
        }, i.degreesToRadians = function(a) {
            if (!j(a, "number")) throw new TypeError("Degrees is not a number");
            return a * f
        }, i.getFn = function(a, b, c) {
            return k(b) ? b : l(b) && k(a[b.toLowerCase()]) ? a[b.toLowerCase()] : a[c]
        }, {});
    n.linear = function(a, b) {
        return b
    }, n.sinein = function(a, b) {
        return b * (Math.sin(a * Math.PI - h) + 1) * .5
    }, n.sineout = function(a, b) {
        return b * (Math.sin(a * Math.PI + h) + 1) * .5
    }, n.sineinout = function(a, b) {
        return b * (Math.sin(a * g - h) + 1) * .5
    };
    var o = {};
    o.sine = function(a) {
        return Math.sin(a)
    }, o.sin = o.sine, o.sign = function(a) {
        return a = +a, 0 === a || isNaN(a) ? a : a > 0 ? 1 : -1
    }, o.square = function(a) {
        return o.sign(Math.sin(a * g))
    }, o.sawtooth = function(a) {
        return 2 * (a - Math.floor(a + .5))
    }, o.triangle = function(a) {
        return Math.abs(o.sawtooth(a))
    }, a.prototype.options = {
        speed: 10,
        rotate: 0,
        ease: "Linear",
        wavesWidth: "95%"
    }, a.prototype.setupWaveFns = function() {
        for (var a = -1, b = this.waves.length; ++a < b;) this.waves[a].waveFn = i.getFn(o, this.waves[a].type, "sine")
    }, a.prototype.setupUserFunctions = function() {
        i.isFunction(this.options.resizeEvent) && (this.options.resizeEvent.call(this), window.addEventListener("resize", this.options.resizeEvent.bind(this))), i.isFunction(this.options.initialize) && this.options.initialize.call(this)
    };
    var p = {
        timeModifier: 1,
        amplitude: 50,
        wavelength: 50,
        segmentLength: 10,
        lineWidth: 1,
        strokeStyle: "rgba(255, 255, 255, 0.2)",
        type: "Sine"
    };
    return a.prototype.getDimension = function(a) {
        return i.isNumber(this.options[a]) ? this.options[a] : i.isFunction(this.options[a]) ? this.options[a].call(this, this.el) : "width" === a ? this.el.clientWidth : "height" === a ? this.el.clientHeight : void 0
    }, a.prototype.updateDimensions = function() {
        var a = this.getDimension("width"),
            c = this.getDimension("height");
        this.width = this.el.width = a * this.dpr, this.height = this.el.height = c * this.dpr, this.el.style.width = a + "px", this.el.style.height = c + "px", this.waveWidth = b(this.options.wavesWidth, this.width), this.waveLeft = (this.width - this.waveWidth) / 2, this.yAxis = this.height / 2
    }, a.prototype.clear = function() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }, a.prototype.time = 0, a.prototype.update = function(a) {
        this.time = this.time - .007, "undefined" == typeof a && (a = this.time);
        var b = -1,
            c = this.waves.length;
        for (this.clear(), this.ctx.save(), this.rotation > 0 && (this.ctx.translate(this.width / 2, this.height / 2), this.ctx.rotate(this.rotation), this.ctx.translate(-this.width / 2, -this.height / 2)); ++b < c;) {
            var d = this.waves[b].timeModifier || 1;
            this.drawWave(a * d, this.waves[b])
        }
        this.ctx.restore(), b = void 0, c = void 0
    }, a.prototype.getPoint = function(a, b, c) {
        var d = a * this.options.speed + (-this.yAxis + b) / c.wavelength,
            e = c.waveFn.call(this, d, o),
            f = this.easeFn.call(this, b / this.waveWidth, c.amplitude);
        return d = b + this.waveLeft, e = f * e + this.yAxis, {
            x: d,
            y: e
        }
    }, a.prototype.drawWave = function(a, b) {
        b = i.defaults(p, b), this.ctx.lineWidth = b.lineWidth * this.dpr, this.ctx.strokeStyle = b.strokeStyle, this.ctx.lineCap = "butt", this.ctx.lineJoin = "round", this.ctx.beginPath(), this.ctx.moveTo(0, this.yAxis), this.ctx.lineTo(this.waveLeft, this.yAxis);
        var c, d;
        for (c = 0; c < this.waveWidth; c += b.segmentLength) d = this.getPoint(a, c, b), this.ctx.lineTo(d.x, d.y), d = void 0;
        c = void 0, b = void 0, this.ctx.lineTo(this.width, this.yAxis), this.ctx.stroke()
    }, a.prototype.running = !0, a.prototype.loop = function() {
        this.running === !0 && this.update(), window.requestAnimationFrame(this.loop.bind(this))
    }, a.prototype.Waves = o, a.prototype.Ease = n, a
}), $(function() {
    var a = new SineWaves({
            el: document.getElementById("waves"),
            //璁剧疆姝ｅ鸡娉㈤€熷害 鍒樻槑娉ㄩ噴
            speed: 4,
            width: function() {
                var a = $(document).width();
                //鍘熸潵鐨勫€�, 璁剧疆姝ｅ鸡娉㈢殑瀹藉害, 鐜板湪璁剧疆涓轰笌鍏冪礌鍚屽
                //return 768 > a ? 3 * $("#waves").parent().width() : 1.4 * $("#waves").parent().width()
                return 1.4 * $("#waves").parent().width()
            },
            height: function() {
                return $("#waves").parent().height()
            },
            //鍘熸潵鐨勫€�, 鍙互姝ｅ鸡娉㈠搴�, 灞呬腑, 涓よ竟瓒呭嚭閮ㄥ垎闅愯棌
            //wavesWidth: "100%",
            wavesWidth: "130%",//150
            ease: "SineInOut",
            waves: [{
                timeModifier: .5,
                lineWidth: 2,
                amplitude: 150,
                wavelength: 200,
                segmentLength: 1
            }, {
                timeModifier: .5,
                lineWidth: 2,
                amplitude: 100,
                wavelength: 150,
                segmentLength: 1
            }, {
                timeModifier: .5,
                lineWidth: 2,
                amplitude: 50,
                wavelength: 80,
                segmentLength: 1
            }],
            initialize: function() {},
            resizeEvent: function() {
                var a = this.ctx.createLinearGradient(0, 0, this.width, 0);
                //鍘熸潵鐨勫€�, 璁剧疆绾挎潯娓愬彉閫忔槑搴�, 浠ュ強寮€濮嬫縺鍙樼殑浣嶇疆
                //a.addColorStop(0, "rgba(255, 255, 255, 0)"), a.addColorStop(.5, "rgba(255, 255, 255, 0.2)"), a.addColorStop(1, "rgba(255, 255, 255, 0)");
                a.addColorStop(0, "rgba(255, 255, 255, 0)"), a.addColorStop(.1, "rgba(255, 255, 255, 0.2)"), a.addColorStop(1, "rgba(255, 255, 255, 0)");
                for (var b = -1, c = this.waves.length; ++b < c;) this.waves[b].strokeStyle = a;
                b = void 0, c = void 0, a = void 0
            }
        }),
        b = $("#waves"),
        c = $(document).scrollTop(),
        d = $(document).scrollTop() + $(window).height(),
        e = b.offset().top + b.height(),
        f = b.offset().top;
    (c > e || f > d) && (a.running = !1, a.update()), $(window).bind("scroll", function() {
        c = $(document).scrollTop(), d = $(document).scrollTop() + $(window).height(), e = b.offset().top + b.height(), f = b.offset().top, c > e || f > d ? (a.running = !1, a.update()) : (a.running = !0, a.update())
    })
});

$(function(){
    //鍦ㄧ嚎鍜ㄨ鐐瑰嚮浜嬩欢
    $('.web-chat').click(function(){
        var chatUrl = "http://p.qiao.baidu.com/cps/chat?siteId=10659290&userId=20073939";
        var iName = "鍦ㄧ嚎鍜ㄨ";
        var iWidth = 720;
        var iHeight = 600;
        //鑾峰緱绐楀彛鐨勫瀭鐩翠綅缃�
        var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
        //鑾峰緱绐楀彛鐨勬按骞充綅缃�
        var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
        window.open(chatUrl, iName, 'height=' + iHeight + ',width=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    });
    //瀵艰埅鏉℃渶鍚庝竴涓姞hidden-sm
    $('#bs-example-navbar-collapse-1 li:last').addClass('hidden-sm');
});

//鏀惰棌鏈珯
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("鎶辨瓑锛屾偍鎵€浣跨敤鐨勬祻瑙堝櫒鏃犳硶瀹屾垚姝ゆ搷浣溿€俓n\n鍔犲叆鏀惰棌澶辫触锛岃浣跨敤Ctrl+D杩涜娣诲姞");
        }
    }
}