export class GestionTarea {
    constructor() {
      this.web = "https://todomvc.com/examples/react/dist/";
      this.newTask = "#todo-input";
      this.selectAll_button = ".toggle-all";
      this.deletedAll_button = ".clear-completed";
      this.task = {
        icon_circle_task: ".toggle",
        text_task: "label[data-testid='todo-item-label']",
        clean_task: ".clear-completed",
        completed_task: ".completed",
      };
    }
    addTask(task) {
      cy.get(this.newTask).type(task);
    }
    selecTask() {
      cy.get(this.task.icon_circle_task).click();
    }
    selectAll() {
      cy.get(this.selectAll_button).click();
    }
    completedTask() {
      cy.get(this.task.completed_task).should("be.visible");
    }
    navigateTodo() {
      cy.visit(this.web);
    }
    completarTarea() {
      cy.get(this.newTask).should("be.visible").type("comprar una mesa{enter}");
      cy.get(this.task.text_task).should("contain.text", "comprar una mesa");
      cy.get(this.task.icon_circle_task).click();
      cy.get(this.task.completed_task).should("be.visible");
    }
  
    eliminarTarea() {
      cy.get(this.newTask).should("be.visible").type("comprar una mesa{enter}");
      cy.contains("comprar una mesa").should("be.visible");
      //cy.get(".view").trigger("mouseover").find("button").click()
    }
    eliminarVariasTareas() {
      cy.get(this.newTask).should("be.visible").type("comprar una mesa{enter}");
      cy.contains("comprar una mesa").should("be.visible");
      cy.get(this.newTask).should("be.visible").type("comprar una silla{enter}");
      cy.contains("comprar una silla").should("be.visible");
      cy.get(this.selectAll_button).click();
      cy.get(this.deletedAll_button)
        .should("be.visible")
        .and("contain.text", "Clear completed")
        .click();
    }
  }
  export const gestionTarea = new GestionTarea();