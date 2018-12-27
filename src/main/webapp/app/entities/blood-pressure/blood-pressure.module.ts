import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TwentyTwoPointsSharedModule } from 'app/shared';
import { TwentyTwoPointsAdminModule } from 'app/admin/admin.module';
import {
    BloodPressureComponent,
    BloodPressureDetailComponent,
    BloodPressureUpdateComponent,
    BloodPressureDeletePopupComponent,
    BloodPressureDeleteDialogComponent,
    bloodPressureRoute,
    bloodPressurePopupRoute
} from './';

const ENTITY_STATES = [...bloodPressureRoute, ...bloodPressurePopupRoute];

@NgModule({
    imports: [TwentyTwoPointsSharedModule, TwentyTwoPointsAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BloodPressureComponent,
        BloodPressureDetailComponent,
        BloodPressureUpdateComponent,
        BloodPressureDeleteDialogComponent,
        BloodPressureDeletePopupComponent
    ],
    entryComponents: [
        BloodPressureComponent,
        BloodPressureUpdateComponent,
        BloodPressureDeleteDialogComponent,
        BloodPressureDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwentyTwoPointsBloodPressureModule {}
