import { MatIconRegistry} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('earth', ds.bypassSecurityTrustResourceUrl('assets/earth.svg'));
}