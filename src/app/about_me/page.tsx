"use client"

import DropDownSection from '../components/drop_down'

export default function AboutMe() {
    return(
        <div className="px-6 max-w-5xl mx-auto mt-10">
            <DropDownSection title="Información personal">
                <p>Mi Nombre es Nicolás Manuel Girard, tengo 33 años, nací y vivo en la ciudad de Buenos Aires, Argentina</p>
            </DropDownSection>
            <DropDownSection title="Formación">
                <p>Hice el secundario en el colegio Santa Catalina, con orientación en administración de empresa (2005-2009)</p>
                <p>En el 2010 entré al CBC para ingeniería civil en la facultad de ingeniería de la UBA (FIUBA), la cual cursé hasta el 2016 sin terminar</p>
                <p>Al mismo tiempo empecé a estudiar ingles en Wall Street Institute, el cual terminé en el 2014 alcanzando el máximo nivel que otorgan</p>
                <p>En el 2020 retomé los estudios cambiando de carrera a Licenciatura en análisis de sistemas en la FIUBA</p>
                <p>Actualmente tengo 25 materias aprobadas con un promedio de 7</p>
                <p>En el 2025 empecé la simultaneidad de carreras dentro de la FIUBA con Ingeniería Informática</p>
                <p>Actualmente cuento con 26 materias aprobadas con un promedio de 7</p>
            </DropDownSection>
            <DropDownSection title="Experiencia laboral">
                <p>Empecé a trabajar como asistente administrativo en Siae Microelettronica en el año 2016 hasta el 2024</p>
                <p>Tuve varias responsabilidades a lo largo de los años entre otros:</p>
                <ul className="list-disc pl-6">
                    <li>Circuito de facturación de la empresa, con confección de informes frecuentes</li>
                    <li>Seguimiento del inventario</li>
                    <li>Manejo de documentación y obtención de permisos de Instalación</li>
                    <li>Circuito de pago de proveedores</li>
                </ul>
                <p>Cuento con experiencia en el uso de sistemas de ERP para las tareas antes mencionadas</p>
            </DropDownSection>
            <DropDownSection title="Hobbies">
                <p>Tengo varios hobbies que realizo en mi tiempo libre, entre ellos:</p>
                <ul className="list-disc pl-6">
                    <li>Cocinar</li>
                    <li>Leer novelas gráficas</li>
                    <li>Video Juegos</li>
                    <li>Programación</li>
                </ul>
            </DropDownSection>
        </div>
    );
}