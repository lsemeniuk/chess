import { Figure, FigureNames } from './Figure';
import { Cell } from '../Cell';
import { Colors } from '../Colors';
import blackLogo from '../../assets/black-pawn.png';
import wjiteLogo from '../../assets/white-pawn.png';

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : wjiteLogo;
    this.name = FigureNames.PAWN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return true;
  }
}
