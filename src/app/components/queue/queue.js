"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var trackInQueue_1 = require('../trackInQueue/trackInQueue');
var _ = require('lodash');
var Queue = (function () {
    function Queue() {
        this.trackList = [];
        this.emitClickedTrack = new core_1.EventEmitter();
    }
    Queue.prototype.receiveTrackObj = function ($event) {
        this.emitClickedTrack.emit($event);
    };
    Queue.prototype.ngOnChanges = function (changes) {
        var trackAdded = changes.inputTrack && changes.inputTrack.currentValue;
        if (trackAdded) {
            if (!this.trackList.reduce(function (acc, track) {
                return acc || Object.keys(track).reduce(function (acc, prop) {
                    if (prop === 'url')
                        return acc || false;
                    console.log(prop, track[prop], trackAdded[prop]);
                    return acc || (track[prop] === trackAdded[prop]);
                }, false);
            }, false)) {
                this.trackList.push(trackAdded);
            }
            else {
                console.log('track was not unique to the queue');
            }
        }
    };
    Queue = __decorate([
        core_1.Component({
            selector: 'queue',
            inputs: ['inputTrack'],
            outputs: ['emitClickedTrack'],
            directives: [trackInQueue_1.TrackInQueue],
            styles: [require('./queue.scss')],
            template: require('./queue.jade')
        }), 
        __metadata('design:paramtypes', [])
    ], Queue);
    return Queue;
})();
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map