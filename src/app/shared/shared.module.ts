import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { ErrorCodeComponent } from "./components/error-code/error-code.component";
import { TranslateModule } from "@ngx-translate/core";

const MODULES = [
    MaterialModule,
    TranslateModule
];
const COMPONENTS = [PageHeaderComponent, ErrorCodeComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...MODULES],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ...MODULES,
        ...COMPONENTS    ]
})
export class SharedModule {

}