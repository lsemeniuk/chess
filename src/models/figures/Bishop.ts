import { Figure, FigureNames } from './Figure';
import { Cell } from '../Cell';
import { Colors } from '../Colors';
import blackLogo from '../../assets/black-bishop.png';
import wjiteLogo from '../../assets/white-bishop.png';

export class Bisop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : wjiteLogo;
    this.name = FigureNames.BISHOP;
  }
}