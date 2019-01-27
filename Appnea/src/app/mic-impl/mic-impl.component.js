"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_audio_1 = require("nativescript-audio");
var file_system_1 = require("tns-core-modules/file-system");
var observable_1 = require("tns-core-modules/data/observable");
var application_1 = require("tns-core-modules/application");
var MicImplComponent = /** @class */ (function () {
    function MicImplComponent() {
        this.vm = new observable_1.Observable();
    }
    MicImplComponent.prototype.ngOnInit = function () {
        console.log(nativescript_audio_1.TNSRecorder.CAN_RECORD());
        this.micRecorder = new nativescript_audio_1.TNSRecorder();
    };
    MicImplComponent.prototype.make = function () {
        if (application_1.android) {
            console.log("We are running on Android device!");
            var appContext = application_1.android.context;
        }
        var documents = file_system_1.knownFolders.documents();
        var folder = documents.getFolder("TestFolder");
        var file = folder.getFile("test" + ".txt");
        console.log("Make", folder, file);
        file.writeText('Hello')
            .then(function () {
            file.readText()
                .then(function (res) {
                console.log(res);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    MicImplComponent.prototype.start = function () {
        console.log("Start");
        var documents = file_system_1.knownFolders.documents();
        var folder = documents.getFolder("TestFolder");
        var file = documents.getFile("microphone" + ".wav");
        console.log(file.path);
        this.micRecorder.requestRecordPermission().then(function () {
            if (nativescript_audio_1.TNSRecorder.CAN_RECORD()) {
                var recorder = new nativescript_audio_1.TNSRecorder();
                var data_1 = new observable_1.Observable();
                var recorderOptions = {
                    filename: file.path,
                    infoCallback: function () {
                        console.log('infoCallback');
                    },
                    errorCallback: function () {
                        console.log('errorCallback');
                        alert('Error recording.');
                    }
                };
                console.log('RECORDER OPTIONS: ' + recorderOptions);
                recorder.start(recorderOptions).then(function (res) {
                    data_1.set('isRecording', true);
                }, function (err) {
                    data_1.set('isRecording', false);
                    console.log('ERROR: ' + err);
                });
            }
            // this.micRecorder.start(recorderOptions)
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljLWltcGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWljLWltcGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHlEQUFpRDtBQUNqRCw0REFBMEU7QUFDMUUsK0RBQThEO0FBRzlELDREQUFvRjtBQVNwRjtJQU1FO1FBSEEsT0FBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBR04sQ0FBQztJQUVqQixtQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGdDQUFXLEVBQUUsQ0FBQztJQUV0QyxDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNFLElBQUkscUJBQVUsRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNqRCxJQUFJLFVBQVUsR0FBRyxxQkFBVSxDQUFDLE9BQU8sQ0FBQztTQUVyQztRQUVELElBQU0sU0FBUyxHQUFXLDBCQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkQsSUFBTSxNQUFNLEdBQVcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6RCxJQUFNLElBQUksR0FBUyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztRQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7YUFDbEIsSUFBSSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsRUFBRTtpQkFDVixJQUFJLENBQUMsVUFBQyxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxnQ0FBSyxHQUFMO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUVwQixJQUFNLFNBQVMsR0FBVywwQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25ELElBQU0sTUFBTSxHQUFXLFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekQsSUFBTSxJQUFJLEdBQVMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLElBQUksQ0FBQztZQUM5QyxJQUFJLGdDQUFXLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBRTVCLElBQUksUUFBUSxHQUFHLElBQUksZ0NBQVcsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLE1BQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtnQkFFM0IsSUFBSSxlQUFlLEdBQUc7b0JBRXBCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDbkIsWUFBWSxFQUFFO3dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzlCLENBQUM7b0JBQ0QsYUFBYSxFQUFFO3dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQzdCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUM1QixDQUFDO2lCQUNGLENBQUM7Z0JBRUosT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxlQUFlLENBQUMsQ0FBQztnQkFDcEQsUUFBUSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO29CQUM5QyxNQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFFLFVBQVUsR0FBRztvQkFDWixNQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxDQUFBO2FBQ0Q7WUFFRiwwQ0FBMEM7UUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUEzRlUsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDOztPQUNXLGdCQUFnQixDQTZGNUI7SUFBRCx1QkFBQztDQUFBLEFBN0ZELElBNkZDO0FBN0ZZLDRDQUFnQjtBQStGN0I7SUFBQTtJQUVBLENBQUM7SUFBRCwyQkFBQztBQUFELENBQUMsQUFGRCxJQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVE5TUmVjb3JkZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYXVkaW8nO1xyXG5pbXBvcnQgeyBrbm93bkZvbGRlcnMsIEZvbGRlciwgRmlsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgUGVybWlzc2lvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiO1xyXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XHJcbmltcG9ydCB7IGFuZHJvaWQgYXMgYW5kcm9pZEFwcCwgaW9zIGFzIGlvc0FwcCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICducy1taWMtaW1wbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21pYy1pbXBsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9taWMtaW1wbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1pY0ltcGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBtaWNSZWNvcmRlcjpUTlNSZWNvcmRlcjtcclxuICB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFROU1JlY29yZGVyLkNBTl9SRUNPUkQoKSk7XHJcblxyXG4gICB0aGlzLm1pY1JlY29yZGVyID0gbmV3IFROU1JlY29yZGVyKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgbWFrZSgpIHtcclxuICAgIGlmIChhbmRyb2lkQXBwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiV2UgYXJlIHJ1bm5pbmcgb24gQW5kcm9pZCBkZXZpY2UhXCIpO1xyXG4gICAgICBsZXQgYXBwQ29udGV4dCA9IGFuZHJvaWRBcHAuY29udGV4dDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZG9jdW1lbnRzOiBGb2xkZXIgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XHJcbiAgICBjb25zdCBmb2xkZXI6IEZvbGRlciA9IGRvY3VtZW50cy5nZXRGb2xkZXIoXCJUZXN0Rm9sZGVyXCIpO1xyXG4gICAgY29uc3QgZmlsZTogRmlsZSA9IGZvbGRlci5nZXRGaWxlKGB0ZXN0YCArIGAudHh0YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJNYWtlXCIsIGZvbGRlciwgZmlsZSApO1xyXG5cclxuICAgIGZpbGUud3JpdGVUZXh0KCdIZWxsbycpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBmaWxlLnJlYWRUZXh0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBzdGFydCgpe1xyXG4gICAgY29uc29sZS5sb2coXCJTdGFydFwiKVxyXG5cclxuICAgIGNvbnN0IGRvY3VtZW50czogRm9sZGVyID0ga25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xyXG4gICAgY29uc3QgZm9sZGVyOiBGb2xkZXIgPSBkb2N1bWVudHMuZ2V0Rm9sZGVyKFwiVGVzdEZvbGRlclwiKTtcclxuICAgIGNvbnN0IGZpbGU6IEZpbGUgPSBkb2N1bWVudHMuZ2V0RmlsZShgbWljcm9waG9uZWAgKyBgLndhdmApOyAgXHJcblxyXG4gICAgY29uc29sZS5sb2coZmlsZS5wYXRoKVxyXG4gICAgXHJcbiAgICB0aGlzLm1pY1JlY29yZGVyLnJlcXVlc3RSZWNvcmRQZXJtaXNzaW9uKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGlmIChUTlNSZWNvcmRlci5DQU5fUkVDT1JEKCkpIHtcclxuICBcclxuICAgICAgICBsZXQgcmVjb3JkZXIgPSBuZXcgVE5TUmVjb3JkZXIoKTtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBPYnNlcnZhYmxlKClcclxuXHJcbiAgICAgICAgdmFyIHJlY29yZGVyT3B0aW9ucyA9IHtcclxuICAgIFxyXG4gICAgICAgICAgZmlsZW5hbWU6IGZpbGUucGF0aCxcclxuICAgICAgICAgIGluZm9DYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW5mb0NhbGxiYWNrJyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3JDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3JDYWxsYmFjaycpO1xyXG4gICAgICAgICAgICBhbGVydCgnRXJyb3IgcmVjb3JkaW5nLicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1JFQ09SREVSIE9QVElPTlM6ICcgKyByZWNvcmRlck9wdGlvbnMpO1xyXG4gICAgICByZWNvcmRlci5zdGFydChyZWNvcmRlck9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgZGF0YS5zZXQoJ2lzUmVjb3JkaW5nJywgdHJ1ZSk7XHJcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHsgXHJcbiAgICAgICAgICBkYXRhLnNldCgnaXNSZWNvcmRpbmcnLCBmYWxzZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6ICcgKyBlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgIC8vIHRoaXMubWljUmVjb3JkZXIuc3RhcnQocmVjb3JkZXJPcHRpb25zKVxyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgc3RvcCgpe1xyXG4gICAgY29uc29sZS5sb2coXCJTdG9wXCIpXHJcblxyXG4gICAgdGhpcy5taWNSZWNvcmRlci5zdG9wKCk7XHJcbiAgfVxyXG5cclxuICB0ZXN0KCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRlc3RcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJUZXN0IFwiICsgdGhpcy5taWNSZWNvcmRlci5nZXRNZXRlcnMoKSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgQXVkaW9SZWNvcmRlck9wdGlvbnMge1xyXG4gIGZpbGVuYW1lOiBzdHJpbmc7XHJcbn1cclxuIl19