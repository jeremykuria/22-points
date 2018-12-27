import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TwentyTwoPointsSharedModule } from 'app/shared';
import { TwentyTwoPointsAdminModule } from 'app/admin/admin.module';
import {
    WeightComponent,
    WeightDetailComponent,
    WeightUpdateComponent,
    WeightDeletePopupComponent,
    WeightDeleteDialogComponent,
    weightRoute,
    weightPopupRoute
} from './';

const ENTITY_STATES = [...weightRoute, ...weightPopupRoute];

@NgModule({
    imports: [TwentyTwoPointsSharedModule, TwentyTwoPointsAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [WeightComponent, WeightDetailComponent, WeightUpdateComponent, WeightDeleteDialogComponent, WeightDeletePopupComponent],
    entryComponents: [WeightComponent, WeightUpdateComponent, WeightDeleteDialogComponent, WeightDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwentyTwoPointsWeightModule {}
