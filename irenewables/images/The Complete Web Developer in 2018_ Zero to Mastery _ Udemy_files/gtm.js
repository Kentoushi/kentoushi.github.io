
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"288",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-clp-course-id\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";return a\/100})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery('a[data-purpose\\x3d\"take-this-course-button\"').attr(\"data-signuppopupidentifier\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery(\"div.hidden-course-bar.slideDown\").length)return\"scrolled\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery(\".current-price\").length})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery(\".current-price\").text().replace(\"$\",\"\").trim()})();"]
    },{
      "function":"__j",
      "vtp_name":"UD.request.locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"ja_JP\"==",["escape",["macro",9],8,16],"||\"ja-JP\"==",["escape",["macro",9],8,16],"||\"jp-JP\"==",["escape",["macro",9],8,16],"||\"jp_JP\"==",["escape",["macro",9],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"en_US\"==",["escape",["macro",9],8,16],"||\"en-US\"==",["escape",["macro",9],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-course-labels-experiment-hotjar\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-hotjar-channel-type\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){channelType=jQuery(\"body\").attr(\"data-hotjar-channel-type\");hotjarPage=jQuery(\"body\").attr(\"data-hotjar-page\");return\"featured\"===channelType||\"logged-in-homepage\"===hotjarPage})();"]
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__j",
      "vtp_name":"UD.me.id"
    },{
      "function":"__e"
    },{
      "function":"__u"
    },{
      "function":"__r"
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"analyticsAccount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount.appId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount.successLabel"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"video-player-no-purpose",
      "vtp_name":"gtm.element.dataset.purpose"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__j",
      "vtp_name":"UD.visiting.visitor.id"
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.id"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.isMarketingBoostAgreed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.affiliateType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseId"
    },{
      "function":"__j",
      "vtp_name":"UD.me.impact_radius_id"
    },{
      "function":"__j",
      "vtp_name":"UD.me.impact_radius_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseSku"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-purpose"
    },{
      "function":"__f"
    },{
      "function":"__r"
    },{
      "function":"__d",
      "vtp_selectorType":"ID",
      "vtp_elementId":"tag-manager-courseId"
    },{
      "function":"__c",
      "vtp_value":"Course"
    },{
      "function":"__c",
      "vtp_value":"Topic"
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"nonInteraction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_defaultValue":"undefined",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_defaultValue":"undefined",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventNoninteraction",
      "vtp_defaultValue":"False",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"experiment",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",17],
      "vtp_defaultValue":"Included",
      "vtp_map":["list",["map","key","12392710","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"env"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.isLinkshare"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount"
    },{
      "function":"__c",
      "vtp_value":"aw"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"name"
    },{
      "function":"__j",
      "vtp_name":"window.scrollY"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.start"
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-47"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.affiliateType"
    }],
  "tags":[{
      "function":"__html",
      "priority":2,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"Retargeting\"});\u003C\/script\u003E\n\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/udemy\/tfa.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":125
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1457291081167286\");fbq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__cl",
      "tag_id":28
    },{
      "function":"__lcl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"PKv-COL4z1wQk9e00AM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":46
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":49
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"951369813",
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",19],
      "tag_id":62
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"966888136",
      "vtp_conversionLabel":"TQxQCNq4hV0QyJWGzQM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":65
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"951369813",
      "vtp_conversionLabel":"5dghCNW2hV0Q1YDTxQM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":66
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/5079.xg4ken.com\/media\/redir.php?track=1\u0026token=a1ed898d-f7f9-4815-ba08-19fe053ee591\u0026type=conv\u0026val=0.0\u0026orderId=\u0026promoCode=\u0026valueCurrency=USD\u0026GCID=\u0026kw=\u0026product=",
      "tag_id":78
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_url":"https:\/\/5079.xg4ken.com\/media\/redir.php?track=1\u0026token=6af875c0-59a1-49cd-9618-5df0d111948d\u0026type=conv\u0026val=0.0\u0026orderId=\u0026promoCode=\u0026valueCurrency=USD\u0026GCID=\u0026kw=\u0026product=",
      "vtp_randomNumber":["macro",20],
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"userID",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"excluded",
      "vtp_dimension":["list",["map","index","16","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/ct.pinterest.com\/?tid=fGjngNzQ7mk",
      "tag_id":82
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-29",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":88
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":["macro",23],
      "vtp_conversionLabel":["macro",24],
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/join\/login-popup\/"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":94
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/payment\/checkout\/"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-46",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":95
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"seotest",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"seotest",
      "vtp_dimension":["list",["map","index","19","dimension","show price"]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":121
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"courseview",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",0],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",0]],["map","index","6","dimension","offerdetail"],["map","index","8","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"send",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"15_seconds",
      "vtp_eventLabel":"read",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":132
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventValue":["macro",2],
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"course",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",19],
      "tag_id":134
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":136
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":141
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":142
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"877552150",
      "vtp_conversionLabel":"80LmCOWbwGgQlsS5ogM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":143
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.quora.com\/_\/ad\/f3d99eb602d5430b8ecc99610afe3ded\/pixel",
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","True"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"ufbonly",
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"business.udemy.com",
      "vtp_decorateFormsAutoLink":true,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-47",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"test video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"submission",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":154
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"createcourse",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":155
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":158
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":159
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":160
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",19],
      "tag_id":161
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"linkshare",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"signup",
      "vtp_eventLabel":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"852928941",
      "vtp_conversionLabel":"CzYTCLjiy3MQrdPalgM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":173
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":178
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":179
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",2],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"j88uCJmGiXkQ7em5ogM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__cl",
      "tag_id":202
    },{
      "function":"__cl",
      "tag_id":203
    },{
      "function":"__cl",
      "tag_id":204
    },{
      "function":"__cl",
      "tag_id":205
    },{
      "function":"__cl",
      "tag_id":206
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"10000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_107",
      "tag_id":207
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"10000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_108",
      "tag_id":208
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"20000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_109",
      "tag_id":209
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"20000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_110",
      "tag_id":210
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_111",
      "tag_id":211
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_112",
      "tag_id":212
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"40000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_113",
      "tag_id":213
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"40000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_114",
      "tag_id":214
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"50000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_115",
      "tag_id":215
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"50000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_116",
      "tag_id":216
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_117",
      "tag_id":217
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_118",
      "tag_id":218
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"70000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_119",
      "tag_id":219
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"80000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_120",
      "tag_id":220
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"80000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_121",
      "tag_id":221
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"90000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_122",
      "tag_id":222
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"90000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_123",
      "tag_id":223
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"110000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_124",
      "tag_id":224
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"100000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_125",
      "tag_id":225
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"110000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_126",
      "tag_id":226
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"120000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_127",
      "tag_id":227
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"120000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_128",
      "tag_id":228
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"70000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_129",
      "tag_id":229
    },{
      "function":"__cl",
      "tag_id":230
    },{
      "function":"__cl",
      "tag_id":231
    },{
      "function":"__cl",
      "tag_id":232
    },{
      "function":"__cl",
      "tag_id":233
    },{
      "function":"__cl",
      "tag_id":234
    },{
      "function":"__cl",
      "tag_id":235
    },{
      "function":"__cl",
      "tag_id":236
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_139",
      "tag_id":237
    },{
      "function":"__cl",
      "tag_id":238
    },{
      "function":"__cl",
      "tag_id":239
    },{
      "function":"__cl",
      "tag_id":240
    },{
      "function":"__cl",
      "tag_id":241
    },{
      "function":"__cl",
      "tag_id":242
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_param={pixel_id:\"6009170267856\",value:\"0.00\",currency:\"USD\"};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6009170267856\u0026amp;value=0\u0026amp;currency=USD\"\u003E\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];_fbq.push([\"track\",\"6009170268656\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);_fbq.push([\"track\",\"6016501834270\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6009170268656\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6016501834270\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":4
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/s3.amazonaws.com\/ki.js\/34436\/6GL.js\";b.parentNode.insertBefore(a,b)},1)})();(function(){_kiq.push([\"identify\",",["escape",["macro",17],8,16],"||\"\"]);_kiq.push([\"set\",{user_id:",["escape",["macro",17],8,16],"||\"\",visitor_id:",["escape",["macro",31],8,16],"||\"\"}])})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=989116586,google_conversion_language=\"en\",google_conversion_format=\"2\",google_conversion_color=\"ffffff\",google_conversion_label=\"Ah9qCJbXgAgQqvHS1wM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/989116586\/?label=Ah9qCJbXgAgQqvHS1wM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_param={pixel_id:\"6016391666497\",value:\"0.00\",currency:\"USD\"};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6016391666497\u0026amp;value=0\u0026amp;currency=USD\"\u003E\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=966888136,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"SgynCKCv_VoQyJWGzQM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=951369813,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"kUq1CNrK-1oQ1YDTxQM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"6034528106080\",{value:\"0.00\",currency:\"JPY\"}]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar $course_id=jQuery(\"body\").attr(\"data-clp-course-id\");if(void 0!==$course_id\u0026\u00260\u003C$course_id.length){var clp_course_id=jQuery(\"body\").attr(\"data-clp-course-id\");window._fbq=window._fbq||[];_fbq.push([\"track\",\"ViewContent\",{content_ids:clp_course_id,content_type:\"product\"}])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003EUD.GoogleAnalytics.setValue(\"dimension7\",\"true\");UD.GoogleAnalytics.trackEvent(\"ismember\",\"ismember\",\"ismember\",void 0,void 0,{nonInteraction:1});window._fbq=window._fbq||[];_fbq.push([\"track\",\"isMember\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=951369813,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=951369813,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E0\u003C$(\".signup-link\").length\u0026\u0026$(\".signup-link\").trigger(\"click\");\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=101425363524479\u0026amp;ev=PixelInitialized\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/javascript\" language=\"javascript\"\u003Evar yahoo_retargeting_id=\"BKO82CLEGF\",yahoo_retargeting_label=\"\";\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" language=\"javascript\" src=\"\/\/b92.yahoo.co.jp\/js\/s_retargeting.js\"\u003E\u003C\/script\u003E\n\n\u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/aax-fe.amazon-adsystem.com\/s\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D97c97873-b320-2f7a-9117-f3d5aa752a9e%26type%3Dnull%26m%3D6\u0026amp;ex-fch=416613\u0026amp;ex-src=udemy.com\u0026amp;ex-hargs=v%3D1.0%3Bc%3D7690357268661%3Bp%3D97C97873-B320-2F7A-9117-F3D5AA752A9E\"\u003E　",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar $course_id=jQuery(\"body\").attr(\"data-clp-course-id\");\nif(void 0!==$course_id\u0026\u00260\u003C$course_id.length){$course_id=jQuery(\"body\").attr(\"data-clp-course-id\");var price=jQuery(\".price-text__current\").text().replace(\"$\",\"\").trim().match(\/\\d+\/);void 0!==UD.GoogleAnalytics\u0026\u0026(UD.GoogleAnalytics.setValue(\"dimension5\",$course_id),UD.GoogleAnalytics.setValue(\"dimension6\",\"conversionintent\"),UD.GoogleAnalytics.setValue(\"dimension8\",price),UD.GoogleAnalytics.trackEvent(\"addtocartclick\",$course_id,price,{nonInteraction:1}));window._fbq=window._fbq||[];_fbq.push([\"track\",\n\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:$course_id,content_type:\"product\"}])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"Purchase\",{content_ids:",["escape",["macro",33],8,16],",content_type:\"product\",order_id:",["escape",["macro",34],8,16],",value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/6554.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript language=\"JavaScript\"\u003Evar OB_ADV_ID=26518,str='\\x3cscript src\\x3d\"\/\/widgets.outbrain.com\/obtp.js\" type\\x3d\"text\/javascript\"\\x3e\\x3c\/script\\x3e';document.write(str);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _pop=_pop||[];_pop.push([\"_set_conversion_id\",\"benesse_cci\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"api.popin.cc\/conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.charset=\"utf-8\";a.async=!0;a.src=window.location.protocol+\"\/\/api.popin.cc\/ads\/benesse_cci.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":85
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"action\",name:\"Conversion\",revenue:",["escape",["macro",2],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"SignupSuccess\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"SignupClick\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=window.MTBADVS=window.MTBADVS||{};a.ConvContext=a.ConvContext||{};a.ConvContext.queue=a.ConvContext.queue||[];a.ConvContext.queue.push({advertiser_id:1808,price:0,convtype:0,dat:\"\"});a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.mtburn.com\/advs-conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n        ",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.segment\u0026\u0026(_fout_queue.segment={});void 0===_fout_queue.segment.queue\u0026\u0026(_fout_queue.segment.queue=[]);_fout_queue.segment.queue.push({user_id:10595,advertiser_id:1808,contractor_id:5});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/segmentation.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n    ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,d,b,f,e){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:298206,hjsv:5};f=c.getElementsByTagName(\"head\")[0];e=c.createElement(\"script\");e.async=1;e.src=d+a._hjSettings.hjid+b+a._hjSettings.hjsv;f.appendChild(e)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\n(function(){var a=jQuery(\"body\"),c=a.attr(\"data-hotjar-page\"),d=a.attr(\"data-hotjar-device\");a=a.attr(\"data-hotjar-bw\");var b=[];c\u0026\u0026(b.push(c),d\u0026\u0026a\u0026\u0026b.push(d,a),b.push(void 0===UD.me.id?\"visitor\":\"user\"),hj(\"trigger\",b.join(\"-\")))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"NewUserPurchase\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"273-CKQ-053\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Eadroll_adv_id=\"554CPNW4XBAX5EYKBL4HVU\";adroll_pix_id=\"OKLCQMMNANCRNGGEOKKR5M\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":162
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"LinkshareSignupClick\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"a9df566e\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/px?id=849711\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":167
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"6oe2u\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E!function(){if(window.SmartnewsAds=window.SmartnewsAds||{},!window.SmartnewsAds.p){var a=window.SmartnewsAds.p=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)};window.SmartnewsAds._p||(window.SmartnewsAds._p=a);a.push=a;a.version=\"1.0.0\";a.queue=[];var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/cdn.smartnews-ads.com\/i\/pixel.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)}}();SmartnewsAds.p(\"3743a3945eb6b3d209bbf3bc\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/i.smartnews-ads.com\/p?id=3743a3945eb6b3d209bbf3bc\u0026amp;e=PageView\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":169
    },{
      "function":"__html",
      "setup_tags":["list",["tag",123,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eire(\"trackConversion\",12148,{orderId:",["escape",["macro",38],8,16],",customerId:",["escape",["macro",39],8,16],",email:",["escape",["macro",40],8,16],",orderPromoCode:",["escape",["macro",41],8,16],",currencyCode:\"USD\",items:[{subTotal:",["escape",["macro",42],8,16],",category:",["escape",["macro",43],8,16],",sku:",["escape",["macro",44],8,16],",quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A380319-1bcf-4b7b-9299-22e85825ceea1.js\",\"script\",\"ire\",document,window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "setup_tags":["list",["tag",123,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eire(\"identify\",{customerId:",["escape",["macro",39],8,16],",customerEmail:",["escape",["macro",40],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"455027734843984\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=455027734843984\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":174
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"ny0dy\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":176
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":177
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"BecomeAnInstructor\"]);sendPageEvent(\"track\",\"teach_funnel\",{action:\"create-course\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":180
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.segment\u0026\u0026(_fout_queue.segment={});void 0===_fout_queue.segment.queue\u0026\u0026(_fout_queue.segment.queue=[]);_fout_queue.segment.queue.push({user_id:23601,advertiser_id:8881,contractor_id:5});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/segmentation.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":182
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=window.MTBADVS=window.MTBADVS||{};a.ConvContext=a.ConvContext||{};a.ConvContext.queue=a.ConvContext.queue||[];a.ConvContext.queue.push({advertiser_id:8881,price:0,convtype:1,dat:\"\"});a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.mtburn.com\/advs-conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":183
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar request=new XMLHttpRequest;request.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);request.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");request.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");request.send(JSON.stringify({type:\"aff\"}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar request=new XMLHttpRequest;request.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);request.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");request.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");request.send(JSON.stringify({type:\"paid_acq\"}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"88dg1\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript src=\"https:\/\/bannerfarm.aolp.jp\/smartpxl\/89892\/smartpxl.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":190
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\"});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1147638\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1147638\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"action\",name:\"conversion\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/action?name=conversion\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"6317021retargeting\"});\u003C\/script\u003E\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/mark?marking-type=6317021retargeting\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":193
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"6314024retargeting\"});\u003C\/script\u003E\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/mark?marking-type=6314024retargeting\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E \n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":194
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E_linkedin_data_partner_id=\"371524\";\u003C\/script\u003E\u003Cscript type=\"text\/javascript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E \u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=371524\u0026amp;fmt=gif\"\u003E \u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":195
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\"});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1049902\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":196
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"add_to_cart\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=add_to_cart\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":197
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"make_purchase\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":198
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"BuyNow\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=BuyNow\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":199
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"Login\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=Login\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":200
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"complete_registration\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=complete_registration\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":201
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/tapen\/"
    },{
      "function":"_ew",
      "arg0":["macro",15],
      "arg1":"signup_success=1"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"udemy\\.com\\\/cart\\\/success"
    },{
      "function":"_gt",
      "arg0":["macro",3],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/jp\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"full_transaction"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"instructor_analytics"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/payment\/checkout\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"button-enroll-b"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"take-this-course-button"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.click"
    },{
      "function":"_gt",
      "arg0":["macro",7],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"(^$|((^|,)164179_139($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"submit-id-submit"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"btn btn-primary btn btn-success"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"cart\/success"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?organization\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.udemy.com\/create-learning-portal\/"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"submit-id-submit"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/course\\\/([0-9]*)\\\/manage\\\/feedback\\\/test"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"middle create_course button"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"btn btn-primary btn-huge btn-shadowed btn-lg join-btn"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/affiliate\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?courses\/search\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/learn\/v4\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"subcategory"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/success"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/mobile\/"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/cart\/"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"udemy.com"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?course\/subscribe\/.*$"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":".*\\.dev\\.udemy\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"2u.udemy.com|360E.udemy.com|abtasty.udemy.com|ABD.udemy.com|accesscapital.udemy.com|acemotor.udemy.com|adnatcongsco.udemy.com|adroll.udemy.com|akqa.udemy.com|akhbar.udemy.com|amaysim.udemy.com|Ampush.udemy.com|angelcitydata.udemy.com|anudip.udemy.com|apiheattransfer.udemy.com|aucklandcouncil.udemy.com|avascent.udemy.com|avg.udemy.com|iclas.udemy.com|azumo.udemy.com|bandwidth.udemy.com|bayt.udemy.com|beepi.udemy.com|bethyl.udemy.com|bulletproof.udemy.com|campusexplorer.udemy.com|caribbeanideas.udemy.com|carsguide.udemy.com|cchscarelink.udemy.com|cnu.udemy.com|ciazumano.udemy.com|cision.udemy.com|cloudreach.udemy.com|cacfp.udemy.com|collegespring.udemy.com|chs.udemy.com|continental.udemy.com|dcmservices.udemy.com|delivery.udemy.com|kyna.udemy.com|develappme.udemy.com|dichter-neira.udemy.com|duouniversity.udemy.com|teradyne-std-learning.udemy.com|eastwest.udemy.com|eastexcrude.udemy.com|echo3.udemy.com|edm.udemy.com|esa-ift.udemy.com|crunchyroll.udemy.com|ei.udemy.com|esa.udemy.com|examsoft.udemy.com|fleetmaticsacademy.udemy.com|http:\/\/fullscreen.udemy.com\/|fundamentallabor.udemy.com|fundingcircle.udemy.com|globalstrategies.udemy.com|cdp.udemy.com|glm.udemy.com|companybypeople.udemy.com|harbingergroup.udemy.com|hawaiisnacks.udemy.com|hbconstruction.udemy.com|hostpapa.udemy.com|huddle.udemy.com|ibm.udemy.com|geotecnologies.udemy.com|ignyte.udemy.com|imagineteam.udemy.com|inkblot.udemy.com|insite.udemy.com|instacart.udemy.com|jimenezconsulting.udemy.com|kimble-chase.udemy.com|kookmin.udemy.com|laneconstruct.udemy.com|lightsailenergy.udemy.com|lmuec.udemy.com|lpsoftware.udemy.com|lyft.udemy.com|cmsteam.udemy.com|mareku.udemy.com|MTC.udemy.com|mattex.udemy.com|mb3.udemy.com|melanoma.udemy.com|mmc.udemy.com|meridian.udemy.com|mixpanel.udemy.com|moboom.udemy.com|mre-consulting.udemy.com|michiganlottery.udemy.com|nike.udemy.com|nrtwebservices.udemy.com|ornl.udemy.com|ohiogt.udemy.com|on24.udemy.com|optimizely.udemy.com|optis.udemy.com|odc.udemy.com|oidtraining.udemy.com|pacificwoodtech.udemy.com|pagerduty.udemy.com|pwconsulting.udemy.com|pitneybowes.udemy.com|pjdick.udemy.com|platinum.udemy.com|powertech.udemy.com|powerteq.udemy.com|pretlist.udemy.com|proofpoint.udemy.com|prophet.udemy.com|quemetco.udemy.com|rslempdev.udemy.com|realnet.udemy.com|rottapharm.udemy.com|SLCC.udemy.com|thesentergroup.udemy.com|signaturehealthinc.udemy.com|step.udemy.com|stonehambank.udemy.com|cpfl.udemy.com|sweetwater.udemy.com|syndicatesales.udemy.com|tamkeentech.udemy.com|tegile.udemy.com|tamu.udemy.com|chernin.udemy.com|sideout.udemy.com|wistar.udemy.com|thoughtspot.udemy.com|toptal.udemy.com|tomo.udemy.com|tpipr.udemy.com|trginternational.udemy.com|tricerat.udemy.com|tpl.udemy.com|type1team.udemy.com|redal.udemy.com|unifiedtcg.udemy.com|Valin.udemy.com|viki.udemy.com|walmart.udemy.com|wanhaisg.udemy.com|webair.udemy.com|webanywhere.udemy.com|wedbush.udemy.com|egs.udemy.com|wipro.udemy.com|wolfram.udemy.com|worldpac.udemy.com|xoomworks.udemy.com|xtremeconsulting.udemy.com|yemeksepeti.udemy.com|zeeto.udemy.com|zensar.udemy.com|learning.udemy.com|paulatest.udemy.com"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"organization-manage"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"^(va2site|aws-dr|www).udemy.com.*$"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?payment\/^success"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"^(aws-dr|www).udemy.com.*$"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/apps\/admin"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"www.udemy.com\/course-manage\/edit-getting-started\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.udemy.com\/courses\/?pmtag=blog\u0026utm_source=blog\u0026utm_medium=udemyads\u0026utm_content=hellobar\u0026utm_campaign=content-marketing-blog\u0026source=blogpop\u0026utm_source=blog\u0026utm_medium=udemyads\u0026utm_content=post0\u0026utm_campaign=content-marketing-blog\u0026xref=blog"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/collection\\\/jp\\-"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"[0-9]+"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"add-to-cart"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/courses\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/home\/my-courses\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/collection\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/home\/teaching\/topics\/"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/manage\/feedback\/test\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/home\/teaching\/insights\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/affiliate\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"\/.+\/learn\/v4\/.+\/reviews\/|\/home\/my-courses\/.+\/.+\/reviews\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/teaching\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/topic"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/redeem\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/share\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"new_user_transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"impact_radius"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"127.0.0.1"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":".*\\.devs\\.dev-ud\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"localhost"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/teach\/?$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/home\/teaching\/onboarding\/"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"buy-this-course-button"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"login"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"signup"
    }],
  "rules":[
    [["if",0,3],["unless",1,2],["add",2,3,0,113,123,124,130]],
    [["if",3,5,6],["add",4,5,8,91,92,93,98,99]],
    [["if",3,7],["add",6,12,13,15,28,40,87,105,106,107,125]],
    [["if",8,9],["add",6,15,31,43,87,103,108,119,131,133,134,143]],
    [["if",3,10],["add",7,96,97]],
    [["if",0,3,6],["add",9,26,29,38,42,112,121,128,135,136,138,139]],
    [["if",6,11],["add",10,11]],
    [["if",3,4],["add",14],["block",2,3,9,16,23,26,29,38,42,88,1,104,0,112,116,118,121,123,124,128,130,141]],
    [["if",3],["add",14,16,36,104,116,141,45,46,47,48,49,73,74,75,76,77,78,79,81,82,83,84,85]],
    [["if",12],["add",17,18]],
    [["if",13,14,15,16],["add",19]],
    [["if",13,15,16],["unless",14],["add",20]],
    [["if",3,17],["add",21]],
    [["if",3],["unless",18],["add",22,44,113,50,53,54,57,59,61,64,66,68,69,70,72]],
    [["if",19,20],["add",23]],
    [["if",16,21,22],["add",24,110]],
    [["if",11],["add",25,30,35,37]],
    [["if",6,8,9],["add",27,41,111,120,126,127,137],["block",138,139]],
    [["if",3,23],["add",28]],
    [["if",3,25],["add",32,115]],
    [["if",16,26,27],["add",33]],
    [["if",16,28],["add",34]],
    [["if",16,29,30],["add",39,117]],
    [["if",3,31],["add",44,113]],
    [["if",3,32],["add",44]],
    [["if",3,33],["add",44,113],["block",123,124]],
    [["if",3,31,34],["add",44,113]],
    [["if",3,35],["add",44,113]],
    [["if",3,36],["add",44,113]],
    [["if",3,37],["add",44,113]],
    [["if",3,38],["add",44,113]],
    [["if",3,39],["add",44]],
    [["if",3,40],["add",51,52,55,56,58,60,62,63,65,67,71]],
    [["if",3,41],["add",80]],
    [["if",3,42],["add",86]],
    [["if",3,43],["add",88],["block",122,123,124,141]],
    [["if",3,44],["unless",45],["add",88]],
    [["if",46,47],["add",88]],
    [["if",3,49],["add",1]],
    [["if",3,51],["add",89,90]],
    [["if",52],["add",94]],
    [["if",52,53],["add",95,118],["block",112]],
    [["if",52,54],["add",100]],
    [["if",3,55],["add",101]],
    [["if",52,56,57],["add",101]],
    [["if",16,58],["add",102,142]],
    [["if",3,5],["add",109]],
    [["if",3,59],["add",113]],
    [["if",3,60],["add",113]],
    [["if",3,61],["add",113],["block",123,124]],
    [["if",3,62],["add",113]],
    [["if",3,63],["add",113]],
    [["if",3],["unless",64],["add",113]],
    [["if",3,65],["add",113]],
    [["if",3,66],["add",113]],
    [["if",3,67],["add",113]],
    [["if",3,68],["add",113]],
    [["if",3,69],["add",113,113]],
    [["if",3,70],["add",113]],
    [["if",0,2,3],["unless",1],["add",113]],
    [["if",3,71],["unless",72,73],["add",113]],
    [["if",8,74],["add",114,140]],
    [["if",75,76,77,78],["add",122,132]],
    [["if",3,83],["add",129]],
    [["if",16,84],["add",144]],
    [["if",16,85],["add",145]],
    [["if",16,86],["add",146]],
    [["if",3,24],["block",29,88,1]],
    [["if",3,48],["block",88]],
    [["if",3,50],["block",1]],
    [["if",3,79],["block",122,123,124,141]],
    [["if",3,80],["block",122,123,124,141]],
    [["if",3,81],["block",122,123,124,141]],
    [["if",3,82],["block",123,124]]]
},
"runtime":[
[],[]
],
"permissions":{}};
var da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={Mc:!0},ja={};try{ja.__proto__=ha;fa=ja.Mc;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=ea,la=this,oa=function(){if(null===ma){var a;a:{var b=la.document,c=b.querySelector&&b.querySelector("script[nonce]");if(c){var d=c.nonce||c.getAttribute("nonce");if(d&&na.test(d)){a=d;break a}}a=null}ma=a||""}return ma},na=/^[\w+/_-]+[=]{0,2}$/,ma=null,pa=function(a,b){function c(){}c.prototype=b.prototype;a.Ce=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Pe=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,
d)}};var g=function(a,b){this.B=a;this.rd=b};g.prototype.Ed=function(){return this.B};g.prototype.getType=g.prototype.Ed;g.prototype.getData=function(){return this.rd};g.prototype.getData=g.prototype.getData;var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.ka={};this.Aa=!1};ra.prototype.get=function(a){return this.ka["dust."+a]};ra.prototype.set=function(a,b){!this.Aa&&(this.ka["dust."+a]=b)};ra.prototype.has=function(a){return this.ka.hasOwnProperty("dust."+a)};var sa=function(a){var b=[],c;for(c in a.ka)a.ka.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ra.prototype.remove=function(a){!this.Aa&&delete this.ka["dust."+a]};ra.prototype.L=function(){this.Aa=!0};var v=function(a){this.na=new ra;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.h[Number(b)]=a[Number(b)]:this.na.set(b,a[b]))};v.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};v.prototype.set=function(a,b){if("length"==a){if(!qa(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else qa(a)?this.h[Number(a)]=b:this.na.set(a,b)};
v.prototype.set=v.prototype.set;v.prototype.get=function(a){return"length"==a?this.length():qa(a)?this.h[Number(a)]:this.na.get(a)};v.prototype.get=v.prototype.get;v.prototype.length=function(){return this.h.length};v.prototype.U=function(){for(var a=sa(this.na),b=0;b<this.h.length;b++)a.push(b+"");return new v(a)};v.prototype.getKeys=v.prototype.U;v.prototype.remove=function(a){qa(a)?delete this.h[Number(a)]:this.na.remove(a)};v.prototype.remove=v.prototype.remove;v.prototype.pop=function(){return this.h.pop()};
v.prototype.pop=v.prototype.pop;v.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};v.prototype.push=v.prototype.push;v.prototype.shift=function(){return this.h.shift()};v.prototype.shift=v.prototype.shift;v.prototype.splice=function(a,b,c){return new v(this.h.splice.apply(this.h,arguments))};v.prototype.splice=v.prototype.splice;v.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
v.prototype.unshift=v.prototype.unshift;v.prototype.has=function(a){return qa(a)&&this.h.hasOwnProperty(a)||this.na.has(a)};var ta=function(){function a(a,b){c[a]=b}function b(){c={};f=!1}var c={},d,e={},f=!1,h={add:a,Ub:function(a,b,c){e[a]||(e[a]={});e[a][b]=c},create:function(e){var h={add:a,assert:function(a,b){if(!f){var h=c[a]||d;h&&h.apply(e,Array.prototype.slice.call(arguments,0))}},reset:b};h.add=h.add;h.assert=h.assert;h.reset=h.reset;return h},qc:function(a){return e[a]?(b(),c=e[a],!0):!1},oa:function(a){d=a},reset:b,Cc:function(a){f=a}};h.add=h.add;h.addToCache=h.Ub;h.loadFromCache=h.qc;h.registerDefaultPermission=
h.oa;h.reset=h.reset;h.setPermitAllAsserts=h.Cc;return h};var va=function(){function a(a,c){if(b[a]){if(b[a].Oa+c>b[a].max)throw Error("Quota exceeded");b[a].Oa+=c}}var b={},c=void 0,d=void 0,e={ae:function(a){c=a},Vb:function(){c&&a(c,1)},be:function(a){d=a},Y:function(b){d&&a(d,b)},ye:function(a,c){b[a]=b[a]||{Oa:0};b[a].max=c},Dd:function(a){return b[a]&&b[a].Oa||0},reset:function(){b={}},ld:a};e.onFnConsume=e.ae;e.consumeFn=e.Vb;e.onStorageConsume=e.be;e.consumeStorage=e.Y;e.setMax=e.ye;e.getConsumed=e.Dd;e.reset=e.reset;e.consume=e.ld;return e};var wa=function(a,b,c){this.M=a;this.H=b;this.aa=c;this.h=new ra};wa.prototype.add=function(a,b){this.h.Aa||(this.M.Y(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};wa.prototype.add=wa.prototype.add;wa.prototype.set=function(a,b){this.h.Aa||(this.aa&&this.aa.has(a)?this.aa.set(a,b):(this.M.Y(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};wa.prototype.set=wa.prototype.set;
wa.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.aa?this.aa.get(a):void 0};wa.prototype.get=wa.prototype.get;wa.prototype.has=function(a){return!!this.h.has(a)||!(!this.aa||!this.aa.has(a))};wa.prototype.has=wa.prototype.has;wa.prototype.K=function(){return this.M};wa.prototype.L=function(){this.h.L()};var ya=function(){},za=function(a){return"function"==typeof a},Aa=function(a){return"string"==typeof a},Ba=function(a){return"number"==typeof a&&!isNaN(a)},Ca=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Da=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ea=function(a,b){if(!Ba(a)||!Ba(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Fa=function(a){return Math.round(Number(a))||
0},Ga=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ha=function(a){var b=[];if(Ca(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ia=function(){this.prefix="gtm.";this.values={}};Ia.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ia.prototype.get=function(a){return this.values[this.prefix+a]};Ia.prototype.contains=function(a){return void 0!==this.get(a)};
var Ja=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ka=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},La=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ma=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1};var w=function(a,b){ra.call(this);this.sc=a;this.Bd=b};pa(w,ra);var Oa=function(a,b){for(var c,d=0;d<b.length&&!(c=Na(a,b[d]),c instanceof g);d++);return c},Na=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof w))throw"Attempting to execute non-function "+b[0]+".";return c.m.apply(c,[a].concat(b.slice(1)))};w.prototype.toString=function(){return this.sc};w.prototype.getName=function(){return this.sc};w.prototype.getName=w.prototype.getName;w.prototype.U=function(){return new v(sa(this))};
w.prototype.getKeys=w.prototype.U;w.prototype.m=function(a,b){var c,d={F:function(){return a},evaluate:function(b){var c=a;return Ca(b)?Na(c,b):b},xa:function(b){return Oa(a,b)},K:function(){return a.K()},fc:function(){c||(c=a.H.create(d));return c}};a.K().Vb();return this.Bd.apply(d,Array.prototype.slice.call(arguments,1))};w.prototype.invoke=w.prototype.m;var Pa=function(){ra.call(this)};pa(Pa,ra);Pa.prototype.U=function(){return new v(sa(this))};Pa.prototype.getKeys=Pa.prototype.U;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Qa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ra=function(a){if(null==a)return String(a);var b=Qa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Sa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ta=function(a){if(!a||"object"!=Ra(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Sa(a,"constructor")&&!Sa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Sa(a,b)},Ua=function(a,b){var c=b||("array"==Ra(a)?[]:{}),d;for(d in a)if(Sa(a,d)){var e=a[d];"array"==Ra(e)?("array"!=Ra(c[d])&&(c[d]=[]),c[d]=Ua(e,c[d])):Ta(e)?(Ta(c[d])||(c[d]={}),c[d]=Ua(e,c[d])):c[d]=e}return c};var Va=function(a){if(a instanceof v){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Va(a.get(d)));return b}if(a instanceof Pa){for(var e={},f=a.U(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=Va(a.get(f.get(k)));return e}return a instanceof w?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Wa(b[c]);var d=new wa(va(),ta());return Va(a.m.apply(a,[d].concat(b)))}:a},Wa=function(a){if(Ca(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Wa(a[c]));return new v(b)}if(Ta(a)){var d=
new Pa,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Wa(a[e]));return d}if("function"===typeof a)return new w("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Va(this.evaluate(c[d]));return Wa(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var Xa={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.F(),e=this.evaluate(b);if(!(e instanceof v))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.K().Y(a.length+f.length);return new w(a,function(){return function(a){for(var b=new wa(d.M,d.H,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new v(c));var q=Oa(b,f);if(q instanceof g)return"return"===q.B?q.getData():q}}())},list:function(a){var b=this.K();b.Y(arguments.length);for(var c=new v,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.Y(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.K(),c=new Pa,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.Y(h);c.set(e,f)}return c},undefined:function(){}};var x=function(){this.M=va();this.H=ta();this.ya=new wa(this.M,this.H)};x.prototype.W=function(a,b){var c=new w(a,b);c.L();this.ya.set(a,c)};x.prototype.addInstruction=x.prototype.W;x.prototype.Tb=function(a,b){Xa.hasOwnProperty(a)&&this.W(b||a,Xa[a])};x.prototype.addNativeInstruction=x.prototype.Tb;x.prototype.K=function(){return this.M};x.prototype.getQuota=x.prototype.K;x.prototype.Va=function(){this.M=va();this.ya.M=this.M};x.prototype.resetQuota=x.prototype.Va;
x.prototype.ve=function(){this.H=ta();this.ya.H=this.H};x.prototype.resetPermissions=x.prototype.ve;x.prototype.R=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.wb(c)};x.prototype.execute=x.prototype.R;x.prototype.wb=function(a){for(var b,c=0;c<arguments.length;c++){var d=Na(this.ya,arguments[c]);b=d instanceof g||d instanceof w||d instanceof v||d instanceof Pa||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
x.prototype.run=x.prototype.wb;x.prototype.L=function(){this.ya.L()};x.prototype.makeImmutable=x.prototype.L;var Ya=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var $a={De:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof v)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new v(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.m(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.m(a,this.get(e),e,this)&&d.push(this.get(e));return new v(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.m(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.m(a,this.get(e),e,this));return new v(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ya(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new v(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.m(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ya(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.m(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var y={ic:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},ab="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),bb=new g("break"),cb=new g("continue");y.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};y.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
y.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof v))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=Da(ab,b))return Wa(a[b].apply(a,Ya(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof v){if(a.has(b)){var d=
a.get(b);if(d instanceof w){var e=Ya(c);e.unshift(this.F());return d.m.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=Da($a.De,b))return e=Ya(c),e.unshift(this.F()),$a[b].apply(a,e)}if(a instanceof w||a instanceof Pa){if(a.has(b)){d=a.get(b);if(d instanceof w)return e=Ya(c),e.unshift(this.F()),d.m.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof w?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,Ya(c))}throw"TypeError: Object has no '"+
b+"' property.";};y.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.F();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};y["break"]=function(){return bb};y["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};y["continue"]=function(){return cb};
y.sd=function(a,b,c){var d=new v;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[y.ic.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.F().set(a,this.evaluate(f))};y.vd=function(a,b){return this.evaluate(a)/this.evaluate(b)};y.yd=function(a,b){return this.evaluate(a)==this.evaluate(b)};y.zd=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
y.Cd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.F();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.xa(c);if(f instanceof g){if("break"==f.B)break;if("return"==f.B)return f}}else if(b instanceof Pa||b instanceof v||b instanceof w){var h=b.U(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.xa(c),f instanceof g){if("break"==f.B)break;if("return"==f.B)return f}}};y.get=function(a){return this.F().get(this.evaluate(a))};
y.gc=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof Pa||a instanceof v||a instanceof w?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c};y.Fd=function(a,b){return this.evaluate(a)>this.evaluate(b)};y.Gd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};y.Kd=function(a,b){return this.evaluate(a)===this.evaluate(b)};y.Ld=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
y["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.xa(d);if(e instanceof g)return e};y.Td=function(a,b){return this.evaluate(a)<this.evaluate(b)};y.Ud=function(a,b){return this.evaluate(a)<=this.evaluate(b)};y.Wd=function(a,b){return this.evaluate(a)%this.evaluate(b)};y.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};y.Xd=function(a){return-this.evaluate(a)};y.Yd=function(a){return!this.evaluate(a)};
y.Zd=function(a,b){return this.evaluate(a)!=this.evaluate(b)};y["null"]=function(){return null};y.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};y.yc=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};y.zc=function(a){return this.evaluate(a)};y.quote=function(a){return Array.prototype.slice.apply(arguments)};y["return"]=function(a){return new g("return",this.evaluate(a))};
y.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof w||a instanceof v||a instanceof Pa)&&a.set(b,c);return c};y.Be=function(a,b){return this.evaluate(a)-this.evaluate(b)};
y["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!Ca(b)||!Ca(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.B;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.B||"continue"==d.B)))return d};
y.Ee=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};y["typeof"]=function(a){a=this.evaluate(a);return a instanceof w?"function":typeof a};y.undefined=function(){};y["var"]=function(a){for(var b=this.F(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
y["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.xa(f),e instanceof g)){if("break"==e.B)return;if("return"==e.B)return e}for(;this.evaluate(a);){e=this.xa(f);if(e instanceof g){if("break"==e.B)break;if("return"==e.B)return e}this.evaluate(b)}};var eb=function(){this.hc=!1;this.D=new x;db(this);this.hc=!0};eb.prototype.Qd=function(){return this.hc};eb.prototype.isInitialized=eb.prototype.Qd;eb.prototype.R=function(a){this.D.H.qc(String(a[0]))||(this.D.H.reset(),this.D.H.Cc(!0));return this.D.wb(a)};eb.prototype.execute=eb.prototype.R;eb.prototype.L=function(){this.D.L()};eb.prototype.makeImmutable=eb.prototype.L;
var db=function(a){function b(a,b){e.D.Tb(a,String(b))}function c(a,b){e.D.W(String(d[a]),b)}var d=y.ic,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",y.add);c("AND",y.and);c("APPLY",y.apply);c("ASSIGN",y.assign);c("BREAK",y["break"]);c("CASE",y["case"]);c("CONTINUE",y["continue"]);c("DEFAULT",y["case"]);c("DEFN",y.sd);c("DIVIDE",y.vd);c("EQUALS",y.yd);c("EXPRESSION_LIST",y.zd);c("FOR_IN",y.Cd);c("GET",y.get);c("GET_INDEX",
y.gc);c("GET_PROPERTY",y.gc);c("GREATER_THAN",y.Fd);c("GREATER_THAN_EQUALS",y.Gd);c("IDENTITY_EQUALS",y.Kd);c("IDENTITY_NOT_EQUALS",y.Ld);c("IF",y["if"]);c("LESS_THAN",y.Td);c("LESS_THAN_EQUALS",y.Ud);c("MODULUS",y.Wd);c("MULTIPLY",y.multiply);c("NEGATE",y.Xd);c("NOT",y.Yd);c("NOT_EQUALS",y.Zd);c("NULL",y["null"]);c("OR",y.or);c("POST_DECREMENT",y.yc);c("POST_INCREMENT",y.yc);c("PRE_DECREMENT",y.zc);c("PRE_INCREMENT",y.zc);c("QUOTE",y.quote);c("RETURN",y["return"]);c("SET_PROPERTY",y.setProperty);
c("SUBTRACT",y.Be);c("SWITCH",y["switch"]);c("TERNARY",y.Ee);c("TYPEOF",y["typeof"]);c("VAR",y["var"]);c("WHILE",y["while"])};eb.prototype.W=function(a,b){this.D.W(a,b)};eb.prototype.addInstruction=eb.prototype.W;eb.prototype.K=function(){return this.D.K()};eb.prototype.getQuota=eb.prototype.K;eb.prototype.Va=function(){this.D.Va()};eb.prototype.resetQuota=eb.prototype.Va;eb.prototype.oa=function(a){this.D.H.oa(a)};eb.prototype.Ma=function(a,b,c){this.D.H.Ub(a,b,c)};var fb=function(){this.Ra={}};fb.prototype.get=function(a){return this.Ra.hasOwnProperty(a)?this.Ra[a]:void 0};fb.prototype.add=function(a,b){if(this.Ra.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new w(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.L();this.Ra[a]=c};fb.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var z=window,B=document,gb=navigator,ib=function(a,b){var c=z[a];z[a]=void 0===c?b:c;return z[a]},jb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},kb=function(a,b,c){var d=B.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;jb(d,b);c&&(d.onerror=c);oa()&&d.setAttribute("nonce",oa());var e=B.getElementsByTagName("script")[0]||B.body||B.head;e.parentNode.insertBefore(d,e);return d},
lb=function(a,b){var c=B.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=B.body&&B.body.lastChild||B.body||B.head;d.parentNode.insertBefore(c,d);jb(c,b);void 0!==a&&(c.src=a);return c},C=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},mb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},nb=function(a,b,
c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)},H=function(a){z.setTimeout(a,0)},pb=function(a){var b=B.getElementById(a);if(b&&ob(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(ob(document.all[a][c],"id")==a)return document.all[a][c];return b},ob=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},qb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=
b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},rb=function(a){var b=B.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},sb=function(a){gb.sendBeacon&&gb.sendBeacon(a)||C(a)};var tb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ub=/:[0-9]+$/,wb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")==b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},xb=function(a,b,c,d,e){var f,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(z.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=k;break;case "host":f=(a.hostname||z.location.hostname).replace(ub,"").toLowerCase();
if(c){var l=/^www\d*\./.exec(f);l&&l[0]&&(f=f.substr(l[0].length))}break;case "port":f=String(Number(a.hostname?a.port:z.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=Da(d||[],m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=wb(f,e));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=
a.hash.replace("#","");break;default:f=a&&a.href}return f},yb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},N=function(a){var b=document.createElement("a");a&&(tb.test(a),b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(ub,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Bb=function(){this.Ua=new eb;var a=new fb;a.addAll(zb());Ab(this,function(b){return a.get(b)})},zb=function(){return{callInWindow:Cb,callLater:Db,copyFromWindow:Eb,encodeURI:encodeURI,encodeURIComponent:encodeURIComponent,getReferrer:Fb,getUrl:Gb,getUrlComponent:Hb,getUrlFragment:Ib,isPlainObject:Jb,loadIframe:Kb,loadJavaScript:Lb,logToConsole:Mb,queryPermission:Nb,removeUrlFragment:Qb,replaceAll:Rb,sendPixel:Sb,setInWindow:Tb}};Bb.prototype.R=function(a){return this.Ua.R(a)};
Bb.prototype.execute=Bb.prototype.R;var Ab=function(a,b){a.Ua.W("require",b)};Bb.prototype.oa=function(a){this.Ua.oa(a)};Bb.prototype.Ma=function(a,b,c){this.Ua.Ma(a,b,c)};function Cb(a,b){for(var c=a.split("."),d=z,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==Ra(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(Va(arguments[f]));e.apply(d,h)}}function Db(a){H(a)}function Gb(){return z.location.href}
function Eb(a,b,c){for(var d=a.split("."),e=z,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=Va(b));return Wa(e[d[f]])}function Fb(){return B.referrer}function Hb(a,b,c,d,e){var f;if(d&&d instanceof v){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return xb(N(a),b,c,f,e)}function Ib(a){return xb(N(a),"fragment")}function Jb(a){return a instanceof Pa}
function Kb(a,b){var c=this.F();lb(a,function(){b instanceof w&&b.m(c)})}var Ub={};
function Lb(a,b,c,d){this.fc().assert("networkAccess",a);var e=this.F(),f=function(){b instanceof w&&b.m(e)},h=function(){c instanceof w&&c.m(e)};d?Ub[d]?(Ub[d].onSuccess.push(f),Ub[d].onFailure.push(h)):(Ub[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=Ub[d].onSuccess,b=0;b<a.length;b++)H(a[b]);a.push=function(a){H(a);return 0}},h=function(){for(var a=Ub[d].onFailure,b=0;b<a.length;b++)H(a[b]);Ub[d]=null},kb(a,f,h)):kb(a,f,h)}
function Mb(){var a=Array.prototype.slice.call(arguments,0);console.log.apply(console,a)}function Qb(a){return yb(N(a))}function Rb(a,b,c){return a.replace(new RegExp(b,"g"),c)}function Sb(a,b,c){var d=this.F();C(a,function(){b instanceof w&&b.m(d)},function(){c instanceof w&&c.m(d)})}function Tb(a,b,c){for(var d=a.split("."),e=z,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=Va(b),!0):!1}
function Nb(a,b){try{return this.fc().assert.apply(null,Array.prototype.slice.call(arguments,0)),!0}catch(c){return!1}};
var Vb=[],Wb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Xb=function(a){return Wb[a]},Yb=/[\x00\x22\x26\x27\x3c\x3e]/g;var bc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},dc=function(a){return cc[a]};
Vb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(bc,dc)+"'"}};var lc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,mc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},nc=function(a){return mc[a]};Vb[16]=function(a){return a};var pc,sc=[],tc=[],uc=[],vc=[],wc=[],xc={},yc,zc,Ac,Bc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!xc[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?xc[b](d):pc(b,d)},Dc=function(a,b,c,d){c=c||[];d=d||ya;var e={},f;for(f in a)a.hasOwnProperty(f)&&(e[f]=Cc(a[f],b,c,d));return e},Cc=function(a,b,c,d){if(Ca(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var f=1;f<
a.length;f++)e.push(Cc(a[f],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=sc[h];if(!k||b(k))return;c[h]=!0;try{var l=Dc(k,b,c,d);e=Bc(l);Ac&&(e=Ac.nd(e,l))}catch(A){d(h,A),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=2)e[Cc(a[m],b,c,d)]=Cc(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,p=1;p<a.length;p++){var q=Cc(a[p],b,c,d);zc&&(n=n||q===zc.Ha);e.push(q)}return zc&&n?zc.od(e):e.join("");case "escape":e=Cc(a[1],b,c,d);if(zc&&Ca(a[1])&&"macro"===a[1][0]&&
zc.Rd(a))return zc.he(e);e=String(e);for(var r=2;r<a.length;r++)Vb[a[r]]&&(e=Vb[a[r]](e));return e;case "tag":var u=a[1];if(!vc[u])throw Error("Unable to resolve tag reference "+u+".");return e={$b:a[2],index:u};case "zb":var t=Ec({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c,d);a[4]&&(t=!t);return t;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ec=function(a,b,c,d){try{return yc(Dc(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Fc=null,Ic=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Fc=Gc(a,function(){});for(var e=0;e<tc.length;e++){var f=tc[e],h=Hc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<vc.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},Hc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Fc(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=Fc(e[c]);if(null===d)return null;
if(d)return!1}return!0};var Gc=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Ec(uc[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Jc,Kc=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.Xc&&(h["fix_"+k]=!0),h.ac=h.ac||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=p.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,C:b.C,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||f.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],C:d,Fa:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},q=function(){for(var b in l)if(l[b].test(a)){var c=p[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.ac&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.nc=function(){return this[this.length-1]};d.ob=function(a){var b=this.nc();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.md=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.Fa=b.test(a.tagName)||a.Fa);return a},f=q,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.ob("TABLE")?(a="<TBODY>"+a,m()):h.Ue&&c.test(e)&&d.md(e)?d.ob(e)?k():(a="</"+b.tagName+">"+a,m()):b.Fa||d.push(b)},endTag:function(a){d.nc()?h.Ad&&!d.ob(a.tagName)?k():d.pop():h.Ad&&(f(),m())}},m=function(){var b=a,c=e(f());a=b;if(c&&
l[c.type])l[c.type](c)};q=function(){m();return e(f())}}();return{append:function(b){a+=b},ne:q,$e:function(a){for(var b;(b=q())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},af:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.ef="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.cf=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.ff=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.C){var d=a.C[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.Fa?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.Te=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.bd=a.bd||!b[h]&&h;Jc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function f(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(r){var b=[];c(a,function(a){b.push(a)});return b}}var k={Pc:a,Qc:a,Rc:a,Sc:a,Yc:a,Zc:function(a){return a},done:a,error:function(a){throw a;},se:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var f=a.getAttribute(e);return b(f)?String(f):f}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function f(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,Ga:d.defaultView||d.parentWindow,ia:d,Ta:Jc("",{Xc:!0}),eb:[b],ub:"",vb:d.createElement(b.nodeName),Da:[],da:[]});a(this.vb,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.da,arguments);for(var a;!this.Pa&&this.da.length;)a=this.da.shift(),"function"===typeof a?this.fd(a):this.Fb(a)};f.prototype.fd=function(a){var b={type:"function",value:a.name||a.toString()};this.rb(b);a.call(this.Ga,this.ia);this.vc(b)};
f.prototype.Fb=function(a){this.Ta.append(a);for(var b,c=[],d,e;(b=this.Ta.ne())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.Je(c);d&&this.Hd(b);e&&this.Id(b)};f.prototype.Je=function(a){var b=this.cd(a);b.Sb&&(b.kb=this.ub+b.Sb,this.ub+=b.me,this.vb.innerHTML=b.kb,this.He())};f.prototype.cd=function(a){var b=this.eb.length,d=[],e=[],f=[];c(a,function(a){d.push(a.text);if(a.C){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.C.id&&"ps-style"!==a.C.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.Fa?" />":">"))}}else e.push(a.text),f.push("endTag"===a.type?a.text:"")});return{hf:a,raw:d.join(""),Sb:e.join(""),me:f.join("")}};f.prototype.He=function(){for(var c,d=[this.vb];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.eb[a(c,"id")]=c,a(c,"id",null));var f=c.parentNode&&a(c.parentNode,"proxyof");
f&&this.eb[f].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};f.prototype.Hd=function(a){var b=this.Ta.clear();b&&this.da.unshift(b);a.src=a.C.src||a.C.Me;a.src&&this.Da.length?this.Pa=a:this.rb(a);var c=this;this.Ie(a,function(){c.vc(a)})};f.prototype.Id=function(a){var b=this.Ta.clear();b&&this.da.unshift(b);a.type=a.C.type||a.C.Ne||"text/css";this.Ke(a);b&&this.write()};f.prototype.Ke=function(a){var b=this.ed(a);this.Pd(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.ia.createTextNode(a.content)))};f.prototype.ed=function(a){var b=this.ia.createElement(a.tagName);b.setAttribute("type",a.type);d(a.C,function(a,c){b.setAttribute(a,c)});return b};f.prototype.Pd=function(a){this.Fb('<span id="ps-style"/>');var b=this.ia.getElementById("ps-style");b.parentNode.replaceChild(a,b)};f.prototype.rb=function(a){a.ce=this.da;this.da=[];this.Da.unshift(a)};f.prototype.vc=function(a){a!==this.Da[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Da.shift(),this.write.apply(this,a.ce),!this.Da.length&&this.Pa&&(this.rb(this.Pa),this.Pa=null))};f.prototype.Ie=function(a,b){var c=this.dd(a),d=this.ze(c),e=this.options.Pc;a.src&&(c.src=a.src,this.xe(c,d?e:function(){b();e()}));try{this.Od(c),a.src&&!d||b()}catch(E){this.options.error(E),b()}};f.prototype.dd=function(a){var b=this.ia.createElement(a.tagName);d(a.C,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};f.prototype.Od=function(a){this.Fb('<span id="ps-script"/>');
var b=this.ia.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.xe=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};f.prototype.ze=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.se&&a.src&&a.hasAttribute("async"))};
return f}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.Qc(),a.stream=c.apply(null,a),b.Rc())}function c(c,f,k){function l(a){a=k.Zc(a);t.write(a);k.Sc(a)}t=new n(c,k);t.id=d++;t.name=k.name||t.id;var m=c.ownerDocument,p={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var q=t.Ga.onerror||a;t.Ga.onerror=function(a,b,c){k.error({Xe:a+
" - "+b+":"+c});q.apply(t.Ga,arguments)};t.write(f,function(){e(m,p);t.Ga.onerror=q;k.done();t=null;b()});return t}var d=0,m=[],t=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=f(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.Ve?c[0]:c;var h=[c,d,e];c.fe={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.Yc(h);m.push(h);t||b();return c.fe},{streams:{},Ze:m,Oe:n})}();Kc=l.postscribe}})();var Lc={},Mc=null;Lc.o="GTM-7BF3X";var Nc=null,Oc="//www.googletagmanager.com/a?id="+Lc.o+"&cv=288",Pc={},Qc={},Rc=B.currentScript?B.currentScript.src:void 0,Sc=function(){var a=Mc.sequence||0;Mc.sequence=a+1;return a};var P=function(){var a=function(a){return{toString:function(){return a}}};return{Ib:a("convert_case_to"),Jb:a("convert_false_to"),Kb:a("convert_null_to"),Lb:a("convert_true_to"),Mb:a("convert_undefined_to"),N:a("function"),Fc:a("instance_name"),Gc:a("live_only"),Hc:a("malware_disabled"),Ic:a("once_per_event"),Ob:a("once_per_load"),Pb:a("setup_tags"),Jc:a("tag_id"),Qb:a("teardown_tags")}}();var Tc=new Ia,Uc={},Xc={set:function(a,b){Ua(Vc(a,b),Uc)},get:function(a){return Wc(a,2)},reset:function(){Tc=new Ia;Uc={}}},Wc=function(a,b){return 2!=b?Tc.get(a):Yc(a)},Yc=function(a,b,c){var d=a.split(".");return $c(d)},$c=function(a){for(var b=Uc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var bd=function(a,b){Tc.set(a,b);Ua(Vc(a,b),Uc)},Vc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var cd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),dd={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ed={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},fd=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var gd=function(a){var b=Wc("gtm.whitelist");var c=b&&fd(Ha(b),dd),d=Wc("gtm.blacklist")||Wc("tagTypeBlacklist")||[];
cd.test(z.location&&z.location.hostname)&&(d=Ha(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&fd(Ha(d),ed),f={};return function(h){var k=h&&h[P.N];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Qc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>Da(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>Da(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var r;if(!(r=0<=
Da(e,k)))a:{for(var u=l||[],t=new Ia,A=0;A<e.length;A++)t.set(e[A],!0);for(var D=0;D<u.length;D++)if(t.get(u[D])){r=!0;break a}r=!1}q=r}return f[k]=!m||q}};var hd={nd:function(a,b){b[P.Ib]&&"string"===typeof a&&(a=1==b[P.Ib]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(P.Kb)&&null===a&&(a=b[P.Kb]);b.hasOwnProperty(P.Mb)&&void 0===a&&(a=b[P.Mb]);b.hasOwnProperty(P.Lb)&&!0===a&&(a=b[P.Lb]);b.hasOwnProperty(P.Jb)&&!1===a&&(a=b[P.Jb]);return a}};var jd=function(a){var b;b=Error.call(this);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.de=a},kd=Error;jd.prototype=da(kd.prototype);jd.prototype.constructor=jd;if(ka)ka(jd,kd);else for(var ld in kd)if("prototype"!=ld)if(Object.defineProperties){var md=Object.getOwnPropertyDescriptor(kd,ld);md&&Object.defineProperty(jd,ld,md)}else jd[ld]=kd[ld];jd.Ce=kd.prototype;jd.prototype.getParameters=function(){return this.de};var nd=function(a){var b=Mc.zones;!b&&a&&(b=Mc.zones=a());return b},od={active:!0,isWhitelisted:function(){return!0}};var pd=!1,qd=0,rd=[];function sd(a){if(!pd){var b=B.createEventObject,c="complete"==B.readyState,d="interactive"==B.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){pd=!0;for(var e=0;e<rd.length;e++)H(rd[e])}rd.push=function(){for(var a=0;a<arguments.length;a++)H(arguments[a]);return 0}}}function td(){if(!pd&&140>qd){qd++;try{B.documentElement.doScroll("left"),sd()}catch(a){z.setTimeout(td,50)}}}var ud=function(a){pd?a():rd.push(a)};var vd=!1,wd=function(){return z.GoogleAnalyticsObject&&z[z.GoogleAnalyticsObject]};var xd=function(a){z.GoogleAnalyticsObject||(z.GoogleAnalyticsObject=a||"ga");var b=z.GoogleAnalyticsObject;if(!z[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);z[b]=c}return z[b]},yd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=wd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Cd=function(){return"&tc="+vc.filter(function(a){return a}).length},Dd="0.005000">Math.random(),Ed=function(){var a=0,b=0;return{Sd:function(){if(2>a)return!1;1E3<=(new Date).getTime()-b&&(a=0);return 2<=a},pe:function(){1E3<=(new Date).getTime()-b&&(a=0);a++;b=(new Date).getTime()}}},Fd="",Gd=function(){Fd=[Oc,"&v=3&t=t","&pid="+Ea(),"&rv=9c"].join("")},Hd={},Id="",Jd=void 0,Kd={},Ld={},Md=void 0,Nd=null,Od=1E3,Pd=function(){var a=Jd;return void 0===a?"":[Fd,
Hd[a]?"":"&es=1",Kd[a],Cd(),Id,"&z=0"].join("")},Qd=function(){Md&&(z.clearTimeout(Md),Md=void 0);void 0===Jd||Hd[Jd]&&!Id||(Ld[Jd]||Nd.Sd()||0>=Od--?Ld[Jd]=!0:(Nd.pe(),C(Pd()),Hd[Jd]=!0,Id=""))},Rd=function(a,b,c){if(Dd&&!Ld[a]&&b){a!==Jd&&(Qd(),Jd=a);var d=c+String(b[P.N]||"").replace(/_/g,"");Id=Id?Id+"."+d:"&tr="+d;Md||(Md=z.setTimeout(Qd,500));2022<=Pd().length&&Qd()}};function Sd(a,b,c,d,e,f){var h=vc[a],k=Td(a,b,c,d,e,f);if(!k)return null;var l=Cc(h[P.Pb],f.Z,[],Ud());if(l&&l.length){var m=l[0];k=Sd(m.index,b,k,1===m.$b?e:k,e,f)}return k}
function Td(a,b,c,d,e,f){function h(){var b=Dc(k,f.Z,[],l);b.vtp_gtmOnSuccess=function(){Rd(f.id,vc[a],"5");c()};b.vtp_gtmOnFailure=function(){Rd(f.id,vc[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[P.Hc])d();else{Rd(f.id,k,"1");try{Bc(b)}catch(D){Rd(f.id,
k,"7");e()}}}var k=vc[a];if(f.Z(k))return null;var l=Ud(),m=Cc(k[P.Qb],f.Z,[],l);if(m&&m.length){var n=m[0],p=Sd(n.index,b,c,d,e,f);if(!p)return null;c=p;d=2===n.$b?e:p}if(k[P.Ob]||k[P.Ic]){var q=k[P.Ob]?wc:b,r=c,u=d;if(!q[a]){h=Ka(h);var t=Vd(a,q,h);c=t.V;d=t.la}return function(){q[a](r,u)}}return h}
function Vd(a,b,c){var d=[],e=[];b[a]=Wd(d,e,c);return{V:function(){b[a]=Xd;for(var c=0;c<d.length;c++)d[c]()},la:function(){b[a]=Yd;for(var c=0;c<e.length;c++)e[c]()}}}function Wd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Xd(a){a()}function Yd(a,b){b()}function Ud(){return function(){}};function Zd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ka(function(){b++;d&&b>=c&&a()})},Vc:function(){d=!0;b>=c&&a()}}}function $d(a,b){if(!Dd)return;var c=function(a){var d=b.Z(vc[a])?"3":"4",f=Cc(vc[a][P.Pb],b.Z,[],ya);f&&f.length&&c(f[0].index);Rd(b.id,vc[a],d);var h=Cc(vc[a][P.Qb],b.Z,[],ya);h&&h.length&&c(h[0].index)};c(a);}var ae=!1;var be=function(a,b){var c={};c[P.N]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);vc.push(c);return vc.length-1};var ce="allow_ad_personalization_signals cookie_domain cookie_expires cookie_name cookie_path custom_params event_callback event_timeout groups send_to send_page_view session_duration user_properties".split(" ");var de=/[A-Z]+/,ee=/\s/,fe=function(a){if(Aa(a)&&(a=a.trim(),!ee.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(de.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ja:d}}}}};var ge=null,he={},ie={},je;function ke(){ge=ge||!Mc.gtagRegistered;Mc.gtagRegistered=!0;return ge}var le=function(a,b){var c={event:a};b&&(c.eventModel=Ua(b),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function me(a){if(void 0===ie[a.id]){var b;if("UA"==a.prefix)b=be("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=be("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=be("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=be("gtaggf",{conversionId:a});else if("G"==a.prefix)b=be("get",{trackingId:a.id,isAutoTag:!0});else return;if(!je){var c={name:"send_to",dataLayerVersion:2},d={};d[P.N]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);sc.push(d);je=["macro",sc.length-1]}var f={arg0:je,
arg1:a.id,ignore_case:!1};f[P.N]="_lc";uc.push(f);var h={"if":[uc.length-1],add:[b]};h["if"]&&(h.add||h.block)&&tc.push(h);ie[a.id]=b}}
var oe={event:function(a){var b=a[1];if(Aa(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ta(a[2]))return;c=a[2]}var d=le(b,c);return d}},set:function(a){var b;2==a.length&&Ta(a[1])?
b=Ua(a[1]):3==a.length&&Aa(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ua(b),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},ne=Ka(function(){});var pe=!1,qe=[];function re(){if(!pe){pe=!0;for(var a=0;a<qe.length;a++)H(qe[a])}};var se=[],te=!1,ye=function(a){var b=a.eventCallback,c=Ka(function(){za(b)&&H(function(){b(Lc.o)})}),d=a.eventTimeout;d&&z.setTimeout(c,Number(d));return c},ze=function(){for(var a=!1;!te&&0<se.length;){te=!0;delete Uc.eventModel;var b=se.shift();if(za(b))try{b.call(Xc)}catch(ue){}else if(Ca(b)){var c=b;if(Aa(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Wc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(ue){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{if(b.length&&Aa(b[0])){var l=oe[b[0]];if(l){b=l(b);break a}}b=void 0}if(!b){te=!1;continue}}var m;var n=void 0,p=b,q=p._clear;for(n in p)p.hasOwnProperty(n)&&"_clear"!==n&&(q&&bd(n,void 0),bd(n,p[n]));var r=p.event;if(r){var u=p["gtm.uniqueEventId"];u||(u=Sc(),p["gtm.uniqueEventId"]=u,bd("gtm.uniqueEventId",u));Nc=r;var t;var A,D,E=p,M=E.event,F=E["gtm.uniqueEventId"],G=Mc.zones;D=G?G.checkState(Lc.o,F):od;if(D.active){var J=ye(E);c:{var I=D.isWhitelisted;
if("gtm.js"==M){if(ae){A=!1;break c}ae=!0}var K=F,R=M;if(Dd&&!Ld[K]&&Jd!==K){Qd();Jd=K;Id="";var ia=Kd,W=K,aa,L=R;aa=0===L.indexOf("gtm.")?encodeURIComponent(L):"*";ia[W]="&e="+aa+"&eid="+K;Md||(Md=z.setTimeout(Qd,500))}var S=gd(I),O={id:F,name:M,callback:J||ya,Z:S,Wa:Ic(S)};for(var xa,Za=O,Ob=Zd(Za.callback),qc=[],vb=[],hb=0;hb<vc.length;hb++)if(Za.Wa[hb]){var Ag=vc[hb];var Pb=Ob.add();try{var ve=Sd(hb,qc,Pb,Pb,Pb,Za);ve?vb.push(ve):($d(hb,Za),Pb())}catch(ue){Pb()}}Ob.Vc();for(var id=0;id<vb.length;id++)vb[id]();xa=0<vb.length;if("gtm.js"===M||"gtm.sync"===M)d:{}if(xa){for(var Bg={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},rc=0;rc<O.Wa.length;rc++)if(O.Wa[rc]){var xe=vc[rc];if(xe&&!Bg[xe[P.N]]){A=!0;break c}}A=!1}else A=xa}t=A?!0:!1}else t=!1;Nc=null;m=t}else m=!1;a=m||a}te=!1}return!a},Ae=function(){var a=ze();try{var b=z["dataLayer"].hide;if(b&&void 0!==b[Lc.o]&&b.end){b[Lc.o]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;
break}c&&(b.end(),b.end=null)}}catch(e){}return a},Be=function(){var a=ib("dataLayer",[]),b=ib("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};rd.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});qe.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(se.push.apply(se,b);300<this.length;)this.shift();return ze()};se.push.apply(se,a.slice(0));H(Ae)};var Ce={};Ce.Ha=new String("undefined");Ce.ab={};var De=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Ce.Ha?b:a[d]);return c.join("")}};De.prototype.toString=function(){return this.resolve("undefined")};De.prototype.valueOf=De.prototype.toString;Ce.od=function(a){return new De(a)};var Ee={};Ce.qe=function(a,b){var c=Sc();Ee[c]=[a,b];return c};Ce.Wb=function(a){var b=a?0:1;return function(a){var c=Ee[a];if(c&&"function"===typeof c[b])c[b]();Ee[a]=void 0}};
Ce.Rd=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Ce.he=function(a){if(a===Ce.Ha)return a;var b=Sc();Ce.ab[b]=a;return'google_tag_manager["'+Lc.o+'"].macro('+b+")"};Ce.Kc=De;var Fe=new Ia,Ge=function(a,b){function c(a){var b=N(a),c=xb(b,"protocol"),d=xb(b,"host",!0),e=xb(b,"port"),f=xb(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function He(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(u){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=Da(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,r=Fe.get(q);r||(r=new RegExp(c,p),Fe.set(q,r));n=r.test(b)}catch(u){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ge(b,c)}return!1};var Ie=function(){return!1};function Je(a,b,c,d){return(d||"https:"==z.location.protocol?a:b)+c}function Ke(a,b){for(var c=b||(a instanceof v?new v:new Pa),d=a.U(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof v?(c.get(f)instanceof v||c.set(f,new v),Ke(h,c.get(f))):h instanceof Pa?(c.get(f)instanceof Pa||c.set(f,new Pa),Ke(h,c.get(f))):c.set(f,h)}}return c}function Le(){return Lc.o}function Me(){return(new Date).getTime()}function Ne(a,b){return Wa(Wc(a,b||2))}function Oe(){return Nc}
function Pe(a){return rb('<a href="'+a+'"></a>')[0].href}function Qe(a){return Fa(Va(a))}function Re(a){return null===a?"null":void 0===a?"undefined":a.toString()}function Se(a,b){return Ea(a,b)}function Te(a,b,c){if(!(a instanceof v))return null;for(var d=new Pa,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof Pa&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var Ue=function(){var a=new fb,b=zb();Ie()&&(b.loadJavaScript=ya,b.loadIframe=ya);a.addAll(b);a.addAll({buildSafeUrl:Je,copy:Ke,copyFromDataLayer:Ne,decodeHtmlUrl:Pe,generateRandom:Se,generateUniqueNumber:Sc,getContainerId:Le,getCurrentTime:Me,getEventName:Oe,makeInteger:Qe,makeString:Re,tableToMap:Te});return function(b){return a.get(b)}},We=function(){var a={networkAccess:Ve};return function(b,c,d){return a[b]?a[b](c,d):ya}};
function Ve(a,b){var c=a.url_list||[];return function(a,e){if(c.length){for(var d=0;d<c.length;d++)if(c[d]===e)return;throw b({permissionId:a,debugString:"\nURL = "+e});}}};var Xe,Ze=function(){var a=data.runtime||[],b=data.permissions||{};Xe=new Bb;pc=function(a,b){var c=new Pa,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,Wa(b[d]));var e=Xe.R([a,c]);e instanceof g&&"return"===e.B&&(e=e.getData());return Va(e)};yc=He;Ab(Xe,Ue());for(var c=0;c<a.length;c++){var d=a[c];if(!Ca(d)||3>d.length){if(0==d.length)continue;return}Xe.R(d)}var e=function(a){throw Ye({permissionId:a,debugString:"The requested permission does not exist."});};Xe.oa(e);var f=We(),h;for(h in b)if(b.hasOwnProperty(h)){var k=
b[h],l=!1,m;for(m in k)if(k.hasOwnProperty(m)){l=!0;var n=f(m,k[m],Ye);Xe.Ma(h,m,n)}l||Xe.Ma(h,"default",e)}};function Ye(a){return new jd(a)};var $e=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var af=function(a){return encodeURIComponent(a)},bf=function(a,b){if(!a)return!1;var c=xb(N(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Q=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},cf=function(a,b){Ua(a,b)},df=function(a){return Fa(a)},ef=function(a,b){return Da(a,b)};var ff=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||ob(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},gf=function(a){Mc.hasOwnProperty("autoEventsSettings")||(Mc.autoEventsSettings={});var b=Mc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},hf=function(a,b,c,d){var e=gf(a),f=Ja(e,b,d);e[b]=
c(f)},jf=function(a,b,c){var d=gf(a);return Ja(d,b,c)};var kf=!1;if(B.querySelectorAll)try{var lf=B.querySelectorAll(":root");lf&&1==lf.length&&lf[0]==B.documentElement&&(kf=!0)}catch(a){}var mf=kf;var nf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&!0===c&&(l=decodeURIComponent(l));d.push(l)}}return d},qf=function(a,b,c,d){var e=of(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=pf(e,function(a){return a.wd},b);if(1===e.length)return e[0].id;e=pf(e,function(a){return a.ee},c);return e[0]?e[0].id:void 0}},tf=function(a,b,
c,d,e,f){c=void 0===c?"/":c;var h=d=void 0===d?"auto":d,k=c;if(rf.test(document.location.hostname)||"/"===k&&sf.test(h))return!1;f&&(b=encodeURIComponent(b));var l=b;l&&1200<l.length&&(l=l.substring(0,1200));b=l;var m=a+"="+b+"; path="+c+"; ";void 0!==e&&(m+="expires="+e.toGMTString()+"; ");if("auto"===d){var n=!1,p;a:{var q=[],r=document.location.hostname.split(".");if(4===r.length){var u=r[r.length-1];if(parseInt(u,10).toString()===u){p=["none"];break a}}for(var t=r.length-2;0<=t;t--)q.push(r.slice(t).join("."));
q.push("none");p=q}for(var A=p,D=0;D<A.length&&!n;D++)n=tf(a,b,c,A[D],e);return n}d&&"none"!==d&&(m+="domain="+d+";");var E=document.cookie;document.cookie=m;return E!=document.cookie||0<=nf(a).indexOf(b)};function pf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function of(a,b){for(var c=[],d=nf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),wd:1*k[0]||1,ee:1*k[1]||1}))}}return c}var sf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,rf=/(^|\.)doubleclick\.net$/i;var uf=window,vf=document;var wf=function(){for(var a=uf.navigator.userAgent+(vf.cookie||"")+(vf.referrer||""),b=a.length,c=uf.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Date.now()/1E3)].join(".")},zf=function(a,b,c,d){var e=xf(b);return qf(a,e,yf(c),d)};
function xf(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function yf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1}function Af(a,b){var c=""+xf(a),d=yf(b);1<d&&(c+="-"+d);return c};var Bf=["1"],Cf={},Ef=function(a,b,c){b=b||"auto";c=c||"/";var d=(a||"_gcl")+"_au";if(!Cf[d]&&!Df(d,b,c)){var e=wf(),f=b,h=c,k;k=["1",Af(f,h),e].join(".");tf(d,k,h,f,new Date((new Date).getTime()+7776E6));Df(d,b,c)}};function Df(a,b,c){var d=zf(a,b,c,Bf);d&&(Cf[a]=d);return d};function Ff(){for(var a=Gf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Hf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Gf,If,Jf=function(a){Gf=Gf||Hf();If=If||Ff();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Gf[l],Gf[m],Gf[n],Gf[p])}return b.join("")},Kf=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=If[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Gf=Gf||Hf();If=If||
Ff();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Lf;function Mf(a,b){if(!a||b===B.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Nf=function(){var a=ib("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Of=/(.*?)\*(.*?)\*(.*)/,Pf=/([^?#]+)(\?[^#]*)?(#.*)?/,Qf=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Sf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Jf(String(d))))}var e=b.join("*");return["1",Rf(e),e].join("*")},Rf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:
b),a].join("*"),d;if(!(d=Lf)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Lf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Lf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Uf=function(){return function(a){var b=N(z.location.href),c=b.search.replace("?",""),d=wb(c,"_gl",!0)||"";a.query=Tf(d)||{};var e=xb(b,"fragment").match(Qf);a.fragment=Tf(e&&e[3]||"")||{}}},Tf=function(a){var b;b=void 0===b?3:b;try{if(a){var c=Of.exec(a);if(c&&
"1"===c[1]){var d=c[3],e;a:{for(var f=c[2],h=0;h<b;++h)if(f===Rf(d,h)){e=!0;break a}e=!1}if(e){for(var k={},l=d?d.split("*"):[],m=0;m<l.length;m+=2)k[l[m]]=Kf(l[m+1]);return k}}}}catch(n){}};function Vf(a,b,c){function d(a){var b=a,c=Qf.exec(b),d=b;if(c){var e=c[2],f=c[4];d=c[1];f&&(d=d+e+f)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=Pf.exec(b),f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Wf(a,b,c){for(var d={},e={},f=Nf().decorators,h=0;h<f.length;++h){var k=f[h];(!c||k.forms)&&Mf(k.domains,b)&&(k.fragment?La(e,k.callback()):La(d,k.callback()))}if(Ma(d)){var l=Sf(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,q=0;q<n.length;q++){var r=n[q];if("_gl"===r.name){r.setAttribute("value",l);p=!0;break}}if(!p){var u=B.createElement("input");u.setAttribute("type","hidden");u.setAttribute("name","_gl");u.setAttribute("value",
l);a.appendChild(u)}}else if("post"===m){var t=Vf(l,a.action);tb.test(t)&&(a.action=t)}}}else Xf(l,a,!1)}if(!c&&Ma(e)){var A=Sf(e);Xf(A,a,!0)}}function Xf(a,b,c){if(b.href){var d=Vf(a,b.href,void 0===c?!1:c);tb.test(d)&&(b.href=d)}}
var Yf=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Wf(e,e.hostname,!1)}}catch(h){}},Zf=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=xb(N(b.action),"host");Wf(b,c,!0)}}catch(d){}},$f=function(a,b,c,d){var e=Nf();e.init||(mb(B,"mousedown",Yf),mb(B,"keyup",Yf),mb(B,"submit",Zf),e.init=!0);var f={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};Nf().decorators.push(f)};var ag=/^\w+$/,bg=/^[\w-]+$/,cg=/^~?[\w-]+$/,dg={aw:"_aw",dc:"_dc",gf:"_gf"},fg=function(a){var b=nf(a,B.cookie),c=[];if(!b||0==b.length)return c;for(var d=0;d<b.length;d++){var e=b[d].split(".");3==e.length&&"GCL"==e[0]&&e[1]&&c.push(e[2])}return eg(c)};function gg(a){return a&&"string"==typeof a&&a.match(ag)?a:"_gcl"}
var hg=function(a){if(a){if("string"==typeof a){var b=gg(a);return{dc:b,aw:b,gf:b}}if(a&&"object"==typeof a)return{dc:gg(a.dc),aw:gg(a.aw),gf:gg(a.gf)}}return{dc:"_gcl",aw:"_gcl",gf:"_gcl"}},ig=function(){var a=N(z.location.href),b=xb(a,"query",!1,void 0,"gclid"),c=xb(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=a.hash.replace("#","");b=b||wb(d,"gclid");c=c||wb(d,"gclsrc")}return void 0!==b&&b.match(bg)?{T:b,J:c}:null},jg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)},kg=function(a,b,c,d,e){if(Ca(b)){var f=hg(e);$f(function(){for(var b={},c=0;c<a.length;++c){var d=a[c],e=f[d],n=dg[d];if(e&&n){var p=e+n,q=nf(p,B.cookie);q.length&&(b[p]=q.sort()[q.length-1])}}return b},b,c,d)}},eg=function(a){return a.filter(function(a){return cg.test(a)})};var lg=/^\d+\.fls\.doubleclick\.net$/;function mg(a){var b=N(z.location.href),c=xb(b,"host",!1);if(c&&c.match(lg)){var d=xb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
var ng=function(a){var b=mg("gclaw");if(b)return b.split(".");var c=hg(a);if("_gcl"==c.aw){var d=ig();if(d&&(null==d.J||"aw.ds"==d.J))return[d.T]}return fg(c.aw+"_aw")},og=function(a){var b=mg("gcldc");if(b)return b.split(".");var c=hg(a);if("_gcl"==c.dc){var d=ig();if(d&&("ds"==d.J||"aw.ds"==d.J))return[d.T]}return fg(c.dc+"_dc")},pg=function(){var a=mg("gac");if(a)return decodeURIComponent(a);for(var b=[],c=B.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);
f&&b.push({Ab:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Ab]||(h[b[k].Ab]=[]),h[b[k].Ab].push({timestamp:l[1],T:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],r=0;r<q.length;r++)p.push(q[r].T);p=eg(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")},qg=function(a,b,c){Ef(a,b,c);var d=Cf[(a||"_gcl")+"_au"],e=ig()||{},f=e.T,h=e.J;d&&f&&("aw.ds"===
h||"ds"===h)&&sb("https://adservice.google.com/ddm/regclk"+("?gclid="+f+"&auiddc="+d));};var rg;a:{rg="G"}var sg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GTM:rg},tg=function(a){var b=Lc.o.split("-"),c=b[0].toUpperCase();return(sg[c]||"i")+"9c"+(a&&"GTM"===c?b[1]:"")};var Cg=!!z.MutationObserver,Dg=void 0,Eg=function(a){if(!Dg){var b=function(){var a=B.body;if(a)if(Cg)(new MutationObserver(function(){for(var a=0;a<Dg.length;a++)H(Dg[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;mb(a,"DOMNodeInserted",function(){b||(b=!0,H(function(){b=!1;for(var a=0;a<Dg.length;a++)H(Dg[a])}))})}};Dg=[];B.body?b():H(b)}Dg.push(a)};var Og="www.googletagmanager.com/gtm.js";
var Pg=Og,Qg=function(a,b,c,d){mb(a,b,c,d)},Rg=function(a,b){return z.setTimeout(a,b)},T=function(a,b,c){if(Ie()){b&&H(b)}else return kb(a,b,c)},Sg=function(){return z.location.href},Tg=function(a){return xb(N(a),"fragment")},Ug=function(a,b,c,d,e){return xb(a,b,c,d,e)},U=function(a,b){return Wc(a,b||2)},Vg=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return z["dataLayer"].push(a)},Wg=function(a,
b){z[a]=b},V=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},Xg=function(a,b,c){return nf(a,b,void 0===c?!0:!!c)},Yg=function(a,b,c){var d={prefix:a,path:b,domain:c};d=d||{};var e=hg(d.prefix),f=d.domain||"auto",h=d.path||"/",k=ig();if(null!=k){var l=(new Date).getTime(),m=new Date(l+7776E6),n=Math.round(l/1E3),p=["GCL",n,k.T].join("."),q;q=!0===d.jf?["GCL",n,"~"+k.T].join("."):p;k.J&&"aw.ds"!=k.J||tf(e.aw+"_aw",q,h,f,m,!0);"aw.ds"!=k.J&&"ds"!=k.J||tf(e.dc+"_dc",p,h,f,m,!0);"gf"==
k.J&&tf(e.gf+"_gf",p,h,f,m,!0)}},Zg=function(a,b){var c=Uf(),d=Nf();d.data||(d.data={query:{},fragment:{}},c(d.data));var e={},f=d.data;f&&(La(e,f.query),La(e,f.fragment));for(var h=hg(b),k=0;k<a.length;++k){var l=a[k],m=dg[l];if(void 0!==m){var n=h[l]+m,p=e[n];if(p){var q=Math.min(jg(p),(new Date).getTime()),r;b:{for(var u=q,t=nf(n,B.cookie),A=0;A<t.length;++A)if(jg(t[A])>u){r=!0;break b}r=!1}r||tf(n,p,void 0,void 0,new Date(q+7776E6),!0)}}}},
$g=function(a,b,c,d,e){kg(a,b,c,d,e);},ah=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},Y=function(a,b,c,d){var e=!d&&"http:"==z.location.protocol;e&&(e=2!==bh());return(e?b:a)+c},ch=function(a,b){if(Ie()){
b&&H(b)}else lb(a,b)};
var dh=function(a){var b=0;return b},eh=function(a){},fh=function(a){var b=!1;return b},gh=function(a,b){var c;a:{if(a&&
Ca(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},hh=function(a,b,c,d){hf(a,b,c,d)},ih=function(a,b,c){return jf(a,b,c)},jh=function(a){return!!jf(a,"init",!1)},kh=function(a){gf(a).init=!0};
var bh=function(){var a=Pg;if(Rc){if(0===Rc.toLowerCase().indexOf("https://"))return 2;if(0===Rc.toLowerCase().indexOf("http://"))return 3}a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=B.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};var nh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Pg;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));T(Y("https://","http://",d))};var ph=function(a,b,c){a instanceof Ce.Kc&&(a=a.resolve(Ce.qe(b,c)),b=ya);return{kb:a,V:b}};var qh=function(a,b,c){this.n=a;this.t=b;this.p=c},rh=function(){this.c=1;this.e=[];this.p=null};function sh(a){var b=Mc,c=b.gss=b.gss||{};return c[a]=c[a]||new rh}var th=function(a,b){sh(a).p=b},uh=function(a,b,c){var d=Math.floor((new Date).getTime()/1E3);sh(a).e.push(new qh(b,d,c))},vh=function(a){};var Gh=window,Hh=document,Ih=function(a){var b=Gh._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Gh["ga-disable-"+a])return!0;try{var c=Gh.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=nf("AMP_TOKEN",Hh.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return!1};var Nh=function(a){if(1===sh(a).c){sh(a).c=2;var b=encodeURIComponent(a);kb(("http:"!=z.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Oh=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0})(function(a){var b=a.vtp_gtmOnFailure;T("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=V("google_trackConversion");if(za(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Q(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&(e.value=a.vtp_eventValue),
a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:tg(void 0)})||b()}else b()},b)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=mf?B.querySelectorAll(a.vtp_elementSelector):null;e&&0<e.length&&(b=e[0])}else b=pb(a.vtp_elementId);b&&(c=d?ob(b,d):qb(b));var f=String(b&&c);return f?f.replace(/^\s+|\s+$/g,""):""})}();Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0})(function(){return Nc})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0})(function(a){var b=U("gtm.referrer",1)||B.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ug(N(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):yb(N(String(b))):String(b)})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=ff(b);d.event="gtm.click";Vg(d)}}(function(a){Z.__cl=a;Z.__cl.b="cl";Z.__cl.g=!0})(function(b){if(!jh("cl")){var c=V("document");mb(c,"click",a,!0);kh("cl");var d=jf("cl","legacyTeardown",void 0);d&&d()}H(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0})(function(a){return Ea(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.b="u";Z.__u.g=!0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:U("gtm.url",1))||Sg();var d=b[a("vtp_component")];return d&&"URL"!=d?Ug(N(String(c)),d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0):yb(N(String(c)))})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(a){return function(){if(a.pb&&a.qb>=a.pb)a.lb&&V("self").clearInterval(a.lb);else{a.qb++;var b=(new Date).getTime();Vg({event:a.P,"gtm.timerId":a.lb,"gtm.timerEventNumber":a.qb,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.pb,"gtm.timerStartTime":a.Dc,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.Dc,"gtm.triggers":a.Fe})}}}(function(a){Z.__tl=a;Z.__tl.b="tl";Z.__tl.g=!0})(function(b){H(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={P:b.vtp_eventName,
qb:0,interval:Number(b.vtp_interval),pb:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Fe:String(b.vtp_uniqueTriggerId||"0"),Dc:(new Date).getTime()};c.lb=V("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},f={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;cf(Q(l.vtp_fieldsToSet,"fieldName","value"),e);cf(Q(l.vtp_contentGroup,"index","group"),f);cf(Q(l.vtp_dimension,"index","dimension"),h);cf(Q(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=Ua(l,void 0);b=Ua(b,m)}cf(Q(b.vtp_fieldsToSet,"fieldName","value"),e);cf(Q(b.vtp_contentGroup,
"index","group"),f);cf(Q(b.vtp_dimension,"index","dimension"),h);cf(Q(b.vtp_metric,"index","metric"),k);var n=xd(b.vtp_functionName),p="",q="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(q=b.vtp_trackerName,p=q+"."):(q="gtm"+Sc(),p=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},u={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},t=function(a){var b=[].slice.call(arguments,0);b[0]=p+b[0];n.apply(window,b)},A=function(a,b){return void 0===b?b:a(b)},D=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&t("set",a+c,b[c])},E=function(){},M=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&r[e]||!c&&void 0===r[e])){var f=u[e]?Ga(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},F={name:q};M(e,F,
!0);n("create",b.vtp_trackingId||c.trackingId,F);t("set","&gtm",tg(!0));(function(a,c){void 0!==b[c]&&t("set",a,b[c])})("nonInteraction","vtp_nonInteraction");D("contentGroup",f);D("dimension",h);D("metric",k);var G={};M(e,G,!1)&&t("set",G);var J;b.vtp_enableLinkId&&t("require","linkid","linkid.js");t("set","hitCallback",function(){var a=
e&&e.hitCallback;za(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(t("require","ec","ec.js"),E());var I={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:A(String,b.vtp_eventLabel||c.label),eventValue:A(df,b.vtp_eventValue||c.value)};M(J,I,!1);t("send",I);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(t("require","ec","ec.js"),E());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var S="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");t("require","displayfeatures",void 0,{cookieName:S})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&
(S="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),t("require","adfeatures",{cookieName:S}));J?t("send","pageview",J):t("send","pageview");b.vtp_autoLinkDomains&&yd(p,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var O=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(O="internal/"+O);a=!0;T(Y("https:","http:","//www.google-analytics.com/"+O,e&&e.forceSSL),function(){var a=wd();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Z.__ua=b;Z.__ua.b="ua";Z.__ua.g=!0}();



Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=U(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(Sg()),d=String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",").map(function(a){return l(a)});return!bf(a,d.concat(c))},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return Ug(N(a),"HOST",!0)};(function(a){Z.__aev=a;Z.__aev.b="aev";Z.__aev.g=!0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return U("gtm.element",1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=U("gtm.element",1),m=U("event",1),r=Number(new Date);a===l&&b===m&&c>r-250?k=d:(d=
k=l?qb(l):"",a=l,b=m);c=r;return k||e.vtp_defaultValue;case "URL":var u;a:{var t=String(U("gtm.elementUrl",1)||e.vtp_defaultValue||""),A=N(t);switch(e.vtp_component||"URL"){case "URL":u=t;break a;case "IS_OUTBOUND":u=h(t,e);break a;default:u=xb(A,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return u;case "ATTRIBUTE":var D;if(void 0===e.vtp_attribute)D=f(e);else{var E=U("gtm.element",1);D=ob(E,e.vtp_attribute)||e.vtp_defaultValue||""}return D;default:return f(e)}})}();


Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=V("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(c){var d={google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,google_conversion_value:c.vtp_conversionValue||
0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:tg(void 0)};c.vtp_currencyCode&&(d.google_conversion_currency=c.vtp_currencyCode);c.vtp_orderId&&(d.google_conversion_order_id=c.vtp_orderId);c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=
!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,T("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0})(function(a){var b=a.vtp_input,c=Q(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0})(function(a){H(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=B.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,jb(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){H(h)}}};var b=function(a,b,c){ud(function(){var d,e=Mc;e.postscribe||(e.postscribe=Kc);d=e.postscribe;var f={done:b},m=B.createElement("div");m.style.display="none";m.style.visibility="hidden";B.body.appendChild(m);try{d(m,a,f)}catch(n){H(c)}})};var c=function(d){if(B.body){var e=
d.vtp_gtmOnFailure,f=ph(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.kb,k=f.V;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(B.body,rb(h),k,e)()}else Rg(function(){c(d)},200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0}();



Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0})(function(a){var b=rb('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}C(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.a.lcl=[],function(){function a(){var a=V("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=ah(e,["a","area"]);if(!e)return c.returnValue;var f=c.defaultPrevented||!1===c.returnValue,l=jf("lcl",f?"nv.mwt":"mwt",0),m=ff(e);m.event="gtm.linkClick";if(f){var n=ih("lcl","nv.ids",[]).join(",");if(n)m["gtm.triggers"]=n;else return}else{var p=ih("lcl","ids",[]).join(",");m["gtm.triggers"]=p}if(b(c,e,a)&&!f&&l&&e.href){var q=V((e.target||"_self").substring(1)),
r=!0;if(Vg(m,function(){r&&q&&(q.location.href=e.href)},l))r=!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else Vg(m,function(){},l||2E3);return!0}};mb(a,"click",e,!1);mb(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=yb(N(b.href)),l=yb(N(e.location));return k!==l}return!0}(function(a){Z.__lcl=a;Z.__lcl.b="lcl";
Z.__lcl.g=!0})(function(b){var c=void 0===b.vtp_waitForTags?!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,f=Number(b.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(f,a)};hf("lcl","mwt",k,0);e||hf("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};hh("lcl","ids",l,[]);e||hh("lcl","nv.ids",l,[]);if(!jh("lcl")){a();kh("lcl");var m=jf("lcl","legacyTeardown",void 0);m&&m()}H(b.vtp_gtmOnSuccess)})}();


var Ph={macro:function(a){if(Ce.ab.hasOwnProperty(a))return Ce.ab[a]}};Ph.dataLayer=Xc;Ph.onHtmlSuccess=Ce.Wb(!0);Ph.onHtmlFailure=Ce.Wb(!1);Ph.callback=function(a){Pc.hasOwnProperty(a)&&za(Pc[a])&&Pc[a]();delete Pc[a]};Ph.$c=function(){Mc[Lc.o]=Ph;Qc=Z.a;zc=zc||Ce;Ac=hd};
Ph.Nd=function(){Mc=z.google_tag_manager=z.google_tag_manager||{};if(Mc[Lc.o]){var a=Mc.zones;a&&a.unregisterChild(Lc.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)sc.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)vc.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)uc.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);tc.push(p)}xc=Z;Ze();Ph.$c();Be();pd=!1;qd=0;if("interactive"==
B.readyState&&!B.createEventObject||"complete"==B.readyState)sd();else{mb(B,"DOMContentLoaded",sd);mb(B,"readystatechange",sd);if(B.createEventObject&&B.documentElement.doScroll){var r=!0;try{r=!z.frameElement}catch(t){}r&&td()}mb(z,"load",sd)}pe=!1;"complete"===B.readyState?re():mb(z,"load",re);a:{
if(!Dd)break a;Gd();Jd=void 0;Kd={};Hd={};Md=void 0;Ld={};Id="";Nd=Ed();z.setInterval(Gd,864E5);}}};Ph.Nd();

})()
