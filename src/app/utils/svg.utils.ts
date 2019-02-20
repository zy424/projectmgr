import { MatIconRegistry} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const imgDir = 'assets/img';
    const sideBar = `${imgDir}/sidebar`;
    const dayDir = `${imgDir}/days`;
    const avatarDir = `${imgDir}/avatar`;
    const iconDir = `${imgDir}/icons`;
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    ir.addSvgIcon('earth', ds.bypassSecurityTrustResourceUrl('assets/earth.svg'));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sideBar}/month.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sideBar}/week.svg`));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sideBar}/day.svg`));
    ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
    ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`));
    ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));
    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
        12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 29, 30, 31
    ];
    days.forEach(d => ir.addSvgIcon(`day${d}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${d}.svg`)));

}
