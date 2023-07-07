import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizacionPagosPage } from './actualizacion-pagos.page';

describe('ActualizacionPagosPage', () => {
  let component: ActualizacionPagosPage;
  let fixture: ComponentFixture<ActualizacionPagosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizacionPagosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizacionPagosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
