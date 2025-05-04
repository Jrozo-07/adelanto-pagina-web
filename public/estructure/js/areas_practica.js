document.addEventListener('DOMContentLoaded', function() {
    const areasPracticaData = {
        titulo: "Nuestras Áreas de Práctica",
        descripcion: "Servicios jurídicos especializados en todas las ramas del derecho:",
        servicios: [
            {
                titulo: "Derecho Civil",
                lista: [
                    "Contratos y acuerdos",
                    "Divorcios y separaciones",
                    "Sucesiones y herencias",
                    "Responsabilidad civil",
                    "Derechos reales"
                ],
                descripcion: "Representación integral en procesos civiles con seguimiento personalizado caso por caso."
            },
            {
                titulo: "Derecho de Familia",
                lista: [
                    "Patria potestad",
                    "Alimentos y pensiones",
                    "Adopciones",
                    "Uniones estables",
                    "Violencia familiar"
                ],
                descripcion: "Protección jurídica para la institución familiar con enfoque humano y sensible."
            },
            {
                titulo: "Derecho Penal",
                lista: [
                    "Defensa penal",
                    "Asesoría a víctimas",
                    "Libertades bajo fianza",
                    "Recursos y apelaciones",
                    "Procesos abreviados"
                ],
                descripcion: "Defensa estratégica garantizando el debido proceso y derechos fundamentales."
            },
            {
                titulo: "Derecho Comercial",
                lista: [
                    "Constitución de empresas",
                    "Contratos mercantiles",
                    "Procesos concursales",
                    "Propiedad intelectual",
                    "Litigios comerciales"
                ],
                descripcion: "Asesoría legal para proteger sus intereses comerciales y empresariales."
            },
            {
                titulo: "Trámites Legales",
                lista: [
                    "Documentos notariales",
                    "Registros públicos",
                    "Legalizaciones",
                    "Permisos y licencias",
                    "Trámites migratorios"
                ],
                descripcion: "Gestión eficiente ante organismos gubernamentales y entidades públicas."
            },
            {
                titulo: "Derecho Laboral",
                lista: [
                    "Despidos injustificados",
                    "Reclamos de beneficios",
                    "Contratos laborales",
                    "Accidentes de trabajo",
                    "Negociaciones colectivas"
                ],
                descripcion: "Defensa de los derechos laborales tanto de empleadores como trabajadores."
            }
        ]
    };

    const sectionPractica = document.getElementById('practica-areas');

    // Renderizar el título y la descripción principal
    const tituloElement = document.createElement('h2');
    tituloElement.classList.add('section-title');
    tituloElement.textContent = areasPracticaData.titulo;
    sectionPractica.appendChild(tituloElement);

    const descripcionElement = document.createElement('p');
    descripcionElement.textContent = areasPracticaData.descripcion;
    sectionPractica.appendChild(descripcionElement);

    // Crear el contenedor de la grilla de servicios
    const serviciosGrid = document.createElement('div');
    serviciosGrid.classList.add('services-grid');
    sectionPractica.appendChild(serviciosGrid);

    // Renderizar cada tarjeta de servicio
    areasPracticaData.servicios.forEach(servicio => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');

        const titleElement = document.createElement('h3');
        titleElement.classList.add('service-card-title');
        titleElement.textContent = servicio.titulo;
        serviceCard.appendChild(titleElement);

        const listElement = document.createElement('ul');
        listElement.classList.add('service-card-list');
        servicio.lista.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('service-card-item');
            listItem.textContent = item;
            listElement.appendChild(listItem);
        });
        serviceCard.appendChild(listElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('service-card-description');
        descriptionElement.textContent = servicio.descripcion;
        serviceCard.appendChild(descriptionElement);

        serviciosGrid.appendChild(serviceCard);
    });
});