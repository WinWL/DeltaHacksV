import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { AccelerometerComponent } from './accelerometer/accelerometer.component';
import { CommFileComponent } from './comm-file/comm-file.component';
import { SaveFileComponent } from './save-file/save-file.component';

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "accelerometer", component: AccelerometerComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "commService", component: CommFileComponent },
    { path: "saveFile", component: SaveFileComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }