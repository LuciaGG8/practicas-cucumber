Feature: todo
  Scenario: Completar una tarea
    Given creo la tarea
    When hago click en la tarea
    Then se muestra como completada

  #Scenario: Eliminar tarea
   # Given la tarea esta creada
    #When paso el cursor por encima de la tarea
    #And clicko en el icono de cruz
    #Then la tarea se elimina

  #Scenario: Eliminar varias tareas
   # Given que tengo varias tareas creadas
    #When hago click en el boton que marca todas la tareas como completadas
    #And hago click en el boton eliminar todas
    #Then las tareas se eliminan