var config = {
  // Disqus Shortname (http://disqus.com)
  // Options: Shortname / Blank ('') (Disabled)
  'disqus_shortname': '',
  // Google Comments (http://google.com)
  // Options: true / false
  'google_comments': false,
  // Google Analytics ID (http://analytics.google.com)
  // Options: ID / Blank (Disabled)
  'analytics_id': 'UA-38441871-4',
  // Enable Syntax Highlighting of Code
  // Options: true / false
  'highlightcode': true,
  // Enable Reading Time Indicator
  // Options: true / false
  'readingtime': true,
  // Autoload Comments
  // Options: true / false
  'autoload_comments': false,
  // Enable 'Theme By EckoThemes' Copyright Disclaimer
  // Options: true / false
  'show_ecko_disclaimer': false,
};

! function(t) {
    "use strict";
    t.fn.fitVids = function(e) {
        var i = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var r = document.head || document.getElementsByTagName("head")[0],
                a = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                d = document.createElement("div");
            d.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>", r.appendChild(d.childNodes[1])
        }
        return e && t.extend(i, e), this.each(function() {
            var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            i.customSelector && e.push(i.customSelector);
            var r = ".fitvidsignore";
            i.ignore && (r = r + ", " + i.ignore);
            var a = t(this).find(e.join(","));
            a = a.not("object object"), a = a.not(r), a.each(function() {
                var e = t(this);
                if (!(e.parents(r).length > 0 || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
                    var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                        a = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                        d = i / a;
                    if (!e.attr("id")) {
                        var o = "fitvid" + Math.floor(999999 * Math.random());
                        e.attr("id", o)
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * d + "%"), e.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto);
window.Rainbow = function() {
    function t(t, e, a, n) {
        var r = t.getAttribute && t.getAttribute(e) || 0;
        if (!r)
            for (a = t.attributes, n = 0; n < a.length; ++n)
                if (a[n].nodeName === e) return a[n].nodeValue;
        return r
    }

    function e(t, e) {
        t.className += t.className ? " " + e : e
    }

    function a(t, e) {
        return (" " + t.className + " ").indexOf(" " + e + " ") > -1
    }

    function n(e) {
        var a = t(e, "data-language") || t(e.parentNode, "data-language");
        if (!a) {
            var n = /\blang(?:uage)?-(\w+)/,
                r = e.className.match(n) || e.parentNode.className.match(n);
            r && (a = r[1])
        }
        return a
    }

    function r(t) {
        return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&(?![\w\#]+;)/g, "&amp;")
    }

    function s(t, e, a, n) {
        return a >= t && e > a ? !0 : n > t && e > n
    }

    function o(t, e, a, n) {
        return a == t && n == e ? !1 : t >= a && n >= e
    }

    function i(t, e) {
        for (var a in _[z])
            if (a = parseInt(a, 10), o(a, _[z][a], t, e) && (delete _[z][a], delete k[z][a]), s(a, _[z][a], t, e)) return !0;
        return !1
    }

    function c(t, e) {
        return '<span class="' + t.replace(/\./g, " ") + (x ? " " + x : "") + '">' + e + "</span>"
    }

    function p(t, e) {
        var a, n = 0;
        for (a = 1; e > a; ++a) t[a] && (n += t[a].length);
        return n
    }

    function g(t, e, a, n) {
        if ("undefined" == typeof t || null === t) return n();
        var r = t.exec(a);
        if (!r) return n();
        ++N, e.name || "string" != typeof e.matches[0] || (e.name = e.matches[0], delete e.matches[0]);
        var s = r[0],
            o = r.index,
            m = r[0].length + o,
            l = function() {
                var r = function() {
                    g(t, e, a, n)
                };
                return N % 100 > 0 ? r() : setTimeout(r, 0)
            };
        if (i(o, m)) return l();
        var h = function(t) {
                e.name && (t = c(e.name, t)), k[z] || (k[z] = {}, _[z] = {}), k[z][o] = {
                    replace: r[0],
                    "with": t
                }, _[z][o] = m, l()
            },
            w = d(e.matches),
            y = function(t, a, n) {
                if (t >= a.length) return n(s);
                var o = function() {
                        y(++t, a, n)
                    },
                    i = r[a[t]];
                if (!i) return o();
                var g = e.matches[a[t]],
                    m = g.language,
                    l = g.name && g.matches ? g.matches : g,
                    d = function(e, n, i) {
                        s = u(p(r, a[t]), e, i ? c(i, n) : n, s), o()
                    };
                return m ? b(i, m, function(t) {
                    d(i, t)
                }) : "string" == typeof g ? d(i, i, g) : void f(i, l.length ? l : [l], function(t) {
                    d(i, t, g.matches ? g.name : 0)
                })
            };
        y(0, w, h)
    }

    function m(t) {
        return S[t]
    }

    function l(t) {
        var e = A[t] || [],
            a = A[$] || [];
        return m(t) ? e : e.concat(a)
    }

    function u(t, e, a, n) {
        var r = n.substr(t);
        return n.substr(0, t) + r.replace(e, a)
    }

    function d(t) {
        var e = [];
        for (var a in t) t.hasOwnProperty(a) && e.push(a);
        return e.sort(function(t, e) {
            return e - t
        })
    }

    function f(t, e, a) {
        function n(e, r) {
            return r < e.length ? g(e[r].pattern, e[r], t, function() {
                n(e, ++r)
            }) : void h(t, function(t) {
                delete k[z], delete _[z], --z, a(t)
            })
        }++z, n(e, 0)
    }

    function h(t, e) {
        function a(t, e, n, r) {
            if (n < e.length) {
                ++Z;
                var s = e[n],
                    o = k[z][s];
                t = u(s, o.replace, o["with"], t);
                var i = function() {
                    a(t, e, ++n, r)
                };
                return Z % 250 > 0 ? i() : setTimeout(i, 0)
            }
            r(t)
        }
        var n = d(k[z]);
        a(t, n, 0, e)
    }

    function b(t, e, a) {
        var n = l(e);
        f(r(t), n, a)
    }

    function w(t, r, s) {
        if (r < t.length) {
            var o = t[r],
                i = n(o);
            return !a(o, "rainbow") && i ? (i = i.toLowerCase(), e(o, "rainbow"), b(o.innerHTML, i, function(e) {
                o.innerHTML = e, k = {}, _ = {}, v && v(o, i), setTimeout(function() {
                    w(t, ++r, s)
                }, 0)
            })) : w(t, ++r, s)
        }
        s && s()
    }

    function y(t, e) {
        t = t && "function" == typeof t.getElementsByTagName ? t : document;
        var a, n = t.getElementsByTagName("pre"),
            r = t.getElementsByTagName("code"),
            s = [],
            o = [];
        for (a = 0; a < n.length; ++a) n[a].getElementsByTagName("code").length ? n[a].innerHTML = n[a].innerHTML.replace(/^\s+/, "").replace(/\s+$/, "") : s.push(n[a]);
        for (a = 0; a < r.length; ++a) o.push(r[a]);
        w(o.concat(s), 0, e)
    }
    var x, v, k = {},
        _ = {},
        A = {},
        S = {},
        z = 0,
        $ = 0,
        N = 0,
        Z = 0;
    return {
        extend: function(t, e, a) {
            1 == arguments.length && (e = t, t = $), S[t] = a, A[t] = e.concat(A[t] || [])
        },
        onHighlight: function(t) {
            v = t
        },
        addClass: function(t) {
            x = t
        },
        color: function() {
            return "string" == typeof arguments[0] ? b(arguments[0], arguments[1], arguments[2]) : "function" == typeof arguments[0] ? y(0, arguments[0]) : void y(arguments[0], arguments[1])
        }
    }
}(), Rainbow.onHighlight = Rainbow.onHighlight, Rainbow.addClass = Rainbow.addClass, Rainbow.extend("c", [{
    name: "meta.preprocessor",
    matches: {
        1: [{
            matches: {
                1: "keyword.define",
                2: "entity.name"
            },
            pattern: /(\w+)\s(\w+)\b/g
        }, {
            name: "keyword.define",
            pattern: /endif/g
        }, {
            name: "constant.numeric",
            pattern: /\d+/g
        }, {
            matches: {
                1: "keyword.include",
                2: "string"
            },
            pattern: /(include)\s(.*?)$/g
        }]
    },
    pattern: /\#([\S\s]*?)$/gm
}, {
    name: "keyword",
    pattern: /\b(do|goto|typedef)\b/g
}, {
    name: "entity.label",
    pattern: /\w+:/g
}, {
    matches: {
        1: "storage.type",
        3: "storage.type",
        4: "entity.name.function"
    },
    pattern: /\b((un)?signed|const)? ?(void|char|short|int|long|float|double)\*? +((\w+)(?= ?\())?/g
}, {
    matches: {
        2: "entity.name.function"
    },
    pattern: /(\w|\*) +((\w+)(?= ?\())/g
}, {
    name: "storage.modifier",
    pattern: /\b(static|extern|auto|register|volatile|inline)\b/g
}, {
    name: "support.type",
    pattern: /\b(struct|union|enum)\b/g
}]), Rainbow.extend("coffeescript", [{
    name: "comment.block",
    pattern: /(\#{3})[\s\S]*\1/gm
}, {
    name: "string.block",
    pattern: /('{3}|"{3})[\s\S]*\1/gm
}, {
    name: "string.regex",
    matches: {
        2: {
            name: "comment",
            pattern: /\#(.*?)\n/g
        }
    },
    pattern: /(\/{3})([\s\S]*)\1/gm
}, {
    matches: {
        1: "keyword"
    },
    pattern: /\b(in|when|is|isnt|of|not|unless|until|super)(?=\b)/gi
}, {
    name: "keyword.operator",
    pattern: /\?/g
}, {
    name: "constant.language",
    pattern: /\b(undefined|yes|on|no|off)\b/g
}, {
    name: "keyword.variable.coffee",
    pattern: /@(\w+)/gi
}, {
    name: "reset",
    pattern: /object|class|print/gi
}, {
    matches: {
        1: "entity.name.function",
        2: "keyword.operator",
        3: {
            name: "function.argument.coffee",
            pattern: /([\@\w]+)/g
        },
        4: "keyword.function"
    },
    pattern: /(\w+)\s{0,}(=|:)\s{0,}\((.*?)((-|=)&gt;)/gi
}, {
    matches: {
        1: {
            name: "function.argument.coffee",
            pattern: /([\@\w]+)/g
        },
        2: "keyword.function"
    },
    pattern: /\s\((.*?)\)\s{0,}((-|=)&gt;)/gi
}, {
    matches: {
        1: "entity.name.function",
        2: "keyword.operator",
        3: "keyword.function"
    },
    pattern: /(\w+)\s{0,}(=|:)\s{0,}((-|=)&gt;)/gi
}, {
    matches: {
        1: "storage.class",
        2: "entity.name.class",
        3: "storage.modifier.extends",
        4: "entity.other.inherited-class"
    },
    pattern: /\b(class)\s(\w+)(\sextends\s)?([\w\\]*)?\b/g
}, {
    matches: {
        1: "keyword.new",
        2: {
            name: "support.class",
            pattern: /\w+/g
        }
    },
    pattern: /\b(new)\s(.*?)(?=\s)/g
}]), Rainbow.extend("csharp", [{
    name: "constant",
    pattern: /\b(false|null|true)\b/g
}, {
    name: "keyword",
    pattern: /\b(abstract|add|alias|ascending|as|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|double|do|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|foreach|for|from|get|global|goto|group|if|implicit|int|interface|internal|into|in|is|join|let|lock|long|namespace|new|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|try|typeof|uint|unchecked|ulong|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/g
}, {
    matches: {
        1: "keyword",
        2: {
            name: "support.class",
            pattern: /\w+/g
        }
    },
    pattern: /(typeof)\s([^\$].*?)(\)|;)/g
}, {
    matches: {
        1: "keyword.namespace",
        2: {
            name: "support.namespace",
            pattern: /\w+/g
        }
    },
    pattern: /\b(namespace)\s(.*?);/g
}, {
    matches: {
        1: "storage.modifier",
        2: "storage.class",
        3: "entity.name.class",
        4: "storage.modifier.extends",
        5: "entity.other.inherited-class"
    },
    pattern: /\b(abstract|sealed)?\s?(class)\s(\w+)(\sextends\s)?([\w\\]*)?\s?\{?(\n|\})/g
}, {
    name: "keyword.static",
    pattern: /\b(static)\b/g
}, {
    matches: {
        1: "keyword.new",
        2: {
            name: "support.class",
            pattern: /\w+/g
        }
    },
    pattern: /\b(new)\s([^\$].*?)(?=\)|\(|;|&)/g
}, {
    name: "string",
    pattern: /(")(.*?)\1/g
}, {
    name: "integer",
    pattern: /\b(0x[\da-f]+|\d+)\b/g
}, {
    name: "comment",
    pattern: /\/\*[\s\S]*?\*\/|(\/\/)[\s\S]*?$/gm
}, {
    name: "operator",
    pattern: /(\+\+|\+=|\+|--|-=|-|&lt;&lt;=|&lt;&lt;|&lt;=|=&gt;|&gt;&gt;=|&gt;&gt;|&gt;=|!=|!|~|\^|\|\||&amp;&amp;|&amp;=|&amp;|\?\?|::|:|\*=|\*|\/=|%=|\|=|==|=)/g
}, {
    name: "preprocessor",
    pattern: /(\#if|\#else|\#elif|\#endif|\#define|\#undef|\#warning|\#error|\#line|\#region|\#endregion|\#pragma)[\s\S]*?$/gm
}], !0), Rainbow.extend("css", [{
    name: "comment",
    pattern: /\/\*[\s\S]*?\*\//gm
}, {
    name: "constant.hex-color",
    pattern: /#([a-f0-9]{3}|[a-f0-9]{6})(?=;|\s|,|\))/gi
}, {
    matches: {
        1: "constant.numeric",
        2: "keyword.unit"
    },
    pattern: /(\d+)(px|em|cm|s|%)?/g
}, {
    name: "string",
    pattern: /('|")(.*?)\1/g
}, {
    name: "support.css-property",
    matches: {
        1: "support.vendor-prefix"
    },
    pattern: /(-o-|-moz-|-webkit-|-ms-)?[\w-]+(?=\s?:)(?!.*\{)/g
}, {
    matches: {
        1: [{
            name: "entity.name.sass",
            pattern: /&amp;/g
        }, {
            name: "direct-descendant",
            pattern: /&gt;/g
        }, {
            name: "entity.name.class",
            pattern: /\.[\w\-_]+/g
        }, {
            name: "entity.name.id",
            pattern: /\#[\w\-_]+/g
        }, {
            name: "entity.name.pseudo",
            pattern: /:[\w\-_]+/g
        }, {
            name: "entity.name.tag",
            pattern: /\w+/g
        }]
    },
    pattern: /([\w\ ,\n:\.\#\&\;\-_]+)(?=.*\{)/g
}, {
    matches: {
        2: "support.vendor-prefix",
        3: "support.css-value"
    },
    pattern: /(:|,)\s*(-o-|-moz-|-webkit-|-ms-)?([a-zA-Z-]*)(?=\b)(?!.*\{)/g
}], !0), Rainbow.extend("d", [{
    name: "constant",
    pattern: /\b(false|null|true)\b/gm
}, {
    name: "keyword",
    pattern: /\b(abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|in|inout|int|interface|invariant|ireal|is|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|size_t|static|string|struct|super|switch|synchronized|template|this|throw|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__FILE__|__LINE__|__gshared|__traits|__vector|__parameters)\b/gm
}, {
    matches: {
        1: "keyword",
        2: {
            name: "support.class",
            pattern: /\w+/gm
        }
    },
    pattern: /(typeof)\s([^\$].*?)(\)|;)/gm
}, {
    matches: {
        1: "keyword.namespace",
        2: {
            name: "support.namespace",
            pattern: /\w+/gm
        }
    },
    pattern: /\b(namespace)\s(.*?);/gm
}, {
    matches: {
        1: "storage.modifier",
        2: "storage.class",
        3: "entity.name.class",
        4: "storage.modifier.extends",
        5: "entity.other.inherited-class"
    },
    pattern: /\b(abstract|sealed)?\s?(class)\s(\w+)(\sextends\s)?([\w\\]*)?\s?\{?(\n|\})/gm
}, {
    name: "keyword.static",
    pattern: /\b(static)\b/gm
}, {
    matches: {
        1: "keyword.new",
        2: {
            name: "support.class",
            pattern: /\w+/gm
        }
    },
    pattern: /\b(new)\s([^\$].*?)(?=\)|\(|;|&)/gm
}, {
    name: "string",
    pattern: /("|')(.*?)\1/gm
}, {
    name: "integer",
    pattern: /\b(0x[\da-f]+|\d+)\b/gm
}, {
    name: "comment",
    pattern: /\/\*[\s\S]*?\*\/|\/\+[\s\S]*?\+\/|(\/\/)[\s\S]*?$/gm
}, {
    name: "operator",
    pattern: /(\/|\/=|&amp;=|&amp;&amp;|&amp;|\|=|\|\|\||\-=|\-\-|\-|\+=|\+\+|\+|&lt;=|&lt;&lt;|&lt;|&lt;&lt;=|&lt;&gt;=|&lt;&gt;|&gt;|&gt;&gt;&gt;=|&gt;&gt;=|&gt;=|&gt;&gt;|&gt;&gt;&gt;|!=|!&lt;&gt;=|!&lt;&gt;|!&lt;=|!&lt;|!&gt;=|!&gt;|!|[|]|\$|==|=|\*=|\*|%=|%|\^\^=|\^=|\^\^|\^|~=|~|@|=&gt;|\:)/gm
}], !0), Rainbow.extend([{
    matches: {
        1: [{
            name: "keyword.operator",
            pattern: /\=|\+/g
        }, {
            name: "keyword.dot",
            pattern: /\./g
        }],
        2: {
            name: "string",
            matches: {
                name: "constant.character.escape",
                pattern: /\\('|"){1}/g
            }
        }
    },
    pattern: /(\(|\s|\[|\=|:|\+|\.|\{)(('|")([^\\\1]|\\.)*?(\3))/gm
}, {
    name: "comment",
    pattern: /\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm
}, {
    name: "constant.numeric",
    pattern: /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi
}, {
    matches: {
        1: "keyword"
    },
    pattern: /\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi
}, {
    name: "constant.language",
    pattern: /true|false|null/g
}, {
    name: "keyword.operator",
    pattern: /\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g
}, {
    matches: {
        1: "function.call"
    },
    pattern: /(\w+?)(?=\()/g
}, {
    matches: {
        1: "storage.function",
        2: "entity.name.function"
    },
    pattern: /(function)\s(.*?)(?=\()/g
}]), Rainbow.extend("go", [{
    matches: {
        1: {
            name: "keyword.operator",
            pattern: /\=/g
        },
        2: {
            name: "string",
            matches: {
                name: "constant.character.escape",
                pattern: /\\(`|"){1}/g
            }
        }
    },
    pattern: /(\(|\s|\[|\=|:)((`|")([^\\\1]|\\.)*?(\3))/gm
}, {
    name: "comment",
    pattern: /\/\*[\s\S]*?\*\/|(\/\/)[\s\S]*?$/gm
}, {
    name: "constant.numeric",
    pattern: /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi
}, {
    matches: {
        1: "keyword"
    },
    pattern: /\b(break|c(ase|onst|ontinue)|d(efault|efer)|else|fallthrough|for|go(to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)(?=\(|\b)/gi
}, {
    name: "constant.language",
    pattern: /true|false|null|string|byte|rune|u?int(8|16|32|64)?|float(32|64)|complex(64|128)/g
}, {
    name: "keyword.operator",
    pattern: /\+|\!|\-|&(gt|lt|amp);|\||\*|\:?=/g
}, {
    matches: {
        1: "function.call"
    },
    pattern: /(\w+?)(?=\()/g
}, {
    matches: {
        1: "storage.function",
        2: "entity.name.function"
    },
    pattern: /(func)\s(.*?)(?=\()/g
}]), Rainbow.extend("haskell", [{
    name: "comment",
    pattern: /\{\-\-[\s\S(\w+)]+[\-\-][\}$]/gm
}, {
    name: "comment",
    pattern: /\-\-(.*)/g
}, {
    matches: {
        1: "keyword",
        2: "support.namespace"
    },
    pattern: /\b(module)\s(\w+)\s[\(]?(\w+)?[\)?]\swhere/g
}, {
    name: "keyword.operator",
    pattern: /\+|\!|\-|&(gt|lt|amp);|\/\=|\||\@|\:|\.|\+{2}|\:|\*|\=|#|\.{2}|(\\)[a-zA-Z_]/g
}, {
    name: "keyword",
    pattern: /\b(case|class|foreign|hiding|qualified|data|family|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|in|otherwise|module|newtype|of|then|type|where)\b/g
}, {
    name: "keyword",
    pattern: /[\`][a-zA-Z_']*?[\`]/g
}, {
    matches: {
        1: "keyword",
        2: "keyword.operator"
    },
    pattern: /\b(infix|infixr|infixl)+\s\d+\s(\w+)*/g
}, {
    name: "entity.class",
    pattern: /\b([A-Z][A-Za-z0-9_']*)/g
}, {
    name: "meta.preprocessor",
    matches: {
        1: [{
            matches: {
                1: "keyword.define",
                2: "entity.name"
            },
            pattern: /(\w+)\s(\w+)\b/g
        }, {
            name: "keyword.define",
            pattern: /endif/g
        }, {
            name: "constant.numeric",
            pattern: /\d+/g
        }, {
            matches: {
                1: "keyword.include",
                2: "string"
            },
            pattern: /(include)\s(.*?)$/g
        }]
    },
    pattern: /^\#([\S\s]*?)$/gm
}]), Rainbow.extend("html", [{
    name: "source.php.embedded",
    matches: {
        2: {
            language: "php"
        }
    },
    pattern: /&lt;\?=?(?!xml)(php)?([\s\S]*?)(\?&gt;)/gm
}, {
    name: "source.css.embedded",
    matches: {
        1: {
            matches: {
                1: "support.tag.style",
                2: [{
                    name: "entity.tag.style",
                    pattern: /^style/g
                }, {
                    name: "string",
                    pattern: /('|")(.*?)(\1)/g
                }, {
                    name: "entity.tag.style.attribute",
                    pattern: /(\w+)/g
                }],
                3: "support.tag.style"
            },
            pattern: /(&lt;\/?)(style.*?)(&gt;)/g
        },
        2: {
            language: "css"
        },
        3: "support.tag.style",
        4: "entity.tag.style",
        5: "support.tag.style"
    },
    pattern: /(&lt;style.*?&gt;)([\s\S]*?)(&lt;\/)(style)(&gt;)/gm
}, {
    name: "source.js.embedded",
    matches: {
        1: {
            matches: {
                1: "support.tag.script",
                2: [{
                    name: "entity.tag.script",
                    pattern: /^script/g
                }, {
                    name: "string",
                    pattern: /('|")(.*?)(\1)/g
                }, {
                    name: "entity.tag.script.attribute",
                    pattern: /(\w+)/g
                }],
                3: "support.tag.script"
            },
            pattern: /(&lt;\/?)(script.*?)(&gt;)/g
        },
        2: {
            language: "javascript"
        },
        3: "support.tag.script",
        4: "entity.tag.script",
        5: "support.tag.script"
    },
    pattern: /(&lt;script(?! src).*?&gt;)([\s\S]*?)(&lt;\/)(script)(&gt;)/gm
}, {
    name: "comment.html",
    pattern: /&lt;\!--[\S\s]*?--&gt;/g
}, {
    matches: {
        1: "support.tag.open",
        2: "support.tag.close"
    },
    pattern: /(&lt;)|(\/?\??&gt;)/g
}, {
    name: "support.tag",
    matches: {
        1: "support.tag",
        2: "support.tag.special",
        3: "support.tag-name"
    },
    pattern: /(&lt;\??)(\/|\!?)(\w+)/g
}, {
    matches: {
        1: "support.attribute"
    },
    pattern: /([a-z-]+)(?=\=)/gi
}, {
    matches: {
        1: "support.operator",
        2: "string.quote",
        3: "string.value",
        4: "string.quote"
    },
    pattern: /(=)('|")(.*?)(\2)/g
}, {
    matches: {
        1: "support.operator",
        2: "support.value"
    },
    pattern: /(=)([a-zA-Z\-0-9]*)\b/g
}, {
    matches: {
        1: "support.attribute"
    },
    pattern: /\s(\w+)(?=\s|&gt;)(?![\s\S]*&lt;)/g
}], !0), Rainbow.extend("java", [{
    name: "constant",
    pattern: /\b(false|null|true|[A-Z_]+)\b/g
}, {
    matches: {
        1: "keyword",
        2: "support.namespace"
    },
    pattern: /(import|package)\s(.+)/g
}, {
    name: "keyword",
    pattern: /\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/g
}, {
    name: "string",
    pattern: /(".*?")/g
}, {
    name: "char",
    pattern: /(')(.|\\.|\\u[\dA-Fa-f]{4})\1/g
}, {
    name: "integer",
    pattern: /\b(0x[\da-f]+|\d+)L?\b/g
}, {
    name: "comment",
    pattern: /\/\*[\s\S]*?\*\/|(\/\/).*?$/gm
}, {
    name: "support.annotation",
    pattern: /@\w+/g
}, {
    matches: {
        1: "entity.function"
    },
    pattern: /([^@\.\s]+)\(/g
}, {
    name: "entity.class",
    pattern: /\b([A-Z]\w*)\b/g
}, {
    name: "operator",
    pattern: /(\+{1,2}|-{1,2}|~|!|\*|\/|%|(?:&lt;){1,2}|(?:&gt;){1,3}|instanceof|(?:&amp;){1,2}|\^|\|{1,2}|\?|:|(?:=|!|\+|-|\*|\/|%|\^|\||(?:&lt;){1,2}|(?:&gt;){1,3})?=)/g
}], !0), Rainbow.extend("javascript", [{
    name: "selector",
    pattern: /(\s|^)\$(?=\.|\()/g
}, {
    name: "support",
    pattern: /\b(window|document)\b/g
}, {
    matches: {
        1: "support.property"
    },
    pattern: /\.(length|node(Name|Value))\b/g
}, {
    matches: {
        1: "support.function"
    },
    pattern: /(setTimeout|setInterval)(?=\()/g
}, {
    matches: {
        1: "support.method"
    },
    pattern: /\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g
}, {
    name: "string.regexp",
    matches: {
        1: "string.regexp.open",
        2: {
            name: "constant.regexp.escape",
            pattern: /\\(.){1}/g
        },
        3: "string.regexp.close",
        4: "string.regexp.modifier"
    },
    pattern: /(\/)(?!\*)(.+)(\/)([igm]{0,3})/g
}, {
    matches: {
        1: "storage",
        3: "entity.function"
    },
    pattern: /(var)?(\s|^)(\S*)(?=\s?=\s?function\()/g
}, {
    matches: {
        1: "keyword",
        2: "entity.function"
    },
    pattern: /(new)\s+(.*)(?=\()/g
}, {
    name: "entity.function",
    pattern: /(\w+)(?=:\s{0,}function)/g
}]), Rainbow.extend("lua", [{
    matches: {
        1: {
            name: "keyword.operator",
            pattern: /\=/g
        },
        2: {
            name: "string",
            matches: {
                name: "constant.character.escape",
                pattern: /\\('|"){1}/g
            }
        }
    },
    pattern: /(\(|\s|\[|\=)(('|")([^\\\1]|\\.)*?(\3))/gm
}, {
    name: "comment",
    pattern: /\-{2}\[{2}\-{2}[\s\S]*?\-{2}\]{2}\-{2}|(\-{2})[\s\S]*?$/gm
}, {
    name: "constant.numeric",
    pattern: /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi
}, {
    matches: {
        1: "keyword"
    },
    pattern: /\b((a|e)nd|in|repeat|break|local|return|do|for|then|else(if)?|function|not|if|or|until|while)(?=\(|\b)/gi
}, {
    name: "constant.language",
    pattern: /true|false|nil/g
}, {
    name: "keyword.operator",
    pattern: /\+|\!|\-|&(gt|lt|amp);|\||\*|\=|#|\.{2}/g
}, {
    matches: {
        1: "storage.function",
        2: "entity.name.function"
    },
    pattern: /(function)\s+(\w+[\:|\.]?\w+?)(?=\()/g
}, {
    matches: {
        1: "support.function"
    },
    pattern: /\b(print|require|module|\w+\.\w+)(?=\()/g
}], !0), Rainbow.extend("php", [{
    name: "support",
    pattern: /\becho\b/g
}, {
    matches: {
        1: "variable.dollar-sign",
        2: "variable"
    },
    pattern: /(\$)(\w+)\b/g
}, {
    name: "constant.language",
    pattern: /true|false|null/gi
}, {
    name: "constant",
    pattern: /\b[A-Z0-9_]{2,}\b/g
}, {
    name: "keyword.dot",
    pattern: /\./g
}, {
    name: "keyword",
    pattern: /\b(die|end(for(each)?|switch|if)|case|require(_once)?|include(_once)?)(?=\(|\b)/g
}, {
    matches: {
        1: "keyword",
        2: {
            name: "support.class",
            pattern: /\w+/g
        }
    },
    pattern: /(instanceof)\s([^\$].*?)(\)|;)/g
}, {
    matches: {
        1: "support.function"
    },
    pattern: /\b(array(_key_exists|_merge|_keys|_shift)?|isset|count|empty|unset|printf|is_(array|string|numeric|object)|sprintf|each|date|time|substr|pos|str(len|pos|tolower|_replace|totime)?|ord|trim|in_array|implode|end|preg_match|explode|fmod|define|link|list|get_class|serialize|file|sort|mail|dir|idate|log|intval|header|chr|function_exists|dirname|preg_replace|file_exists)(?=\()/g
}, {
    name: "variable.language.php-tag",
    pattern: /(&lt;\?(php)?|\?&gt;)/g
}, {
    matches: {
        1: "keyword.namespace",
        2: {
            name: "support.namespace",
            pattern: /\w+/g
        }
    },
    pattern: /\b(namespace|use)\s(.*?);/g
}, {
    matches: {
        1: "storage.modifier",
        2: "storage.class",
        3: "entity.name.class",
        4: "storage.modifier.extends",
        5: "entity.other.inherited-class",
        6: "storage.modifier.extends",
        7: "entity.other.inherited-class"
    },
    pattern: /\b(abstract|final)?\s?(class|interface|trait)\s(\w+)(\sextends\s)?([\w\\]*)?(\simplements\s)?([\w\\]*)?\s?\{?(\n|\})/g
}, {
    name: "keyword.static",
    pattern: /self::|static::/g
}, {
    matches: {
        1: "storage.function",
        2: "support.magic"
    },
    pattern: /(function)\s(__.*?)(?=\()/g
}, {
    matches: {
        1: "keyword.new",
        2: {
            name: "support.class",
            pattern: /\w+/g
        }
    },
    pattern: /\b(new)\s([^\$].*?)(?=\)|\(|;)/g
}, {
    matches: {
        1: {
            name: "support.class",
            pattern: /\w+/g
        },
        2: "keyword.static"
    },
    pattern: /([\w\\]*?)(::)(?=\b|\$)/g
}, {
    matches: {
        2: {
            name: "support.class",
            pattern: /\w+/g
        }
    },
    pattern: /(\(|,\s?)([\w\\]*?)(?=\s\$)/g
}]), Rainbow.extend("python", [{
    name: "variable.self",
    pattern: /self/g
}, {
    name: "constant.language",
    pattern: /None|True|False|NotImplemented|\.\.\./g
}, {
    name: "support.object",
    pattern: /object/g
}, {
    name: "support.function.python",
    pattern: /\b(bs|divmod|input|open|staticmethod|all|enumerate|int|ord|str|any|eval|isinstance|pow|sum|basestring|execfile|issubclass|print|super|bin|file|iter|property|tuple|bool|filter|len|range|type|bytearray|float|list|raw_input|unichr|callable|format|locals|reduce|unicode|chr|frozenset|long|reload|vars|classmethod|getattr|map|repr|xrange|cmp|globals|max|reversed|zip|compile|hasattr|memoryview|round|__import__|complex|hash|min|set|apply|delattr|help|next|setattr|buffer|dict|hex|object|slice|coerce|dir|id|oct|sorted|intern)(?=\()/g
}, {
    matches: {
        1: "keyword"
    },
    pattern: /\b(pass|lambda|with|is|not|in|from|elif|raise|del)(?=\(|\b)/g
}, {
    matches: {
        1: "storage.class",
        2: "entity.name.class",
        3: "entity.other.inherited-class"
    },
    pattern: /(class)\s+(\w+)\((\w+?)\)/g
}, {
    matches: {
        1: "storage.function",
        2: "support.magic"
    },
    pattern: /(def)\s+(__\w+)(?=\()/g
}, {
    name: "support.magic",
    pattern: /__(name)__/g
}, {
    matches: {
        1: "keyword.control",
        2: "support.exception.type"
    },
    pattern: /(except) (\w+):/g
}, {
    matches: {
        1: "storage.function",
        2: "entity.name.function"
    },
    pattern: /(def)\s+(\w+)(?=\()/g
}, {
    name: "entity.name.function.decorator",
    pattern: /@([\w\.]+)/g
}, {
    name: "comment.docstring",
    pattern: /('{3}|"{3})[\s\S]*?\1/gm
}]), Rainbow.extend("r", [{
    matches: {
        1: {
            name: "keyword.operator",
            pattern: /\=|<\-|&lt;-/g
        },
        2: {
            name: "string",
            matches: {
                name: "constant.character.escape",
                pattern: /\\('|"){1}/g
            }
        }
    },
    pattern: /(\(|\s|\[|\=|:)(('|")([^\\\1]|\\.)*?(\3))/gm
}, {
    matches: {
        1: "constant.language"
    },
    pattern: /\b(NULL|NA|TRUE|FALSE|T|F|NaN|Inf|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/g
}, {
    matches: {
        1: "constant.symbol"
    },
    pattern: /[^0-9a-zA-Z\._](LETTERS|letters|month\.(abb|name)|pi)/g
}, {
    name: "keyword.operator",
    pattern: /&lt;-|<-|-|==|&lt;=|<=|&gt;>|>=|<|>|&amp;&amp;|&&|&amp;|&|!=|\|\|?|\*|\+|\^|\/|%%|%\/%|\=|%in%|%\*%|%o%|%x%|\$|:|~|\[{1,2}|\]{1,2}/g
}, {
    matches: {
        1: "storage",
        3: "entity.function"
    },
    pattern: /(\s|^)(.*)(?=\s?=\s?function\s\()/g
}, {
    matches: {
        1: "storage.function"
    },
    pattern: /[^a-zA-Z0-9._](function)(?=\s*\()/g
}, {
    matches: {
        1: "namespace",
        2: "keyword.operator",
        3: "function.call"
    },
    pattern: /([a-zA-Z][a-zA-Z0-9._]+)([:]{2,3})([.a-zA-Z][a-zA-Z0-9._]*(?=\s*\())\b/g
}, {
    name: "support.function",
    pattern: /(^|[^0-9a-zA-Z\._])(array|character|complex|data\.frame|double|integer|list|logical|matrix|numeric|vector)(?=\s*\()/g
}]), Rainbow.extend("ruby", [{
    matches: {
        1: "variable.language",
        2: {
            language: null
        }
    },
    pattern: /^(__END__)\n((?:.*\n)*)/gm
}, {
    name: "string",
    matches: {
        1: "string.open",
        2: [{
            name: "string.interpolation",
            matches: {
                1: "string.open",
                2: {
                    language: "ruby"
                },
                3: "string.close"
            },
            pattern: /(\#\{)(.*?)(\})/g
        }],
        3: "string.close"
    },
    pattern: /("|`)(.*?[^\\\1])?(\1)/g
}, {
    name: "string",
    pattern: /('|"|`)([^\\\1\n]|\\.)*?\1/g
}, {
    name: "string",
    pattern: /%[qQ](?=(\(|\[|\{|&lt;|.)(.*?)(?:'|\)|\]|\}|&gt;|\1))(?:\(\2\)|\[\2\]|\{\2\}|\&lt;\2&gt;|\1\2\1)/g
}, {
    matches: {
        1: "string",
        2: "string",
        3: "string"
    },
    pattern: /(&lt;&lt;)(\w+).*?$([\s\S]*?^\2)/gm
}, {
    matches: {
        1: "string",
        2: "string",
        3: "string"
    },
    pattern: /(&lt;&lt;\-)(\w+).*?$([\s\S]*?\2)/gm
}, {
    name: "string.regexp",
    matches: {
        1: "string.regexp",
        2: {
            name: "string.regexp",
            pattern: /\\(.){1}/g
        },
        3: "string.regexp",
        4: "string.regexp"
    },
    pattern: /(\/)(.*?)(\/)([a-z]*)/g
}, {
    name: "string.regexp",
    matches: {
        1: "string.regexp",
        2: {
            name: "string.regexp",
            pattern: /\\(.){1}/g
        },
        3: "string.regexp",
        4: "string.regexp"
    },
    pattern: /%r(?=(\(|\[|\{|&lt;|.)(.*?)('|\)|\]|\}|&gt;|\1))(?:\(\2\)|\[\2\]|\{\2\}|\&lt;\2&gt;|\1\2\1)([a-z]*)/g
}, {
    name: "comment",
    pattern: /#.*$/gm
}, {
    name: "comment",
    pattern: /^\=begin[\s\S]*?\=end$/gm
}, {
    matches: {
        1: "constant"
    },
    pattern: /(\w+:)[^:]/g
}, {
    matches: {
        1: "constant.symbol"
    },
    pattern: /[^:](:(?:\w+|(?=['"](.*?)['"])(?:"\2"|'\2')))/g
}, {
    name: "constant.numeric",
    pattern: /\b(0x[\da-f]+|\d+)\b/g
}, {
    name: "support.class",
    pattern: /\b[A-Z]\w*(?=((\.|::)[A-Za-z]|\[))/g
}, {
    name: "constant",
    pattern: /\b[A-Z]\w*\b/g
}, {
    matches: {
        1: "storage.class",
        2: "entity.name.class",
        3: "entity.other.inherited-class"
    },
    pattern: /\s*(class)\s+((?:(?:::)?[A-Z]\w*)+)(?:\s+&lt;\s+((?:(?:::)?[A-Z]\w*)+))?/g
}, {
    matches: {
        1: "storage.module",
        2: "entity.name.class"
    },
    pattern: /\s*(module)\s+((?:(?:::)?[A-Z]\w*)+)/g
}, {
    name: "variable.global",
    pattern: /\$([a-zA-Z_]\w*)\b/g
}, {
    name: "variable.class",
    pattern: /@@([a-zA-Z_]\w*)\b/g
}, {
    name: "variable.instance",
    pattern: /@([a-zA-Z_]\w*)\b/g
}, {
    matches: {
        1: "keyword.control"
    },
    pattern: /[^\.]\b(BEGIN|begin|case|class|do|else|elsif|END|end|ensure|for|if|in|module|rescue|then|unless|until|when|while)\b(?![?!])/g
}, {
    matches: {
        1: "keyword.control.pseudo-method"
    },
    pattern: /[^\.]\b(alias|alias_method|break|next|redo|retry|return|super|undef|yield)\b(?![?!])|\bdefined\?|\bblock_given\?/g
}, {
    matches: {
        1: "constant.language"
    },
    pattern: /\b(nil|true|false)\b(?![?!])/g
}, {
    matches: {
        1: "variable.language"
    },
    pattern: /\b(__(FILE|LINE)__|self)\b(?![?!])/g
}, {
    matches: {
        1: "keyword.special-method"
    },
    pattern: /\b(require|gem|initialize|new|loop|include|extend|raise|attr_reader|attr_writer|attr_accessor|attr|catch|throw|private|module_function|public|protected)\b(?![?!])/g
}, {
    name: "keyword.operator",
    pattern: /\s\?\s|=|&lt;&lt;|&lt;&lt;=|%=|&=|\*=|\*\*=|\+=|\-=|\^=|\|{1,2}=|&lt;&lt;|&lt;=&gt;|&lt;(?!&lt;|=)|&gt;(?!&lt;|=|&gt;)|&lt;=|&gt;=|===|==|=~|!=|!~|%|&amp;|\*\*|\*|\+|\-|\/|\||~|&gt;&gt;/g
}, {
    matches: {
        1: "keyword.operator.logical"
    },
    pattern: /[^\.]\b(and|not|or)\b/g
}, {
    matches: {
        1: "storage.function",
        2: "entity.name.function"
    },
    pattern: /(def)\s(.*?)(?=(\s|\())/g
}], !0), Rainbow.extend("scheme", [{
    name: "plain",
    pattern: /&gt;|&lt;/g
}, {
    name: "comment",
    pattern: /;.*$/gm
}, {
    name: "constant.language",
    pattern: /#t|#f|'\(\)/g
}, {
    name: "constant.symbol",
    pattern: /'[^()\s#]+/g
}, {
    name: "constant.number",
    pattern: /\b\d+(?:\.\d*)?\b/g
}, {
    name: "string",
    pattern: /".+?"/g
}, {
    matches: {
        1: "storage.function",
        2: "variable"
    },
    pattern: /\(\s*(define)\s+\(?(\S+)/g
}, {
    matches: {
        1: "keyword"
    },
    pattern: /\(\s*(begin|define\-syntax|if|lambda|quasiquote|quote|set!|syntax\-rules|and|and\-let\*|case|cond|delay|do|else|or|let|let\*|let\-syntax|letrec|letrec\-syntax)(?=[\]()\s#])/g
}, {
    matches: {
        1: "entity.function"
    },
    pattern: /\(\s*(eqv\?|eq\?|equal\?|number\?|complex\?|real\?|rational\?|integer\?|exact\?|inexact\?|=|<|>|<=|>=|zero\?|positive\?|negative\?|odd\?|even\?|max|min|\+|\-|\*|\/|abs|quotient|remainder|modulo|gcd|lcm|numerator|denominator|floor|ceiling|truncate|round|rationalize|exp|log|sin|cos|tan|asin|acos|atan|sqrt|expt|make\-rectangular|make\-polar|real\-part|imag\-part|magnitude|angle|exact\->inexact|inexact\->exact|number\->string|string\->number|not|boolean\?|pair\?|cons|car|cdr|set\-car!|set\-cdr!|caar|cadr|cdar|cddr|caaar|caadr|cadar|caddr|cdaar|cdadr|cddar|cdddr|caaaar|caaadr|caadar|caaddr|cadaar|cadadr|caddar|cadddr|cdaaar|cdaadr|cdadar|cdaddr|cddaar|cddadr|cdddar|cddddr|null\?|list\?|list|length|append|reverse|list\-tail|list\-ref|memq|memv|member|assq|assv|assoc|symbol\?|symbol\->string|string\->symbol|char\?|char=\?|char<\?|char>\?|char<=\?|char>=\?|char\-ci=\?|char\-ci<\?|char\-ci>\?|char\-ci<=\?|char\-ci>=\?|char\-alphabetic\?|char\-numeric\?|char\-whitespace\?|char\-upper\-case\?|char\-lower\-case\?|char\->integer|integer\->char|char\-upcase|char\-downcase|string\?|make\-string|string|string\-length|string\-ref|string\-set!|string=\?|string\-ci=\?|string<\?|string>\?|string<=\?|string>=\?|string\-ci<\?|string\-ci>\?|string\-ci<=\?|string\-ci>=\?|substring|string\-append|string\->list|list\->string|string\-copy|string\-fill!|vector\?|make\-vector|vector|vector\-length|vector\-ref|vector\-set!|vector\->list|list\->vector|vector\-fill!|procedure\?|apply|map|for\-each|force|call\-with\-current\-continuation|call\/cc|values|call\-with\-values|dynamic\-wind|eval|scheme\-report\-environment|null\-environment|interaction\-environment|call\-with\-input\-file|call\-with\-output\-file|input\-port\?|output\-port\?|current\-input\-port|current\-output\-port|with\-input\-from\-file|with\-output\-to\-file|open\-input\-file|open\-output\-file|close\-input\-port|close\-output\-port|read|read\-char|peek\-char|eof\-object\?|char\-ready\?|write|display|newline|write\-char|load|transcript\-on|transcript\-off)(?=[\]()\s#])/g
}], !0), Rainbow.extend("shell", [{
    name: "shell",
    matches: {
        1: {
            language: "shell"
        }
    },
    pattern: /\$\(([\s\S]*?)\)/gm
}, {
    matches: {
        2: "string"
    },
    pattern: /(\(|\s|\[|\=)(('|")[\s\S]*?(\3))/gm
}, {
    name: "keyword.operator",
    pattern: /&lt;|&gt;|&amp;/g
}, {
    name: "comment",
    pattern: /\#[\s\S]*?$/gm
}, {
    name: "storage.function",
    pattern: /(.+?)(?=\(\)\s{0,}\{)/g
}, {
    name: "support.command",
    pattern: /\b(echo|rm|ls|(mk|rm)dir|cd|find|cp|exit|pwd|exec|trap|source|shift|unset)/g
}, {
    matches: {
        1: "keyword"
    },
    pattern: /\b(break|case|continue|do|done|elif|else|esac|eval|export|fi|for|function|if|in|local|return|set|then|unset|until|while)(?=\(|\b)/g
}], !0), Rainbow.extend("smalltalk", [{
    name: "keyword.pseudovariable",
    pattern: /self|thisContext/g
}, {
    name: "keyword.constant",
    pattern: /false|nil|true/g
}, {
    name: "string",
    pattern: /'([^']|'')*'/g
}, {
    name: "string.symbol",
    pattern: /#\w+|#'([^']|'')*'/g
}, {
    name: "string.character",
    pattern: /\$\w+/g
}, {
    name: "comment",
    pattern: /"([^"]|"")*"/g
}, {
    name: "constant.numeric",
    pattern: /-?\d+(\.\d+)?((r-?|s)[A-Za-z0-9]+|e-?[0-9]+)?/g
}, {
    name: "entity.name.class",
    pattern: /\b[A-Z]\w*/g
}, {
    name: "entity.name.function",
    pattern: /\b[a-z]\w*:?/g
}, {
    name: "entity.name.binary",
    pattern: /(&lt;|&gt;|&amp;|[=~\|\\\/!@*\-_+])+/g
}, {
    name: "operator.delimiter",
    pattern: /;[\(\)\[\]\{\}]|#\[|#\(^\./g
}], !0);
! function(t, e, i, o) {
    function n(e, i) {
        this.element = e, this.options = t.extend({}, r, i), this.scroll_timer = null, this._defaults = r, this._name = l, this.init()
    }
    var l = "readingTime",
        r = {
            bubble: "#scrollbubble"
        };
    n.prototype = {
        init: function() {
            t(e).scroll(t.proxy(this.updateTime, this)), t('<div id="scrollbubble"></div>').appendTo("body"), t('<style>#scrollbubble{display:none;position:fixed;bottom:20px;right:20px;z-index:500;background-color:#F0F0F0;color:#808080;border-radius:3px;font-family:Georgia;font-size:12px;text-transform:uppercase;letter-spacing:1px;padding:10px 20px}#scrollbubble:after{content:" ";position:absolute;top:50%;right:-8px;height:0;width:0;margin-top:-4px;border:4px solid transparent;border-left-color:#F0F0F0}</style>').appendTo("body")
        },
        updateTime: function() {
            var o = 0,
                n = t(this.options.bubble),
                l = t(this.element),
                r = t(e).height(),
                s = r / t(i).height() * r,
                a = t(e).scrollTop() / (t(i).height() - r),
                o = (a * (r - s) + s / 2 - n.height() / 2, this.calculate_total_time_words(l, this.element) / 60),
                h = Math.ceil(o - o * a),
                u = "";
            h > 1 ? u = h + " minutes left" : a >= 1 ? u = "Thanks for reading" : 1 >= h && (u = "1 minute left"), n.text(u).fadeIn(500), null !== this.scroll_timer && clearTimeout(this.scroll_timer), this.scroll_timer = setTimeout(function() {
                n.fadeOut()
            }, 1500)
        },
        calculate_total_time_words: function(e, i) {
            var o = 0;
            return e.each(function() {
                o += Math.round(60 * t(i).text().split(" ").length / 200)
            }), o
        }
    }, t.fn[l] = function(e) {
        return this.each(function() {
            t.data(this, "plugin_" + l) || t.data(this, "plugin_" + l, new n(this, e))
        })
    }
}(jQuery, window, document);
(function() {
    var t = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        },
        e = [].slice;
    ! function(t, e) {
        return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(n) {
            return e(n, t)
        }) : e(t.jQuery, t)
    }(window, function(n, o) {
        var r, i, l, s, c, u, a, f, h, d, p, v, y, w, g, S;
        return r = n(o), f = t.call(o, "ontouchstart") >= 0, s = {
            horizontal: {},
            vertical: {}
        }, c = 1, a = {}, u = "waypoints-context-id", p = "resize.waypoints", v = "scroll.waypoints", y = 1, w = "waypoints-waypoint-ids", g = "waypoint", S = "waypoints", i = function() {
            function t(t) {
                var e = this;
                this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + c++, this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, this.element[u] = this.id, a[this.id] = this, t.bind(v, function() {
                    var t;
                    return e.didScroll || f ? void 0 : (e.didScroll = !0, t = function() {
                        return e.doScroll(), e.didScroll = !1
                    }, o.setTimeout(t, n[S].settings.scrollThrottle))
                }), t.bind(p, function() {
                    var t;
                    return e.didResize ? void 0 : (e.didResize = !0, t = function() {
                        return n[S]("refresh"), e.didResize = !1
                    }, o.setTimeout(t, n[S].settings.resizeThrottle))
                })
            }
            return t.prototype.doScroll = function() {
                var t, e = this;
                return t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !f || t.vertical.oldScroll && t.vertical.newScroll || n[S]("refresh"), n.each(t, function(t, o) {
                    var r, i, l;
                    return l = [], i = o.newScroll > o.oldScroll, r = i ? o.forward : o.backward, n.each(e.waypoints[t], function(t, e) {
                        var n, r;
                        return o.oldScroll < (n = e.offset) && n <= o.newScroll ? l.push(e) : o.newScroll < (r = e.offset) && r <= o.oldScroll ? l.push(e) : void 0
                    }), l.sort(function(t, e) {
                        return t.offset - e.offset
                    }), i || l.reverse(), n.each(l, function(t, e) {
                        return e.options.continuous || t === l.length - 1 ? e.trigger([r]) : void 0
                    })
                }), this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            }, t.prototype.refresh = function() {
                var t, e, o, r = this;
                return o = n.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
                    horizontal: {
                        contextOffset: o ? 0 : e.left,
                        contextScroll: o ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: o ? 0 : e.top,
                        contextScroll: o ? 0 : this.oldScroll.y,
                        contextDimension: o ? n[S]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, n.each(t, function(t, e) {
                    return n.each(r.waypoints[t], function(t, o) {
                        var r, i, l, s, c;
                        return r = o.options.offset, l = o.offset, i = n.isWindow(o.element) ? 0 : o.$element.offset()[e.offsetProp], n.isFunction(r) ? r = r.apply(o.element) : "string" == typeof r && (r = parseFloat(r), o.options.offset.indexOf("%") > -1 && (r = Math.ceil(e.contextDimension * r / 100))), o.offset = i - e.contextOffset + e.contextScroll - r, o.options.onlyOnScroll && null != l || !o.enabled ? void 0 : null !== l && l < (s = e.oldScroll) && s <= o.offset ? o.trigger([e.backward]) : null !== l && l > (c = e.oldScroll) && c >= o.offset ? o.trigger([e.forward]) : null === l && e.oldScroll >= o.offset ? o.trigger([e.forward]) : void 0
                    })
                })
            }, t.prototype.checkEmpty = function() {
                return n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([p, v].join(" ")), delete a[this.id]) : void 0
            }, t
        }(), l = function() {
            function t(t, e, o) {
                var r, i;
                "bottom-in-view" === o.offset && (o.offset = function() {
                    var t;
                    return t = n[S]("viewportHeight"), n.isWindow(e.element) || (t = e.$element.height()), t - n(this).outerHeight()
                }), this.$element = t, this.element = t[0], this.axis = o.horizontal ? "horizontal" : "vertical", this.callback = o.handler, this.context = e, this.enabled = o.enabled, this.id = "waypoints" + y++, this.offset = null, this.options = o, e.waypoints[this.axis][this.id] = this, s[this.axis][this.id] = this, r = null != (i = this.element[w]) ? i : [], r.push(this.id), this.element[w] = r
            }
            return t.prototype.trigger = function(t) {
                return this.enabled ? (null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0) : void 0
            }, t.prototype.disable = function() {
                return this.enabled = !1
            }, t.prototype.enable = function() {
                return this.context.refresh(), this.enabled = !0
            }, t.prototype.destroy = function() {
                return delete s[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, t.getWaypointsByElement = function(t) {
                var e, o;
                return (o = t[w]) ? (e = n.extend({}, s.horizontal, s.vertical), n.map(o, function(t) {
                    return e[t]
                })) : []
            }, t
        }(), d = {
            init: function(t, e) {
                var o;
                return e = n.extend({}, n.fn[g].defaults, e), null == (o = e.handler) && (e.handler = t), this.each(function() {
                    var t, o, r, s;
                    return t = n(this), r = null != (s = e.context) ? s : n.fn[g].defaults.context, n.isWindow(r) || (r = t.closest(r)), r = n(r), o = a[r[0][u]], o || (o = new i(r)), new l(t, o, e)
                }), n[S]("refresh"), this
            },
            disable: function() {
                return d._invoke.call(this, "disable")
            },
            enable: function() {
                return d._invoke.call(this, "enable")
            },
            destroy: function() {
                return d._invoke.call(this, "destroy")
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    return e > 0 ? t.push(n[e - 1]) : void 0
                })
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    return e < n.length - 1 ? t.push(n[e + 1]) : void 0
                })
            },
            _traverse: function(t, e, r) {
                var i, l;
                return null == t && (t = "vertical"), null == e && (e = o), l = h.aggregate(e), i = [], this.each(function() {
                    var e;
                    return e = n.inArray(this, l[t]), r(i, e, l[t])
                }), this.pushStack(i)
            },
            _invoke: function(t) {
                return this.each(function() {
                    var e;
                    return e = l.getWaypointsByElement(this), n.each(e, function(e, n) {
                        return n[t](), !0
                    })
                }), this
            }
        }, n.fn[g] = function() {
            var t, o;
            return o = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], d[o] ? d[o].apply(this, t) : n.isFunction(o) ? d.init.apply(this, arguments) : n.isPlainObject(o) ? d.init.apply(this, [null, o]) : o ? n.error("The " + o + " method does not exist in jQuery Waypoints.") : n.error("jQuery Waypoints needs a callback function or handler option.")
        }, n.fn[g].defaults = {
            context: o,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, h = {
            refresh: function() {
                return n.each(a, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return null != (t = o.innerHeight) ? t : r.height()
            },
            aggregate: function(t) {
                var e, o, r;
                return e = s, t && (e = null != (r = a[n(t)[0][u]]) ? r.waypoints : void 0), e ? (o = {
                    horizontal: [],
                    vertical: []
                }, n.each(o, function(t, r) {
                    return n.each(e[t], function(t, e) {
                        return r.push(e)
                    }), r.sort(function(t, e) {
                        return t.offset - e.offset
                    }), o[t] = n.map(r, function(t) {
                        return t.element
                    }), o[t] = n.unique(o[t])
                }), o) : []
            },
            above: function(t) {
                return null == t && (t = o), h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                return null == t && (t = o), h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                return null == t && (t = o), h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                return null == t && (t = o), h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return d[t] = e
            },
            _invoke: function(t) {
                var e;
                return e = n.extend({}, s.vertical, s.horizontal), n.each(e, function(e, n) {
                    return n[t](), !0
                })
            },
            _filter: function(t, e, o) {
                var r, i;
                return (r = a[n(t)[0][u]]) ? (i = [], n.each(r.waypoints[e], function(t, e) {
                    return o(r, e) ? i.push(e) : void 0
                }), i.sort(function(t, e) {
                    return t.offset - e.offset
                }), n.map(i, function(t) {
                    return t.element
                })) : []
            }
        }, n[S] = function() {
            var t, n;
            return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], h[n] ? h[n].apply(null, t) : h.aggregate.call(null, n)
        }, n[S].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, r.on("load.waypoints", function() {
            return n[S]("refresh")
        })
    })
}).call(this);
$(document).ready(function() {
    function e() {
        if ("" !== config.disqus_shortname) {
            var e = config.disqus_shortname;
            ! function() {
                var t = document.createElement("script");
                t.type = "text/javascript", t.async = !0, t.src = "//" + e + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t)
            }()
        } else config.google_comments === !0 && $.getScript("https://apis.google.com/js/plusone.js").done(function(e, t) {
            gapi.comments.render("g-comments", {
                href: window.location,
                width: "760",
                first_party_property: "BLOGGER",
                view_type: "FILTERED_POSTMOD"
            })
        })
    }
    if ($("pre code").each(function(e) {
            "undefined" != typeof $(this).attr("data-language") && $(this).attr("data-language") !== !1 || $(this).attr("data-language", "generic")
        }), config.highlightcode === !0 && Rainbow.color(), $("#cover").hasClass("featured") ? $(".posts").waypoint(function(e) {
            "down" === e && ($(".profile").addClass("stuck").removeClass("featured"), $(".flowbar").fadeIn(400)), "up" === e && ($(".profile").removeClass("stuck").addClass("featured"), $(".flowbar").fadeOut(400))
        }) : $("#posttitle, .first").waypoint(function(e) {
            "down" === e && ($(".profile").addClass("stuck"), $(".flowbar").fadeIn(400)), "up" === e && ($(".profile").removeClass("stuck"), $(".flowbar").fadeOut(400))
        }), $(".postprofile").waypoint(function(e) {
            "down" === e && $(".profile").addClass("hide"), "up" === e && $(".profile").removeClass("hide")
        }, {
            offset: "100%"
        }), 0 === $(".pagination .smallbutton").length && $(".pagination").hide(), config.show_ecko_disclaimer === !1 && $(".copyright .ecko").hide(), $("#posttitle").length) {
        var t = [];
        $(".postbody h2").waypoint(function(e) {
            var o = $(this);
            "down" === e && $(".flowbar h2").fadeOut(function() {
                t.push($(".flowbar h2").text()), $(this).text($(o).text()).fadeIn()
            }), "up" === e && $(".flowbar h2").fadeOut(function() {
                $(this).text(t.pop()).fadeIn()
            })
        })
    }
    $(".postbody").fitVids(), ("" !== config.disqus_shortname && null !== config.disqus_shortname && void 0 !== config.disqus_shortname || config.google_comments === !0) && ($(".comments").show(), config.autoload_comments === !0 && (e(), $(".readmore").fadeOut(400))), $(".readmore").click(function() {
        e(), $(this).fadeOut(400)
    }), "" !== config.analytics_id && null !== config.analytics_id && void 0 !== config.analytics_id && (! function(e, t, o, n, i, a, s) {
        e.GoogleAnalyticsObject = i, e[i] = e[i] || function() {
            (e[i].q = e[i].q || []).push(arguments)
        }, e[i].l = 1 * new Date, a = t.createElement(o), s = t.getElementsByTagName(o)[0], a.async = 1, a.src = n, s.parentNode.insertBefore(a, s)
    }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", config.analytics_id, "auto"), ga("send", "pageview")), config.readingtime === !0 && $(".postbody").readingTime(), $(".movedown").click(function() {
        $("html, body").animate({
            scrollTop: $(".cover").height()
        }, 750)
    }), $(".footnote").click(function() {
        return $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - 100
        }, 500), !1
    }), $(".inlinemenu ul").hide(), $(".inlinemenu .graybar").click(function() {
        $(".inlinemenu ul").slideToggle()
    })
});