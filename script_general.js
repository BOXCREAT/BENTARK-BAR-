(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"definitions": [{"playbackBarHeadShadowOpacity":0.7,"class":"ViewerArea","subtitlesVerticalAlign":"bottom","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","toolTipBorderRadius":3,"width":"100%","toolTipShadowOpacity":1,"subtitlesTextShadowHorizontalLength":1,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"id":"MainViewer","playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","shadow":false,"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","playbackBarOpacity":1,"progressBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","progressRight":0,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","transitionMode":"blending","playbackBarHeadShadow":true,"progressOpacity":1,"paddingLeft":0,"progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"subtitlesTop":0,"translationTransitionDuration":1000,"progressBackgroundColorDirection":"vertical","playbackBarBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","paddingRight":0,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"playbackBarHeadShadowVerticalLength":0,"progressBorderColor":"#000000","doubleClickAction":"toggle_fullscreen","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"borderSize":0,"playbackBarProgressBorderColor":"#000000","progressBottom":0,"subtitlesHorizontalAlign":"center","progressBarOpacity":1,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderColor":"#FFFFFF","subtitlesTextDecoration":"none","toolTipPaddingRight":6,"progressHeight":10,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadOpacity":1,"toolTipShadowVerticalLength":0,"progressBorderSize":0,"height":"100%","toolTipFontStyle":"normal","toolTipShadowSpread":0,"paddingTop":0,"minHeight":50,"progressBarBorderRadius":0,"playbackBarHeadShadowHorizontalLength":0,"transitionDuration":500,"minWidth":100,"progressBarBorderSize":0,"paddingBottom":0,"propagateClick":false,"toolTipFontColor":"#606060","toolTipPaddingBottom":4,"subtitlesOpacity":1,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"playbackBarLeft":0,"progressBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontWeight":"normal","firstTransitionDuration":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBorderSize":0,"playbackBarProgressBorderRadius":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"progressLeft":0,"toolTipShadowColor":"#333333","vrPointerSelectionTime":2000,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBottom":50,"vrPointerSelectionColor":"#FF6600","subtitlesPaddingRight":5,"playbackBarHeadBorderRadius":0,"subtitlesShadow":false,"toolTipPaddingTop":4,"toolTipBorderSize":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"toolTipOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","borderRadius":0,"toolTipShadowHorizontalLength":0,"toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":5,"subtitlesEnabled":true,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0},{"items":[{"camera":"this.panorama_D4FA8A67_DF45_281C_41DE_B75B212B4F50_camera","media":"this.panorama_D4FA8A67_DF45_281C_41DE_B75B212B4F50","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"thumbnailUrl":"media/panorama_D4FA8A67_DF45_281C_41DE_B75B212B4F50_t.jpg","id":"panorama_D4FA8A67_DF45_281C_41DE_B75B212B4F50","hfovMax":130,"class":"Panorama","hfov":360,"label":trans('panorama_D4FA8A67_DF45_281C_41DE_B75B212B4F50.label'),"frames":[{"cube":{"levels":[{"width":24576,"rowCount":8,"colCount":48,"class":"TiledImageResourceLevel","height":4096,"tags":"ondemand","url":"media/panorama_D4FA8A67_DF45_281C_41DE_B75B212B4F50_0/{face}/0/{row}_{column}.jpg"},{"width":12288,"rowCount":4,"colCount":24,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","url":"media/panorama_D4FA8A67_DF45_281C_41DE_B75B212B4F50_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_D4FA8A67_DF45_281C_41DE_B75B212B4F50_0/{face}/2/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_D4FA8A67_DF45_281C_41DE_B75B212B4F50_0/{face}/3/{row}_{column}.jpg"},{"width":12288,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","url":"media/panorama_D4FA8A67_DF45_281C_41DE_B75B212B4F50_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_D4FA8A67_DF45_281C_41DE_B75B212B4F50_t.jpg"}],"partial":false,"pitch":0,"data":{"label":"BENTARK BAR "},"vfov":180},{"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","gyroscopeVerticalDraggingEnabled":true,"aaEnabled":true,"class":"PanoramaPlayer","zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_D5D174CD_DF45_182C_41EB_466D4C6BAD45","hoverFactor":0,"id":"panorama_D4FA8A67_DF45_281C_41DE_B75B212B4F50_camera"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_D5D174CD_DF45_182C_41EB_466D4C6BAD45"}],"class":"Player","data":{"name":"Player605","defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1}},"gap":10,"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":0.75,"width":"100%","paddingTop":0,"minHeight":20,"id":"rootPlayer","mouseWheelEnabled":true,"horizontalAlign":"left","minWidth":20,"paddingBottom":0,"propagateClick":false,"overflow":"hidden","shadow":false,"desktopMipmappingEnabled":false,"scrollBarMargin":2,"verticalAlign":"top","defaultVRPointer":"laser","mobileMipmappingEnabled":false,"children":["this.MainViewer"],"paddingLeft":0,"contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#FFFFFF"],"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"paddingRight":0,"scripts":{"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"translate":TDV.Tour.Script.translate,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getKey":TDV.Tour.Script.getKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaByName":TDV.Tour.Script.getMediaByName,"showWindow":TDV.Tour.Script.showWindow,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"openLink":TDV.Tour.Script.openLink,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"clone":TDV.Tour.Script.clone,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"init":TDV.Tour.Script.init,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"historyGoBack":TDV.Tour.Script.historyGoBack,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMapLocation":TDV.Tour.Script.setMapLocation,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"historyGoForward":TDV.Tour.Script.historyGoForward,"downloadFile":TDV.Tour.Script.downloadFile,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMainViewer":TDV.Tour.Script.getMainViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowScore":TDV.Tour.Script.quizShowScore,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"shareSocial":TDV.Tour.Script.shareSocial,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"resumePlayers":TDV.Tour.Script.resumePlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"textToSpeech":TDV.Tour.Script.textToSpeech,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getOverlays":TDV.Tour.Script.getOverlays,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setLocale":TDV.Tour.Script.setLocale,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"registerKey":TDV.Tour.Script.registerKey,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentByName":TDV.Tour.Script.getComponentByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPixels":TDV.Tour.Script.getPixels,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizStart":TDV.Tour.Script.quizStart,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"cloneCamera":TDV.Tour.Script.cloneCamera,"existsKey":TDV.Tour.Script.existsKey,"quizFinish":TDV.Tour.Script.quizFinish,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupImage":TDV.Tour.Script.showPopupImage,"mixObject":TDV.Tour.Script.mixObject,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setValue":TDV.Tour.Script.setValue,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"initQuiz":TDV.Tour.Script.initQuiz,"playAudioList":TDV.Tour.Script.playAudioList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex},"scrollBarColor":"#000000","downloadEnabled":false,"borderSize":0,"start":"this.init()","layout":"absolute","backgroundColorDirection":"vertical"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Tue Jul 23 2024