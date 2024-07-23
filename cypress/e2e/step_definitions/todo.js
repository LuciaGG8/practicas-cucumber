import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { gestionTarea } from "../../pages/GestionTarea";

Given("creo la tarea", () => {
  gestionTarea.navigateTodo();
  gestionTarea.addTask("Limones {enter}");
});
When("hago click en la tarea", () => {
  gestionTarea.selecTask();
});
Then("se muestra como completada", () => {
  gestionTarea.completedTask();
});