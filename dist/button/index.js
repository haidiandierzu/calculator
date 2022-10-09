Component({
    externalClasses: [ "i-class" ],
    properties: {
        type: {
            type: String,
            value: ""
        },
        inline: {
            type: Boolean,
            value: !1
        },
        size: {
            type: String,
            value: ""
        },
        shape: {
            type: String,
            value: "square"
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        loading: {
            type: Boolean,
            value: !1
        },
        long: {
            type: Boolean,
            value: !1
        },
        openType: String,
        appParameter: String,
        hoverStopPropagation: Boolean,
        hoverStartTime: {
            type: Number,
            value: 20
        },
        hoverStayTime: {
            type: Number,
            value: 70
        },
        lang: {
            type: String,
            value: "en"
        },
        sessionFrom: {
            type: String,
            value: ""
        },
        formType: {
            type: String,
            value: ""
        },
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean
    },
    methods: {
        handleTap: function() {
            if (this.data.disabled) return !1;
            this.triggerEvent("click");
        },
        bindgetuserinfo: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.detail, n = void 0 === t ? {} : t;
            this.triggerEvent("getuserinfo", n);
        },
        bindcontact: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.detail, n = void 0 === t ? {} : t;
            this.triggerEvent("contact", n);
        },
        bindgetphonenumber: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.detail, n = void 0 === t ? {} : t;
            this.triggerEvent("getphonenumber", n);
        },
        binderror: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.detail, n = void 0 === t ? {} : t;
            this.triggerEvent("error", n);
        }
    }
});