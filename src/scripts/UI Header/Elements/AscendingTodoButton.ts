import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class AscendingTodoButton extends BaseButton {
  private style: TextStyles | undefined;
  private styleMedium: TextStyles["textSmall"];
  // private interaction: BaseButton | undefined;
  ascendingTodoButton: PIXI.Graphics | undefined;
  ascendingTodoButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.style = new TextStyles();
    this.styleMedium = this.style.textMedium;
    this.createAscendingTodoButton();
    this.createAscendingTodoButtonText();
    // this.interaction = new BaseButton();
    this.interactive = true;
    this.buttonMode = true;
    this.alpha = 0.45;
    this.on('pointerover', this.mouseOver);
    this.mouseOver = this.mouseOver.bind(this);
    this.on('pointerout', this.mouseOff);
    this.mouseOff = this.mouseOff.bind(this);
    this.on('pointerdown', this.mouseClick);
    this.mouseClick = this.mouseClick.bind(this);
  }

  public createAscendingTodoButton() {
    this.ascendingTodoButton = new PIXI.Graphics();
    this.ascendingTodoButton.beginFill(0x9e9a9b);
    this.ascendingTodoButton.lineStyle(3, 0x000000, 1);
    this.ascendingTodoButton.drawRect(850, 70, 200, 45);
    this.ascendingTodoButton.endFill();
    this.addChild(this.ascendingTodoButton);
  }

  public createAscendingTodoButtonText() {
    this.ascendingTodoButtonText = new PIXI.Text("ASCENDING", this.styleMedium);
    this.ascendingTodoButtonText.position.set(870, 78);
    this.addChild(this.ascendingTodoButtonText);
  }
}
