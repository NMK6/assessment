import { firstSection } from './../models/FirstSection';
import * as firstSectionView from './../views/firstSectionView';
export function renderFirstSection() {
  firstSectionView.addMarkup(firstSection);
}
