"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_audio_1 = require("nativescript-audio");
var MicImplComponent = /** @class */ (function () {
    function MicImplComponent() {
    }
    MicImplComponent.prototype.ngOnInit = function () {
        console.log(nativescript_audio_1.TNSRecorder.CAN_RECORD());
        this.micRecorder = new nativescript_audio_1.TNSRecorder();
    };
    MicImplComponent.prototype.start = function () {
        console.log("Start");
        var aOption = new AudioRecorderOptions();
        aOption.filename = "test.wav";
        this.micRecorder.start(aOption);
    };
    MicImplComponent.prototype.stop = function () {
        console.log("Stop");
        this.micRecorder.stop();
    };
    MicImplComponent.prototype.test = function () {
        console.log("Test");
        console.log("Test " + this.micRecorder.getMeters());
    };
    MicImplComponent = __decorate([
        core_1.Component({
            selector: 'ns-mic-impl',
            templateUrl: './mic-impl.component.html',
            styleUrls: ['./mic-impl.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], MicImplComponent);
    return MicImplComponent;
}());
exports.MicImplComponent = MicImplComponent;
var AudioRecorderOptions = /** @class */ (function () {
    function AudioRecorderOptions() {
    }
    return AudioRecorderOptions;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljLWltcGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWljLWltcGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHlEQUFpRDtBQVVqRDtJQUlFO0lBQWdCLENBQUM7SUFFakIsbUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxnQ0FBVyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUlELGdDQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLElBQUksT0FBTyxHQUF5QixJQUFJLG9CQUFvQixFQUFFLENBQUM7UUFDN0QsT0FBTyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUE7UUFFL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRW5CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBaENVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzs7T0FDVyxnQkFBZ0IsQ0FrQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSw0Q0FBZ0I7QUFvQzdCO0lBQUE7SUFFQSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFROU1JlY29yZGVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWF1ZGlvJztcclxuaW1wb3J0IHsga25vd25Gb2xkZXJzLCBGb2xkZXIsIEZpbGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnMtbWljLWltcGwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9taWMtaW1wbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWljLWltcGwuY29tcG9uZW50LmNzcyddLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNaWNJbXBsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgbWljUmVjb3JkZXI6VE5TUmVjb3JkZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coVE5TUmVjb3JkZXIuQ0FOX1JFQ09SRCgpKTtcclxuXHJcbiAgIHRoaXMubWljUmVjb3JkZXIgPSBuZXcgVE5TUmVjb3JkZXIoKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgc3RhcnQoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRcIilcclxuICAgIGxldCBhT3B0aW9uOiBBdWRpb1JlY29yZGVyT3B0aW9ucyA9IG5ldyBBdWRpb1JlY29yZGVyT3B0aW9ucygpO1xyXG4gICAgICBhT3B0aW9uLmZpbGVuYW1lID0gXCJ0ZXN0LndhdlwiXHJcblxyXG4gICAgdGhpcy5taWNSZWNvcmRlci5zdGFydChhT3B0aW9uKVxyXG4gIH1cclxuXHJcbiAgc3RvcCgpe1xyXG4gICAgY29uc29sZS5sb2coXCJTdG9wXCIpXHJcblxyXG4gICAgdGhpcy5taWNSZWNvcmRlci5zdG9wKCk7XHJcbiAgfVxyXG5cclxuICB0ZXN0KCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRlc3RcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJUZXN0IFwiICsgdGhpcy5taWNSZWNvcmRlci5nZXRNZXRlcnMoKSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgQXVkaW9SZWNvcmRlck9wdGlvbnMge1xyXG4gIGZpbGVuYW1lOiBzdHJpbmc7XHJcbn1cclxuIl19