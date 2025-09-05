import java.util.Scanner;

public class inicioPAM {
    public void mostrarReglamento() {
        System.out.println("Reglas del curso: ");
        System.out.println("1. Se requiere el 80% de asistencia para tener derecho a examen\n.");
        System.out.println("2. Se permiten 10 minutos de tolerancia.\n");
        System.out.println("3. Las faltas se deben justificar mediante el correo institucional.\n");
        System.out.println("4. Las tareas y trabajos se deberán subir a classroom de forma individual y no recibiran de manera extemporanea.\n");  
        System.out.println("5.Las tareas y trabajos presentarlos en tiempo y forma. \n");
        System.out.println("6. Usar el correo institucional para trabajar en classroom.\n");
        System.out.println("7. El palgio o copia de trabajos será condicionado a reprobar la asignatura y se reportará al área correspondiente.\n");
        System.out.println("8. Cualquier deshonestidad academica será sancionada reprobando el parcial sin derecho a exmaen final.\n");
        System.out.println("9.En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docente, administrativo, compañeros o cualquier persona de la universidad, se realizara una llamada de atencion.\n");
        System.out.println("10.Uso de celulares o laptos queda limitado a uso exclusivo de actividades que lo requieran.\n");
        System.out.println("11. Prohibido el uso de audífonos durante la clase.\n");
        System.out.println("12. Prohibido comer y/o tomar líquidos en el salón.\n");
        System.out.println("13. Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.\n");
        System.out.println("14.Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación\r\n" + //
                        "de tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria).\n");
        System.out.println("15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.\n");
        System.out.println("16.El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación.\n");
        System.out.println("17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el\r\n" + //
                        "50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión..\n");
    }
    
    public void fechasParciales(){
        
            System.out.println("Fechas de parciales: ");
            System.out.println("Primer parcial: 30 de septiembre\n");
            System.out.println("Segundo parcial: 4 de noviembre\n");
            System.out.println("Tercer parcial: 2 de diciembre\n");
            System.out.println("Examen final: 8 de diciembre\n");
        
    }
    public void porcentajes(){
            System.out.println("Porcentajes de evaluacion: ");
            System.out.println("Primer parcial:\n");
            System.out.println("Conocimiento 40%    Desempeño 20%      Producto 30%      PI 10%\n");
            System.out.println("Segundo parcial:\n");
            System.out.println("Conocimiento 40%    Desempeño 20%      Producto 20%      PI 20%\n");
            System.out.println("Tercer parcial:\n");
            System.out.println("Conocimiento 20%    Desempeño 10%      Producto 40%       PI 30%\n");
    }
    public void lineamientos(){
            System.out.println("Lineamientos de evaluacion: ");
            System.out.println("Primer parcial:\n");
            System.out.println("Conocimiento 40%    Desempeño 20%      Producto 30%      PI 10%\n");
            System.out.println("Segundo parcial:\n");
            System.out.println("Conocimiento 40%    Desempeño 20%      Producto 20%      PI 20%\n");
            System.out.println("Tercer parcial:\n");
            System.out.println("Conocimiento 20%    Desempeño 10%      Producto 40%       PI 30%\n");
            System.out.println("Primer parcial 30-09-25");
            System.out.println("Segundo parcial 04-10-25");
            System.out.println("Tercer parcial 02-12-25");
            System.out.println("Final 08-12-25");
            System.out.println("Los trabajos deben de llevar portada con logo de la univerisdad, nombre de practica y datos del alumno. \n");
    }
    public static void main(String[] args) {
        int elec;
        Scanner scanner = new Scanner(System.in);
        do{
        System.out.println("Selecciona una opción del menú:\n");
        System.out.println("1. Reglamento del curso.\n");
        System.out.println("2. Fechas de parciales.\n");
        System.out.println("3. Porcentajes de evaluación.\n");
        System.out.println("4. Lineamientos.\n");
        System.out.println("5. Salir.\n");
        
        elec = scanner.nextInt();
        switch (elec) {
            case 1:
            inicioPAM inicio= new inicioPAM();
            inicio.mostrarReglamento();
            break;
            case 2:
            inicioPAM fechas= new inicioPAM();
            fechas.fechasParciales();
            break;
            case 3:
            inicioPAM porcentajes= new inicioPAM();
            porcentajes.porcentajes();
            break;
            case 4:
            inicioPAM lineamientos= new inicioPAM();
            lineamientos.lineamientos();
            break;
            case 5:
            System.out.println("Saliendo...");
            break;
            default:
            System.out.println("Opción no válida. Por favor, elige una opción del menú.");
        }
    }while(elec != 5);
    scanner.close();
}
}
