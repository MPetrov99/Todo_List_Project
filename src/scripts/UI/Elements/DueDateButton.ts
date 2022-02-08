import * as PIXI from "pixi.js";
import { TextStyles } from "../TextStyles";

export class DueDateButton extends PIXI.Container {
  private style: TextStyles | undefined;
  private styleSmall: TextStyles["textSmall"];
  dueDateButton: PIXI.Graphics | undefined;
  dueDateButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.style = new TextStyles();
    this.styleSmall = this.style.textSmall;
    this.createDueDateButton();
    this.createDueDateButtonText();
  }

  public createDueDateButton() {
    this.dueDateButton = new PIXI.Graphics();
    this.dueDateButton.beginFill(0x9e9a9b);
    this.dueDateButton.lineStyle(3, 0x000000, 1);
    this.dueDateButton.drawRect(1100, 100, 200, 45);
    this.dueDateButton.interactive = true;
    this.dueDateButton.buttonMode = true;
    this.dueDateButton.endFill();
    this.addChild(this.dueDateButton);
  }

  public createDueDateButtonText() {
    this.dueDateButtonText = new PIXI.Text("DUE DATE", this.styleSmall);
    this.dueDateButtonText.position.set(1400, 111);
    this.addChild(this.dueDateButtonText);
  }
}