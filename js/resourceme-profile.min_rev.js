String.prototype.repeat || (String.prototype.repeat = function (a) {
    return a = Math.max(a || 0, 0), (new Array(a + 1)).join(this.valueOf())
}), String.prototype.startsWith || (String.prototype.startsWith = function (a, b) {
    return b = Math.max(b || 0, 0), this.indexOf(a) == b
}), String.prototype.endsWith || (String.prototype.endsWith = function (a, b) {
    b = Math.max(b || 0, 0);
    var c = String(a), d = this.lastIndexOf(c);
    return d >= 0 && d == this.length - c.length - b
}), String.prototype.contains || (String.prototype.contains = function (a, b) {
    return b = Math.max(b || 0, 0), this.indexOf(a) != -1
}), String.prototype.toArray || (String.prototype.toArray = function () {
    return this.split("")
}), String.prototype.reverse || (String.prototype.reverse = function () {
    return this.split("").reverse().join("")
}), String.validBrackets = function (a) {
    if (!a)return !1;
    var b = "''\"\"`'``", c = "<>{}[]()%%||//\\\\", d = "/**/<??><%%>(**)";
    return a.length == 2 && (b + c).indexOf(a) != -1 || a.length == 4 && d.indexOf(a) != -1
}, String.prototype.brace = String.prototype.bracketize = function (a) {
    var b = this;
    if (!String.validBrackets(a))return b;
    var c = a.length / 2;
    return a.substr(0, c) + b.toString() + a.substr(c)
}, String.prototype.unbrace = String.prototype.unbracketize = function (a) {
    var b = this;
    if (!a) {
        var c = b.length;
        for (var d = 2; d >= 1; d--) {
            a = b.substring(0, d) + b.substring(c - d);
            if (String.validBrackets(a))return b.substring(d, c - d)
        }
    }
    if (!String.validBrackets(a))return b;
    var e = a.length / 2, d = b.indexOf(a.substr(0, e)), f = b.lastIndexOf(a.substr(e));
    return d == 0 && f == b.length - e && (b = b.substring(d + e, f)), b
}, Number.prototype.radix = function (a, b, c) {
    return this.toString(a).padding(-b, c)
}, Number.prototype.bin = function (a, b) {
    return this.radix(2, a, b)
}, Number.prototype.oct = function (a, b) {
    return this.radix(8, a, b)
}, Number.prototype.dec = function (a, b) {
    return this.radix(10, a, b)
}, Number.prototype.hexl = function (a, b) {
    return this.radix(16, a, b)
}, Number.prototype.hex = function (a, b) {
    return this.radix(16, a, b).toUpperCase()
}, Number.prototype.human = function (a, b) {
    var c = Math.abs(this), d = this, e = "", f = arguments.callee.add(b);
    for (var g = f.length - 1; g >= 0; g--)if (c >= f[g].d) {
        d /= f[g].d, e = f[g].s;
        break
    }
    return d.toFixed(a) + e
}, Number.prototype.human.add = function (a, b, c) {
    var d = a ? "div2" : "div10", e = Number.prototype.human[d] = Number.prototype.human[d] || [];
    return arguments.length < 3 ? e : (e.push({s: b, d: Math.abs(c)}), e.sort(function (a, b) {
            return a.d - b.d
        }), e)
}, Number.prototype.human.add(!0, "K", 1024), Number.prototype.human.add(!0, "M", 1 << 20), Number.prototype.human.add(!0, "G", 1 << 30), Number.prototype.human.add(!0, "T", Math.pow(2, 40)), Number.prototype.human.add(!1, "K", 1e3), Number.prototype.human.add(!1, "M", 1e6), Number.prototype.human.add(!1, "G", 1e9), Number.prototype.human.add(!1, "T", 1e12), Number.fromHuman = function (a, b) {
    var c = String(a).match(/^([\-\+]?\d+\.?\d*)([A-Z])?$/);
    if (!c)return Number.NaN;
    if (!c[2])return +c[1];
    var d = Number.prototype.human.add(b);
    for (var e = 0; e < d.length; e++)if (d[e].s == c[2])return c[1] * d[e].d;
    return Number.NaN
}, String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "")
}), String.prototype.trimLeft || (String.prototype.trimLeft = function () {
    return this.replace(/(^\s*)/, "")
}), String.prototype.trimRight || (String.prototype.trimRight = function () {
    return this.replace(/(\s*$)/g, "")
}), String.prototype.dup = function () {
    var a = this.valueOf();
    return a + a
}, String.prototype.padding = function (a, b) {
    var c = this.valueOf();
    if (Math.abs(a) <= c.length)return c;
    var d = Math.max(Math.abs(a) - this.length || 0, 0), e = Array(d + 1).join(String(b || " ").charAt(0));
    return a < 0 ? e + c : c + e
}, String.prototype.padLeft = function (a, b) {
    return this.padding(-Math.abs(a), b)
}, String.prototype.alignRight = String.prototype.padLeft, String.prototype.padRight = function (a, b) {
    return this.padding(Math.abs(a), b)
}, String.prototype.format = function () {
    var a = arguments;
    return this.replace(/\{(\d+)\}/g, function (b, c) {
        return a[c] !== void 0 ? a[c] : b
    })
}, String.prototype.alignLeft = String.prototype.padRight, String.prototype.sprintf = function () {
    var a = arguments, b = 0, c, d, e;
    return this.replace(String.prototype.sprintf.re, function () {
        if (arguments[0] == "%%")return "%";
        c = [];
        for (var e = 0; e < arguments.length; e++)c[e] = arguments[e] || "";
        return c[3] = c[3].slice(-1) || " ", d = a[+c[1] ? c[1] - 1 : b++], String.prototype.sprintf[c[6]](d, c)
    })
}, String.prototype.sprintf.re = /%%|%(?:(\d+)[\$#])?([+-])?('.|0| )?(\d*)(?:\.(\d+))?([bcdfosuxXhH])/g, String.prototype.sprintf.b = function (a, b) {
    return Number(a).bin(b[2] + b[4], b[3])
}, String.prototype.sprintf.c = function (a, b) {
    return String.fromCharCode(a).padding(b[2] + b[4], b[3])
}, String.prototype.sprintf.d = String.prototype.sprintf.u = function (a, b) {
    return Number(a).dec(b[2] + b[4], b[3])
}, String.prototype.sprintf.f = function (a, b) {
    var a = Number(a);
    return b[5] ? a = a.toFixed(b[5]) : b[4] ? a = a.toExponential(b[4]) : a = a.toExponential(), b[2] = b[2] == "-" ? "+" : "-", a.padding(b[2] + b[4], b[3])
}, String.prototype.sprintf.o = function (a, b) {
    return Number(a).oct(b[2] + b[4], b[3])
}, String.prototype.sprintf.s = function (a, b) {
    return String(a).padding(b[2] + b[4], b[3])
}, String.prototype.sprintf.x = function (a, b) {
    return Number(a).hexl(b[2] + b[4], b[3])
}, String.prototype.sprintf.X = function (a, b) {
    return Number(a).hex(b[2] + b[4], b[3])
}, String.prototype.sprintf.h = function (a, b) {
    var a = String.prototype.replace.call(a, /,/g, "");
    return b[2] = b[2] == "-" ? "+" : "-", Number(a).human(b[5], !0).padding(b[2] + b[4], b[3])
}, String.prototype.sprintf.H = function (a, b) {
    var a = String.prototype.replace.call(a, /,/g, "");
    return b[2] = b[2] == "-" ? "+" : "-", Number(a).human(b[5], !1).padding(b[2] + b[4], b[3])
}, String.prototype.compile = function () {
    var a = arguments, b = 0, c, d, e, f = this.replace(/(\\|")/g, "\\$1").replace(String.prototype.sprintf.re, function () {
        if (arguments[0] == "%%")return "%";
        arguments.length = 7, c = [];
        for (var a = 0; a < arguments.length; a++)c[a] = arguments[a] || "";
        return c[3] = c[3].slice(-1) || " ", d = c[1] ? c[1] - 1 : b++, '", String.prototype.sprintf.' + c[6] + "(arguments[" + d + '], ["' + c.join('", "') + '"]), "'
    });
    return Function("", 'return ["' + f + '"].join("")')
}, String.prototype.parseUrl = function () {
    var a = this.match(arguments.callee.re);
    if (!a)return null;
    var b = {
        scheme: a[1] || "",
        subscheme: a[2] || "",
        user: a[3] || "",
        pass: a[4] || "",
        host: a[5],
        port: a[6] || "",
        path: a[7] || "",
        query: a[8] || "",
        fragment: a[9] || ""
    };
    return b
}, String.prototype.parseUrl.re = /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i, String.prototype.camelize = function () {
    return this.replace(/([^-]+)|(?:-(.)([^-]+))/mg, function (a, b, c, d) {
        return (c || "").toUpperCase() + (d || b).toLowerCase()
    })
}, String.prototype.uncamelize = function () {
    return this.replace(/[A-Z]/g, function (a) {
        return "-" + a.toLowerCase()
    })
}, define("String", function () {
});
var ResourceMeConfig = {
    baseUrl: "//www.bergnet.org/people/bergi/",
    app: {
        blog: {
            uri: "https://www.bergnet.org/people/bergi/blog/#blog",
            postBaseUri: "https://www.bergnet.org/people/bergi/blog/"
        }
    }
};
define("config", function () {
}), define("resourceme/resourceme", ["jquery", "String", "config"], function (a) {
    var b = {};
    return b.activeAgent = function (a) {
        if (a === undefined)return b._activeAgent;
        b._activeAgent = a
    }, b.namespace = {}, b.rdf = {}, b.rdf.namespace = {type: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, b.rdfs = {}, b.rdfs.namespace = {
        label: "http://www.w3.org/2000/01/rdf-schema#label",
        comment: "http://www.w3.org/2000/01/rdf-schema#comment"
    }, b.dct = {}, b.dct.namespace = {
        created: "http://purl.org/dc/terms/created",
        description: "http://purl.org/dc/terms/description",
        title: "http://purl.org/dc/terms/title"
    }, b.session = {sessionAgent: null}, b.session.agent = function (a, c) {
        b.session.sessionAgent == null ? this.ajaxCall("getAgent", null, function (c) {
                b.session.sessionAgent = JSON.parse(c), a(b.session.sessionAgent)
            }, c) : a(b.session.sessionAgent)
    }, b.session.ajaxCall = function (b, c, d, e) {
        var f = "method=" + b;
        if (c != null)for (var g in c)f += "&" + g + "=" + JSON.stringify(c[g]);
        a.ajax(ResourceMeConfig.baseUrl + "ajax-session", {type: "POST", data: f, success: d, error: e})
    }, b.utils = {}, b.utils.dateToIsoString = function (a) {
        var b = "%04d-%02d-%02dT%02d:%02d:%02dZ".sprintf(a.getUTCFullYear(), a.getUTCMonth() + 1, a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds());
        return b
    }, b
}), define("resourceme/triplestore", ["jquery", "config"], function (a) {
    var b = {};
    return b = function (a) {
        this.uri = a
    }, b.prototype.findTriples = function (a, b, c) {
        this.ajaxCall("findTriples", {filters: a}, function (a) {
            b(JSON.parse(a))
        }, c)
    }, b.prototype.insertTriples = function (a, b, c) {
        this.ajaxCall("insertTriples", {triples: a}, function (a) {
            b(JSON.parse(a))
        }, c)
    }, b.prototype.updateTriples = function (a, b, c, d) {
        this.ajaxCall("updateTriples", {filters: a, updater: b}, function (a) {
            c(JSON.parse(a))
        }, d)
    }, b.prototype.deleteTriples = function (a, b, c) {
        this.ajaxCall("deleteTriples", {filters: a}, function (a) {
            b(JSON.parse(a))
        }, c)
    }, b.prototype.createNodeId = function (a, b) {
        this.ajaxCall("createNodeId", {}, a, b)
    }, b.prototype.hasTripleAccess = function (a, b, c, d) {
        this.ajaxCall("hasTripleAccess", {triple: a, mode: b}, function (a) {
            c(a == "true")
        }, d)
    }, b.prototype.hasTriplesAccess = function (a, b, c, d) {
        this.ajaxCall("hasTriplesAccess", {triples: a, mode: b}, function (a) {
            c(a == "true")
        }, d)
    }, b.prototype.ajaxCall = function (b, c, d, e) {
        var f = "method=" + escape(b);
        this.uri != null && (f += "&uri=" + escape(this.uri));
        for (var g in c)f += "&" + g + "=" + escape(JSON.stringify(c[g]));
        a.ajax(ResourceMeConfig.baseUrl + "ajax-triplestore", {type: "POST", data: f, success: d, error: e})
    }, b
}), define("resourceme/foaf", ["jquery", "resourceme/resourceme", "resourceme/triplestore"], function (a, b, c) {
    var d = {};
    return d.namespace = {
        Agent: "http://xmlns.com/foaf/0.1/Agent",
        Group: "http://xmlns.com/foaf/0.1/Group",
        OnlineAccount: "http://xmlns.com/foaf/0.1/OnlineAccount",
        Person: "http://xmlns.com/foaf/0.1/Person",
        account: "http://xmlns.com/foaf/0.1/account",
        accountName: "http://xmlns.com/foaf/0.1/accountName",
        accountServiceHomepage: "http://xmlns.com/foaf/0.1/accountServiceHomepage",
        currentProject: "http://xmlns.com/foaf/0.1/currentProject",
        depiction: "http://xmlns.com/foaf/0.1/depiction",
        familyName: "http://xmlns.com/foaf/0.1/familyName",
        givenName: "http://xmlns.com/foaf/0.1/givenName",
        homepage: "http://xmlns.com/foaf/0.1/homepage",
        img: "http://xmlns.com/foaf/0.1/img",
        knows: "http://xmlns.com/foaf/0.1/knows",
        mbox: "http://xmlns.com/foaf/0.1/mbox",
        mbox_sha1sum: "http://xmlns.com/foaf/0.1/mbox_sha1sum",
        member: "http://xmlns.com/foaf/0.1/member",
        name: "http://xmlns.com/foaf/0.1/name",
        nick: "http://xmlns.com/foaf/0.1/nick",
        pastProject: "http://xmlns.com/foaf/0.1/pastProject",
        title: "http://xmlns.com/foaf/0.1/title",
        weblog: "http://xmlns.com/foaf/0.1/weblog"
    }, d.agentCache = {}, d.agentQueue = {}, d.getAgent = function (a, b) {
        if (a in d.agentCache) b(d.agentCache[a]); else if (a in d.agentQueue) d.agentQueue[a].push(b); else {
            d.agentQueue[a] = [b];
            var e = new c(a);
            e.findTriples([{s: a}], function (b) {
                d.agentCache[a] = new d.Agent(a, b);
                for (var c = 0; c < d.agentQueue[a].length; c++)d.agentQueue[a][c](d.agentCache[a]);
                delete d.agentQueue[a]
            })
        }
    }, d.Agent = function (a, b) {
        this.agentUri = a, this.triples = b != null ? b : new Array
    }, d.Agent.prototype.uri = function () {
        return this.agentUri
    }, d.Agent.prototype.depiction = function (a) {
        return this.firstProperty(d.namespace.depiction, a)
    }, d.Agent.prototype.familyName = function (a) {
        return this.firstProperty(d.namespace.familyName, a)
    }, d.Agent.prototype.givenName = function (a) {
        return this.firstProperty(d.namespace.givenName, a)
    }, d.Agent.prototype.img = function (a) {
        return this.firstProperty(d.namespace.img, a)
    }, d.Agent.prototype.name = function (a) {
        return this.firstProperty(d.namespace.name, a)
    }, d.Agent.prototype.nick = function (a) {
        return this.firstProperty(d.namespace.nick, a)
    }, d.Agent.prototype.property = function (a, b) {
        var c = new Array;
        for (var d = 0; d < this.triples.length; d++)this.triples[d].p == a && (b == null || this.triples[d].o_lang == b) && c.push(this.triples[d].o);
        return c
    }, d.Agent.prototype.firstProperty = function (a, b) {
        typeof a != "Array" && (a = [a]);
        for (var c = 0; c < a.length; c++) {
            var d = this.property(a[c], b);
            if (d.length != 0)return d[0]
        }
        return undefined
    }, d
}), define("app/foaf", ["jquery", "resourceme/foaf"], function (a, b) {
    var c = {};
    return c.init = function (a) {
        c.initAgent(a), c.initAgentLight(a)
    }, c.initAgent = function (c) {
        c === undefined && (c = document), a("a.foaf-agent", c).each(function (c, d) {
            b.getAgent(a(d).attr("href"), function (b) {
                if (b == null)return;
                nick = b.nick() != null ? b.nick() : b.name() != null ? b.name() : b.uri(), name = b.name() != null ? b.name() : b.nick() != null ? b.nick() : b.uri(), img = b.img() != null ? b.img() : b.depiction() != null ? b.depiction() : null, a(d).text(name), a(d).popover({html: !0}), a(d).attr("data-original-title", name), img != null && a(d).attr("data-content", '<img src="' + img + '" alt="' + name + '" style="max-width:200px; max-height:200px;"/>')
            })
        })
    }, c.initAgentLight = function (c) {
        c === undefined && (c = document), a("a.foaf-agent-light", c).each(function (c, d) {
            b.getAgent(a(d).attr("href"), function (b) {
                if (b == null)return;
                nick = b.nick() != null ? b.nick() : b.name() != null ? b.name() : b.uri(), name = b.name() != null ? b.name() : b.nick() != null ? b.nick() : b.uri(), a(d).hasClass("append-caret") ? a(d).html(name + '<b class="caret"></b>') : a(d).text(name)
            })
        })
    }, c.agentLink = function (a, b) {
        return '<a href="' + a + '" class="foaf-agent" ' + (b !== undefined ? 'rel="' + b + '"' : "") + ">" + a + "</a>" + '<button class="btn tiny foaf-agent-pingback" data-foaf-uri="' + a + '">Ping</button>'
    }, c
}), define("resourceme/pingback", ["jquery", "resourceme/resourceme", "resourceme/triplestore"], function (a, b, c) {
    var d = {};
    return d.namespace = {
        Container: "http://purl.org/net/pingback/Container",
        Item: "http://purl.org/net/pingback/Item",
        Request: "http://purl.org/net/pingback/Request",
        RequestGuideline: "http://purl.org/net/pingback/RequestGuideline",
        service: "http://purl.org/net/pingback/service",
        source: "http://purl.org/net/pingback/source",
        target: "http://purl.org/net/pingback/target",
        to: "http://purl.org/net/pingback/to"
    }, d.Request = {}, d.Request = function (a) {
        a != null ? this.triples = a : this.triples = new Array
    }, d.Request.load = function (a, b) {
        var e = new c;
        e.findTriples([{s: a}], function (a) {
            b(new d.Request(a))
        })
    }, d.Request.prototype.send = function (b, c) {
        var d = c.success !== undefined ? c.success : function () {
            }, e = c.error !== undefined ? c.error : function () {
            }, f = {};
        this.source() != null && (f.source = this.source()), this.target() != null && (f.target = this.target()), this.comment() != null && (f.comment = this.comment());
        var g = this;
        jQuery.support.cors = !0, a.ajax({
            url: b,
            type: "POST",
            xhrFields: {withCredentials: !0},
            data: f,
            headers: {"Accept-Authentication": "WebID"},
            success: function (a, b, c) {
                d()
            },
            error: function (c, d, f) {
                a.browser.msie ? f.number == -2147024891 ? g.sendFormSubmit(b) : e() : f != "Forbidden" ? g.sendFormSubmit(b) : e()
            }
        })
    }, d.Request.prototype.sendFormSubmit = function (b) {
        var c = '<form id="pingback-form" action="' + b + '" method="POST">';
        this.source() != null && (c += '<input type="hidden" name="source" value="' + this.source() + '" />'), this.target() != null && (c += '<input type="hidden" name="target" value="' + this.target() + '" />'), this.comment() != null && (c += '<input type="hidden" name="comment" value="' + this.comment() + '" />'), c += "</form>", a("body").append(c), a("#pingback-form").submit()
    }, d.Request.prototype.hasWriteAccess = function (a) {
        var b = new c;
        b.hasTriplesAccess(this.triples, "write", a)
    }, d.Request.prototype.remove = function (a) {
        var b = new c, d = this.triples;
        b.deleteTriples(d, function (b) {
            a(d.length == b.length)
        })
    }, d.Request.prototype.source = function (a) {
        return this.property(d.namespace.source, a)
    }, d.Request.prototype.target = function (a) {
        return this.property(d.namespace.target, a)
    }, d.Request.prototype.comment = function (a) {
        return this.property(b.rdfs.namespace.comment, a)
    }, d.Request.prototype.property = function (a, b) {
        if (b === undefined) {
            for (var c = 0; c < this.triples.length; c++)if (this.triples[c].p == a)return this.triples[c].o;
            return undefined
        }
        this.triples.push({p: a, o: b})
    }, d
}), define("resourceme/rdf-object", ["resourceme/triplestore"], function (a) {
    var b = {};
    return b.objectCache = {}, b.objectQueue = {}, b.getObject = function (c, d) {
        if (c in b.objectCache) d(b.objectCache[c]); else if (c in b.objectQueue) b.objectQueue[c].push(d); else {
            b.objectQueue[c] = [d];
            var e = new a(c);
            e.findTriples([{s: c}], function (a) {
                b.objectCache[c] = new b.Object(c, a);
                for (var d = 0; d < b.objectQueue[c].length; d++)b.objectQueue[c][d](b.objectCache[c]);
                delete b.objectQueue[c]
            })
        }
    }, b.Object = function (a, b) {
        this.objectUri = a, this.objectTriples = b != null ? b : new Array
    }, b.Object.prototype.uri = function () {
        return this.objectUri
    }, b.Object.prototype.property = function (a, b) {
        var c = new Array;
        for (var d = 0; d < this.objectTriples.length; d++)this.objectTriples[d].p == a && (b == null || this.objectTriples[d].o_lang == b) && c.push(this.objectTriples[d].o);
        return c
    }, b.Object.prototype.firstProperty = function (a, b) {
        for (var c = 0; c < a.length; c++) {
            var d = this.property(a[c], b);
            if (d.length != 0)return d[0]
        }
        return undefined
    }, b
}), define("app/rdf-object", ["jquery", "resourceme/foaf", "resourceme/rdf-object", "resourceme/resourceme"], function (a, b, c, d) {
    var e = {};
    return e.init = function (a) {
        e.initObject(a), e.initObjectThumbnail(a)
    }, e.initObject = function (e) {
        e === undefined && (e = document), a("a.rdf-object", e).each(function (e, f) {
            c.getObject(a(f).attr("href"), function (c) {
                if (c == null)return;
                var e = [d.rdfs.namespace.label, d.dct.namespace.title, "http://schema.org/name", b.namespace.name], g = [d.rdfs.namespace.comment, d.dct.namespace.description, "http://schema.org/about"], h = ["http://dbpedia.org/ontology/thumbnail", "http://schema.org/thumbnailUrl", b.namespace.img], i = c.firstProperty(e, "en"), j = c.firstProperty(g, "en"), k = c.firstProperty(h);
                if (i != null) {
                    a(f).text(unescape(i));
                    if (j != null) {
                        var l = "";
                        k != null && (l += '<img src="' + k + '" alt="' + unescape(i) + '" style="max-width:200px; max-height:200px;"/>'), l += "<p>" + unescape(j) + "</p>", a(f).popover({html: !0}), a(f).attr("data-original-title", unescape(i)), a(f).attr("data-content", l)
                    }
                }
            })
        })
    }, e.initObjectThumbnail = function (e) {
        e === undefined && (e = document), a("a.rdf-object-thumbnail", e).each(function (e, f) {
            c.getObject(a(f).attr("href"), function (c) {
                if (c == null)return;
                var e = [d.rdfs.namespace.label, d.dct.namespace.title, "http://schema.org/name", b.namespace.name], g = [d.rdfs.namespace.comment, d.dct.namespace.description, "http://schema.org/about"], h = ["http://dbpedia.org/ontology/thumbnail", "http://schema.org/thumbnailUrl", b.namespace.img], i = c.firstProperty(e, "en"), j = c.firstProperty(g, "en"), k = c.firstProperty(h), l = a(f).find("img");
                k != null && a(l).attr("src", k), i != null && a(l).attr("alt", unescape(i)), j != null && i != null && (a(f).popover({html: !0}), a(f).attr("data-original-title", unescape(i)), a(f).attr("data-content", "<p>" + unescape(j) + "</p>"))
            })
        })
    }, e
}), String.prototype.repeat || (String.prototype.repeat = function (a) {
    return a = Math.max(a || 0, 0), (new Array(a + 1)).join(this.valueOf())
}), String.prototype.startsWith || (String.prototype.startsWith = function (a, b) {
    return b = Math.max(b || 0, 0), this.indexOf(a) == b
}), String.prototype.endsWith || (String.prototype.endsWith = function (a, b) {
    b = Math.max(b || 0, 0);
    var c = String(a), d = this.lastIndexOf(c);
    return d >= 0 && d == this.length - c.length - b
}), String.prototype.contains || (String.prototype.contains = function (a, b) {
    return b = Math.max(b || 0, 0), this.indexOf(a) != -1
}), String.prototype.toArray || (String.prototype.toArray = function () {
    return this.split("")
}), String.prototype.reverse || (String.prototype.reverse = function () {
    return this.split("").reverse().join("")
}), String.validBrackets = function (a) {
    if (!a)return !1;
    var b = "''\"\"`'``", c = "<>{}[]()%%||//\\\\", d = "/**/<??><%%>(**)";
    return a.length == 2 && (b + c).indexOf(a) != -1 || a.length == 4 && d.indexOf(a) != -1
}, String.prototype.brace = String.prototype.bracketize = function (a) {
    var b = this;
    if (!String.validBrackets(a))return b;
    var c = a.length / 2;
    return a.substr(0, c) + b.toString() + a.substr(c)
}, String.prototype.unbrace = String.prototype.unbracketize = function (a) {
    var b = this;
    if (!a) {
        var c = b.length;
        for (var d = 2; d >= 1; d--) {
            a = b.substring(0, d) + b.substring(c - d);
            if (String.validBrackets(a))return b.substring(d, c - d)
        }
    }
    if (!String.validBrackets(a))return b;
    var e = a.length / 2, d = b.indexOf(a.substr(0, e)), f = b.lastIndexOf(a.substr(e));
    return d == 0 && f == b.length - e && (b = b.substring(d + e, f)), b
}, Number.prototype.radix = function (a, b, c) {
    return this.toString(a).padding(-b, c)
}, Number.prototype.bin = function (a, b) {
    return this.radix(2, a, b)
}, Number.prototype.oct = function (a, b) {
    return this.radix(8, a, b)
}, Number.prototype.dec = function (a, b) {
    return this.radix(10, a, b)
}, Number.prototype.hexl = function (a, b) {
    return this.radix(16, a, b)
}, Number.prototype.hex = function (a, b) {
    return this.radix(16, a, b).toUpperCase()
}, Number.prototype.human = function (a, b) {
    var c = Math.abs(this), d = this, e = "", f = arguments.callee.add(b);
    for (var g = f.length - 1; g >= 0; g--)if (c >= f[g].d) {
        d /= f[g].d, e = f[g].s;
        break
    }
    return d.toFixed(a) + e
}, Number.prototype.human.add = function (a, b, c) {
    var d = a ? "div2" : "div10", e = Number.prototype.human[d] = Number.prototype.human[d] || [];
    return arguments.length < 3 ? e : (e.push({s: b, d: Math.abs(c)}), e.sort(function (a, b) {
            return a.d - b.d
        }), e)
}, Number.prototype.human.add(!0, "K", 1024), Number.prototype.human.add(!0, "M", 1 << 20), Number.prototype.human.add(!0, "G", 1 << 30), Number.prototype.human.add(!0, "T", Math.pow(2, 40)), Number.prototype.human.add(!1, "K", 1e3), Number.prototype.human.add(!1, "M", 1e6), Number.prototype.human.add(!1, "G", 1e9), Number.prototype.human.add(!1, "T", 1e12), Number.fromHuman = function (a, b) {
    var c = String(a).match(/^([\-\+]?\d+\.?\d*)([A-Z])?$/);
    if (!c)return Number.NaN;
    if (!c[2])return +c[1];
    var d = Number.prototype.human.add(b);
    for (var e = 0; e < d.length; e++)if (d[e].s == c[2])return c[1] * d[e].d;
    return Number.NaN
}, String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "")
}), String.prototype.trimLeft || (String.prototype.trimLeft = function () {
    return this.replace(/(^\s*)/, "")
}), String.prototype.trimRight || (String.prototype.trimRight = function () {
    return this.replace(/(\s*$)/g, "")
}), String.prototype.dup = function () {
    var a = this.valueOf();
    return a + a
}, String.prototype.padding = function (a, b) {
    var c = this.valueOf();
    if (Math.abs(a) <= c.length)return c;
    var d = Math.max(Math.abs(a) - this.length || 0, 0), e = Array(d + 1).join(String(b || " ").charAt(0));
    return a < 0 ? e + c : c + e
}, String.prototype.padLeft = function (a, b) {
    return this.padding(-Math.abs(a), b)
}, String.prototype.alignRight = String.prototype.padLeft, String.prototype.padRight = function (a, b) {
    return this.padding(Math.abs(a), b)
}, String.prototype.format = function () {
    var a = arguments;
    return this.replace(/\{(\d+)\}/g, function (b, c) {
        return a[c] !== void 0 ? a[c] : b
    })
}, String.prototype.alignLeft = String.prototype.padRight, String.prototype.sprintf = function () {
    var a = arguments, b = 0, c, d, e;
    return this.replace(String.prototype.sprintf.re, function () {
        if (arguments[0] == "%%")return "%";
        c = [];
        for (var e = 0; e < arguments.length; e++)c[e] = arguments[e] || "";
        return c[3] = c[3].slice(-1) || " ", d = a[+c[1] ? c[1] - 1 : b++], String.prototype.sprintf[c[6]](d, c)
    })
}, String.prototype.sprintf.re = /%%|%(?:(\d+)[\$#])?([+-])?('.|0| )?(\d*)(?:\.(\d+))?([bcdfosuxXhH])/g, String.prototype.sprintf.b = function (a, b) {
    return Number(a).bin(b[2] + b[4], b[3])
}, String.prototype.sprintf.c = function (a, b) {
    return String.fromCharCode(a).padding(b[2] + b[4], b[3])
}, String.prototype.sprintf.d = String.prototype.sprintf.u = function (a, b) {
    return Number(a).dec(b[2] + b[4], b[3])
}, String.prototype.sprintf.f = function (a, b) {
    var a = Number(a);
    return b[5] ? a = a.toFixed(b[5]) : b[4] ? a = a.toExponential(b[4]) : a = a.toExponential(), b[2] = b[2] == "-" ? "+" : "-", a.padding(b[2] + b[4], b[3])
}, String.prototype.sprintf.o = function (a, b) {
    return Number(a).oct(b[2] + b[4], b[3])
}, String.prototype.sprintf.s = function (a, b) {
    return String(a).padding(b[2] + b[4], b[3])
}, String.prototype.sprintf.x = function (a, b) {
    return Number(a).hexl(b[2] + b[4], b[3])
}, String.prototype.sprintf.X = function (a, b) {
    return Number(a).hex(b[2] + b[4], b[3])
}, String.prototype.sprintf.h = function (a, b) {
    var a = String.prototype.replace.call(a, /,/g, "");
    return b[2] = b[2] == "-" ? "+" : "-", Number(a).human(b[5], !0).padding(b[2] + b[4], b[3])
}, String.prototype.sprintf.H = function (a, b) {
    var a = String.prototype.replace.call(a, /,/g, "");
    return b[2] = b[2] == "-" ? "+" : "-", Number(a).human(b[5], !1).padding(b[2] + b[4], b[3])
}, String.prototype.compile = function () {
    var a = arguments, b = 0, c, d, e, f = this.replace(/(\\|")/g, "\\$1").replace(String.prototype.sprintf.re, function () {
        if (arguments[0] == "%%")return "%";
        arguments.length = 7, c = [];
        for (var a = 0; a < arguments.length; a++)c[a] = arguments[a] || "";
        return c[3] = c[3].slice(-1) || " ", d = c[1] ? c[1] - 1 : b++, '", String.prototype.sprintf.' + c[6] + "(arguments[" + d + '], ["' + c.join('", "') + '"]), "'
    });
    return Function("", 'return ["' + f + '"].join("")')
}, String.prototype.parseUrl = function () {
    var a = this.match(arguments.callee.re);
    if (!a)return null;
    var b = {
        scheme: a[1] || "",
        subscheme: a[2] || "",
        user: a[3] || "",
        pass: a[4] || "",
        host: a[5],
        port: a[6] || "",
        path: a[7] || "",
        query: a[8] || "",
        fragment: a[9] || ""
    };
    return b
}, String.prototype.parseUrl.re = /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i, String.prototype.camelize = function () {
    return this.replace(/([^-]+)|(?:-(.)([^-]+))/mg, function (a, b, c, d) {
        return (c || "").toUpperCase() + (d || b).toLowerCase()
    })
}, String.prototype.uncamelize = function () {
    return this.replace(/[A-Z]/g, function (a) {
        return "-" + a.toLowerCase()
    })
}, define("string", function () {
}), define("resourceme/schema-org", ["jquery", "resourceme/resourceme", "resourceme/triplestore"], function (a, b, c) {
    var d = {};
    return d.namespace = {
        Thing: "http://schema.org/Thing",
        description: "http://schema.org/description",
        image: "http://schema.org/image",
        name: "http://schema.org/name",
        url: "http://schema.org/url",
        CreativeWork: "http://schema.org/CreativeWork",
        about: "http://schema.org/about",
        accountablePerson: "http://schema.org/accountablePerson",
        aggregateRating: "http://schema.org/aggregateRating",
        alternativeHeadline: "http://schema.org/alternativeHeadline",
        associatedMedia: "http://schema.org/associatedMedia",
        audio: "http://schema.org/audio",
        author: "http://schema.org/author",
        awards: "http://schema.org/awards",
        comment: "http://schema.org/comment",
        contentLocation: "http://schema.org/contentLocation",
        contentRating: "http://schema.org/contentRating",
        contributor: "http://schema.org/contributor",
        copyrightHolder: "http://schema.org/copyrightHolder",
        copyrightYear: "http://schema.org/copyrightYear",
        creator: "http://schema.org/creator",
        dateCreated: "http://schema.org/dateCreated",
        dateModified: "http://schema.org/dateModified",
        datePublished: "http://schema.org/datePublished",
        discussionUrl: "http://schema.org/discussionUrl",
        editor: "http://schema.org/editor",
        encodings: "http://schema.org/encodings",
        genre: "http://schema.org/genre",
        headline: "http://schema.org/headline",
        inLanguage: "http://schema.org/inLanguage",
        interactionCount: "http://schema.org/interactionCount",
        isFamilyFriendly: "http://schema.org/isFamilyFriendly",
        keywords: "http://schema.org/keywords",
        mentions: "http://schema.org/mentions",
        offers: "http://schema.org/offers",
        provider: "http://schema.org/provider",
        publisher: "http://schema.org/publisher",
        publishingPrinciples: "http://schema.org/publishingPrinciples",
        reviews: "http://schema.org/reviews",
        sourceOrganization: "http://schema.org/sourceOrganization",
        thumbnailUrl: "http://schema.org/thumbnailUrl",
        version: "http://schema.org/version",
        video: "http://schema.org/video",
        Blog: "http://schema.org/Blog",
        blogPosts: "http://schema.org/blogPosts",
        BlogPosting: "http://schema.org/BlogPosting",
        articleBody: "http://schema.org/articleBody",
        articleSection: "http://schema.org/articleSection",
        wordCount: "http://schema.org/wordCount",
        Event: "http://schema.org/Event",
        attendees: "http://schema.org/attendees",
        duration: "http://schema.org/duration",
        endDate: "http://schema.org/endDate",
        location: "http://schema.org/location",
        offers: "http://schema.org/offers",
        performers: "http://schema.org/performers",
        startDate: "http://schema.org/startDate",
        subEvents: "http://schema.org/subEvents",
        superEvent: "http://schema.org/superEvent",
        UserComments: "http://schema.org/UserComments",
        commentText: "http://schema.org/commentText",
        commentTime: "http://schema.org/commentTime",
        creator: "http://schema.org/creator",
        discusses: "http://schema.org/discusses",
        replyToUrl: "http://schema.org/replyToUrl"
    }, d.createBlogPost = function (a, c) {
        b.session.agent(function (e) {
            var f = new d.BlogPost(ResourceMeConfig.app.blog.uri, a);
            f.datePublished(b.utils.dateToIsoString(new Date)), f.author(e), c(f)
        })
    }, d.BlogPost = function (a, b, c) {
        this.blogUri = a, this.blogPostUri = b, this.properties = c != null ? c : new Array
    }, d.BlogPost.prototype.buildTriples = function () {
        var a = new Array;
        return this.blogUri != null && a.push({
            s: this.blogUri,
            p: d.namespace.blogPosts,
            o: this.blogPostUri,
            s_type: "uri",
            o_type: "uri"
        }), a.push({
            s: this.blogPostUri,
            p: b.rdf.namespace.type,
            o: d.namespace.BlogPosting,
            s_type: "uri",
            o_type: "uri"
        }), this.author() != null && a.push({
            s: this.blogPostUri,
            p: d.namespace.author,
            o: this.author(),
            s_type: "uri",
            o_type: "uri"
        }), this.datePublished() != null && a.push({
            s: this.blogPostUri,
            p: d.namespace.datePublished,
            o: this.datePublished(),
            s_type: "uri",
            o_type: "literal"
        }), this.headline() != null && a.push({
            s: this.blogPostUri,
            p: d.namespace.headline,
            o: this.headline(),
            s_type: "uri",
            o_type: "literal"
        }), this.articleBody() != null && a.push({
            s: this.blogPostUri,
            p: d.namespace.articleBody,
            o: this.articleBody(),
            s_type: "uri",
            o_type: "literal"
        }), a
    }, d.BlogPost.prototype.write = function (a) {
        var b = new c, d = this.buildTriples();
        b.insertTriples(d, function (b) {
            a(d.length == b.length)
        })
    }, d.BlogPost.prototype.hasWriteAccess = function (a) {
        var b = new c;
        b.hasTriplesAccess(this.buildTriples(), "write", a)
    }, d.BlogPost.prototype.blog = function (a) {
        if (a === undefined)return this.blogUri;
        this.blogUri = a
    }, d.BlogPost.prototype.blogPost = function (a) {
        if (a === undefined)return this.blogPostUri;
        this.blogPostUri = a
    }, d.BlogPost.prototype.author = function (a) {
        return this.property(d.namespace.author, a)
    }, d.BlogPost.prototype.datePublished = function (a) {
        return this.property(d.namespace.datePublished, a)
    }, d.BlogPost.prototype.headline = function (a) {
        return this.property(d.namespace.headline, a)
    }, d.BlogPost.prototype.articleBody = function (a) {
        return this.property(d.namespace.articleBody, a)
    }, d.BlogPost.prototype.comment = function (a) {
        return this.property(d.namespace.comment, a)
    }, d.BlogPost.prototype.property = function (a, b) {
        if (b === undefined)return a in this.properties ? this.properties[a] : undefined;
        this.properties[a] = b
    }, d.readCommentUris = function (a, b) {
        var e = new c;
        e.findTriples([{s: a, s_type: "uri", p: d.namespace.comment}], function (a) {
            var c = new Array;
            for (var d = 0; d < a.length; d++)c.push(a[d].o);
            b(c)
        })
    }, d.createUserComments = function (a, c, e) {
        b.session.agent(function (f) {
            var g = new d.UserComments(a, c);
            g.creator(f), g.commentTime(b.utils.dateToIsoString(new Date)), e(g)
        })
    }, d.readUserComments = function (a, b) {
        var e = new c;
        e.findTriples([{p: d.namespace.comment, o: a, o_type: "uri"}, {
            s: a,
            s_type: "uri",
            p: d.namespace.creator
        }, {s: a, s_type: "uri", p: d.namespace.commentTime}, {
            s: a,
            s_type: "uri",
            p: d.namespace.commentText
        }], function (c) {
            var e = null, f = new Array;
            for (var g = 0; g < c.length; g++)c[g].p == d.namespace.comment ? e = c[g].s : f[c[g].p] = c[g].o;
            b(new d.UserComments(e, a, f))
        })
    }, d.UserComments = function (a, b, c) {
        this.parentUri = a, this.commentUri = b, this.properties = c != null ? c : new Array
    }, d.UserComments.prototype.buildTriples = function () {
        var a = new Array;
        return this.parentUri != null && a.push({
            s: this.parentUri,
            p: d.namespace.comment,
            o: this.commentUri,
            s_type: "uri",
            o_type: "uri"
        }), a.push({
            s: this.commentUri,
            p: b.rdf.namespace.type,
            o: d.namespace.UserComments,
            s_type: "uri",
            o_type: "uri"
        }), this.creator() != null && a.push({
            s: this.commentUri,
            p: d.namespace.creator,
            o: this.creator(),
            s_type: "uri",
            o_type: "uri"
        }), this.commentTime() != null && a.push({
            s: this.commentUri,
            p: d.namespace.commentTime,
            o: this.commentTime(),
            s_type: "uri",
            o_type: "literal"
        }), this.commentText() != null && a.push({
            s: this.commentUri,
            p: d.namespace.commentText,
            o: this.commentText(),
            s_type: "uri",
            o_type: "literal"
        }), a
    }, d.UserComments.prototype.write = function (a) {
        var b = new c, d = this.buildTriples();
        b.insertTriples(d, function (b) {
            a(d.length == b.length)
        })
    }, d.UserComments.prototype.hasWriteAccess = function (a) {
        var b = new c;
        b.hasTriplesAccess(this.buildTriples(), "write", a)
    }, d.UserComments.prototype.parent = function (a) {
        if (a === undefined)return this.parentUri;
        this.parentUri = a
    }, d.UserComments.prototype.comment = function (a) {
        if (a === undefined)return this.commentUri;
        this.commentUri = a
    }, d.UserComments.prototype.creator = function (a) {
        return this.property(d.namespace.creator, a)
    }, d.UserComments.prototype.commentTime = function (a) {
        return this.property(d.namespace.commentTime, a)
    }, d.UserComments.prototype.commentText = function (a) {
        return this.property(d.namespace.commentText, a)
    }, d.UserComments.prototype.property = function (a, b) {
        if (b === undefined)return a in this.properties ? this.properties[a] : undefined;
        this.properties[a] = b
    }, d
}), define("app/utils", ["jquery", "config"], function (a, b) {
    var c = {};
    return c.modal = function (b, c, d) {
        c = c === undefined ? !0 : c;
        var e = a("#" + b);
        e.length == 0 && (a("body").append(d), e = a("#" + b)), e.modal(c ? "show" : "hide")
    }, c.waitModal = function (a) {
        var b = '<div class="modal" id="wait-modal" style="width:80px; margin:0px;"><div class="modal-body"><img src="' + ResourceMeConfig.baseUrl + '/img/Calabi-Yau-Mesh-s.gif" /></div>' + "</div>";
        c.modal("wait-modal", a, b)
    }, c.errorModal = function (b, d, e) {
        var f = '<div class="modal" id="error-modal"><div class="modal-header"><h3></h3></div><div class="modal-body"></div><div class="modal-footer"><button class="btn" data-dismiss="modal">Close</button></div></div>';
        if (d !== undefined) {
            var g = a("#error-modal");
            a("h3", g).val(d), a(".modal-body").val(e)
        }
        c.modal("error-modal", b, f)
    }, c.initButton = function (b, c, d) {
        a(b).hide(), c(b, function () {
            a(b).show(), a(b).click(d)
        })
    }, c.extenders = [], c.registerExtender = function (a) {
        c.extenders.push(a)
    }, c.extend = function (a) {
        for (var b = 0; b < c.extenders.length; b++)c.extenders[b].init(a)
    }, c
}), define("app/notifications", ["jquery", "resourceme/foaf", "resourceme/pingback", "resourceme/triplestore", "app/utils"], function (a, b, c, d, e) {
    var f = {};
    return f.init = function (a) {
        f.AddAgentButton.init(a), f.PingbackRequestRemoveButton.init(a)
    }, f.AddAgentButton = {}, f.AddAgentButton.init = function (b) {
        b === undefined && (b = document), a("button.pingback-request-add-agent-button", b).each(function (a, b) {
            e.initButton(b, f.AddAgentButton.isEnabledFunction, f.AddAgentButton.onClickFunction)
        })
    }, f.AddAgentButton.isEnabledFunction = function (c, e) {
        var f = a(c).attr("data-source"), g = a(c).attr("data-target"), h = {
            s: g,
            s_type: "uri",
            p: b.namespace.knows,
            o: f,
            o_type: "uri"
        }, i = new d(g);
        i.findTriples([h], function (a) {
            a.length == 0 && i.hasTripleAccess(h, "write", function () {
                e(c)
            })
        })
    }, f.AddAgentButton.onClickFunction = function () {
        var c = this, f = a(c).attr("data-source"), g = a(c).attr("data-target"), h = {
            s: g,
            s_type: "uri",
            p: b.namespace.knows,
            o: f,
            o_type: "uri"
        }, i = new d(g);
        e.waitModal(), i.insertTriples([h], function (b) {
            e.waitModal(!1), a(c).hide()
        }, function (a) {
            e.waitModal(!1)
        })
    }, f.PingbackRequestRemoveButton = {}, f.PingbackRequestRemoveButton.init = function (b) {
        b === undefined && (b = document), a("button.pingback-request-remove-button", b).each(function (a, b) {
            e.initButton(b, f.PingbackRequestRemoveButton.isEnabledFunction, f.PingbackRequestRemoveButton.onClickFunction)
        })
    }, f.PingbackRequestRemoveButton.isEnabledFunction = function (b, d) {
        var e = a(b).attr("data-request");
        c.Request.load(e, function (a) {
            a.hasWriteAccess(function (a) {
                a && d(b)
            })
        })
    }, f.PingbackRequestRemoveButton.onClickFunction = function () {
        var b = this, d = a(b).attr("data-request");
        c.Request.load(d, function (c) {
            c.remove(function (c) {
                if (c) {
                    var d = a(b).closest("div.row");
                    a(d).slideToggle(undefined, function () {
                        a(d).remove()
                    })
                }
            })
        })
    }, f
}), define("app/pingback", ["jquery", "resourceme/foaf", "resourceme/pingback", "resourceme/resourceme", "app/utils"], function (a, b, c, d, e) {
    var f = {};
    return f.init = function () {
        f.initButton()
    }, f.initButton = function (b) {
        b === undefined && (b = document), a("button.foaf-agent-pingback", b).each(function (a, b) {
            e.initButton(b, f.buttonIsEnabled, f.buttonOnClick)
        })
    }, f.buttonIsEnabled = function (d, e) {
        b.getAgent(a(d).attr("data-foaf-uri"), function (a) {
            var b = a.firstProperty(c.namespace.to);
            b != null && e(d)
        })
    }, f.buttonOnClick = function () {
        var g = this;
        f.messageModal(!0);
        var h = function () {
            e.waitModal(!1)
        }, i = function () {
            e.waitModal(!1), e.errorModal(!0, "Couldn't deliver pingback")
        };
        a("#pingback-message-modal-send").click(function () {
            f.messageModal(!1), e.waitModal(!0), b.getAgent(a(g).attr("data-foaf-uri"), function (a) {
                var b = f.messageModalComment();
                f.messageModalComment("");
                var e = a.firstProperty(c.namespace.to), g = new c.Request;
                g.target(a.uri()), g.comment(b.length > 0 ? b : null), d.session.agent(function (a) {
                    g.source(a), g.send(e, {success: h, error: i})
                }, function () {
                    g.send(e, {success: h, error: i})
                })
            })
        })
    }, f.messageModal = function (a) {
        var b = '<div class="modal" id="pingback-message-modal"><div class="modal-header"><button class="close" data-dismiss="modal">Ã—</button><h3>Leave a message</h3></div><div class="modal-body"><textarea id="pingback-message-modal-comment" class="input-xlarge" rows="3"></textarea></div><div class="modal-footer"><button class="btn" id="pingback-message-modal-send">Send</button></div></div>';
        e.modal("pingback-message-modal", a, b)
    }, f.messageModalComment = function (b) {
        if (b !== undefined) a("textarea#pingback-message-modal-comment").val(b); else return a("textarea#pingback-message-modal-comment").val()
    }, f
}), define("app/schema-org", ["jquery", "string", "config", "resourceme/schema-org", "app/foaf", "app/pingback", "app/utils"], function (a, b, c, d, e, f, g) {
    var h = {};
    return h.init = function (a) {
        h.Blog.init(a)
    }, h.Blog = {}, h.Blog.init = function (a) {
        h.Blog.initPostButton(a), h.UserComments.initButton(a)
    }, h.Blog.postHtml = function (a) {
        return '<div class="row"><div class="span6" about="' + a.blogPost() + '" typeof="s:BlogPosting">' + '<h2 property="s:headline">' + a.headline() + "</h2>" + '<p property="s:articleBody">' + a.articleBody() + "</p>" + "<footer>" + '<div class="control-group">' + '<small class="author">posted <span property="s:datePublished">' + a.datePublished() + "</span> by " + e.agentLink(a.author(), "s:author") + "</small>" + '<button class="btn tiny schema-org-comment-button">Comment Â»</button>' + "</div>" + "</footer>" + "<ul></ul>" + "</div>" + "</div>"
    }, h.Blog.initPostButton = function (b) {
        b === undefined && (b = document), a("button.schema-org-blog-post-button", b).each(function (a, b) {
            g.initButton(b, h.Blog.postButtonIsEnabled, h.Blog.postButtonOnClick)
        })
    }, h.Blog.postButtonIsEnabled = function (a, b) {
        d.createBlogPost(ResourceMeConfig.app.blog.uri + "test", function (c) {
            c.headline("test"), c.hasWriteAccess(function (c) {
                c && b(a)
            })
        })
    }, h.Blog.postButtonOnClick = function () {
        var b = this, c = a(b).parent().parent(), e = a("div.schema-org-blog-post-form", c);
        if (e.length == 0) {
            var f = '<div class="well form-horizontal schema-org-blog-post-form"><div class="control-group"><input class="span5" name="headline" type="text" placeholder="Title" /></div><div class="control-group"><textarea class="span5" name="articleBody" cols="20" rows="3" placeholder="Text"></textarea></div><button class="btn primary">Post</button></div>';
            e = a(f), e.find("button").click(function () {
                var b = a(e).find("[name='headline']").val(), f = a(e).find("[name='articleBody']").val(), i = b.replace(new RegExp("\\s", "g"), "-").replace(new RegExp("[^a-z0-9\\-]", "i"), "").toLowerCase(), j = new Date, k = "%s%04d-%02d-%02d-%s#post".sprintf(ResourceMeConfig.app.blog.postBaseUri, j.getUTCFullYear(), j.getUTCMonth() + 1, j.getUTCDate(), i);
                d.createBlogPost(k, function (d) {
                    d.headline(b), d.articleBody(f), d.write(function (b) {
                        var f = a(h.Blog.postHtml(d));
                        a(c).parent().after(f), g.extend(f), a(e).find("[name='headline']").val(""), a(e).find("[name='articleBody']").val(""), e.slideToggle()
                    })
                })
            }), e.hide(), a(c).append(e), e.slideToggle()
        } else e.slideToggle()
    }, h.UserComments = {}, h.UserComments.initButton = function (b) {
        b === undefined && (b = document), a("button.schema-org-comment-button", b).each(function (a, b) {
            g.initButton(b, h.UserComments.buttonIsEnabled, h.UserComments.buttonOnClick)
        })
    }, h.UserComments.html = function (a) {
        return '<li style="color: #404040; list-style: none outside none;" about="' + a.comment() + '" typeof="s:UserComment">' + '<p property="s:commentText">' + a.commentText() + "</p>" + "<footer>" + '<div class="control-group">' + '<small class="author">posted <span property="s:commentTime">' + a.commentTime() + "</span> by " + e.agentLink(a.creator(), "s:creator") + "</small>" + "</div>" + "</footer>" + "</li>"
    }, h.UserComments.parentUri = function (b) {
        var c = a(b).closest("[typeof='s:BlogPosting']").attr("about");
        return c != null ? c : undefined
    }, h.UserComments.parentDom = function (b) {
        var c = a(b).closest("[typeof='s:BlogPosting']");
        return c != null ? c : undefined
    }, h.UserComments.buttonIsEnabled = function (a, b) {
        var c = h.UserComments.parentUri(a), e = c.split("#")[0] + "#comment-" + 999999;
        d.createUserComments(c, e, function (c) {
            c.commentText("test"), c.hasWriteAccess(function (c) {
                c && b(a)
            })
        })
    }, h.UserComments.buttonOnClick = function () {
        var b = this, c = a(b).parent().parent(), e = a("div.schema-org-comment-form", c);
        if (e.length == 0) {
            var f = '<div class="well form-horizontal schema-org-comment-form"><div class="control-group"><textarea class="span5" name="commentText" cols="20" rows="3" placeholder="Text"></textarea></div><button class="btn primary">Post</button></div>';
            e = a(f), e.find("button").click(function () {
                var c = h.UserComments.parentUri(b);
                d.readCommentUris(c, function (f) {
                    var i = c.split("#")[0] + "#comment-" + (f.length + 1), j = a(e).find("[name='commentText']").val();
                    d.createUserComments(c, i, function (c) {
                        c.commentText(j), c.write(function (d) {
                            userCommentsDom = a(h.UserComments.html(c)), a("ul", h.UserComments.parentDom(b)).first().append(userCommentsDom), g.extend(userCommentsDom), a(e).find("[name='commentText']").val(""), e.slideToggle()
                        })
                    })
                })
            }), e.hide(), a(c).append(e), e.slideToggle()
        } else e.slideToggle()
    }, h
}), require.config({baseUrl: $("script#requirejs").attr("base-url")}), require(["jquery", "app/foaf", "app/notifications", "app/pingback", "app/rdf-object", "app/schema-org", "app/utils"], function (a, b, c, d, e, f, g) {
    var h = {};
    h.init = function (a) {
        g.registerExtender(b), g.registerExtender(c), g.registerExtender(d), g.registerExtender(e), g.registerExtender(f), g.extend(a)
    }, a(document).ready(function () {
        h.init()
    })
}), define("resourceme-profile", function () {
})