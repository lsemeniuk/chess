import { Figure, FigureNames } from './Figure';
import { Cell } from '../Cell';
import { Colors } from '../Colors';
import blackLogo from '../../assets/black-rook.png';
import wjiteLogo from '../../assets/white-rook.png';

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : wjiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyVertical(target)) {
      return true;
    }
    if (this.cell.isEmptyHoryzontal(target)) {
      return true;
    }
    return false;
  }
}
