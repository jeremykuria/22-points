import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TwentyTwoPointsPointsModule } from './points/points.module';
import { TwentyTwoPointsWeightModule } from './weight/weight.module';
import { TwentyTwoPointsBloodPressureModule } from './blood-pressure/blood-pressure.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TwentyTwoPointsPointsModule,
        TwentyTwoPointsWeightModule,
        TwentyTwoPointsBloodPressureModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwentyTwoPointsEntityModule {}
