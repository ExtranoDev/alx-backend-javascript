// Implement class with name SkyHighBuilding that extends from Building
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') throw new Error('floors must be a number');
    this._floors = floors;
  }

  set floors(floors) {
    if (typeof floors !== 'number') throw new Error('floors must be a number');
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
