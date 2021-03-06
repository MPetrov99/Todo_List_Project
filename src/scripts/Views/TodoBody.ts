import * as PIXI from "pixi.js";
import { TodoView } from "./TodoView";

export class TodoBody extends PIXI.Container{
    // public selectedTodo:TodoView | undefined;
    public backgorund: TodoView | undefined;
    constructor() {
        super();
        this.addBackground();
    }

    addBackground() {
        this.backgorund = new TodoView("", "", "", "");
        this.addChild(this.backgorund);
    }
}