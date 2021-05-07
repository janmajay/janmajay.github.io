/* global settings app pega sendProactiveNotificationReq */
/* eslint no-eval: 0 */
/* eslint no-underscore-dangle: 0 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = `expires=${d.toGMTString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

function getCookie(cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

const upgradeConfig = function upgradeConfig(cfg) {
  /* Handle upgrade issues */
  if (
    cfg.settings.todo &&
    typeof cfg.settings.todo.hideactivity === 'undefined'
  ) {
    cfg.settings.todo.hideactivity = false;
  }
  if (
    cfg.settings.todo &&
    typeof cfg.settings.todo.hideaccount === 'undefined'
  ) {
    cfg.settings.todo.hideaccount = false;
  }
  if (
    cfg.settings.todo &&
    typeof cfg.settings.todo.hideKPI === 'undefined'
  ) {
    cfg.settings.todo.hideKPI = false;
  }
  if (
    cfg.settings.billpay &&
    typeof cfg.settings.billpay.hidebillpay === 'undefined'
  ) {
    cfg.settings.billpay.hidebillpay = false;
  }
  if (typeof cfg.settings.banner === 'undefined') {
    cfg.settings.banner = {
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      extraparam: '',
      hidebanner: true,
      color: '#CE9840',
    };
  }
  if (typeof cfg.settings.banner.hidebanner_button === 'undefined') {
    cfg.settings.banner.hidebanner_button = false;
  }
  if (typeof cfg.settings.kmhelp === 'undefined') {
    cfg.settings.kmhelp = {
      action: 'display',
      actionparam: 'KMHelpSitePortal',
      objclass: 'Data-Portal',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      extraparam: '',
    };
  }
  if (typeof cfg.settings.kmhelp.username === 'undefined') {
    cfg.settings.kmhelp.username = '';
  }
  if (typeof cfg.settings.kmhelp.password === 'undefined') {
    cfg.settings.kmhelp.password = '';
  }
  if (typeof cfg.settings.offeraction === 'undefined') {
    cfg.settings.offeraction = {
      action: 'createNewWork',
      actionparam: '',
      objclass: '',
      url: '',
      startcase: 'pyStartCase',
      application: '',
      pega_userid: '',
      pega_pwd: '',
      extraparam: '',
    };
  }
  if (typeof cfg.settings.pega_chat.CoBrowseServerURL === 'undefined') {
    cfg.settings.pega_chat.CoBrowseServerURL = '';
  }
  if (typeof cfg.settings.pega_chat.CoBrowseToken === 'undefined') {
    cfg.settings.pega_chat.CoBrowseToken = '';
  }
  if (typeof cfg.settings.pega_chat.ShowAsButton === 'undefined') {
    cfg.settings.pega_chat.ShowAsButton = true;
  }
  if (typeof cfg.settings.pega_chat.ResetLogout === 'undefined') {
    cfg.settings.pega_chat.ResetLogout = false;
  }
  if (
    typeof cfg.settings.pega_chat.EnableProActiveNotification === 'undefined'
  ) {
    cfg.settings.pega_chat.EnableProActiveNotification = false;
  }
  if (
    typeof cfg.settings.pega_chat.ProActiveNotificationDismissTime ===
    'undefined'
  ) {
    cfg.settings.pega_chat.ProActiveNotificationDismissTime = '';
  }
  if (
    typeof cfg.settings.pega_chat.UseLegacyWebChat ===
    'undefined'
  ) {
    cfg.settings.pega_chat.UseLegacyWebChat = true;
  }
  if (
    typeof cfg.settings.pega_chat.DMMURL === 'undefined') {
    cfg.settings.pega_chat.DMMURL = '';
  }
  if (
    typeof cfg.settings.pega_chat.DMMID === 'undefined') {
    cfg.settings.pega_chat.DMMID = 'pega-wm-chat';
  }
  if (typeof cfg.settings.pega_chat.TenantID === 'undefined') {
    cfg.settings.pega_chat.TenantID = '';
  }
  for (const i in cfg.settings.users) {
    if (typeof cfg.settings.users[i].accountID === 'undefined') {
      cfg.settings.users[i].accountID = '';
    }
    if (typeof cfg.settings.users[i].contactID === 'undefined') {
      cfg.settings.users[i].contactID = '';
    }
    if (typeof cfg.settings.users[i].customerID === 'undefined') {
      cfg.settings.users[i].customerID = '';
    }
    if (typeof cfg.settings.users[i].extraparam === 'undefined') {
      cfg.settings.users[i].extraparam = '';
    }
    if (typeof cfg.settings.users[i].billpay === 'undefined') {
      cfg.settings.users[i].billpay = 164.8;
    }
    if (typeof cfg.settings.users[i].otp_send_to === 'undefined') {
      cfg.settings.users[i].otp_send_to = '';
    }
  }
  if (typeof cfg.settings.pega_marketing.homePage === 'undefined') {
    cfg.settings.pega_marketing.homePage = { containerName: 'TopOffers' };
  }
  if (typeof cfg.settings.pega_marketing.accountPage === 'undefined') {
    cfg.settings.pega_marketing.accountPage = { containerName: 'TopOffers' };
  }
  if (typeof cfg.settings.pega_marketing.phonePage === 'undefined') {
    cfg.settings.pega_marketing.phonePage = { containerName: 'TopOffers' };
  }
  if (typeof cfg.settings.pega_marketing.offerPage === 'undefined') {
    cfg.settings.pega_marketing.offerPage = { containerName: 'TopOffers' };
  }
  if (typeof cfg.settings.pega_marketing.homePage.placement === 'undefined') {
    cfg.settings.pega_marketing.homePage.placement = 'Hero,Tile,Tile,Tile';
  }
  if (
    typeof cfg.settings.pega_marketing.accountPage.placement === 'undefined'
  ) {
    cfg.settings.pega_marketing.accountPage.placement = 'Tile';
  }
  if (typeof cfg.settings.pega_marketing.phonePage.placement === 'undefined') {
    cfg.settings.pega_marketing.phonePage.placement = 'Tile';
  }
  if (typeof cfg.settings.pega_marketing.offerPage.placement === 'undefined') {
    cfg.settings.pega_marketing.offerPage.placement = 'Hero,Tile,Tile,Tile';
  }
  if (typeof cfg.settings.pega_marketing.homePage.clickaction === 'undefined') {
    cfg.settings.pega_marketing.homePage.clickaction = 'Mashup';
  }
  if (
    typeof cfg.settings.pega_marketing.accountPage.clickaction === 'undefined'
  ) {
    cfg.settings.pega_marketing.accountPage.clickaction = 'Mashup';
  }
  if (
    typeof cfg.settings.pega_marketing.phonePage.clickaction === 'undefined'
  ) {
    cfg.settings.pega_marketing.phonePage.clickaction = 'Mashup';
  }
  if (
    typeof cfg.settings.pega_marketing.offerPage.clickaction === 'undefined'
  ) {
    cfg.settings.pega_marketing.offerPage.clickaction = 'Mashup';
  }
  if (
    typeof cfg.settings.pega_marketing.replaceHomePageHeader === 'undefined'
  ) {
    cfg.settings.pega_marketing.replaceHomePageHeader = false;
  }
  if (
    typeof cfg.settings.pega_marketing.channel === 'undefined'
  ) {
    cfg.settings.pega_marketing.channel = 'Web';
  }
  if (typeof cfg.settings.pega_marketing.showAIOverlay === 'undefined') {
    cfg.settings.pega_marketing.showAIOverlay = false;
  }
  if (typeof cfg.settings.pega_marketing.enableRTS === 'undefined') {
    cfg.settings.pega_marketing.enableRTS = false;
  }
  if (typeof cfg.settings.pega_marketing.enableClickStream === 'undefined') {
    cfg.settings.pega_marketing.enableClickStream = false;
  }
  if (typeof cfg.settings.pega_marketing.showLoadingIndicator === 'undefined') {
    cfg.settings.pega_marketing.showLoadingIndicator = false;
  }
  if (typeof cfg.settings.pega_marketing.useCaptureByChannel === 'undefined') {
    cfg.settings.pega_marketing.useCaptureByChannel = false;
  }
  if (typeof cfg.settings.pega_marketing.apiLevel === 'undefined') {
    cfg.settings.pega_marketing.apiLevel = 'V2';
  }
  if (typeof cfg.settings.pega_marketing.contextName === 'undefined') {
    cfg.settings.pega_marketing.contextName = 'Customer';
  }
  for (const i in cfg.settings.quicklinks) {
    if (typeof cfg.settings.quicklinks[i].hide === 'undefined') {
      cfg.settings.quicklinks[i].hide = false;
    }
    if (typeof cfg.settings.quicklinks[i].channelid === 'undefined') {
      cfg.settings.quicklinks[i].channelid = '';
    }
    if (typeof cfg.settings.quicklinks[i].tenantid === 'undefined') {
      cfg.settings.quicklinks[i].tenantid = '';
    }
    if (typeof cfg.settings.quicklinks[i].dataretained === 'undefined') {
      cfg.settings.quicklinks[i].dataretained = true;
    }
  }
  /* upgrade channelid */
  if (typeof cfg.settings.billpay.channelid === 'undefined') {
    cfg.settings.billpay.channelid = '';
  }
  if (typeof cfg.settings.banner.channelid === 'undefined') {
    cfg.settings.banner.channelid = '';
  }
  if (typeof cfg.settings.homeheroaction.channelid === 'undefined') {
    cfg.settings.homeheroaction.channelid = '';
  }
  if (typeof cfg.settings.offeraction.channelid === 'undefined') {
    cfg.settings.offeraction.channelid = '';
  }
  if (typeof cfg.settings.kmhelp.channelid === 'undefined') {
    cfg.settings.kmhelp.channelid = '';
  }
  if (typeof cfg.settings.todo.channelid === 'undefined') {
    cfg.settings.todo.channelid = '';
  }
  /* upgrade tenantid */
  if (typeof cfg.settings.billpay.tenantid === 'undefined') {
    cfg.settings.billpay.tenantid = '';
  }
  if (typeof cfg.settings.banner.tenantid === 'undefined') {
    cfg.settings.banner.tenantid = '';
  }
  if (typeof cfg.settings.homeheroaction.tenantid === 'undefined') {
    cfg.settings.homeheroaction.tenantid = '';
  }
  if (typeof cfg.settings.offeraction.tenantid === 'undefined') {
    cfg.settings.offeraction.tenantid = '';
  }
  if (typeof cfg.settings.kmhelp.tenantid === 'undefined') {
    cfg.settings.kmhelp.tenantid = '';
  }
  if (typeof cfg.settings.todo.tenantid === 'undefined') {
    cfg.settings.todo.tenantid = '';
  }

  /* upgrade data retained */
  if (typeof cfg.settings.billpay.dataretained === 'undefined') {
    cfg.settings.billpay.dataretained = true;
  }
  if (typeof cfg.settings.banner.dataretained === 'undefined') {
    cfg.settings.banner.dataretained = true;
  }
  if (typeof cfg.settings.homeheroaction.dataretained === 'undefined') {
    cfg.settings.homeheroaction.dataretained = true;
  }
  if (typeof cfg.settings.offeraction.dataretained === 'undefined') {
    cfg.settings.offeraction.dataretained = true;
  }
  if (typeof cfg.settings.kmhelp.dataretained === 'undefined') {
    cfg.settings.kmhelp.dataretained = true;
  }
  if (typeof cfg.settings.todo.dataretained === 'undefined') {
    cfg.settings.todo.dataretained = true;
  }

  if (typeof cfg.settings.general === 'undefined') {
    cfg.settings.general = {
      ga: {
        enabled: true,
        trackingid: 'G-RJ6VT2L72P',
      },
      auth_2fa: {
        enabled: false,
        sendMode: 'email',
        url: '',
        emailSettings: {
          correspondenceName: 'pyDefaultOTPCorr',
          emailAccount: 'Default',
          subject: 'New OTP Request',
          validateMaxAge: 'false',
        },
        smsSettings: {
          from: 'Pega',
          account: 'Default',
          message: 'Uplus OTP login code',
          validateMaxAge: 'false',
        },
      },
    };
  }
  /* New support for dx api */
  if (typeof cfg.settings.general.connection === 'undefined') {
    cfg.settings.general.connection = {
      type: 'mashup',
      authtype: 'basic',
      clientid: '',
      clientsecret: '',
      webportal: '',
    };
  }
  return cfg;
};

// Directive for dealing out with clicking outside of an overlay
let handleOutsideClick;
Vue.directive('clickoutside', {
  bind(el, binding, vnode) {
    handleOutsideClick = (e) => {
      e.stopPropagation();
      const { handler } = binding.value;
      if (!el.contains(e.target)) {
        vnode.context[handler](e);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
  },
  unbind() {
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('touchstart', handleOutsideClick);
  },
});

Vue.use(VueI18n);

let userLang = navigator.language || navigator.userLanguage;
if (userLang.length > 2) userLang = userLang.substring(0, 1);

let i18nTmp;
let mainconfigTmp;

if (typeof settings === 'undefined') {
  window.location.href = `${window.location.href}/`;
} else {
  if (settings.i18n.defaultlocale === 'browser') {
    settings.i18n.defaultlocale = userLang;
  }

  const messages = {};
  const dateTimeFormats = {};
  const numberFormats = {};

  let isDefaultLocaleLoaded = false;
  for (const i in settings.i18n.languages) {
    const lang = settings.i18n.languages[i];
    messages[lang] = {
      message: eval(`lang${lang.toUpperCase()}`),
    };
    dateTimeFormats[lang] = eval(`dateFormat${lang.toUpperCase()}`);
    numberFormats[lang] = eval(`numberFormat${lang.toUpperCase()}`);
    /* Check if the default locale is available in the list of languages - if not, then select the first one */
    if (lang === settings.i18n.defaultlocale) isDefaultLocaleLoaded = true;
  }
  if (!isDefaultLocaleLoaded) {
    [settings.i18n.defaultlocale] = settings.i18n.languages;
  }

  i18nTmp = new VueI18n({
    locale: settings.i18n.defaultlocale,
    messages,
    dateTimeFormats,
    numberFormats,
  });

  /* Detect if this is a phone */
  let isMobilePhone = false;
  if (
    /iPhone/.test(navigator.userAgent) ||
    /Android/.test(navigator.userAgent)
  ) {
    isMobilePhone = true;
  }

  if (isMobilePhone) {
    document.documentElement.className = 'phone';
  }

  mainconfigTmp = {
    settings,
    app,
    isMobilePhone,
    offerURL: '',
    offerIndex: 0,
    homeHeroImg: '',
    currentPage: '',
    previousPage: '',
    intent: '',
    reloadOffer: 1,
    reloadMashup: 1,
    reloadAccountMashup: 1,
    isAuthenticated: false,
    isSidePanelVisible: false,
    isDeepLink: false,
    deepLinkExtraParam: {},
    phonePageName: '',
    userId: -1,
    quickLinkId: -1,
    viewBill: -1,
    viewBanner: -1,
    toDo: -1,
    viewKMHelp: -1,
    KMArticleID: '',
    logoutURL: {},
    homeHeroAction: -1,
    offerAction: -1,
    isRTSEnabled: false,
    currentLocale: settings.i18n.defaultlocale,
    mainTitle: document.title,
  };
  // Retrieve the object from storage
  const retrievedObject = localStorage.getItem(
    `config_${mainconfigTmp.app.industry}`,
  );
  if (retrievedObject != null) {
    const tmpObj = JSON.parse(retrievedObject);
    if (tmpObj.settings) {
      mainconfigTmp.settings = tmpObj.settings;
    }
  }

  mainconfigTmp = upgradeConfig(mainconfigTmp);

  if (mainconfigTmp.settings.pega_chat.ShowAsButton) {
    document.documentElement.className = `${document.documentElement.className} chat-button`;
  }

  /* Read the current state */
  if (window.history && window.history.state !== null) {
    const currentState = window.history.state;
    if (
      mainconfigTmp.userId === -1 &&
      currentState !== null &&
      typeof currentState.userId !== 'undefined'
    ) {
      if (currentState.userId !== -1) {
        mainconfigTmp.isAuthenticated = true;
      }
      mainconfigTmp.userId = currentState.userId;
      if (typeof currentState.quickLinkId !== 'undefined') {
        mainconfigTmp.quickLinkId = currentState.quickLinkId;
        if (isMobilePhone) {
          mainconfigTmp.phonePageName = 'help';
        }
        window.history.replaceState(
          {
            userId: mainconfigTmp.userId,
            quickLinkId: mainconfigTmp.quickLinkId,
          },
          '',
          `quicklink${mainconfigTmp.quickLinkId}`,
        );
      } else if (isMobilePhone) {
        if (typeof currentState.page !== 'undefined') {
          mainconfigTmp.phonePageName = currentState.page;
        } else {
          mainconfigTmp.phonePageName = window.location.pathname.substring(
            window.location.pathname.lastIndexOf('/') + 1,
          );
        }
        window.history.replaceState(
          mainconfigTmp.isAuthenticated ? {} : { userId: mainconfigTmp.userId },
          '',
          mainconfigTmp.phonePageName,
        );
      } else {
        window.history.replaceState(
          { userId: mainconfigTmp.userId },
          '',
          currentState.page,
        );
      }
    } else if (window.location.pathname.indexOf('/heroaction') !== -1) {
      if (isMobilePhone) {
        mainconfigTmp.phonePageName = 'heroaction';
      }
      mainconfigTmp.homeHeroAction = 1;
      window.history.replaceState({}, '', 'heroaction');
    } else if (isMobilePhone) {
      if (typeof currentState.page !== 'undefined') {
        mainconfigTmp.phonePageName = currentState.page;
      } else {
        mainconfigTmp.phonePageName = window.location.pathname.substring(
          window.location.pathname.lastIndexOf('/') + 1,
        );
      }
      window.history.replaceState({}, '', mainconfigTmp.phonePageName);
    }
  }

  if (mainconfigTmp.isAuthenticated === false && getCookie('UserName') !== '') {
    const username = getCookie('UserName');
    for (const i in mainconfigTmp.settings.users) {
      if (mainconfigTmp.settings.users[i].username === username) {
        mainconfigTmp.isAuthenticated = true;
        mainconfigTmp.userId = i;
        break;
      }
    }
  }

  /* Check if user is passed as parameter */
  const queryDict = {};
  window.location.search
    .substr(1)
    .split('&')
    .forEach((item) => {
      queryDict[item.split('=')[0]] = item.split('=')[1];
    });
  if (queryDict.username || queryDict.pega_userid) {
    for (const i in mainconfigTmp.settings.users) {
      if (
        (typeof queryDict.pega_userid !== 'undefined' &&
          mainconfigTmp.settings.users[i].pega_userid ===
            queryDict.pega_userid) ||
        (typeof queryDict.username !== 'undefined' &&
          mainconfigTmp.settings.users[i].username === queryDict.username)
      ) {
        mainconfigTmp.isAuthenticated = true;
        mainconfigTmp.userId = i;
        mainconfigTmp.isDeepLink = true;
        break;
      }
    }

    /* check if quicklinkclass is passed as parameter */
    if (queryDict.quicklinkclass) {
      for (const i in mainconfigTmp.settings.quicklinks) {
        if (
          mainconfigTmp.settings.quicklinks[i].objclass ===
          queryDict.quicklinkclass
        ) {
          mainconfigTmp.quickLinkId = i;
          mainconfigTmp.deepLinkExtraParam = queryDict;
          delete mainconfigTmp.deepLinkExtraParam.quicklinkclass;
          delete mainconfigTmp.deepLinkExtraParam.username;
          delete mainconfigTmp.deepLinkExtraParam.pega_userid;
          if (isMobilePhone) {
            mainconfigTmp.phonePageName = 'help';
          }
          window.history.replaceState(
            { userId: mainconfigTmp.userId },
            '',
            `quicklink${mainconfigTmp.quickLinkId}`,
          );
          break;
        }
      }
    }
    /* check if todoclass is passed as parameter */
    if (mainconfigTmp.settings.todo.objclass === queryDict.todoclass) {
      mainconfigTmp.deepLinkExtraParam = queryDict;
      delete mainconfigTmp.deepLinkExtraParam.todoclass;
      delete mainconfigTmp.deepLinkExtraParam.username;
      delete mainconfigTmp.deepLinkExtraParam.pega_userid;
      if (isMobilePhone) {
        mainconfigTmp.phonePageName = 'account';
      }
      window.history.replaceState(
        { userId: mainconfigTmp.userId },
        '',
        'account',
      );
    }
    if (queryDict.viewBill) {
      mainconfigTmp.viewBill = 1;
      mainconfigTmp.deepLinkExtraParam = queryDict;
      delete mainconfigTmp.deepLinkExtraParam.viewBill;
      delete mainconfigTmp.deepLinkExtraParam.username;
      delete mainconfigTmp.deepLinkExtraParam.pega_userid;
    }
    if (queryDict.viewBanner) {
      mainconfigTmp.viewBanner = 1;
      mainconfigTmp.deepLinkExtraParam = queryDict;
      delete mainconfigTmp.deepLinkExtraParam.viewBanner;
      delete mainconfigTmp.deepLinkExtraParam.username;
      delete mainconfigTmp.deepLinkExtraParam.pega_userid;
    }
    if (queryDict.viewKMHelp) {
      mainconfigTmp.viewKMHelp = 1;
      mainconfigTmp.deepLinkExtraParam = queryDict;
      delete mainconfigTmp.deepLinkExtraParam.viewKMHelp;
      delete mainconfigTmp.deepLinkExtraParam.username;
      delete mainconfigTmp.deepLinkExtraParam.pega_userid;
    }
  }
  if (queryDict.homeHeroAction) {
    mainconfigTmp.homeHeroAction = 1;
    if (isMobilePhone) {
      mainconfigTmp.phonePageName = 'heroaction';
    }
    mainconfigTmp.isDeepLink = true;
    mainconfigTmp.deepLinkExtraParam = queryDict;
    delete mainconfigTmp.deepLinkExtraParam.homeHeroAction;
  }
  if (queryDict.offerAction) {
    mainconfigTmp.offerAction = 1;
    if (isMobilePhone) {
      mainconfigTmp.phonePageName = 'offer';
    }
    mainconfigTmp.isDeepLink = true;
    mainconfigTmp.deepLinkExtraParam = queryDict;
    delete mainconfigTmp.deepLinkExtraParam.offerAction;
  }

  /* initialize the object needed by PegaHelper */
  window.PegaCSWSS = {
    Cobrowse: {
      ServerURL: mainconfigTmp.settings.pega_chat.CoBrowseServerURL,
      Token: mainconfigTmp.settings.pega_chat.CoBrowseToken,
    },
    WCBConfigName: mainconfigTmp.settings.pega_chat.WCBConfigName,
    WebChatBotID: mainconfigTmp.settings.pega_chat.WebChatBotID,
    ApplicationName: mainconfigTmp.settings.pega_chat.ApplicationName,
    MashupURL: mainconfigTmp.settings.pega_chat.MashupURL,
    ShowAsButton: mainconfigTmp.settings.pega_chat.ShowAsButton,
    TenantID: mainconfigTmp.settings.pega_chat.TenantID,
    MarketingHost: mainconfigTmp.settings.pega_marketing.Host,
    MarketingPort: mainconfigTmp.settings.pega_marketing.Port,
    EnableProActiveNotification:
      mainconfigTmp.settings.pega_chat.EnableProActiveNotification,
    ProActiveNotificationDismissTime:
      mainconfigTmp.settings.pega_chat.ProActiveNotificationDismissTime,
    ContactID: '',
    AccountNumber: '',
    UserName: '',
    ExtraParams: {},
  };
  if (mainconfigTmp.userId !== -1) {
    const u = mainconfigTmp.settings.users[mainconfigTmp.userId];
    window.PegaCSWSS.ContactID = u.contactID;
    window.PegaCSWSS.AccountNumber = u.accountID;
    window.PegaCSWSS.UserName = u.username;
    if (typeof u.extraparam !== 'undefined' && u.extraparam !== '') {
      u.extraparam.split(',').forEach((item) => {
        const values = item.split('=');
        if (values.length === 2) {
          window.PegaCSWSS.ExtraParams[values[0].trim()] = values[1].trim();
        }
      });
    }
  }
  setCookie('ContactID', window.PegaCSWSS.ContactID, 30);
  setCookie('AccountNumber', window.PegaCSWSS.AccountNumber, 30);
  setCookie('UserName', window.PegaCSWSS.UserName, 30);

  // We don't show chat and CoBrowse on the settings page
  if (
    typeof mainconfigTmp.settings.pega_chat !== 'undefined' &&
    mainconfigTmp.settings.pega_chat.MashupURL !== '' &&
    mainconfigTmp.settings.pega_chat.UseLegacyWebChat === true &&
    `${window.location}`.indexOf('/settings.html') === -1
  ) {
    const scriptLoad = document.createElement('script');
    scriptLoad.onload = function onloadJquery() {
      const scriptLoad2 = document.createElement('script');
      scriptLoad2.setAttribute('src', '../js/PegaHelper.js');
      document.head.appendChild(scriptLoad2);
      const scriptLoad1 = document.createElement('script');
      scriptLoad1.setAttribute('src', '../js/PegaHelperExtension.js');
      document.head.appendChild(scriptLoad1);
    };
    scriptLoad.setAttribute('src', '../js/jquery-min.js');
    document.head.appendChild(scriptLoad);
  }

  if (
    typeof mainconfigTmp.settings.pega_chat !== 'undefined' &&
    mainconfigTmp.settings.pega_chat.DMMURL !== '' &&
    mainconfigTmp.settings.pega_chat.DMMID !== '' &&
    mainconfigTmp.settings.pega_chat.UseLegacyWebChat === false &&
    `${window.location}`.indexOf('/settings.html') === -1
  ) {
    const scriptLoad = document.createElement('script');
    scriptLoad.setAttribute('id', mainconfigTmp.settings.pega_chat.DMMID);
    scriptLoad.setAttribute('src', mainconfigTmp.settings.pega_chat.DMMURL);
    document.head.appendChild(scriptLoad);

    window.fireflyAPI = {};
    if (mainconfigTmp.settings.pega_chat.CoBrowseServerURL !== '' && mainconfigTmp.settings.pega_chat.CoBrowseToken !== '') {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      window.fireflyAPI.token = mainconfigTmp.settings.pega_chat.CoBrowseToken;
      window.fireflyAPI.serverHostUrl = mainconfigTmp.settings.pega_chat.CoBrowseServerURL;
      script.src = `${mainconfigTmp.settings.pega_chat.CoBrowseServerURL}/cobrowse/loadScripts`;
      script.async = true;
      document.head.appendChild(script);
    }
  }

  // Handle the back button support on mobile
  // The example iframe will just do a parent.pegaMashupNavigateBack() but the
  // real Mashup app will have to use the postMessage() api.
  if (isMobilePhone) {
    window.pegaMashupNavigateBack = function pegaMashupNavigateBack() {
      const elems = document.getElementsByClassName('pi-caret-left');
      if (elems.length > 0) {
        elems[0].click();
      }
    };
  }
}

const mainconfig = mainconfigTmp;
const i18n = i18nTmp;

window.addEventListener('popstate', () => {
  mainconfig.quickLinkId = -1;
  mainconfig.currentPage = window.location.pathname.substring(
    window.location.pathname.lastIndexOf('/') + 1,
  );
  if (mainconfig.currentPage === 'heroaction') {
    mainconfig.homeHeroAction = 1;
  }
  if (mainconfig.currentPage.indexOf('offer') === 0 && mainconfig.currentPage.indexOf('offer.html') !== 0) {
    mainconfig.offerIndex = parseInt(mainconfig.currentPage.substring(5).replace('.html', ''), 10);
  }
  if (mainconfig.currentPage.indexOf('index.html') === 0 || mainconfig.currentPage.indexOf('account') === 0) {
    mainconfig.viewBill = -1;
    mainconfig.viewBanner = -1;
    mainconfig.homeHeroAction = -1;
    mainconfig.offerAction = -1;
    mainconfig.toDo = -1;
    mainconfig.viewKMHelp = -1;
    mainconfig.offerURL = '';
  }
  if (mainconfig.currentPage.indexOf('index.html') === 0) {
    mainconfig.isAuthenticated = false;
  }
  if (mainconfig.currentPage.indexOf('account') === 0) {
    mainconfig.isAuthenticated = true;
  }
});

const updatePegaChat = function updatePegaChat(u) {
  /* Update PegaChat and pass the correct ContactId, AccountNumber and username */
  let el = document.querySelector(
    "[data-pega-gadgetname='OnlineHelp'] > iframe",
  );
  if (el != null && typeof el.src === 'string') {
    let updatedSrc = `${el.src}&ContactId=${u.contactID}&AccountNumber=${u.accountID}&username=${u.username}`;
    if (typeof u.extraparam !== 'undefined' && u.extraparam !== '') {
      u.extraparam.split(',').forEach((item) => {
        const values = item.split('=');
        if (values.length === 2) {
          updatedSrc += `&${values[0].trim()}=${values[1].trim()}`;
        }
      });
    }
    if (updatedSrc.indexOf('timestamp') > -1) {
      updatedSrc = updatedSrc.replace(
        /timestamp=[^&]+/,
        `timestamp=${Date.now()}`,
      );
    } else {
      // Else we will append the timestamp
      updatedSrc += `&timestamp=${Date.now()}`;
    }
    // updatedSrc = encodeURI(updatedSrc);
    const parentNode = el.parentNode;
    el.remove();
    el.src = updatedSrc;
    parentNode.appendChild(el);
  }
  window.PegaCSWSS.ContactID = u.contactID;
  window.PegaCSWSS.AccountNumber = u.accountID;
  window.PegaCSWSS.UserName = u.username;

  setCookie('ContactID', window.PegaCSWSS.ContactID, 30);
  setCookie('AccountNumber', window.PegaCSWSS.AccountNumber, 30);
  setCookie('UserName', window.PegaCSWSS.UserName, 30);

  if (typeof u.extraparam !== 'undefined' && u.extraparam !== '') {
    u.extraparam.split(',').forEach((item) => {
      const values = item.split('=');
      if (values.length === 2) {
        window.PegaCSWSS.ExtraParams[values[0].trim()] = values[1].trim();
      }
    });
  }
  el = document.querySelector("[data-pega-gadgetname='OnlineHelp']");
  if (el != null) {
    /* We need to set the extra parameters manually */
    const elOnlineHelp = pega.web.mgr._getGadgetByID('OnlineHelp');
    if (elOnlineHelp && elOnlineHelp._oDivAttrs) {
      for (const val in window.PegaCSWSS.ExtraParams) {
        elOnlineHelp._oDivAttrs.params[val] = window.PegaCSWSS.ExtraParams[val];
      }
    }
  }
  /* We need to call the proactive notification since PegaCSWSS.ContactID has changed */
  if (typeof sendProactiveNotificationReq === 'function') {
    sendProactiveNotificationReq();
  }
};

export {
  mainconfig,
  i18n,
  upgradeConfig,
  updatePegaChat,
  setCookie,
};
