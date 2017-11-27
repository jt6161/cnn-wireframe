/* LEGAL NOTICE: COPYRIGHT 2017 THE RUBICON PROJECT, INC.  ALL RIGHTS RESERVED. THIS CODE CONTAINS TRADE SECRETS OR OTHERWISE CONFIDENTIAL AND/OR PROPRIETARY INFORMATION THAT IS THE EXCLUSIVE INTELLECTUAL PROPERTY OF THE RUBICON PROJECT, INC.  AND IS PROTECTED BY COPYRIGHT, TRADE SECRET AND/OR OTHER STATE AND FEDERAL LAW.  SEE http://bit.ly/1g7QAOO FOR FULL TERMS AND CONDITIONS. */
/* Generated: 2017-11-26 21:05:51 PST, Build: 305 */

! function a(b, c, d) {
  function e(g, h) {
    if (!c[g]) {
      if (!b[g]) {
        var i = "function" == typeof require && require;
        if (!h && i) return i(g, !0);
        if (f) return f(g, !0);
        var j = new Error("Cannot find module '" + g + "'");
        throw j.code = "MODULE_NOT_FOUND", j
      }
      var k = c[g] = {
        exports: {}
      };
      b[g][0].call(k.exports, function(a) {
        var c = b[g][1][a];
        return e(c || a)
      }, k, k.exports, a, b, c, d)
    }
    return c[g].exports
  }
  for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
  return e
}({
  1: [function(a, b, c) {
    var d = a(21),
      e = a(16);
    if (b.exports.rubicontag = new e, void 0 !== d) {
      var f = "rubicontag",
        g = "%23%23namespace%23%23" === encodeURIComponent(f) ? "rubicontag" : f;
      if ("object" != typeof d[g] || "object" != typeof d[g].cmd || "[object Array]" === Object.prototype.toString.call(d[g].cmd)) {
        d[g] && (d.origrubicontag = d[g]), d[g] = b.exports.rubicontag;
        a(11)
      }
    }
  }, {
    11: 11,
    16: 16,
    21: 21
  }],
  2: [function(a, b, c) {
    "use strict";
    var d = a(22),
      e = a(20),
      f = function() {
        var a, b = this,
          c = new d;
        b.requestTime = 0;
        var f = null,
          g = null,
          h = null,
          i = {
            url: "",
            type: "post",
            cache: !1,
            async: !0,
            dataType: "json",
            data: null,
            timeout: 0
          };
        b.getUrl = function() {
          return i.url
        }, b.ajax = function(d) {
          i = e.mergeObjects(i, d);
          var g = [];
          if ("get" === i.type.toLowerCase() && i.data)
            for (var h in i.data) i.data.hasOwnProperty(h) && g.push(encodeURIComponent(h) + "=" + encodeURIComponent(i.data[h]));
          return !0 !== i.cache && "get" === i.type.toLowerCase() && g.push(1e18 * Math.random()), g.length > 0 && (i.url += i.url.indexOf("?") > 0 ? "&" : "?", i.url += g.join("&")), c.open(i.type, i.url, i.async), c.withCredentials = !0, i.timeout && i.async && (c.timeout = i.timeout), "post" === i.type.toLowerCase() && (i.contentType = i.contentType || "application/x-www-form-urlencoded", c.setRequestHeader("Content-type", i.contentType)), c.onreadystatechange = f, a = (new Date).getTime(), c.send("get" !== i.type.toLowerCase() ? i.data : null), b
        }, f = function() {
          if (4 === c.readyState)
            if (b.requestTime = (new Date).getTime() - a, c.requestTime = b.requestTime, 200 === c.status)
              for (; g.length;) g.shift()(c);
            else
              for (; h.length;) h.shift()(c)
        }, g = [], h = [], b.done = function(a) {
          return c && 4 === c.readyState && 200 === c.status ? a(c) : g.push(a), b
        }, b.fail = function(a) {
          return c && 4 === c.readyState && 200 !== c.status ? a(c) : h.push(a), b
        }, b.always = function(a) {
          return c && 4 === c.readyState ? a(c) : (g.push(a), h.push(a)), b
        }, b.abort = function() {
          return c.abort(), b
        }
      };
    b.exports = f
  }, {
    20: 20,
    22: 22
  }],
  3: [function(a, b, c) {
    "use strict";
    var d = a(7),
      e = a(20),
      f = a(2),
      g = function() {
        var a = this,
          b = !1,
          c = null,
          g = null,
          h = e.browserSupportsXHR(),
          i = {
            nAccountId: null,
            oBatching: {
              bEnabled: !0,
              nBatchSize: 100,
              nBatchWindow: 3e3
            },
            sHost: "stats.aws.rubiconproject.com/stats/",
            sBucket: "fastlane"
          },
          j = [],
          k = null,
          l = function(b) {
            var c = b[0];
            i.nAccountId = c.accountId;
            var d = c && c.configuration && c.configuration.analytics ? c.configuration.analytics : {};
            return i.sBucket = d.bucket ? d.bucket : i.sBucket, i.sHost = d.host ? d.host : i.sHost, i.sHost.match(/^http(s)?:/) || (i.sHost = e.getProtocol() + i.sHost), d.batching && (i.oBatching.bEnabled = "boolean" == typeof d.batching.enabled ? d.batching.enabled : i.oBatching.bEnabled, i.oBatching.nBatchSize = isNaN(d.batching.batchSize) ? i.oBatching.nBatchSize : d.batching.batchSize, i.oBatching.nBatchWindow = isNaN(d.batching.batchWindow) ? i.oBatching.nBatchWindow : d.batching.batchWindow), e.addUserDistractionEventListener(function() {
              a.flushEvents()
            }), a
          };
        a.publish = function(e, f) {
          return b || (b = !0, l(d.getConfigs())), i.oBatching.bEnabled && h ? c(e, f) : g([{
            sEventCode: e,
            sLine: f
          }]), a
        }, c = function(b, c) {
          j.push({
            sEventCode: b,
            sLine: c
          }), j.length >= i.oBatching.nBatchSize ? a.flushEvents() : null === k && (k = setTimeout(function() {
            a.flushEvents()
          }, i.oBatching.nBatchWindow))
        }, g = function(a) {
          var b = [],
            c = 0;
          if (h) {
            for (c = 0; c < a.length; c++) b.push(encodeURIComponent(i.sBucket + "/" + a[c].sLine));
            var d = b.join("|");
            (new f).ajax({
              url: i.sHost,
              type: "POST",
              async: !0,
              data: d
            }), e.debug("stats:", d.replace(/%2F/g, "/"))
          } else
            for (c = 0; c < a.length; c++) {
              var g = encodeURIComponent(i.sBucket) + "/" + encodeURIComponent(a[c].sLine);
              g = g.replace(/%2F/g, "/"), (new Image).src = i.sHost + g + "?rnd=" + Math.random(), e.debug("stats :", g)
            }
        }, a.flushEvents = function() {
          var a = j;
          j = [], null !== k && (clearTimeout(k), k = null), a.length && g(a)
        }
      };
    b.exports = new g
  }, {
    2: 2,
    20: 20,
    7: 7
  }],
  4: [function(a, b, c) {
    "use strict";

    function d(a) {
      var b = a.nAccountId,
        c = a.aBaseUrls,
        d = {
          url: "",
          type: "GET",
          cache: !0,
          async: !0,
          dataType: "",
          data: null
        },
        e = function() {
          return p++, p >= c.length && (p = 0), c[p]
        },
        f = function(b, c, d, f) {
          var g = i.getProtocol(),
            h = e(),
            k = a.nLowestTierFloor,
            l = Math.random(),
            m = c.getKWs(),
            p = c.getFPV(),
            q = c.getFPI(),
            r = {
              account_id: b,
              size_id: d,
              p_pos: c.getPosition(),
              rp_floor: Math.max(k, .01),
              rf: i.getFullPageUrl(),
              p_screen_res: i.getScreenResolution(),
              "tg_fl.eid": c.getElementId(),
              tid: a.sTransId
            };
          /^https:/.test(g) && (r.rp_secure = "1");
          var s = i.getABTestParam("aeMapping");
          if ("on" === s ? r.tk_flmap = "ae" : "off" === s && (r.tk_flmap = "js"), c.isAdEngineMapped(b) || "on" === s) {
            r["tg_fl.uname"] = c.getSlotName();
            var t = n.getContexts();
            t.length > 0 && (r["tg_fl.kw_page"] = t.toString()), t = c.getContexts(), t.length > 0 && (r["tg_fl.kw_slot"] = t.toString()), r["tg_fl.pr_acctid"] = j.getConfigValue(0, "accountId")
          } else r.site_id = c.getSiteId(b), r.zone_id = c.getZoneId(b);
          if (f && f.length > 0 && (r.alt_size_ids = f), m.push("rp.fastlane"), r.kw = m.join(","), i.getIntegration() && (r.tk_flint = i.getIntegration()), p.length) {
            var u = i.generateComplexQueryStringObject(p, "tg_v");
            r = i.mergeObjects(r, u)
          }
          if (q.length) {
            var v = i.generateComplexQueryStringObject(q, "tg_i");
            r = i.mergeObjects(r, v)
          }
          var w = n.getUserKey();
          if (w && (r.tk_user_key = w), window.rp_cruid && window.rp_crnetids)
            for (var x = window.rp_crnetids, y = 0; y < x.length; y++) r["put_" + x[y]] = encodeURIComponent(window.rp_cruid);
          var z = o();
          return z && (r = i.mergeObjects(r, z)), j.getConfigValue(0, "configuration.tkSlot", !1) && (r.tk_slot = c.getSlotName()), r.rand = l, [g, h, "?", i.convertObjectToQueryString(r)].join("")
        },
        g = {};
      return g.addSlot = function(c, e, g) {
        d.url = f(b, c, e, g), l.mark("fastlane.run.auctionRequest"), l.measure("buildAuctionRequest", "fastlane.run", "fastlane.run.auctionRequest");
        var i = new m;
        h.addRequest(i.ajax(d).done(a.fSuccessResponse([c], i, a.oTimeout, a.oFinishedSlots, [e].concat(g))).fail(a.fFailedResponse([c], i, a.oTimeout, [e].concat(g))))
      }, g
    }

    function e(a) {
      var b = {},
        c = a.nConfigIndex || 0,
        d = a.nAccountId,
        e = function(a) {
          function b(a, b) {
            return a.concat(b)
          }
          for (var c = {}, d = 0; d < a.length; d++) Array.isArray(a[d].value) && (a[d].value = a[d].value.reduce(b, [])), c[a[d].key] = a[d].value;
          return c
        },
        f = function(b) {
          var c = b.getKWs();
          c.push("rp.fastlane");
          var f = b.getRubiconSizeIds(d),
            g = {
              element_id: b.getElementId(),
              name: b.getSlotName(),
              dimensions: f.map(i.convertSizeIdToDimensions),
              position: b.getPosition(),
              site_id: b.getSiteId(d),
              zone_id: b.getZoneId(d),
              floor: a.nLowestTierFloor || .01,
              keywords: c
            },
            h = i.getABTestParam("aeMapping");
          if (b.isAdEngineMapped(d) || "on" === h) {
            var j = b.getContexts();
            j.length > 0 && (g.slot_context_keywords = j)
          } else g.site_id = b.getSiteId(d), g.zone_id = b.getZoneId(d);
          var k = b.getFPI();
          k && k.length && (g.inventory = e(k));
          var l = b.getFPV();
          if (l && l.length && (g.visitor = e(l)), "video" === b.getSlotType()) {
            var m = b.getPlayerSize();
            g.language = b.getLanguage(), g.width = m.width, g.height = m.height, g.size_id = b.getRubiconSizeIds(d)[0]
          }
          return g
        },
        g = function(a) {
          return "video" === a ? "video" : "fastlane"
        },
        k = i.getProtocol(),
        p = k + j.getConfigValue(c, "fastlane.sraOptimizedHost", "fastlane-adv.rubiconproject.com/v1/auction/"),
        q = {
          url: p + g(),
          type: "POST",
          cache: !0,
          async: !0,
          dataType: "",
          contentType: "text/plain",
          data: {
            page_url: i.getFullPageUrl(),
            resolution: i.getScreenResolution(),
            account_id: a.nAccountId,
            integration: i.getIntegration(),
            timeout: (a.oTimeout.nTimeout || 1e3) - (i.getABTestParam("timeoutBuffer") || 0),
            slots: []
          }
        },
        r = {},
        s = i.getABTestParam("aeMapping");
      "on" === s ? r.tk_flmap = "ae" : "off" === s && (r.tk_flmap = "js"), i.getDataStoreValue("oAEParams") && (r = i.mergeObjects(r, i.getDataStoreValue("oAEParams")));
      var t = o();
      t && (r = i.mergeObjects(r, t)), r = i.mergeObjects(r, {
        tid: a.sTransId
      }), /^https:/.test(k) && (r.rp_secure = "1"), q.data.ae_pass_through_parameters = r;
      var u = j.getConfigValue(c, "configuration.slotMapping", []);
      if (u.indexOf("adEng") >= 0 && u.indexOf("browser") < 0 || "on" === s) {
        var v = n.getContexts();
        v.length > 0 && (q.data.page_context_keywords = v), q.data.primary_account_id = j.getConfigValue(0, "accountId")
      }
      var w = parseFloat(i.getUrlSessionParam("rp_cpm_override"));
      w && (q.data.cpm_override = w);
      var x = parseFloat(i.getUrlSessionParam("rp_deal_override"));
      x && (q.data.deal_override = x);
      var y = n.getUserKey();
      y && (q.data.user_key = y);
      var z = {};
      return z.addSlot = function(a) {
        var c = a.getSlotType();
        b[c] || (b[c] = []), b[c].push(a)
      }, z.hasSlots = function() {
        for (var a in b)
          if (b.hasOwnProperty(a)) return !0;
        return !1
      }, z.finishAuction = function() {
        l.mark("fastlane.run.auctionRequest"), l.measure("buildAuctionRequest", "fastlane.run", "fastlane.run.auctionRequest");
        for (var c in b)
          if (b.hasOwnProperty(c) && b[c]) {
            var d = i.intersectObjects(q.data, {});
            d.slots = b[c].map(f), "video" === c && (d.stash_creatives = !0, d.map_slots = !0);
            var e = i.intersectObjects(q, {
                url: p + g(c),
                data: JSON.stringify(d)
              }),
              j = new m;
            h.addRequest(j.ajax(e).done(a.fSuccessResponse(b[c], j, a.oTimeout, a.oFinishedSlots)).fail(a.fFailedResponse(b[c], j, a.oTimeout))), i.info("sent SRA request with ", b[c].length, c, " auction request(s)")
          }
      }, z
    }

    function f(a) {
      var b, c = a.nConfigIndex || 0;
      h = new k(15e3);
      var f = {},
        g = e(a);
      return i.isSingleRequest(c) || (b = d(a)), f.addSlot = function(a, d, e) {
        var f = j.getConfigValue(0, "configuration.useMultiSize", !0);
        if (i.isSingleRequest(c, a)) return i.debug("Using SRA Request for ", a.getSlotName()), g.addSlot(a);
        i.debug("Using Legacy Request" + (f ? " with MAS support" : "")), b.addSlot(a, d, e)
      }, f.finishAuction = function() {
        g.hasSlots() && g.finishAuction(), h.allRequestsAdded(), i.info("sent ", h.totalRequests(), " request(s)")
      }, f.finished = h.finished, f.totalRequests = function() {
        return h.totalRequests()
      }, f.getSuccessfulRequests = function() {
        return h.getSuccessfulRequests().length
      }, f
    }
    var g, h, i = a(20),
      j = a(7),
      k = a(15),
      l = a(14),
      m = a(2),
      n = a(13),
      o = function() {
        if (g) return g;
        var a = window.DigiTrust && window.DigiTrust.getUser({
          member: "T9QSFKPDN9"
        });
        if (a && a.success && a.identity) {
          var b = a.identity;
          g = b.privacy && b.privacy.optout ? {} : {
            "dt.pref": 0,
            "dt.id": b.id,
            "dt.keyv": b.keyv
          }
        }
        return g
      },
      p = 0;
    b.exports = f
  }, {
    13: 13,
    14: 14,
    15: 15,
    2: 2,
    20: 20,
    7: 7
  }],
  5: [function(a, b, c) {
    "use strict";

    function d(a, b, c) {
      var d = this,
        f = [],
        g = !1,
        h = function() {
          g = !1, a.blur(), window.focus()
        },
        i = function() {
          g = !0
        },
        j = function() {
          a.onmouseover = function() {
            i()
          }, a.onmouseout = function() {
            h()
          }, void 0 !== window.attachEvent ? window.attachEvent("onblur", function() {
            d.firePixels()
          }) : void 0 !== window.addEventListener && window.addEventListener("blur", function() {
            d.firePixels()
          }, !1)
        };
      d.init = function() {
        Array.isArray(b) || (b = [b]), f = [];
        for (var a = 0; a < b.length; a++) d.addTrackingUrl(b[a]) || e.debug("Click tracker URL is not valid and could not be added", b[a]);
        j()
      }, d.addTrackingUrl = function(a) {
        return !!e.isUrl(a) && Boolean(f.push(a))
      }, d.replaceMacrosInUrl = function(a, b) {
        var c = {};
        if (!Array.isArray(a) || !a.length) return [];
        c.siteId = b.siteId || "", c.zoneId = b.zoneId || "", c.sizeId = b.sizeId || "", c.userId = b.userId || "";
        for (var d = 0; d < a.length; d++) "string" == typeof a[d] && e.isUrl(a[d]) && (a[d] = e.replaceMacrosWithinUrl(a[d], b));
        return a
      }, d.firePixels = function() {
        var a, b;
        if (g && Array.isArray(f) && f.length) {
          a = d.replaceMacrosInUrl(f, c), e.debug("Tracking click using the following pre-resolved, pre-cleaned URLs", f), e.warn("Tracking click using the following fully-resolved URLs", a);
          for (var h = 0; h < a.length; h++) b = new window.Image, b.src = a[h];
          b = void 0
        }
      }, d.init()
    }
    var e = a(20);
    b.exports = d
  }, {
    20: 20
  }],
  6: [function(a, b, c) {
    "use strict";
    var d = (a(21), function() {
      this.push = function(a) {
        a()
      }
    });
    b.exports = new d
  }, {
    21: 21
  }],
  7: [function(a, b, c) {
    "use strict";
    var d = function() {
      var a = this,
        b = [];
      a.getConfigs = function() {
        return b
      }, a.addConfig = function(a) {
        b.push(a)
      }, a.getConfigValue = function(a, c, d) {
        var e = b[a],
          f = c.split(".");
        try {
          for (var g = 0; g < f.length; ++g)
            if (void 0 === (e = e[f[g]])) return d;
          d = e
        } catch (h) {}
        return d
      }
    };
    b.exports = new d
  }, {}],
  8: [function(a, b, c) {
    "use strict";
    var d = a(20),
      e = a(18),
      f = (a(10), function() {
        var a = this,
          b = new e,
          c = {},
          f = {},
          g = null;
        a.setFPI = function(a, b) {
          Array.isArray(b) || (b = [b]), c[a] = b
        }, a.addFPI = function(a, b) {
          c.hasOwnProperty(a) && Array.isArray(c[a]) || (c[a] = []), Array.isArray(b) || (b = [b]);
          for (var e = 0; e < b.length; e++) {
            var f = b[e];
            d.inArray(f, c[a]) || c[a].push(f)
          }
        }, a.getFPI = function() {
          return g(c)
        }, a.setFPV = function(a, b) {
          Array.isArray(b) || (b = [b]), f[a] = b
        }, a.addFPV = function(a, b) {
          f.hasOwnProperty(a) && Array.isArray(f[a]) || (f[a] = []), Array.isArray(b) || (b = [b]);
          for (var c = 0; c < b.length; c++) {
            var e = b[c];
            d.inArray(e, f[a]) || f[a].push(e)
          }
        }, a.getFPV = function() {
          return g(f)
        }, a.addKW = function(a) {
          if (void 0 !== a) {
            Array.isArray(a) || (a = [a]);
            for (var c = 0; c < a.length; c++) b.add(a[c])
          }
        }, a.getKWs = function() {
          return b.toArray()
        }, g = function(a) {
          return d.convertKeyValuePairObjectToArray(a)
        }
      });
    b.exports = f
  }, {
    10: 10,
    18: 18,
    20: 20
  }],
  9: [function(a, b, c) {
    "use strict";

    function d(a) {
      if (a)
        for (var b in j)
          if (j.hasOwnProperty(b) && j[b].indexOf(a) > -1) return b;
      return ""
    }

    function e() {
      return (i.navigator.language || i.navigator.userLanguage || "").substr(-2).toLowerCase()
    }

    function f() {
      var a = e();
      return "https://tap-secure.rubiconproject.com/partner/scripts/rubicon/emily.html?rtb_ext=1&geo=" + d(a) + "&co=" + a
    }

    function g() {
      function a() {
        var a = h.createInvisibleIframe(b);
        return a.src = f(), a.className = "rp-emily-iframe", a
      }
      var b = "rpfl_emily_" + Math.round(1e15 * Math.random());
      h.appendElement(a())
    }
    var h = a(20),
      i = a(21),
      j = {
        af: ["ao", "bi", "bj", "bf", "bw", "cf", "ci", "cm", "cd", "cg", "km", "cv", "dj", "dz", "eg", "er", "eh", "et", "ga", "gh", "gn", "gm", "gw", "gq", "ke", "lr", "ly", "ls", "ma", "mg", "ml", "mz", "mr", "mu", "mw", "yt", "na", "ne", "ng", "re", "rw", "sd", "sn", "sh", "sl", "so", "ss", "st", "sz", "sc", "td", "tg", "tn", "tz", "ug", "za", "zm", "zw"],
        an: ["aq", "tf", "bv"],
        as: ["af", "ae", "am", "ap", "az", "bd", "bh", "bn", "bt", "cn", "hk", "id", "in", "io", "ir", "iq", "il", "jo", "jp", "kz", "kg", "kh", "kr", "kw", "la", "lb", "lk", "mo", "mv", "mm", "mn", "my", "np", "om", "pk", "ph", "kp", "ps", "qa", "sa", "sg", "sy", "th", "tj", "tm", "tl", "tw", "uz", "vn", "ye"],
        au: ["as", "au", "cc", "ck", "cx", "fj", "fm", "gu", "hm", "ki", "mh", "mp", "nc", "nf", "nu", "nr", "nz", "pn", "pw", "pg", "pf", "sb", "tk", "to", "tv", "um", "vu", "wf", "ws"],
        eu: ["ax", "al", "ad", "at", "be", "bg", "ba", "by", "ch", "cy", "cz", "de", "dk", "es", "ee", "eu", "fi", "fr", "fo", "uk", "ge", "gg", "gi", "gr", "hr", "hu", "im", "ie", "is", "it", "je", "li", "lt", "lu", "lv", "mc", "md", "mk", "mt", "me", "nl", "no", "pl", "pt", "ro", "ru", "sj", "sm", "rs", "sk", "si", "se", "tr", "ua", "va"],
        na: ["aw", "ai", "an", "ag", "bq", "bs", "bl", "bz", "bm", "bb", "ca", "cr", "cu", "cw", "ky", "dm", "do", "gp", "gd", "gl", "gt", "hn", "ht", "jm", "kn", "lc", "mf", "mx", "ms", "mq", "ni", "pa", "pr", "sv", "pm", "sx", "tc", "tt", "us", "vc", "vg", "vi"],
        sa: ["ar", "bo", "br", "cl", "co", "ec", "fk", "gf", "gy", "pe", "py", "gs", "sr", "uy", "ve"]
      },
      k = {},
      l = !1;
    k.sync = function(a) {
      var b = a.done || function() {};
      if (l || !a.syncEnabled) return void b();
      setTimeout(function() {
        g(), b()
      }, Number(a.syncDelay)), l = !0
    }, b.exports = k
  }, {
    20: 20,
    21: 21
  }],
  10: [function(a, b, c) {
    "use strict";
    var d = a(7),
      e = a(3),
      f = a(20),
      g = {},
      h = {},
      i = {
        LOG_DISABLE: 1 / 0,
        LOG_ALWAYS: 0,
        LOG_ERROR: 1,
        LOG_WARN: 2,
        LOG_INFO: 3,
        LOG_DEBUG: 4,
        LOG_TEST: 5
      },
      j = {
        BAD_EVENT: {
          sLabel: "badEvent",
          sAnalyticsPattern: "bad-event/{sEventType}",
          sLogPattern: "Unknown event triggered: {sEventType}",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_ERROR
        },
        HL_INIT: {
          sLabel: "init",
          sAnalyticsPattern: "init/{nAccountId}/{sVersion}/{sIntegration}",
          sLogPattern: "initialized account: {nAccountId}",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_DEBUG
        },
        HL_RUN_CALLED: {
          sLabel: "runCalled",
          sAnalyticsPattern: "run-called/{nAccountId}",
          sLogPattern: "rubicontag.run() function called",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_DEBUG
        },
        HL_BAD_TIMEOUT: {
          sLabel: "badTimeout",
          sAnalyticsPattern: "badtimeout/{nTimeout}",
          sLogPattern: "Invalid timeout value: {nTimeout}. Must be at least 300",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_ERROR
        },
        HL_BAD_DEFINE_SLOT: {
          sLabel: "badDefineSlot",
          sAnalyticsPattern: "",
          sLogPattern: "Too few arguments passed to defineSlot. Name: {sSlotName}; sizes list: {aDimensions}; element ID: {sElementId}.",
          nAnalyticsLevel: i.LOG_WARN,
          nLogLevel: i.LOG_WARN
        },
        HL_BAD_DEFINE_SLOT_FROM_OBJ: {
          sLabel: "badDefineSlotFromObj",
          sAnalyticsPattern: "",
          sLogPattern: "Incorrect object params passed to defineSlot. SiteId: {nSiteId}; zoneId: {nZoneId}; sizes list: {aSizes}; unique id: {nId}.",
          nAnalyticsLevel: i.LOG_WARN,
          nLogLevel: i.LOG_WARN
        },
        SLOT_SIZE_NOT_MAPPED: {
          sLabel: "slotSizeNotMapped",
          sAnalyticsPattern: "slot-size-not-mapped/{sDimensions}/{sSlotName}",
          sLogPattern: "Could not map dimension: {sDimensions} for slot: {sSlotName}.",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_DEBUG
        },
        SLOT_GET_TARGETING: {
          sLabel: "getTargeting",
          sAnalyticsPattern: "slot-targeting-get/{nAccountId}/{nSiteId}/{nZoneId}/{nSizeId}/{sTier}/{sValue}/{sIntegration}/{sContext}/{nLatency}",
          sLogPattern: "[{sElementId}] Getting Ad Server Targeting for Key={sKey}, Value={sValue}",
          nAnalyticsLevel: i.LOG_ALWAYS,
          nLogLevel: i.LOG_INFO
        },
        SLOT_MAPPING_PERFORMANCE: {
          sLabel: "slotMappingPerformance",
          sAnalyticsPattern: "slot-mapping-performance/{nTotalTime}/{nAverageTime}",
          sLogPattern: "Slot mapping took {nTotalTime}ms to execute.",
          nAnalyticsLevel: i.LOG_ALWAYS,
          nLogLevel: i.LOG_INFO
        },
        HL_CREATIVE_RENDERED: {
          sLabel: "creativeRenderCalled",
          sAnalyticsPattern: "render/{nAccountId}/{nSiteId}/{nZoneId}/{nSizeId}/{sTier}/{nCpm}/{sAuctionId}/{sIntegration}",
          sLogPattern: "Creative rendering called for size: {nSizeId}, element: {sElementId}, account: {nAccountId}.",
          nAnalyticsLevel: i.LOG_ALWAYS,
          nLogLevel: i.LOG_INFO,
          oListenerParams: {
            accountId: "nAccountId",
            siteId: "nSiteId",
            zoneId: "nZoneId",
            sizeId: "nSizeId",
            slotId: "sSlotName",
            elementId: "sElementId",
            creativeId: "nCreativeId",
            adId: "nAdId",
            advertiserId: "nAdvertiserId",
            networkId: "nNetworkId",
            aqId: "sAqId"
          }
        },
        HL_CREATIVE_RENDER_SLOT_NOT_FOUND: {
          sLabel: "creativeRenderSlotNotFound",
          sAnalyticsPattern: "render-no-slot/{nSizeId}/{sElementId}/{nAccountId}",
          sLogPattern: "Creative rendering could not find slot for size: {nSizeId}, element: {sElementId}, account: {nAccountId}.",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_ERROR
        },
        HL_CREATIVE_RENDER_CREATIVE_NOT_FOUND: {
          sLabel: "creativeRenderCreativeNotFound",
          sAnalyticsPattern: "render-no-creative/{nSizeId}/{sElementId}/{nAccountId}",
          sLogPattern: "Creative rendering could not find creative for size: {nSizeId}, element: {sElementId}, account: {nAccountId}.",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_ERROR
        },
        FL_RUN: {
          sLabel: "runLatency",
          sAnalyticsPattern: "run/{nLatency}/",
          sLogPattern: "Execution from init to run took {nLatency} ms",
          nAnalyticsLevel: i.LOG_ALWAYS,
          nLogLevel: i.LOG_DEBUG
        },
        FL_RESPONSE_SUCCESS: {
          sLabel: "responseSuccess",
          sAnalyticsPattern: "response/success/{nStatusCode}/{sRequestType}/{nTimeout}/{nRequestTime}/{nAccountId}/{nSiteId}/{nZoneId}/{nSizeId}",
          sLogPattern: "Auction request finished successfully before timeout {nTimeout} in {nRequestTime} ms, elementId: {sElementId}, sizeId: {nSizeId}.",
          nAnalyticsLevel: i.LOG_ALWAYS,
          nLogLevel: i.LOG_DEBUG
        },
        FL_RESPONSE_TIMEOUT: {
          sLabel: "responseTimeout",
          sAnalyticsPattern: "response/timeout/{nStatusCode}/{sRequestType}/{nTimeout}/{nRequestTime}/{nAccountId}/{nSiteId}/{nZoneId}/{nSizeId}",
          sLogPattern: "Auction request finished AFTER timeout {nTimeout} in {nRequestTime} ms, elementId: {sElementId}, sizeId: {nSizeId}.",
          nAnalyticsLevel: i.LOG_ALWAYS,
          nLogLevel: i.LOG_DEBUG
        },
        FL_RESPONSE_FAILURE: {
          sLabel: "responseFailure",
          sAnalyticsPattern: "response/failure/{nStatusCode}/{sRequestType}/{nTimeout}/{nRequestTime}/{nAccountId}/{nSiteId}/{nZoneId}/{nSizeId}",
          sLogPattern: "Auction request failed: {sStatus}, with status code {nStatusCode}, elementId: {sElementId}, sizeId: {nSizeId}.",
          nAnalyticsLevel: i.LOG_ALWAYS,
          nLogLevel: i.LOG_WARN
        },
        FL_RESPONSE_PARSE_ERROR: {
          sLabel: "responseParseError",
          sAnalyticsPattern: "parse-error/{sSlotName}/size/{nSizeId}/response/{sRequestData}",
          sLogPattern: "Error parsing response data: {sRequestData}.",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_DEBUG
        },
        FL_BAD_RESPONSE_STATUS: {
          sLabel: "badResponseStatus",
          sAnalyticsPattern: "status/{sStatus}",
          sLogPattern: "Invalid auction ad: {sStatus} / {sReason}",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_DEBUG
        },
        FL_BAD_SLOT_MAPPING: {
          sLabel: "badSlotMapping",
          sAnalyticsPattern: "bad-slotmapping/{nAccountId}/{sElementId}/{nSiteId}/{nZoneId}/{nAeSiteId}/{nAeZoneId}/{sUserAgent}",
          sLogPattern: "Bad Ad Engine Slot Mapping: element: {sElementId}, site: {nSiteId}, zone: {nZoneId}, aeSite: {nAeSiteId}, aeZone: {nAeZoneId}",
          nAnalyticsLevel: i.LOG_ALWAYS,
          nLogLevel: i.LOG_WARN
        },
        FL_BAD_TIER_MAPPING: {
          sLabel: "badTierMapping",
          sAnalyticsPattern: "bad-tiermapping/{nAccountId}/{sElementId}/{sTier}/{sAeTier}",
          sLogPattern: "Bad Ad Engine Tier Mapping: element: {sElementId}, tier: {sTier}, aeTier: {sAeTier}",
          nAnalyticsLevel: i.LOG_ALWAYS,
          nLogLevel: i.LOG_WARN
        },
        FL_AUCTION_CPM_OVERRIDE: {
          sLabel: "auctionCpmOverride",
          sAnalyticsPattern: "cpm-override/{nOriginalCpm}/{nOverrideCpm}",
          sLogPattern: "Overriding Auction CPM. Original: {nOriginalCpm}. Override: {nOverrideCpm}",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_ERROR
        },
        FL_NO_ADS: {
          sLabel: "noAds",
          sAnalyticsPattern: "no-ads/{sSlotName}",
          sLogPattern: "No ads found for slot: {sSlotName}",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_DEBUG
        },
        FL_RESPONSE_UNFIT: {
          sLabel: "responseUnfit",
          sAnalyticsPattern: "response-unfit/{nAccountId}/{nSiteId}/{nZoneId}/{nSizeId}/{sSlotName}/{bResponseTimedOut}/{sIntegration}",
          sLogPattern: "Response for slot: {sSlotName} using size: {nSizeId}. Did not have any ads associated with it.",
          nAnalyticsLevel: i.LOG_ALWAYS,
          nLogLevel: i.LOG_INFO
        },
        FL_TIER_MAPPED: {
          sLabel: "tierMapped",
          sAnalyticsPattern: "tier-mapped/{nAccountId}/{nSiteId}/{nZoneId}/{nSizeId}/{sTier}/{nCpm}/{bResponseTimedOut}/{sIntegration}",
          sLogPattern: "Tier mapped. Price: {nCpm}. Tier: {sTier}. Slot: {sElementId}.",
          nAnalyticsLevel: i.LOG_ALWAYS,
          nLogLevel: i.LOG_INFO,
          oListenerParams: {
            accountId: "nAccountId",
            elementId: "sElementId",
            sizeId: "nSizeId"
          }
        },
        FL_TIER_NOT_MAPPED: {
          sLabel: "tierNotMapped",
          sAnalyticsPattern: "tier-not-mapped/{nAccountId}/{nSiteId}/{nZoneId}/{nSizeId}/{nPrice}/{bResponseTimedOut}/{sIntegration}",
          sLogPattern: 'Could not map "{nPrice}" to any tier for slot "{sSlotName}".',
          nAnalyticsLevel: i.LOG_WARN,
          nLogLevel: i.LOG_DEBUG
        },
        FL_TIER_SPECIFICITY_PRICE: {
          sLabel: "tierSpecificityPrice",
          sAnalyticsPattern: "",
          sLogPattern: "Price matched for tier: {sTierMapping}. Bounds: {nFloor} <= {nAuctionCpm} <= {nCeiling}. Points: {nPoints}.",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_INFO
        },
        FL_EXCEEDED_REQUESTS_PER_SLOT: {
          sLabel: "exceededReqPerSlotLimit",
          sAnalyticsPattern: "exceed-slot-requests/{sSlotName}/limit/{nLimit}",
          sLogPattern: "Exceeded size limit per slot for slot: {sSlotName}. Limit: {nLimit}.",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_WARN
        },
        FL_EXCEEDED_REQUESTS_PER_PAGE: {
          sLabel: "exceededReqPerPageLimit",
          sAnalyticsPattern: "exceed-page-requests/{nLimit}",
          sLogPattern: "Exceeded requests-per-page limit: {nLimit}.",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_WARN
        },
        FL_CREATIVE_CACHED: {
          sLabel: "creativeCached",
          sAnalyticsPattern: "creative-cached/{nAccountId}/{nSiteId}/{nZoneId}/{nSizeId}",
          sLogPattern: "Found creative for slot: {sSlotName}, size: {nSizeId}. Skipping auction.",
          nAnalyticsLevel: i.LOG_DISABLE,
          nLogLevel: i.LOG_WARN
        },
        FL_SLOT_AUCTION: {
          sLabel: "slotAuction",
          sAnalyticsPattern: "slot-auction/{nAccountId}/{nSiteId}/{nZoneId}/{nSizeId}/{sIntegration}",
          sLogPattern: "Running auction for slot: {sSlotName}, size: {nSizeId}, account: {nAccountId}.",
          nAnalyticsLevel: i.LOG_ALWAYS,
          nLogLevel: i.LOG_DEBUG
        }
      },
      k = !1,
      l = function() {
        k || (k = !0, g.nAnalyticsLevel = d.getConfigValue(0, "configuration.analyticsLevel"), g.nAccountId = d.getConfigValue(0, "accountId"), g.nLogLevel = parseInt(f.getUrlSessionParam("rp_loglevel"), 10), isNaN(g.nLogLevel) && (g.nLogLevel = d.getConfigValue(0, "configuration.logLevel", 0)))
      },
      m = function(a, b) {
        var c = this;
        l();
        var d, k = !1;
        c.publish = function() {
            if (!k) {
              k = !0, j.hasOwnProperty(a) || (b = {
                sEventType: a
              }, a = "BAD_EVENT");
              var c = j[a];
              if (f.getIntegration() && (b.sIntegration = f.getIntegration()), c.nAnalyticsLevel <= g.nAnalyticsLevel) {
                var h = c.sAnalyticsPattern;
                g.nAnalyticsLevel === i.LOG_TEST && f.inArray(c.sLabel, ["slotAuction", "getTargeting", "responseSuccess", "responseTimeout", "responseFailure"]) && (h += "/{sElementId}/{sSlotName}"), d = f.formatString(h, b, !0), d = "account/" + g.nAccountId + "/" + d;
                var l = f.getABLabel();
                l && f.inArray(c.sLabel, ["slotAuction", "getTargeting", "creativeRenderCalled", "responseSuccess", "responseFailure", "responseTimeout"]) && (d += "/" + l), e.publish(c.sLabel, d)
              }
              c.nLogLevel <= g.nLogLevel && (d = f.formatString(c.sLogPattern, b), c.nLogLevel === i.LOG_ERROR ? f.error(d) : c.nLogLevel === i.LOG_WARN ? f.warn(d) : c.nLogLevel === i.LOG_INFO ? f.info(d) : c.nLogLevel === i.LOG_DEBUG && f.debug(d))
            }
          },
          function() {
            var c = h[a];
            if (c) {
              var d = j[a].oListenerParams,
                e = {};
              for (var g in d) d.hasOwnProperty(g) && (e[g] = b[d[g]]);
              for (var i = 0; i < c.length; i++) try {
                c[i](e)
              } catch (k) {
                f.error(a, "event listener failed:", c[i], k)
              }
            }
          }()
      };
    m.factory = function(a, b, c) {
      var d = new m(a, b);
      return (arguments.length <= 2 || c) && d.publish(), d
    }, m.addEventListener = function(a, b) {
      var c = d.getConfigValue(0, "configuration.exposedEvents", []);
      return f.inArray(a, c) || "FL_TIER_MAPPED" === a && ["pbjs", "rppb", "pub"].some(function(a) {
        return new RegExp("^" + a, "i").test(f.getIntegration())
      }) ? j[a] && j[a].oListenerParams ? f.isFunction(b) ? (h[a] || (h[a] = []), h[a].push(b), !0) : (f.error("Event listener is not a function:", b), !1) : (f.error("Unconfigured event:", a), !1) : (f.error("Unrecognized event:", a), !1)
    }, b.exports = m
  }, {
    20: 20,
    3: 3,
    7: 7
  }],
  11: [function(a, b, c) {
    "START FASTLANE EXPRESS";
    "use strict";
    var d = a(21),
      e = a(20);
    (function() {
      var a = document.getElementById("fastlane-express");
      if (!a || "on" !== a.getAttribute("data-flex")) return void e.info("flex: fastlane-express NOT turned on, not loading");
      e.info("flex: loading fastlane-express"), d.googletag = d.googletag || {}, d.googletag.cmd = d.googletag.cmd || [], d.googletag.cmd.push(function() {
        var b = d.googletag,
          c = b.pubads;
        if (!(b.display && b.enableServices && "function" == typeof c && c().refresh && c().disableInitialLoad && c().getSlots && c().enableSingleRequest)) return void e.error("flex: fastlane-express could not bind to gpt googletag api");
        e.info("flex: running fastlane-express"), rubicontag.addKW("fastlane-express");
        var f = function(a) {
            for (var b = [], c = 0; c < a.length; c++) try {
              b.push([a[c].getWidth(), a[c].getHeight()])
            } catch (d) {
              e.warn("flex: slot size ", a[c], " not supported by fastlane-express")
            }
            return b
          },
          g = {},
          h = function(a) {
            return a = a || googletag.pubads().getSlots(), a.map(function(a) {
              var b = a.getSlotElementId();
              return g[b] || (g[b] = rubicontag.defineSlot(a.getAdUnitPath(), f(a.getSizes()), b), g[b].gptSlot = a), g[b]
            })
          },
          i = "on" === a.getAttribute("data-flex-targeting"),
          j = function(a) {
            if (i) {
              for (var b = googletag.pubads().getTargetingKeys(), c = 0; c < b.length; c++) rubicontag.setFPI(b[c], googletag.pubads().getTargeting(b[c]));
              for (var d = 0; d < a.length; d++) {
                var e = a[d];
                b = e.gptSlot.getTargetingKeys();
                for (var f = 0; f < b.length; f++) 0 !== b[f].indexOf("rpfl_") && e.setFPI(b[f], e.gptSlot.getTargeting(b[f]))
              }
            }
          },
          k = b.display,
          l = b.enableServices,
          m = c().refresh,
          n = c().disableInitialLoad,
          o = c().enableSingleRequest;
        b.enableServices = function() {
          return p || n.apply(c()), l.apply(b, arguments)
        }, b.display = function(a) {
          e.debug("flex: display:", a), k.apply(b, arguments);
          var d;
          q || (d = googletag.pubads().getSlots().filter(function(b) {
            return b.getSlotElementId() === a
          }));
          var f = h(d).filter(function(a) {
            return !a.displayed
          });
          if (f.length) {
            for (var g = 0; g < f.length; g++) f[g].displayed = !0;
            p || (d = f.map(function(a) {
              return a.gptSlot
            }), j(f), rubicontag.run(function() {
              for (var a = 0; a < d.length; a++) rubicontag.setTargetingForGPTSlot(d[a]);
              m.apply(c(), [d])
            }, {
              slots: f
            }))
          }
        }, c().refresh = function(a) {
          e.debug("flex: refresh:", a);
          var b = arguments,
            d = h(a).filter(function(a) {
              return a.displayed
            });
          a = a || d.map(function(a) {
            return a.gptSlot
          }), j(d), rubicontag.run(function() {
            for (var d = 0; d < a.length; d++) rubicontag.setTargetingForGPTSlot(a[d]);
            m.apply(c(), b)
          }, {
            slots: d
          })
        };
        var p = !1;
        c().disableInitialLoad = function() {
          return p = !0, n.apply(d.googletag.pubads(), arguments)
        };
        var q = !1;
        c().enableSingleRequest = function() {
          return q = !0, o.apply(d.googletag.pubads(), arguments)
        }
      })
    })(), b.exports = "END FASTLANE EXPRESS"
  }, {
    20: 20,
    21: 21
  }],
  12: [function(a, b, c) {
    "use strict";
    var d = a(18),
      e = a(10),
      f = a(20),
      g = a(14),
      h = a(9),
      i = function() {
        function b(a, b) {
          var c = !1;
          if (b = b || r, Array.isArray(a) && (a.some(function(a) {
              if (a.key && a.key.toLowerCase() === "rpfl_" + b) return c = a.values[0].match(/^([0-9]+)_(.*)$/)[2], Boolean(c)
            }), a.length > 0 && !c)) throw "targeting provided but tier could not be read";
          return c
        }

        function c(a, b) {
          g.mark("fastlane.mapResponseToTier.start");
          for (var c, d = {
              nPoints: 0,
              oTier: {}
            }, e = 0; e < b.length; e++)(c = i(a, b[e])) > d.nPoints && (d.nPoints = c, d.oTier = b[e]);
          return g.mark("fastlane.mapResponseToTier.complete"), g.measure("tierMapping", "fastlane.mapResponseToTier.start", "fastlane.mapResponseToTier.complete"), d
        }

        function i(a, b) {
          var c = 0,
            d = Math.round(100 * a.cpm) / 100;
          if (b.hasOwnProperty("floor") && b.hasOwnProperty("ceiling")) {
            if (!(d >= b.floor && d <= b.ceiling)) return 0;
            c += w.nPrice, f.info("Price matched for tier: " + b.mapping + ". Bounds: " + b.floor + " <= " + d + " <= " + b.ceiling + ". Points: " + c + ".")
          }
          if (b.hasDeals) {
            var e = !!a.deal && parseInt(a.deal, 10);
            if (!0 !== b.hasDeals || !e) return f.info("Deal did not match for tier: " + b.mapping + ". Deal ID: " + e + "."), 0;
            c += w.nDealWildcard, f.info("Deal wildcard matched for tier: " + b.mapping + ". Deal ID: " + e + ". Points: " + c + ".")
          } else if (b.deals) {
            var g = !!a.deal && parseInt(a.deal, 10);
            if (!Array.isArray(b.deals) || !f.inArray(g, b.deals)) return f.info("Deal did not match for tier: " + b.mapping + ". Deal ID: " + g + "."), 0;
            c += w.nDealExact, f.info("Deal matched for tier: " + b.mapping + ". Deal ID: " + g + ". Points: " + c + ".")
          }
          if (b.primaryAccountIds) {
            var h = s.getConfigValue(0, "accountId");
            if (!f.inArray(h, b.primaryAccountIds)) return f.debug("Primary accountId did not match for tier:", b.mapping, ", Primary account: ", h, ", configured: ", b.primaryAccountIds), 0;
            c += w.nPrimaryAccount, f.debug("Primary accountId match for tier:", b.mapping, ", Primary account: ", h, ", configured: ", b.primaryAccountIds, ", points:", c)
          }
          return c
        }

        function j(a) {
          return a.size ? [a.size] : C(a.getRubiconSizeIds(r))
        }

        function k(a, b, c, d, f) {
          return function(h) {
            g.mark("fastlane.run.auctionResponse"), g.measure("auctionRequest", "fastlane.run.auctionRequest", "fastlane.run.auctionResponse");
            for (var i = 0; i < a.length; i++) {
              var j = a[i],
                k = f || j.getRubiconSizeIds(r).join(",");
              c.bHasTimedout ? e.factory("FL_RESPONSE_TIMEOUT", {
                nAccountId: r,
                sElementId: j.getElementId(),
                nSiteId: j.getSiteId(r),
                nZoneId: j.getZoneId(r),
                nSizeId: k,
                nTimeout: c.nTimeout,
                nRequestTime: h.requestTime,
                sRequestType: "xhr",
                nStatusCode: h.status,
                sStatus: h.statusText || "",
                sSlotName: j.getSlotName()
              }) : e.factory("FL_RESPONSE_SUCCESS", {
                nAccountId: r,
                sElementId: j.getElementId(),
                nSiteId: j.getSiteId(r),
                nZoneId: j.getZoneId(r),
                nSizeId: k,
                nTimeout: c.nTimeout,
                nRequestTime: b.requestTime,
                sRequestType: "xhr",
                nStatusCode: h.status,
                sStatus: h.statusText || "",
                sSlotName: j.getSlotName()
              }), d.add(j.getPublicVersion())
            }
            y(a, h.responseText, c.bHasTimedout, b, f), g.mark("fastlane.run.responseParsed"), g.measure("responseParsed", "fastlane.run.auctionResponse", "fastlane.run.responseParsed")
          }
        }

        function l(a, b, c, d) {
          return function(f) {
            for (var g = 0; g < a.length; g++) {
              var h = a[g],
                i = d || h.getRubiconSizeIds(r).join(",");
              E(c.bHasTimedout, h, r, i), e.factory("FL_RESPONSE_FAILURE", {
                nAccountId: r,
                sElementId: h.getElementId(),
                nSiteId: h.getSiteId(r),
                nZoneId: h.getZoneId(r),
                nSizeId: i,
                nTimeout: c.nTimeout,
                nRequestTime: b.requestTime,
                sRequestType: "xhr",
                nStatusCode: f.status,
                sStatus: f.statusText || "",
                sSlotName: h.getSlotName()
              })
            }
          }
        }

        function m() {
          if ("boolean" == typeof o) return o;
          var a = parseFloat(s.getConfigValue(q, "fastlane.pageSampling", 1));
          return o = a > Math.random()
        }
        var n = this,
          o = null,
          p = 0,
          q = 0,
          r = null,
          s = a(7),
          t = a(13),
          u = [],
          v = [],
          w = {
            nPrice: 10,
            nDealWildcard: 25,
            nDealExact: 50,
            nPrimaryAccount: 100
          },
          x = !f.browserSupportsXHR();
        n.init = function(a) {
          q = a, u = s.getConfigValue(q, "tiers", u), r = s.getConfigValue(q, "accountId"), p = B(u), v = s.getConfigValue(q, "fastlane.optimizedHosts", ["fastlane.rubiconproject.com/a/api/fastlane.json"]).slice()
        };
        var y = function(a, b, c, d, g) {
            var h, i;
            void 0 === c && (c = !1);
            try {
              h = JSON.parse(b)
            } catch (n) {
              return void a.forEach(function(a) {
                Array.isArray(g) || (g = j(a)), e.factory("FL_RESPONSE_PARSE_ERROR", {
                  sSlotName: a.getSlotName(),
                  nSizeId: g.join(","),
                  sRequestData: b
                }), E(c, a, r, g.join())
              })
            }
            if (!h || !h.ads || "object" != typeof h.ads || Array.isArray(h.ads) && 0 === h.ads.length) return void a.forEach(function(a) {
              Array.isArray(g) || (g = j(a)), F(c, a, r, g.join())
            });
            if (Array.isArray(h.ads)) return void z(h.ads[0], a[0], c, h, d, g[0]);
            for (var k in h.ads)
              if (h.ads.hasOwnProperty(k)) {
                var l = h.ads[k];
                if (i = t.getSlot(k))
                  if (Array.isArray(l) && 0 !== l.length)
                    for (var m = 0; m < l.length; m++) z(l[m], i, c, h, d);
                  else F(c, i, r, (g || j(i)).join());
                else f.warn("No slot found for element " + k)
              }
          },
          z = function(a, d, g, h, i, j) {
            if (j = parseInt(a.size_id || j, 10), "no-ads" === a.status) return void F(g, d, r, j);
            var k = f.getABTestParam("aeMapping");
            if ("on" === k && (d.getSiteId(r) === h.site_id && d.getZoneId(r) === h.zone_id || e.factory("FL_BAD_SLOT_MAPPING", {
                nAccountId: r,
                sElementId: d.getElementId(),
                nSiteId: d.getSiteId(r),
                nZoneId: d.getZoneId(r),
                nAeSiteId: h.site_id,
                nAeZoneId: h.zone_id,
                sUserAgent: navigator.userAgent
              })), "ok" !== a.status) return e.factory("FL_BAD_RESPONSE_STATUS", {
              sStatus: a.status,
              sReason: a.reason || a.error_reason
            }), void E(g, d, r, j);
            var l = parseFloat(f.getUrlSessionParam("rp_cpm_override"));
            l && (e.factory("FL_AUCTION_CPM_OVERRIDE", {
              nOriginalCpm: a.cpm,
              nOverrideCpm: l
            }), a.cpm = l);
            var m = a.cpm;
            if (m < p) return f.warn("CPM is below the lowest floor for slot: " + d.getSlotName() + " using size: " + j + "."), void E(g, d, r, j);
            var n = f.getUrlSessionParam("rp_deal_override");
            if (n) {
              var o = a.deal;
              a.deal = n, f.error("Overriding Auction Deal. Original: " + o + ". Override: " + a.deal)
            }
            var q;
            try {
              k = f.getABTestParam("aeMapping"), "off" === k || n || l || (q = b(a.targeting), q = q || a.tier)
            } catch (w) {
              f.warn("AE mapping tier: " + w)
            }
            if (k = f.getABTestParam("aeMapping"), !q || "on" === k) {
              var s = q,
                t = c(a, u);
              q = !!t.nPoints && t.oTier.mapping, !s && "on" !== k || s === q || e.factory("FL_BAD_TIER_MAPPING", {
                nAccountId: r,
                sElementId: d.getElementId(),
                sTier: q,
                sAeTier: s
              })
            }
            var v = f.getUrlSessionParam("rp_tier_override");
            v && (f.error("Overriding Auction Tier. Original: " + q + ". Override: " + v), q = v), q ? (d.storeCreative(h.account_id, j, a, a.impression_id, q, i), e.factory("FL_TIER_MAPPED", {
              nAccountId: r,
              sElementId: d.getElementId(),
              nSiteId: d.getSiteId(r),
              nZoneId: d.getZoneId(r),
              bResponseTimedOut: g ? 1 : 0,
              nSizeId: j,
              sTier: q,
              nCpm: m
            })) : e.factory("FL_TIER_NOT_MAPPED", {
              sSlotName: d.getSlotName(),
              sElementId: d.getElementId(),
              nAccountId: r,
              nSiteId: d.getSiteId(r),
              nZoneId: d.getZoneId(r),
              bResponseTimedOut: g ? 1 : 0,
              nSizeId: j,
              nPrice: m
            })
          };
        n.run = function(b, c) {
          if ("function" != typeof b) throw new Error("first argument to 'run' must be a callback function");
          if (!m()) return f.warn("fastlane#run call cancelled due to pageSampling"), void b([]);
          if (x) return f.warn("fastlane#run call cancelled due to unsupported browser"), b([]);
          f.setTimestamp("nRunTimestamp"), g.mark("fastlane.run"), e.factory("FL_RUN", {
            nLatency: Number(new Date) - f.getDataStoreValue("nInitTimestamp")
          }), f.setSizesFilteredByAccountRules(t, s);
          var i = "";
          f.getIntegration() || (i = "plain", s.getConfigValue(0, "configuration.exposeRawResponses", !1) && (i = "custom"), f.usesFastlaneExpress() && (i = "flex"), f.setIntegration(i));
          var o = new d,
            u = {
              bHasTimedout: !1,
              nTimeout: c.nTimeout || 2e3
            },
            w = a(4),
            y = new w({
              nAccountId: r,
              nConfigIndex: q,
              oTimeout: u,
              nLowestTierFloor: p,
              oFinishedSlots: o,
              fSuccessResponse: k,
              fFailedResponse: l,
              aBaseUrls: v,
              sTransId: c.sTransId || f.generateUUID()
            });
          u.oTimeout = setTimeout(function() {
            f.info("fastlane:", " timeout after " + u.nTimeout + " ms. " + y.getSuccessfulRequests() + "/" + y.totalRequests() + " requests finished successfully before timeout"), u.bHasTimedout = !0, b(o.toArray())
          }, u.nTimeout);
          var z = s.getConfigValue(0, "configuration.maximumRequestsPerPage", 100),
            B = s.getConfigValue(0, "configuration.maximumSizesPerSlot", 10),
            C = s.getConfigValue(0, "configuration.cacheResponses", !1),
            E = s.getConfigValue(0, "configuration.useMultiSize", !0),
            F = f.isSingleRequest(),
            H = f.getNow(),
            I = c.aSlots;
          if (!F && !E) {
            var J = {};
            I = D(c.aSlots)
          }
          var K = function(a) {
            if (!J) return !1;
            var b = a.getElementId();
            return J[b] || (J[b] = 0), J[b] += 1, J[b] > B + 1 || J[b] === B + 1 && (e.factory("FL_EXCEEDED_REQUESTS_PER_SLOT", {
              sSlotName: a.getSlotName(),
              nLimit: B
            }), !0)
          };
          I.forEach(function(a) {
            var b = j(a);
            if (a = a.slot || a, !b || 0 === b.length) return void f.warn("Slot has no sizes, skipping:", a.getElementId());
            if (!F && y.totalRequests() >= z) return void e.factory("FL_EXCEEDED_REQUESTS_PER_PAGE", {
              nLimit: z
            });
            for (var c = 0; c <= b.length; c++)
              if (A(a, b[c], r, H, C) && J) return;
            if (!a.isAdEngineMapped(r) && !a.hasValidSiteZoneId(r)) return void f.error("Invalid site or zone id. elementId:", a.getElementId(), "site:", a.getSiteId(r), "zone:", a.getZoneId(r));
            if (!K(a)) {
              var d = [b.join(",")];
              F && !E && (d = b), d.forEach(function(b) {
                G(a, r, String(b))
              }), y.addSlot(a, b.shift(), b)
            }
          }), y.finishAuction(), y.finished(function() {
            u.bHasTimedout || (f.info("fastlane:", y.getSuccessfulRequests() + "/" + y.totalRequests() + " requests finished successfully before timeout (" + u.nTimeout + " ms)"), clearTimeout(u.oTimeout), b(o.toArray())), h.sync(t.getEmilyParams())
          }), setTimeout(n.purgeExpiredCreatives, 3e5)
        };
        var A = function(a, b, c, d, f) {
          var g = a.getCreative(c, b);
          if (null !== g)
            if (g.nExpires <= d) t.purgeCreative(g.sImpressionId);
            else if (f) {
            if (f) return e.factory("FL_CREATIVE_CACHED", {
              sSlotName: a.getSlotName(),
              nAccountId: c,
              nSiteId: a.getSiteId(c),
              nZoneId: a.getZoneId(c),
              nSizeId: b
            }), !0
          } else a.purgeCreative(c, b);
          return !1
        };
        n.purgeExpiredCreatives = function() {
          for (var a = f.getNow(), b = t.getCreatives(), c = 0; c < b.length; c++) {
            var d = b[c];
            d && d.nExpires <= a && t.purgeCreative(d.sImpressionId)
          }
        };
        var B = function(a) {
            return a.length ? a.reduce(function(a, b) {
              return Math.min(a, parseFloat(b.floor))
            }, 1 / 0) : 0
          },
          C = function(a) {
            if (!Array.isArray(a) || !a.length) return [];
            a = a.slice(), a = a.sort(function(a, b) {
              return a - b
            });
            var b = [a[0]];
            return [15, 2, 9].some(function(c) {
              if (a.indexOf(c) >= 0) return b[0] = c, !0
            }), b.concat(a.filter(function(a) {
              return a !== b[0]
            }))
          },
          D = function(a) {
            for (var b, c, d = [], e = 0; e < a.length; e++) c = a[e], b = (c.getRubiconSizeIds(r) || []).slice(), d.push({
              slot: c,
              sizes: b
            });
            var f = [];
            for (e = 0; d.length;) c = d[e].slot, b = d[e].sizes, c && (b.length || "video" === c.getSlotType()) && f.push({
              slot: c,
              size: b.shift()
            }), b.length || d.splice(e--, 1), ++e >= d.length && (e = 0);
            return f
          },
          E = function(a, b, c, d) {
            var f = {
              bResponseTimedOut: a ? 1 : 0,
              nSiteId: b.getSiteId(c),
              nZoneId: b.getZoneId(c),
              sSlotName: b.getSlotName(),
              sElementId: b.getElementId(),
              nAccountId: c,
              nSizeId: d
            };
            e.factory("FL_RESPONSE_UNFIT", f)
          },
          F = function(a, b, c, d) {
            e.factory("FL_NO_ADS", {
              sSlotName: b.getSlotName(),
              nSizeId: d
            }), E(a, b, c, d)
          },
          G = function(a, b, c) {
            e.factory("FL_SLOT_AUCTION", {
              sSlotName: a.getSlotName(),
              nAccountId: b,
              nSiteId: a.getSiteId(b),
              nZoneId: a.getZoneId(b),
              nSizeId: c,
              sElementId: a.getElementId()
            })
          }
      };
    b.exports = i
  }, {
    10: 10,
    13: 13,
    14: 14,
    18: 18,
    20: 20,
    4: 4,
    7: 7,
    9: 9
  }],
  13: [function(a, b, c) {
    "use strict";
    var d = a(21),
      e = a(19),
      f = a(12),
      g = a(7),
      h = a(8),
      i = a(20),
      j = a(10),
      k = (a(3), a(17)),
      l = a(5),
      m = a(18),
      n = function() {
        var b, c = this,
          n = a(14),
          o = null,
          p = null,
          q = null,
          r = null,
          s = !1,
          t = {},
          u = {},
          v = {},
          w = new h,
          x = !1,
          y = [],
          z = new m,
          A = 1e3,
          B = 300,
          C = {
            syncEnabled: !1,
            syncDelay: 5e3
          },
          D = '<!doctype html>\n\n<html lang="en"><head><meta charset="utf-8"><title></title><script type="text/javascript">var inDapIF = true;<\/script></head><body style="margin: 0px; padding: 0px;">',
          E = "</body></html>";
        c.loadConfiguration = function(a) {
          x || g.addConfig(a)
        }, c.init = function() {
          if (!x) {
            x = !0, i.setTimestamp("nInitTimestamp"), n.mark("highlander.init"), c.writeDnsPrefetchElements();
            var a = g.getConfigValue(0, "sizeMap", !1);
            a && (i.oSizeMap = a, i.mergeVideoSizes()), y = o(), d.origrubicontag && d.origrubicontag.cmd && Array.isArray(d.origrubicontag.cmd) && c.processCommands(d.origrubicontag.cmd), j.factory("HL_INIT", {
              nAccountId: g.getConfigValue(0, "accountId"),
              sVersion: g.getConfigValue(0, "configuration.version")
            })
          }
        };
        var F = function() {
            s = !0, d.addEventListener && d.addEventListener("message", function(a) {
              var b = a.data;
              b && b.rp_get_impression_info && G(b.rp_get_impression_info)
            }, !1)
          },
          G = function(a) {
            var b = L(a);
            if (null !== b && b.hasOwnProperty("DOM_IFRAME")) {
              var c = b.DOM_IFRAME;
              delete b.DOM_IFRAME;
              var d = JSON.stringify(b);
              return c.setAttribute("data-rp-mfl-impression-info", d), K(a), c
            }
          };
        c.writeDnsPrefetchElements = function() {
          var a = d.document.createElement("link");
          a.rel = "dns-prefetch", a.href = "//fastlane.rubiconproject.com/";
          var b = d.document.getElementsByTagName("script")[0];
          b && b.parentNode.appendChild(a)
        }, o = function() {
          for (var a = [], b = g.getConfigs(), c = 0; c < b.length; c++)
            for (var d = g.getConfigValue(c, "services", []), e = 0; e < d.length; e++) {
              var h = d[e];
              if ("fastlane" === h) {
                var i = new f;
                i.init(c), a.push(i)
              }
            }
          return a
        }, c.run = function(a, b) {
          j.factory("HL_RUN_CALLED", {
            nAccountId: g.getConfigValue(0, "accountId")
          }), "function" != typeof a && (i.error("Missing or invalid callback provided to rubicontag.run(). Overiding with empty function."), a = function() {});
          var c = p(b);
          k.run(y, a, c)
        }, p = function(a) {
          if ((a = a || {}) && i.isInteger(a)) {
            a = {
              timeout: a
            }
          }
          var b = !!a.slots,
            d = {
              nTimeout: a.timeout ? a.timeout : g.getConfigValue(0, "configuration.timeout", A),
              aSlots: !!a.slots && a.slots,
              bSlotsSpecified: b,
              sTransId: a.transactionId
            };
          d.nTimeout < B && (j.factory("HL_BAD_TIMEOUT", {
            nTimeout: d.nTimeout
          }), d.nTimeout = B);
          var e = [];
          if (d.bSlotsSpecified) {
            if (Array.isArray(d.aSlots))
              for (var f = 0; f < d.aSlots.length; f++)
                if (d.aSlots[f] && "function" == typeof d.aSlots[f].getElementId) {
                  var h = c.getSlot(d.aSlots[f].getElementId());
                  h && e.push(h)
                }
          } else e = c.getAllSlots();
          return d.aSlots = e, d
        }, c.processCommands = function(a) {
          for (var b = 0; b < a.length; b++) a[b]()
        }, r = function(a) {
          var b = a.oVisitor || {},
            c = a.aKeywords || [],
            d = a.aContexts || [],
            f = a.oInventory || {},
            g = a.sName || null,
            h = a.aSizes || [],
            j = a.sId || null,
            k = a.sType || "display",
            l = new e(g, h, j, k);
          a.sPosition && l.setPosition(a.sPosition);
          for (var m in b) b.hasOwnProperty(m) && l.addFPV(m, b[m]);
          for (var n in f) f.hasOwnProperty(n) && l.addFPI(n, f[n]);
          return l.addContext.apply(l, d), l.addKW(c), "video" === k && (l.setLanguage(a.sLanguage || ""), l.setPlayerSize(a.nWidth || 0, a.nHeight || 0)), a.oAEParams && "object" == typeof a.oAEParams && i.setDataStoreValue("oAEParams", a.oAEParams), l
        }, c.defineSlot = function(a, b, d) {
          if (1 === arguments.length && i.isObject(a)) return q(a);
          if (arguments.length < 3) return j.factory("HL_BAD_DEFINE_SLOT", {
            sSlotName: a,
            aDimensions: b,
            sElementId: d
          }), r({
            sId: d,
            sName: a,
            aSizes: b
          });
          var e = c.getSlot(d);
          return e || (t[d] = r({
            sId: d,
            sName: a,
            aSizes: b
          }), t[d])
        }, q = function(a) {
          if (!i.isObject(a) || !Array.isArray(a.sizes) || !a.id) return j.factory("HL_BAD_DEFINE_SLOT_FROM_OBJ", {
            aSizes: a.sizes,
            nSiteId: a.siteId,
            nZoneId: a.zoneId,
            nId: a.id
          }), r({
            sId: a.id,
            sName: a.id
          });
          var b = c.getSlot(a.id);
          if (b) return b;
          a.url && i.setUrl(a.url), Array.isArray(a.pageContexts) && c.addContext.apply(c, a.pageContexts), b = r({
            sId: a.id,
            oVisitor: a.visitor,
            sPosition: a.position,
            aContexts: a.slotContexts,
            aKeywords: a.keywords,
            oInventory: a.inventory,
            sName: a.name || a.id,
            aSizes: i.normalizeDimensions(a.sizes),
            sType: a.type,
            sLanguage: a.language,
            nHeight: a.playerHeight,
            nWidth: a.playerWidth,
            oAEParams: a.aeParams
          });
          var d, e = g.getConfigValue(0, "accountId"),
            f = !1;
          a.siteId && a.zoneId ? d = {
            siteId: a.siteId,
            zoneId: a.zoneId
          } : f = !0, b.loadSlotConfiguration(e, d, f);
          var h = a.secondaryAccounts;
          if (h && i.isObject(h)) {
            var k = g.getConfigValue(0, "configuration.secondaryAccountIds");
            for (var l in h)
              if (h.hasOwnProperty(l)) {
                if (!i.inArray(l, k)) {
                  i.error("Error: configuring slot with invalid secondary accountId:", l);
                  continue
                }
                var m = h[l];
                if (d = null, f = !1, m.siteId && m.zoneId ? d = {
                    siteId: m.siteId,
                    zoneId: m.zoneId
                  } : f = !0, m.sizes) {
                  d = d || {};
                  var n = i.convertDimensionsListToSizeIds(h[l].sizes);
                  n && n.length && (d.sizes = n)
                }
                b.loadSlotConfiguration(l, d, f)
              }
          }
          return t[a.id] = b, b
        }, c.getAllSlots = function() {
          var a = [];
          for (var b in t) t.hasOwnProperty(b) && a.push(t[b]);
          return a
        }, c.getSlot = function(a) {
          return !!t.hasOwnProperty(a) && t[a]
        }, c.setTargetingForGPTSlot = function(a) {
          if (!(a && i.isObject(a) && i.isFunction(a.getSlotElementId) && i.isFunction(a.setTargeting))) return !1;
          var b = c.getSlot(a.getSlotElementId());
          return !!(b && i.isObject(b) && i.isFunction(b.getAdServerTargeting)) && b.setTargetingForGPTSlot(a)
        };
        var H = function(a) {
          var b;
          try {
            b = JSON.parse(a.data)
          } catch (e) {
            return
          }
          if (b && "rp_creative_params" === b.type) {
            var d = b;
            delete d.type, d.safeFrameWin = a.source, c.renderCreative(d)
          }
        };
        d.addEventListener && d.addEventListener("message", H, !1), c.renderCreative = function(a) {
          var e, f, h;
          if (n.mark("highlander.renderCreative"), arguments.length > 1 && (a = {
              parentNode: arguments[0],
              elementId: arguments[1],
              sizeId: null,
              accountId: arguments[3] || 0
            }, arguments[2] && (h = arguments[2].match && arguments[2].match(/^([0-9]+)_.+$/), Array.isArray(h) && 2 === h.length ? a.sizeId = h[1] : a.sizeId = arguments[2])), a.sizeId || a.accountId) {
            if (a.accountId || (a.accountId = g.getConfigValue(0, "accountId")), !1 === (f = c.getSlot(a.elementId))) return void j.factory("HL_CREATIVE_RENDER_SLOT_NOT_FOUND", {
              sElementId: a.elementId,
              nSizeId: a.sizeId,
              nAccountId: a.accountId
            });
            e = f.getCreative(a.accountId, a.sizeId), a.auctionId = e && e.sImpressionId
          } else a.auctionId || (a.auctionId = a.elementId), (e = c.getCreative(a.auctionId)) && (a.sizeId = e.nSizeId, a.accountId = e.nAccountId, f = e.oSlot);
          if (null === e) return void j.factory("HL_CREATIVE_RENDER_CREATIVE_NOT_FOUND", {
            sElementId: a.elementId,
            nSizeId: a.sizeId,
            nAccountId: a.accountId
          });
          c.purgeCreative(a.auctionId), j.factory("HL_CREATIVE_RENDERED", {
            nAccountId: a.accountId,
            sElementId: a.elementId,
            nSiteId: f.getSiteId(a.accountId),
            nZoneId: f.getZoneId(a.accountId),
            nSizeId: a.sizeId,
            sTier: e.sTier,
            nCpm: e.oResponse.cpm,
            sAuctionId: a.auctionId,
            sSlotName: f.getSlotName(),
            nCreativeId: e.oResponse.creative_id,
            nAdId: e.oResponse.ad_id,
            nAdvertiserId: e.oResponse.advertiser,
            nNetworkId: e.oResponse.network,
            sAqId: e.oResponse.aqid || ""
          });
          var k = i.getProtocol() + "stats.aws.rubiconproject.com/stats/fastlaneimps/" + e.sImpressionId + "/a" + e.nAccountId + "/s" + e.oSlot.getSiteId(e.nAccountId) + "/z" + e.oSlot.getZoneId(e.nAccountId) + "/d/" + Math.round(1e15 * Math.random());
          (new Image).src = k;
          var m = '<script type="text/javascript">' + e.oResponse.script + "<\/script>";
          e.oResponse.depot_url && (m = '<script type="text/javascript" src="' + e.oResponse.depot_url + '"><\/script>');
          var o, p = ["rpfl", a.accountId, f.getSlotName().replace(/[^a-zA-Z0-9]/g, "_"), a.sizeId].join("_"),
            q = i.convertSizeIdToDimensions(a.sizeId);
          if (a.safeFrameWin ? (i.info("rendering creative to SafeFrame"), o = I({
              sContent: m,
              oContainer: d.document.getElementById(a.elementId),
              safeFrameWin: a.safeFrameWin
            })) : o = c.writeContentToFriendlyIFrame({
              oContainer: a.parentNode,
              sContent: m,
              sId: p,
              nWidth: q[0],
              nHeight: q[1]
            }), o) try {
            if (Array.isArray(a.clickTrackingUrls) && a.clickTrackingUrls.length) {
              new l(o, a.clickTrackingUrls, {
                siteId: f.getSiteId(a.accountId),
                zoneId: f.getZoneId(a.accountId),
                sizeId: a.sizeId,
                userId: b
              })
            }
            J(o, a.auctionId), n.mark("highlander.writeContentToIFrame.complete"), n.measure("renderCreative", "highlander.renderCreative", "highlander.writeContentToIFrame.complete")
          } catch (r) {
            i.error("failed to set Creative IFrame Attributes:", r)
          }
        }, c.writeContentToFriendlyIFrame = function(a) {
          try {
            a.sId = a.sId || "rp_ct_" + Math.round(1e15 * Math.random());
            var b = d.document.createElement("iframe");
            b.setAttribute("scrolling", "no"), b.src = "about:blank", b.style.cssText = "width: " + a.nWidth + "px; height: " + a.nHeight + "px; border: 0; margin: 0; padding: 0; overflow: hidden;", b.id = a.sId, b.className = "rp-creative-iframe-wrapper", a.oContainer.appendChild(b);
            var c = b.contentWindow.document;
            return c.open(), c.write(D + a.sContent + E), c.close(), b
          } catch (e) {
            i.error("Failed to render creative in friendly iframe:", e)
          }
        };
        var I = function(a) {
            try {
              for (var b, c = a.oContainer.getElementsByTagName("iframe"), d = 0; d < c.length; d++)
                if ("true" === c[d].getAttribute("data-is-safeframe")) {
                  b = c[d];
                  break
                }
              return b = b || (c && c.length ? c[0] : b), a.safeFrameWin.postMessage(JSON.stringify({
                type: "fastlane",
                creative: a.sContent
              }), "*"), b
            } catch (e) {
              i.error("Failed to render creative in safeframe:", e)
            }
          },
          J = function(a, b) {
            if (v.hasOwnProperty(b)) {
              a.setAttribute("data-rp-mfl-impression-id", b);
              var c = v[b];
              c.vantage && (a.setAttribute("data-rp-mfl-impression-id-v2", b), a.setAttribute("data-rp-mfl-account-id", c.account_id), a.setAttribute("data-rp-mfl-vantage", c.vantage), a.setAttribute("data-rp-mfl-url", c.url), a.setAttribute("data-rp-mfl-url-time", c.loadTime))
            } else a.setAttribute("data-rp-impression-id", b);
            v.hasOwnProperty(b) && N(a, b)
          };
        c.storeCreative = function(a, b, c, d, e, f, h) {
          var j = i.getNow() + g.getConfigValue(0, "configuration.creativeTTL", 18e4);
          u[a] = {
            oResponse: b,
            nExpires: j,
            nAccountId: c,
            nSizeId: d,
            sTier: e,
            oSlot: f,
            sImpressionId: a
          }, b.hasOwnProperty("vantage") && (s || F(), M(u[a], h))
        }, c.getCreative = function(a) {
          return u.hasOwnProperty(a) ? u[a] : null
        }, c.getCreatives = function() {
          var a = [];
          for (var b in u) u.hasOwnProperty(b) && a.push(u[b]);
          return a
        }, c.purgeCreative = function(a) {
          var b = null;
          return u.hasOwnProperty(a) && (b = u[a], b.oSlot.purgeCreative(b.nAccountId, b.nSizeId), delete u[a]), b
        };
        var K = function(a) {
            v.hasOwnProperty(a) && delete v[a]
          },
          L = function(a) {
            var b = null;
            return v.hasOwnProperty(a) && (b = v[a]), b
          },
          M = function(a, b) {
            var c = a.oSlot,
              d = b.nRequestTime,
              e = {
                account_id: a.nAccountId,
                site_id: c.getSiteId(a.nAccountId),
                zone_id: c.getZoneId(a.nAccountId),
                size_id: a.nSizeId,
                ad_id: a.oResponse.ad_id,
                advertiser_id: a.oResponse.advertiser,
                creative_id: a.oResponse.creative_id,
                cpm: a.oResponse.cpm,
                network_id: a.oResponse.network,
                loadTime: d,
                url: b.getUrl()
              };
            for (var f in a.oResponse.vantage) a.oResponse.vantage.hasOwnProperty(f) && (e[f] = a.oResponse.vantage[f]);
            return v[a.sImpressionId] = e, e
          },
          N = function(a, b) {
            v.hasOwnProperty(b) && (v[b].DOM_IFRAME = a)
          };
        c.setUserKey = function(a) {
          return b = a, c
        }, c.getUserKey = function() {
          return b
        }, c.setFPI = function(a, b) {
          return w.setFPI(a, b), c
        }, c.addFPI = function(a, b) {
          return w.addFPI(a, b), c
        }, c.getFPI = function() {
          return w.getFPI()
        }, c.setFPV = function(a, b) {
          return w.setFPV(a, b), c
        }, c.addFPV = function(a, b) {
          return w.addFPV(a, b), c
        }, c.getFPV = function() {
          return w.getFPV()
        }, c.addKW = function(a) {
          return w.addKW(a), c
        }, c.getKWs = function() {
          return w.getKWs()
        }, c.addContext = function() {
          for (var a = 0; a < arguments.length; a++) z.add(arguments[a]);
          return c
        }, c.getContexts = function() {
          return z.toArray()
        }, c.setUrl = i.setUrl, c.setIntegration = function(a) {
          var b = {};
          return i.setIntegration(a), ["pbjs", "rppb"].some(function(b) {
            return new RegExp("^" + b, "i").test(a)
          }) && (b.pbjsRubiconTargeting = g.getConfigValue(0, "fastlane.pbjsRubiconTargeting", !1)), b
        }, c.findBestMatchForConfig = function(a, b) {
          if (!a) return !1;
          b = b || 0;
          var d = {};
          a.getSlotName ? (d.slotName = a.getSlotName(), d.elementId = a.getElementId(), d.position = a.getPosition(), d.slotContexts = a.getContexts(), d.type = a.getSlotType()) : d = a, n.mark("highlander.findBestMatchForConfig");
          var e = d.elementId,
            f = "    [" + e + "] ",
            h = "  [" + e + "] ",
            j = "[" + e + "] ",
            k = g.getConfigValue(b, "slots", []);
          d.contexts = c.getContexts();
          var l = {
            nPoints: 0,
            oConfig: !1
          };
          i.warn(j, "Finding best slot config entry for slot name: " + d.slotName + ", contexts: " + (d.contexts.toString() || "(none)") + ".");
          for (var m = 0; m < k.length; m++) {
            var o = k[m];
            i.debug(f, "Starting slot specificity calculation for config: ", o);
            var p = O(d, o);
            p > 0 ? i.info(h, "Found matching config entry. Points: " + p + ", Config: ", o) : i.debug(f, "Config did not match: ", o), p > l.nPoints && (l.nPoints = p, l.oConfig = o)
          }
          return l.nPoints > 0 ? i.warn(j, "Winning slot config entry found. Points: " + l.nPoints + ", Config: ", l.oConfig) : (i.warn(j, "No winning slot config entry found: " + d.slotName + ", contexts: " + (z.toString() || "(none)") + ", Points: " + l.nPoints + "."), 0 === b ? (i.warn(j, "Using catch-all"), l.oConfig = g.getConfigValue(0, "catchAll")) : i.warn(j, " skipping catch-all because this is a secondary account:", g.getConfigValue(m, "accountId"))), n.mark("highlander.findBestMatchForConfig.complete"), n.measure("findBestMatchForConfig", "highlander.findBestMatchForConfig", "highlander.findBestMatchForConfig.complete"), l.oConfig
        }, c.setEmilyParams = function(a) {
          C = i.mergeObjects(C, a)
        }, c.getEmilyParams = function() {
          return C
        };
        var O = function(a, b) {
          b = b || {}, a = a || {};
          var c = a.slotName,
            d = a.elementId,
            e = (a.position, a.contexts),
            f = a.slotContexts,
            h = null,
            j = 0,
            k = "    [" + d + "] ";
          if (b.slotId)
            if (h = new RegExp(b.slotId), b.slotId === c) j += i.oSlotConfigurationPointSystem.nSlotIdExact, i.debug(k, "Exact slot name match. slot name: " + c + ", pattern: " + b.slotId + ", points: " + j + ".");
            else {
              if (!h.test(c)) return i.debug(k, "Slot name match failed. Slot name: " + c + ", pattern: " + b.slotId + ", Skipping."), 0;
              j += i.oSlotConfigurationPointSystem.nSlotIdPattern, i.debug(k, "Partial slot name match. slot name: " + c + ", pattern: " + b.slotId + ", points: " + j + ".")
            }
          if (b.elementIdPattern)
            if (h = new RegExp(b.elementIdPattern), b.elementIdPattern === d) j += i.oSlotConfigurationPointSystem.nElementIdExact, i.debug(k, "Exact element ID match.pattern: " + b.elementIdPattern + ", points: " + j + ".");
            else {
              if (!h.test(d)) return i.debug(k, "Element Id match failed.pattern: " + b.elementIdPattern + ". Skipping."), 0;
              j += i.oSlotConfigurationPointSystem.nElementIdPattern, i.debug(k, "Partial element ID match.pattern: " + b.elementIdPattern + ", points: " + j + ".")
            }
          if (b.position) {
            if (b.position !== a.position) return i.debug(k, "Position match failed. Slot position: " + a.position + ", configured: " + b.position + ". Skipping."), 0;
            j += i.oSlotConfigurationPointSystem.nPosition, i.debug(k, "Position match. Position: " + b.position + ", points: " + j + ".")
          }
          if (b.deviceType) {
            var l = i.getPointCalculationDeviceType(b.deviceType, k);
            if (0 === l) return 0;
            j += l
          }
          if (b.urlPattern) {
            var m = i.getPointCalculationUrl(b.urlPattern, k);
            if (0 === m) return 0;
            j += m
          }
          if (b.contextKeywords) {
            var n = i.getPointCalculationContextKeywords(b.contextKeywords, e, f, k);
            if (0 === n) return 0;
            j += n
          }
          if (b.primaryAccountIds) {
            var o = g.getConfigValue(0, "accountId");
            if (!i.inArray(o, b.primaryAccountIds)) return i.debug(k, "Primary accountId match failed. Primary account: ", o, ", configured: ", b.primaryAccountIds, ", Skipping"), 0;
            j += i.oSlotConfigurationPointSystem.nPrimaryAccount, i.debug(k, "Primary accountId match. Primary account: ", o, ", configured: ", b.primaryAccountIds, ", points:", j)
          }
          return j
        }
      };
    b.exports = new n
  }, {
    10: 10,
    12: 12,
    14: 14,
    17: 17,
    18: 18,
    19: 19,
    20: 20,
    21: 21,
    3: 3,
    5: 5,
    7: 7,
    8: 8
  }],
  14: [function(a, b, c) {
    "use strict";
    var d = a(21),
      e = a(20),
      f = d && d.performance && d.performance.mark && d.performance.measure,
      g = {
        mark: function() {},
        measure: function() {}
      };
    f && 1 === parseInt(e.getUrlSessionParam("rp_performance"), 10) && (g = d.performance, g.mark("highlander.loaded")), b.exports = g
  }, {
    20: 20,
    21: 21
  }],
  15: [function(a, b, c) {
    "use strict";
    var d = a(18),
      e = a(20),
      f = function(a) {
        var b, c = this,
          f = new d,
          g = new d,
          h = new d,
          i = new d,
          j = !1,
          k = !1,
          l = [],
          m = null,
          n = null;
        c.setTimeout = function(a) {
          b = setTimeout(function() {
            e.warn("RequestManager:", "timeout (after " + a + "ms)"), c.abort()
          }, a)
        }, a && c.setTimeout(a), c.addRequest = function(a) {
          return !(!f.contains(a) && !g.contains(a)) || !j && (!!f.add(a) && (a.always(function(b) {
            m(a, b)
          }), k && a.abort(), !0))
        }, m = function(a, b) {
          return !(!f.remove(a) || !g.add(a)) && (200 === b.status ? h.add(a) : i.add(a), n(), !0)
        }, c.allRequestsAdded = function() {
          j = !0, n()
        }, c.allRequestsFinished = function() {
          return !(!j || c.haveOpenRequests())
        }, c.haveOpenRequests = function() {
          return !f.isEmpty()
        }, c.finished = function(a) {
          return "function" == typeof a && (l.push(a), !0)
        };
        var o = function() {
          for (; l.length;) l.shift()();
          l = {
            length: 0,
            push: function(a) {
              a()
            }
          }
        };
        n = function() {
          c.allRequestsFinished() && (clearTimeout(b), o())
        }, c.abort = function() {
          e.warn("RequestManager:", "aborting " + f.length() + " open request(s)");
          for (var a = f.toArray(), b = 0; b < a.length; b++) a[b].abort();
          k = !0, o()
        }, c.getOpenRequests = function() {
          return f.toArray()
        }, c.getClosedRequests = function() {
          return g.toArray()
        }, c.totalRequests = function() {
          return f.length() + g.length()
        }, c.getSuccessfulRequests = function() {
          return h.toArray()
        }, c.getFailedRequests = function() {
          return i.toArray()
        }
      };
    b.exports = f
  }, {
    18: 18,
    20: 20
  }],
  16: [function(a, b, c) {
    "use strict";
    var d = a(13),
      e = a(6),
      f = a(10),
      g = (a(7), function() {
        var a = this;
        a.loadConfiguration = function() {
          return d.loadConfiguration.apply(a, arguments), a
        }, a.init = function() {
          return d.init.apply(a, arguments), a
        }, a.run = function() {
          return d.run.apply(a, arguments), a
        }, a.cmd = e, a.getSlot = function() {
          var b = d.getSlot.apply(a, arguments);
          return !1 === b ? null : b.getPublicVersion()
        }, a.defineSlot = function() {
          return d.defineSlot.apply(a, arguments).getPublicVersion()
        }, a.getAllSlots = function() {
          for (var b = d.getAllSlots.apply(a, arguments), c = [], e = 0; e < b.length; e++) c.push(b[e].getPublicVersion());
          return c
        }, a.setUserKey = function() {
          return d.setUserKey.apply(a, arguments), a
        }, a.setFPI = function() {
          return d.setFPI.apply(a, arguments), a
        }, a.addFPI = function() {
          return d.addFPI.apply(a, arguments), a
        }, a.setFPV = function() {
          return d.setFPV.apply(a, arguments), a
        }, a.addFPV = function() {
          return d.addFPV.apply(a, arguments), a
        }, a.addKW = function() {
          return d.addKW.apply(a, arguments), a
        }, a.addContext = function() {
          return d.addContext.apply(a, arguments), a
        }, a.renderCreative = function() {
          d.renderCreative.apply(a, arguments)
        }, a.addEventListener = function() {
          return f.addEventListener.apply(a, arguments)
        }, a.setTargetingForGPTSlot = function() {
          d.setTargetingForGPTSlot.apply(a, arguments)
        }, a.setUrl = function() {
          d.setUrl.apply(a, arguments)
        }, a.setIntegration = function() {
          return d.setIntegration.apply(a, arguments)
        }, a.findBestMatchForConfig = function() {
          return d.findBestMatchForConfig.apply(a, arguments)
        }, a.setSyncParams = function() {
          return d.setEmilyParams.apply(a, arguments)
        }
      });
    b.exports = g
  }, {
    10: 10,
    13: 13,
    6: 6,
    7: 7
  }],
  17: [function(a, b, c) {
    "use strict";
    var d = (a(3), a(10)),
      e = a(14),
      f = function() {
        var a = this,
          b = [],
          c = 0,
          f = function() {},
          g = null,
          h = !1,
          i = {},
          j = null,
          k = null;
        a.execute = function(a, l, m) {
          b = a, i = m, c = 0, h = !1, f = l, g = setTimeout(function() {
            k()
          }, i.nTimeout);
          var n = Number(new Date);
          e.mark("runner.execute.slotMapping");
          for (var o = 0; o < i.aSlots.length; o++) i.aSlots[o].configure();
          var p = Number(new Date),
            q = p - n;
          d.factory("SLOT_MAPPING_PERFORMANCE", {
            nTotalTime: q,
            nAverageTime: Math.round(q / (i.aSlots.length || 1))
          }), e.mark("runner.execute.slotMappingComplete"), e.measure("slotMapping", "runner.execute.slotMapping", "runner.execute.slotMappingComplete");
          for (var r = 0; r < b.length; r++) b[r].run(j, i)
        }, j = function(a) {
          ++c >= b.length && k()
        }, k = function() {
          h || (h = !0, clearTimeout(g), f(i))
        }
      };
    f.run = function(a, b, c) {
      var d = new f;
      return d.execute(a, b, c), d
    }, b.exports = f
  }, {
    10: 10,
    14: 14,
    3: 3
  }],
  18: [function(a, b, c) {
    "use strict";
    var d = function() {
      var a = this,
        b = [];
      a.add = function(c) {
        return !a.contains(c) && (b.push(c), !0)
      }, a.remove = function(a) {
        for (var c = 0; c < b.length; c++)
          if (b[c] === a) return b.splice(c, 1), !0;
        return !1
      }, a.removeByIndex = function(a) {
        return a < b.length && a >= 0 && (b.splice(a, 1), !0)
      }, a.contains = function(a) {
        for (var c = 0; c < b.length; c++)
          if (b[c] === a) return !0;
        return !1
      }, a.isEmpty = function() {
        return 0 === b.length
      }, a.length = function() {
        return b.length
      }, a.get = function(a) {
        return b[a]
      }, a.toArray = function() {
        return b.slice(0)
      }
    };
    b.exports = d
  }, {}],
  19: [function(a, b, c) {
    "use strict";

    function d(a) {
      if (void 0 !== e) return e[a];
      e = {};
      for (var b = 0; b < k.getConfigs().length; b++) {
        var c = k.getConfigValue(b, "accountId"),
          d = k.getConfigValue(b, "whitelistedSizes", {});
        e[c] = d
      }
      return e[a]
    }
    var e, f = a(21),
      g = a(8),
      h = a(18),
      i = a(20),
      j = a(10),
      k = a(7),
      l = a(14),
      m = function(b, c, e, m) {
        var n = this,
          o = null,
          p = null,
          q = !1,
          r = null,
          s = new h,
          t = "  [" + e + "] ",
          u = "[" + e + "] ",
          v = "[" + e + "] ",
          w = ["getInfo", "getElementId", "getSlotName", "getSlotType", "getAdServerTargeting", "getAdServerTargetingByKey", "getRawResponses", "getRawResponseBySize", "getRawResponseBySizeId", "isConfigured"],
          x = ["setFPI", "addFPI", "setFPV", "addFPV", "addKW", "setPosition", "clearTargeting", "addContext"],
          y = new g,
          z = a(13),
          A = {},
          B = {},
          C = {
            sElementId: null,
            sSlotName: null,
            sPos: "btf",
            oAccountConfigs: {},
            aBaseDimensions: [],
            aBaseRubiconSizeIds: []
          },
          D = 0,
          E = ["display", "video"];
        m && i.inArray(m, E) || (m = "display"), n.init = function(a, b, c, d) {
          C.sSlotName = a, C.sElementId = c;
          var e = i.cleanseDimensionsList(b);
          n.addAdServerTargeting("rpfl_elemid", c), C.aBaseDimensions = e, C.aBaseRubiconSizeIds = [];
          for (var f = 0; f < e.length; f++) {
            var g = i.convertDimensionsToSizeId(e[f]);
            !1 === g || i.inArray(g, C.aBaseRubiconSizeIds) ? j.factory("SLOT_SIZE_NOT_MAPPED", {
              sDimensions: e[f].toString(),
              sSlotName: n.getSlotName()
            }) : C.aBaseRubiconSizeIds.push(g)
          }
        }, n.getInfo = function() {
          var a = C.oAccountConfigs,
            b = n.getElementId(),
            c = n.getSlotName(),
            d = n.getPosition(),
            e = n.getKWs(),
            f = n.getFPI(),
            g = n.getFPV(),
            h = {},
            j = {},
            k = {};
          for (var l in a)
            if (a.hasOwnProperty(l)) {
              var m = [],
                o = [],
                p = "rpfl_" + l,
                q = n.getSiteId(l),
                r = n.getZoneId(l),
                s = n.getRubiconSizeIds(l);
              B.hasOwnProperty(p) && (o = B[p].toArray());
              for (var t = 0; t < s.length; t++) {
                var u = s[t],
                  v = i.convertSizeIdToDimensions(u);
                m.push({
                  w: v[0],
                  h: v[1]
                })
              }
              k[l] = {
                siteId: q,
                zoneId: r,
                sizes: s,
                targeting: o,
                dimensions: m
              }
            }
          for (var w = 0; w < f.length; w++) {
            var x = f[w].key,
              y = f[w].value;
            h[x] = y
          }
          for (var z = 0; z < g.length; z++) {
            var A = g[z].key,
              D = g[z].value;
            j[A] = D
          }
          return {
            id: b,
            name: c,
            position: d,
            keywords: e,
            inventory: h,
            visitor: j,
            accounts: k
          }
        }, n.clearTargeting = function() {
          return y = new g, C.sPos = "btf", n
        }, n.isConfigured = function() {
          return q
        }, n.isAdEngineMapped = function(a) {
          if (C.oAccountConfigs.hasOwnProperty(a)) {
            var b = C.oAccountConfigs[a];
            return !!b.bAdEngineMapped && b.bAdEngineMapped
          }
          return !1
        }, n.hasValidSiteZoneId = function(a) {
          var b = !0,
            c = n.getSiteId(a),
            d = n.getZoneId(a),
            e = /^\d{1,15}$/;
          return c && e.test(c) && d && e.test(d) || (b = !1), b
        }, n.setFPI = function(a, b) {
          return y.setFPI(a, b), n
        }, n.addFPI = function(a, b) {
          return y.addFPI(a, b), n
        }, n.getFPI = function(a) {
          return arguments.length < 1 && (a = !0), r("getFPI", a)
        }, n.setFPV = function(a, b) {
          return y.setFPV(a, b), n
        }, n.addFPV = function(a, b) {
          return y.addFPV(a, b), n
        }, n.getFPV = function(a) {
          return arguments.length < 1 && (a = !0), r("getFPV", a)
        }, r = function(a, b) {
          if ("getFPV" !== a && "getFPI" !== a) return i.error(v, "Passing in undefined first party data accessor: " + a), [];
          var c = [];
          if (b) {
            var d = i.convertKeyValuePairArrayToObject(z[a]()),
              e = i.convertKeyValuePairArrayToObject(y[a]());
            for (var f in e) e.hasOwnProperty(f) && (d.hasOwnProperty(f) ? d[f] = d[f].concat(e[f]) : d[f] = e[f]);
            c = i.convertKeyValuePairObjectToArray(d)
          } else c = y[a]();
          return c
        }, n.addKW = function(a) {
          return y.addKW(a), n
        }, n.getKWs = function(a) {
          arguments.length < 1 && (a = !0);
          var b, c = new h,
            d = y.getKWs(),
            e = a ? z.getKWs() : [];
          for (b = 0; b < d.length; b++) c.add(d[b]);
          for (b = 0; b < e.length; b++) c.add(e[b]);
          return c.toArray()
        }, n.setPosition = function(a) {
          return "atf" !== a && "btf" !== a || (C.sPos = a), n
        }, n.getPosition = function() {
          return C.sPos
        }, n.setLanguage = function(a) {
          return C.sLangugage = a, n
        }, n.getLanguage = function() {
          return C.sLangugage
        }, n.setPlayerSize = function(a, b) {
          return C.nWidth = a, C.nHeight = b, n
        }, n.getPlayerSize = function() {
          return {
            width: C.nWidth,
            height: C.nHeight
          }
        }, n.getElementId = function() {
          return C.sElementId
        }, n.getSlotName = function() {
          return C.sSlotName
        }, n.getSlotType = function() {
          return m
        }, n.getSiteId = function(a) {
          return C.oAccountConfigs.hasOwnProperty(a) ? C.oAccountConfigs[a].nSiteId : null
        }, n.getZoneId = function(a) {
          return C.oAccountConfigs.hasOwnProperty(a) ? C.oAccountConfigs[a].nZoneId : null
        }, n.getRubiconSizeIds = function(a) {
          if (!C.oAccountConfigs.hasOwnProperty(a)) return [];
          var b = C.oAccountConfigs[a].aRubiconSizeIds;
          b = i.filterSizesByAccountRules(b);
          var c = n.getWhitelistedSizes(a);
          if (!Array.isArray(c) || 0 === c.length) return b;
          var d = b.filter(function(a) {
            return -1 !== c.indexOf(a)
          });
          return b.length !== d.length && i.warn(u, "Given size ids [" + b.join(",") + "] were whitelisted to [" + d.join(",") + "]"), d
        }, n.getWhitelistedSizes = function(a) {
          var b = n.getZoneId(a),
            c = d(a) || {};
          return null !== b && Array.isArray(c[b]) ? c[b].slice() : null
        }, n.storeCreative = function(a, b, c, d, e, f) {
          c.script = c.script || c.creative_content, z.storeCreative(d, c, a, b, e, n, f), A.hasOwnProperty(a) || (A[a] = {}), A[a][b] = d, F(a, b, e)
        }, n.removeCreative = function(a, b) {
          A.hasOwnProperty(a) && delete A[a][b]
        }, n.purgeCreative = function(a, b) {
          n.removeCreative(a, b), n.removeAdServerTargetingForSize("rpfl_" + a, b);
          var c = p || n.findMatchingGPTSlot();
          c && n.setTargetingForGPTSlot(c, n.retrieveAdServerTargeting())
        }, n.findMatchingGPTSlot = function() {
          var a = !1;
          if (f.googletag && f.googletag.apiReady)
            for (var b = f.googletag.pubads().getSlots(), c = 0; c < b.length; c++)
              if (b[c].getSlotElementId() === n.getElementId()) {
                a = b[c];
                break
              }
          return a
        }, n.getCreative = function(a, b) {
          return A.hasOwnProperty(a) && A[a].hasOwnProperty(b) && z.getCreative(A[a][b]) || null
        }, n.addAdServerTargeting = function(a, b) {
          B.hasOwnProperty(a) || (B[a] = new h), B[a].add(b), i.info(t, "Adding Ad Server Targeting for Key=", a, ", Value=", b)
        };
        var F = function(a, b, c) {
          var d = "rpfl_" + a;
          n.removeAdServerTargetingForSize(d, b), n.addAdServerTargeting(d, [b, "_", c].join(""))
        };
        n.removeAdServerTargetingByKey = function(a) {
          delete B[a]
        }, n.removeAdServerTargetingForSize = function(a, b) {
          var c = new RegExp("^" + b + "_");
          if (B[a])
            for (var d = B[a].length(); d >= 0; d--)
              if (c.test(B[a].get(d))) {
                B[a].removeByIndex(d);
                break
              }
        }, n.retrieveAdServerTargeting = function() {
          var a = [];
          for (var b in B)
            if (B.hasOwnProperty(b)) {
              var c = B[b].toArray(),
                d = {
                  key: b,
                  values: c
                };
              a.push(d)
            }
          return a
        }, n.getAdServerTargeting = function(a) {
          var b, c = i.getDataStoreValue("nRunTimestamp"),
            d = [];
          k.getConfigValue(0, "configuration.testKvp") && n.addAdServerTargeting("rpfl_" + k.getConfigValue(0, "accountId"), "test");
          var e = n.retrieveAdServerTargeting();
          l.mark("slot.getAdServerTargeting"), l.measure("getTargeting", "fastlane.run", "slot.getAdServerTargeting");
          for (var f = 0; f < e.length; f++) {
            var g = e[f],
              h = g.values;
            if (b = g.key, b.match(/^rpfl_[0-9]+$/))
              for (var j = 0; j < h.length; j++) G(b, h[j], c, a), d.push(b.replace(/^rpfl_/, ""))
          }
          var m = Object.keys(C.oAccountConfigs);
          for (f = 0; f < m.length; f++) b = m[f], i.inArray(b, d) || G("rpfl_" + b, "", c, a);
          return e.slice().reverse()
        }, n.getAdServerTargetingByKey = function(a, b) {
          var c = i.getDataStoreValue("nRunTimestamp"),
            d = B.hasOwnProperty(a) ? B[a].toArray() : [];
          if (l.mark("slot.getAdServerTargetingByKey"), l.measure("getTargetingByKey", "fastlane.run", "slot.getAdServerTargetingByKey"), !b) {
            if (d.length > 0)
              for (var e = 0; e < d.length; e++) G(a, d[e], c);
            else G(a, "", c);
            return d
          }
          for (var f = new RegExp("^" + b + "_"), g = 0; g < d.length; g++)
            if (f.test(d[g])) return G(a, d[g], c), [d[g]];
          return G(a, "", c), []
        };
        var G = function(a, b, c, d) {
          d = d || "other";
          var e = "0",
            f = "none",
            g = a.replace(/^rpfl_/, "");
          if (g && g.match(/^\d+$/)) {
            try {
              var h = b.match(/^(\d+)_(.+)$/);
              e = h[1], f = h[2]
            } catch (i) {}
            D = Number(new Date) - c, j.factory("SLOT_GET_TARGETING", {
              nSiteId: n.getSiteId(g),
              nZoneId: n.getZoneId(g),
              sSlotName: n.getSlotName(),
              nSizeId: e,
              sTier: f,
              nAccountId: g,
              sValue: b,
              sContext: d,
              sKey: a,
              nLatency: D,
              sElementId: n.getElementId()
            })
          }
        };
        n.configure = function() {
          if (q) return n;
          for (var a, b = k.getConfigs(), c = 0; c < b.length; c++) {
            a = k.getConfigValue(c, "accountId");
            var d = k.getConfigValue(c, "configuration.slotMapping", ["browser"]);
            if (0 === d.length && (d = ["browser"]), -1 !== d.indexOf("browser")) {
              var e = z.findBestMatchForConfig(n, c);
              e ? n.loadSlotConfiguration(a, e, !1) : i.warn(u + "slot-mapping could not find valid slot configuration")
            } else n.loadSlotConfiguration(a, null, !0), i.info(t + "skipping client-side slot-mapping in favor of server-side")
          }
          return n
        }, n.loadSlotConfiguration = function(a, b, c) {
          q = !0, C.oAccountConfigs[a] = {
            nSiteId: null,
            nZoneId: null,
            aRubiconSizeIds: C.aBaseRubiconSizeIds.slice()
          }, c && (C.oAccountConfigs[a].bAdEngineMapped = !0);
          var d = {
            siteId: "nSiteId",
            zoneId: "nZoneId",
            sizes: "aRubiconSizeIds"
          };
          if (b) {
            if (!b.siteId || !b.zoneId) try {
              b.siteId = b.partners.rubicon.params.siteId, b.zoneId = b.partners.rubicon.params.zoneId
            } catch (f) {}
            for (var e in b) b.hasOwnProperty(e) && C.oAccountConfigs[a].hasOwnProperty(d[e]) && (C.oAccountConfigs[a][d[e]] = b[e])
          }
        }, n.setTargetingForGPTSlot = function(a, b) {
          p = a, void 0 === b && (b = n.getAdServerTargeting("gpt"));
          for (var c = 0; c < b.length; c++) p.setTargeting(b[c].key, b[c].values);
          return !0
        }, n.getRawResponses = function(a) {
          var b = [],
            c = i.getDataStoreValue("nRunTimestamp"),
            d = n.getSlotType();
          if (!k.getConfigValue(0, "configuration.exposeRawResponses", !1) && "video" !== d) return b;
          a = a || k.getConfigValue(0, "accountId");
          for (var e in A[a])
            if (A[a].hasOwnProperty(e)) {
              var f = "rpfl_" + a,
                g = e + "_unused",
                h = n.getRawResponseBySizeId(e, a);
              b.push(h), D = Number(new Date) - c, j.factory("SLOT_GET_TARGETING", {
                nSiteId: n.getSiteId(a),
                nZoneId: n.getZoneId(a),
                sSlotName: n.getSlotName(),
                nSizeId: e,
                nAccountId: a,
                sKey: f,
                sValue: g,
                sContext: "raw",
                sTier: "unused",
                nLatency: D,
                sElementId: n.getElementId()
              })
            }
          return b
        }, n.getRawResponseBySize = function(a, b) {
          var c = i.convertDimensionsToSizeId(a);
          return n.getRawResponseBySizeId(c, b)
        }, n.getRawResponseBySizeId = function(a, b) {
          var c = {},
            d = n.getSlotType();
          if (!k.getConfigValue(0, "configuration.exposeRawResponses", !1) && "video" !== d) return c;
          b = b || k.getConfigValue(0, "accountId");
          var e = n.getCreative(b, a);
          if (e && e.hasOwnProperty("oResponse")) {
            var f = e.oResponse;
            c.advertiser = f.advertiser, c.cpm = f.cpm, "video" !== d && (c.dimensions = i.convertSizeIdToDimensions(a)), c.auction_id = f.impression_id, f.hasOwnProperty("deal") && (c.deal = f.deal), "video" === d && f.hasOwnProperty("creative_depot_url") && (c.creative_depot_url = f.creative_depot_url), c.targeting = {
              rpfl_elemid: n.getElementId()
            };
            var g = n.getAdServerTargetingByKey("rpfl_" + b, a);
            g.length && (c.targeting["rpfl_" + b] = g[0])
          }
          return c
        }, n.getPublicVersion = function() {
          function a(a) {
            return function(b, c) {
              return b[c] = a ? function() {
                return n[c].apply(a, arguments), n
              } : n[c], b
            }
          }
          return o || (o = w.reduce(a(), {}), o = x.reduce(a(n), o))
        }, n.addContext = function() {
          for (var a = 0; a < arguments.length; a++) s.add(arguments[a]);
          return n
        }, n.getContexts = function() {
          return s.toArray()
        }, n.init(b, c, e, m)
      };
    b.exports = m
  }, {
    10: 10,
    13: 13,
    14: 14,
    18: 18,
    20: 20,
    21: 21,
    7: 7,
    8: 8
  }],
  20: [function(a, b, c) {
    "use strict";
    var d = a(21),
      e = a(7),
      f = {
        sUrl: "",
        sIntegration: "",
        nInitTimestamp: 0,
        nRunTimestamp: 0
      },
      g = {},
      h = function() {},
      i = d.sessionStorage || {
        setItem: h,
        getItem: h,
        removeItem: h
      },
      j = function() {
        var a, b, c, j = this,
          k = [],
          l = null,
          m = null,
          n = null,
          o = null,
          p = !1,
          q = !1;
        j.oSlotConfigurationPointSystem = {
          nUrlPattern: 10,
          nDeviceType: 50,
          nContextKeyword: 100,
          nSlotContextKeyword: 101,
          nPosition: 500,
          nSlotIdPattern: 1e3,
          nSlotIdExact: 2e3,
          nElementIdPattern: 1e4,
          nElementIdExact: 2e4,
          nPrimaryAccount: 4e4
        }, j.oSizeMap = {
          "468x60": 1,
          "728x90": 2,
          "120x600": 8,
          "160x600": 9,
          "300x600": 10,
          "300x250": 15,
          "336x280": 16,
          "320x50": 43,
          "300x50": 44,
          "300x1050": 54,
          "970x90": 55,
          "970x250": 57,
          "1000x90": 58,
          "320x480": 67,
          "1800x1000": 68,
          "480x320": 101,
          "768x1024": 102
        };
        var r = [201, 202, 203, 204, 205, 207];
        j.mergeVideoSizes = function() {
          for (var a = 0; a < r.length; a++) {
            var b = "1x" + r[a];
            j.oSizeMap[b] = r[a]
          }
        }, j.mergeVideoSizes(), j.sVersion = "a35504b", j.DEVICE_DESKTOP = "desktop", j.DEVICE_TABLET = "tablet", j.DEVICE_PHONE = "phone", j.init = function(c) {
          a = b = l(c), j.hookUserDistractionEvents(), m(c)
        }, l = function(a) {
          var b = "http:";
          try {
            a.location.protocol.match(/^http/) && (b = a.location.protocol)
          } catch (c) {}
          return b + "//"
        }, j.getProtocol = function() {
          return b
        }, j.setProtocol = function(a) {
          a && a.match(/^http(s)?:\/\/$/) && (b = a)
        }, j.getFullPageUrl = function() {
          return j.getUrlSessionParam("rp_url") || j.getUrl() || d.location.toString()
        }, j.getScreenResolution = function() {
          return d.screen.width + "x" + d.screen.height
        }, j.debug = h, j.info = h, j.warn = h, j.error = h, m = function(a) {
          n(a);
          var b = parseInt(j.getUrlSessionParam("rp_loglevel"));
          o(b)
        }, n = function(a) {
          if (a.console)
            for (var b = {
                debug: "log",
                info: "info",
                warn: "warn",
                error: "error"
              }, c = ["debug", "info", "warn", "error"], d = 0; d < c.length; d++) {
              var e = c[d],
                f = b[e];
              if (a.console[f]) try {
                j[e] = Function.prototype.bind.call(a.console[f], a.console, "RP:")
              } catch (g) {} else d > 0 && (j[e] = j[c[d - 1]])
            }
        }, o = function(a) {
          a = isNaN(a) ? e.getConfigValue(0, "configuration.logLevel", 0) : a, a < 4 && (j.debug = h), a < 3 && (j.info = h), a < 2 && (j.warn = h), a < 1 && (j.error = h)
        }, j.getUrlSessionParam = function(a) {
          if (a) {
            if (g.hasOwnProperty(a)) return g[a];
            var b = j.getQueryStringParam(a);
            return b = null === b ? j.getHashParam(a) : b, b ? i.setItem(a, b) : null === b ? b = i.getItem(a) : i.removeItem(a), g[a] = b || null, b || null
          }
        }, j.getQueryStringParam = function(a) {
          if (!a || -1 === (d.location.search || "").indexOf(a)) return null;
          var b = new RegExp("[?&]" + a + "((=([^&]*))|(&|$))"),
            c = b.exec(decodeURIComponent(d.location.search) || "");
          return !c || c.length < 5 ? null : c[3] || ""
        }, j.queryStringParamExists = function(a) {
          return !!a && new RegExp("[?&]" + a + "([=&]|$)").test(d.location.search || "")
        }, j.getHashParam = function(a) {
          if (!a || -1 === (d.location.hash || "").indexOf(a)) return null;
          var b = new RegExp("[#&]" + a + "((=([^&]*))|(&|$))"),
            c = b.exec(d.location.hash || "");
          return !c || c.length < 5 ? null : c[3] || ""
        }, j.hashParamExists = function(a) {
          return !!a && new RegExp("[#&]" + a + "([=&]|$)").test(d.location.hash || "")
        }, j.mergeObjects = function(a) {
          for (var b, c = {}, d = 0; d < arguments.length; d++)
            for (b in arguments[d]) arguments[d].hasOwnProperty(b) && (c[b] = arguments[d][b]);
          return c
        }, j.intersectObjects = function(a, b) {
          var c, d = {};
          for (c in a) a.hasOwnProperty(c) && (d[c] = b.hasOwnProperty(c) ? b[c] : a[c]);
          return d
        }, j.isInteger = function(a) {
          return /string|number/.test(typeof a) && /^[0-9]+$/.test(a.toString())
        }, j.isSingleSlotSize = function(a) {
          return Array.isArray(a) && 2 === a.length && j.isInteger(a[0]) && j.isInteger(a[1])
        }, j.convertDimensionsListToSizeIds = function(a) {
          if (!Array.isArray(a)) return j.warn("Invalid dimensions list array:", a), !1;
          if (0 === a.length) return [];
          var b = j.convertDimensionsToSizeId(a);
          if (b) return [b];
          var c;
          if (b = j.convertDimensionsToSizeId(a[0])) {
            c = [b];
            for (var d = 1; d < a.length; d++) b = j.convertDimensionsToSizeId(a[d]), b ? c.push(b) : j.warn("Invalid [w,h] size:", a[d]);
            return c
          }
          if (j.isInteger(a[0])) {
            var e = {};
            for (var f in j.oSizeMap) j.oSizeMap.hasOwnProperty(f) && (e[j.oSizeMap[f]] = !0);
            c = [];
            for (var g = 0; g < a.length; g++) e[a[g]] ? c.push(a[g]) : j.warn("Invalid rubiconSizeId:", a[g]);
            return c
          }
          return j.warn("Invalid dimensions list array:", a), !1
        }, j.inArray = function(a, b) {
          if (!Array.isArray(b)) return !1;
          for (var c = 0; c < b.length; c++)
            if (b[c] == a) return !0;
          return !1
        }, j.getArrayIntersection = function(a, b) {
          var c = [];
          if (!Array.isArray(a) || !Array.isArray(b)) return c;
          for (var d = 0; d < a.length; d++) j.inArray(a[d], b) && c.push(a[d]);
          return c
        }, j.isObject = function(a) {
          return "object" == typeof a
        }, j.isFunction = function(a) {
          return (a || !1) && "[object Function]" === Object.prototype.toString.call(a)
        }, j.generateComplexQueryStringObject = function(a, b) {
          for (var c = {}, d = null, e = 0; e < a.length; e++) d = b + "." + a[e].key, c[d] = a[e].value.join(",");
          return c
        }, j.convertObjectToQueryString = function(a) {
          var b = [];
          for (var c in a) a.hasOwnProperty(c) && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
          return b.join("&")
        }, j.convertKeyValuePairArrayToObject = function(a) {
          for (var b = {}, c = 0; c < a.length; c++) b[a[c].key] = a[c].value;
          return b
        }, j.convertKeyValuePairObjectToArray = function(a) {
          var b = [];
          for (var c in a) a.hasOwnProperty(c) && b.push({
            key: c,
            value: a[c]
          });
          return b
        }, j.formatString = function(a, b, c) {
          var d = a;
          c = c || !1;
          for (var e in b) b.hasOwnProperty(e) && (d = d.replace(new RegExp("{" + e + "}", "g"), c ? encodeURIComponent(b[e]) : b[e]));
          return d
        }, j.convertDimensionsToSizeId = function(a) {
          if (!j.isSingleSlotSize(a)) return !1;
          var b = a[0] + "x" + a[1];
          return !!j.oSizeMap.hasOwnProperty(b) && j.oSizeMap[b]
        }, j.convertSizeIdToDimensions = function(a) {
          for (var b in j.oSizeMap)
            if (j.oSizeMap.hasOwnProperty(b) && parseInt(j.oSizeMap[b], 10) === parseInt(a, 10)) {
              var c = b.split("x");
              return c[0] = parseInt(c[0], 10), c[1] = parseInt(c[1], 10), c
            }
          return !1
        }, j.normalizeDimensions = function(a) {
          if (j.convertDimensionsToSizeId(a) && (a = [a]), !Array.isArray(a)) return [];
          var b = [];
          for (var c in a)
            if (a.hasOwnProperty(c)) {
              var d = a[c],
                e = j.convertSizeIdToDimensions(d);
              !1 !== e ? b.push(e) : b.push(d)
            }
          return j.cleanseDimensionsList(b)
        }, j.cleanseDimensionsList = function(a) {
          var b = [];
          if (Array.isArray(a) && 0 !== a.length)
            if (j.isSingleSlotSize(a)) b = [a];
            else
              for (var c = 0; c < a.length; c++) j.isSingleSlotSize(a[c]) && b.push(a[c]);
          else;
          return b
        }, j.addUserDistractionEventListener = function(a) {
          k.push(a)
        }, j.hookUserDistractionEvents = function() {
          var a = function(a) {
            j.userDistractionEventOccurred(a)
          };
          d.addEventListener ? (d.addEventListener("unload", a, !1), d.addEventListener("blur", a, !1)) : d.attachEvent && (d.attachEvent("onunload", a), d.attachEvent("onblur", a))
        }, j.userDistractionEventOccurred = function(a) {
          for (var b = 0; b < k.length; b++) k[b](a)
        }, j.getNow = function() {
          return (new Date).getTime()
        }, j.browserSupportsXHR = function() {
          var a = j.isIE();
          return !(a && a < 10)
        }, j.isIE = function() {
          var a = d.navigator.userAgent.toLowerCase();
          return -1 !== a.indexOf("msie") && parseInt(a.split("msie")[1])
        }, j.getDeviceType = function() {
          var a = d.screen.height || 1025,
            b = d.screen.width || 1025,
            c = Math.max(a, b),
            e = j.DEVICE_DESKTOP;
          return c <= 736 ? e = j.DEVICE_PHONE : c <= 1024 && (e = j.DEVICE_TABLET), e
        }, j.createInvisibleIframe = function(a) {
          var b = document.createElement("iframe");
          return b.id = a, b.height = 0, b.width = 0, b.border = "0px", b.hspace = "0", b.vspace = "0", b.marginWidth = "0", b.marginHeight = "0", b.style.border = "0", b.scrolling = "no", b.frameBorder = "0", b.src = "about:self", b.style.display = "none", b
        }, j.setUrl = function(a) {
          if (!0 !== e.getConfigValue(0, "configuration.allowSetUrl")) return void j.warn("Cannot manually set URL since it is not allowed in the configuration.");
          j.isUrl(a) && (f.sUrl = a)
        }, j.getUrl = function(a) {
          return f.sUrl
        }, j.isUrl = function(a) {
          return "string" == typeof a && /^(https?:)?\/\/[a-zA-Z\d\-]+/.test(a)
        }, j.setSizesFilteredByAccountRules = function(a, b) {
          if (!p) {
            for (var d = b.getConfigValue(0, "accountRules", []), e = {
                nPoints: 0,
                oConfig: !1
              }, f = "Account Rules Filtering: ", g = 0; g < d.length; g++) {
              var h = d[g];
              j.debug(f, "Starting specificity calculation for config: ", h);
              var i = 0;
              if (h.deviceType) {
                var k = j.getPointCalculationDeviceType(h.deviceType, f);
                if (0 === k) continue;
                i += k
              }
              if (h.urlPattern) {
                var l = j.getPointCalculationUrl(h.urlPattern, f);
                if (0 === l) continue;
                i += l
              }
              if (h.contextKeywords) {
                var m = j.getPointCalculationContextKeywords(h.contextKeywords, [], a.getContexts(), f);
                if (0 === m) continue;
                i += m
              }
              i > 0 ? j.info(f, "Found matching config entry. Points: " + i) : j.debug(f, "Config did not match"), i > e.nPoints && (e.nPoints = i, e.oConfig = h)
            }
            e.oConfig && e.oConfig.allowedSizes && (c = j.convertDimensionsListToSizeIds(e.oConfig.allowedSizes) || [], j.info(f, "filter sizes:", c), q = !0), p = !0
          }
        }, j.filterSizesByAccountRules = function(a) {
          if (!q) return a;
          var b = a.filter(function(a) {
            return -1 !== c.indexOf(a)
          });
          return a.length !== b.length && j.warn("Account Rules Filter WARN: ", "Given size ids [" + a.join(",") + "] were filtered by Account Rules to [" + b.join(",") + "]"), b
        }, j.getPointCalculationDeviceType = function(a, b) {
          var c = j.getDeviceType();
          return j.inArray(c, a) ? (j.debug(b, "Device type match. Device type: " + c + ", configured: " + a.join(",") + ", points: " + j.oSlotConfigurationPointSystem.nDeviceType + "."), j.oSlotConfigurationPointSystem.nDeviceType) : (j.debug(b, "Device type match failed. Device type: " + c + ", configured: " + a.join(",") + ". Skipping."), 0)
        }, j.getPointCalculationUrl = function(a, b) {
          var c = j.getFullPageUrl();
          return new RegExp(a).test(c) ? (j.debug(b, "Partial URL match. URL: " + c + ", pattern: " + a + ", points: " + j.oSlotConfigurationPointSystem.nUrlPattern + "."), j.oSlotConfigurationPointSystem.nUrlPattern) : (j.debug(b, "URL match failed. URL: " + c + ", pattern: " + a + ". Skipping."), 0)
        }, j.getPointCalculationContextKeywords = function(a, b, c, d) {
          var e = 0;
          if (a) {
            var f;
            j.debug(d, "Configured context keywords:", a), j.debug(d, "Page context keywords:", b), j.debug(d, "Slot context keywords:", c);
            var g = j.getArrayIntersection(a, b);
            if (g.length && (e += g.length * j.oSlotConfigurationPointSystem.nContextKeyword, j.debug(d, "Page context matches:" + g.length + ", points: " + e + ".")), f = j.getArrayIntersection(a, c), f.length && (e += f.length * j.oSlotConfigurationPointSystem.nSlotContextKeyword, j.debug(d, "Slot context matches: " + f.length + ", points: " + e + ".")), 0 === g.length && (!f || 0 === f.length)) return j.debug(d, "Context matches failed, Skipping"), 0
          }
          return e
        }, j.replaceMacrosWithinUrl = function(a, b) {
          var c;
          if ("string" != typeof a) return "";
          for (var d in b) b.hasOwnProperty(d) && (c = new RegExp("\\$\\$" + d + "\\$\\$", "gi"), a = a.replace(c, encodeURIComponent(b[d])));
          return a = a.replace(/\$\$[^<>&?=+*#@!%^~;\s'"]+\$\$/gi, "")
        }, j.setIntegration = function(a) {
          f.sIntegration = a
        }, j.getIntegration = function() {
          return f.sIntegration
        }, j.setTimestamp = function(a) {
          f[a] = Number(new Date)
        }, j.getDataStoreValue = function(a) {
          return f[a]
        }, j.setDataStoreValue = function(a, b) {
          f[a] = b
        }, j.isSingleRequest = function(a, b) {
          if (b && "video" === b.getSlotType()) return !0;
          if (!j.browserSupportsXHR()) return !1;
          var c = j.getABTestParam("sra");
          return c ? "on" === c : (a = a || 0, !!e.getConfigValue(0, "configuration.useSingleRequest", !1))
        }, j.appendElement = function(a, b) {
          try {
            b || (b = document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0]), b.insertAdjacentHTML("beforeend", a.outerHTML)
          } catch (c) {}
        };
        var s, t;
        j.getABTestParam = function(a) {
          if (!s) {
            s = {};
            var b = e.getConfigValue(0, "configuration.abParams", {}),
              c = Object.keys(b).sort(),
              d = [],
              f = [];
            c.forEach(function(a) {
              var c = b[a];
              if (c.length) {
                f.push(c.length);
                var e = u(c);
                d.push(e[0]), s[a] = e[1], j.warn("a/b testing:", a, "=", s[a])
              }
            }), t = v(f, d), t && j.warn("a/b testing label:", t)
          }
          return s[a]
        };
        var u = function(a) {
          if (!("string" == typeof a[0] && a[0].indexOf(":") > 0)) {
            var b = Math.floor(Math.random() * a.length);
            return [b, a[b]]
          }
          for (var c = 100 * Math.random(), d = 0, e = 0; e < a.length; e++) {
            var f = a[e].split(":");
            if (d += parseInt(f[1], 10), c < d) return [e, f[0]]
          }
          return j.error("failed to choose A/B test value for", a), ["", void 0]
        };
        j.getABLabel = function() {
          return t
        };
        var v = function(a, b) {
          if (!a.length) return "";
          for (var c = 1, d = 0, e = a.length - 1; e >= 0; e--) d += c * b[e], c *= a[e];
          return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(d)
        };
        j.usesFastlaneExpress = function() {
          if (!e.getConfigValue(0, "configuration.fastlaneExpress", !1)) return !1;
          var a = d.document.getElementById("fastlane-express");
          return a && "on" === a.getAttribute("data-flex")
        }, j.generateUUID = function(a) {
          return a ? (a ^ 16 * Math.random() >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, j.generateUUID)
        }
      },
      k = new j;
    k.init(d), b.exports = k
  }, {
    21: 21,
    7: 7
  }],
  21: [function(a, b, c) {
    "use strict";
    b.exports = "undefined" != typeof window ? window : void 0
  }, {}],
  22: [function(a, b, c) {
    "use strict";
    b.exports = "undefined" != typeof XMLHttpRequest ? XMLHttpRequest : void 0
  }, {}]
}, {}, [1]);
window.rubicontag.loadConfiguration({
  "accountId": 11078,
  "services": ["fastlane"],
  "tiers": [],
  "slots": [],
  "catchAll": [],
  "sizeMap": {
    "728x90": 2,
    "160x600": 9,
    "300x600": 10,
    "300x250": 15,
    "320x50": 43,
    "970x250": 57,
    "970x90": 55
  },
  "configuration": {
    "fastlaneExpress": true,
    "useMultiSize": true,
    "timeout": 1200,
    "analyticsLevel": -1,
    "logLevel": 1,
    "allowSetUrl": true,
    "exposedEvents": ["HL_CREATIVE_RENDERED"],
    "slotMapping": ["adEng"],
    "tierMapping": ["adEng"]
  },
  "fastlane": {
    "pageSampling": 1,
    "optimizedHosts": ["fastlane.rubiconproject.com\/a\/api\/fastlane.json"]
  },
  "version": "1510955591L",
  "modified": 1510955591000,
  "dateModified": "2017-11-17 13:53:11 PST"
});
window.rubicontag.init();
