document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const mainContents = document.querySelectorAll('.main-content');

    const glossaryData = {
        "A": [
            {
                "term": "Adopción",
                "definition": "es un acto legal por el cual una persona o familia acoge como hijo al que biológicamente es hijo de otros padres."
            },
            {
                "term": "Acción Nominativas",
                "definition": "Son aquellas que se emiten a nombre de un titular. Sutransferencia se efectúa a través de un aviso a la empresa emisora, firmado porvendedor y comprador, con el fin de actualizar el registro de accionistas."
            },
            {
                "term": "Accionista",
                "definition": "El   accionista   es   aquel   agente   que   es   propietariode acciones (partes   alícuotas   del   capital)   en   cualquier   sociedad   o   formaempresarial.   El   accionista   puede   ser   una   persona   física,   como   forma   de   supatrimonio; o una persona jurídica, es decir, cualquier sociedad, organismo o enteque tenga entre su activos una participación empresarial."
            },
            {
                "term": "Acta",
                "definition": "La palabra acta viene del latín y significa “los hechos”; luego, un acta no esmás que un testimonio escrito de los hechos ocurridos en cualquier circunstancia:una reunión de consorcio, una asamblea de miembros de una comisión directivade   cualquier   entidad,   una certificación del   nacimiento   de   una   persona,   etc.   Esdecir,   hechos  que   se  asientan  por   escrito   y   que  resulta  importante   registrar   yconservar."
            },
            {
                "term": "Acto de Comercio",
                "definition": "Es el que realiza una persona física o jurídica, comercianteo no, que  tiene por objeto, el intercambio  de bienes o servicios con un  fin nonecesariamente lucrativo y que se rige por las normas mercantiles."
            },
            {
                "term": "Arbitraje Comercial",
                "definition": "Aparece como un sistema de garantías fundamentales acuyo   ámbito   las   partes   voluntariamente  se   adhieren;   garantías   éstas   que   auncuando   a   veces   no   se   disponen   expresamente   dentro   de   su   articulado,   sedetermina su existencia luego de su interpretación."
            },
            {
                "term": "Asamblea de Socios o Accionistas",
                "definition": "Se denomina asamblea general de accionistas al conjunto de socios reunidos de conformidad con lo señalado en el estatuto, para tomar todas aquellas decisiones y cumplir las funciones que le ley les otorga."
            },
        ],
        "B": [
        {
            "term": "Buena Fe",
            "definition": "Es   un principio   general   del   derecho,   consistente   en   el estadomental de honradez, de convicción en cuanto a la verdad o exactitud de un asunto,hecho u opinión, título de propiedad, o la rectitud de una conducta. Exige unaconducta   recta   y   honesta   en   relación   con   las partes interesadas   enun acto, contrato o proceso."
        }, 
    ],
    "C": [
        {
            "term": "Comodato",
            "definition": "es una institución civil de protección del patrimonio de las personas sin plena capacidad de obrar."
        },
        {
            "term": "Código de Comercio",
            "definition": "Es un conjunto de elementos unitarios, ordenado y sistematizando de normas de Derecho mercantil, es decir, un cuerpo legal que tiene por objetivo regular las relaciones mercantiles y comerciales."
        }, 
        {
            "term": "Comerciante",
            "definition": "Es   aquel   que   realiza,   de   manera   habitual   o   permanente,actividades mercantiles."
        }, 
        {
            "term": "Comisario",
            "definition": "Según leyes venezolanas es la persona encargada de velar por losintereses de los accionistas de una compañía al supervisar (y denunciar, si esnecesario) las prácticas tanto administrativas como contables."
        }, 
        {
            "term": "Contabilidad",
            "definition": "Es la parte de las finanzas que estudia las distintas partidas quereflejan los movimientos económicos y financieros de una empresa o entidad."
        }, 
        {
            "term": "Capital Social",
            "definition": "Es un elemento que podemos localizar en el balance contable de una empresa, dentro de los fondos propios o patrimonio neto. Su principal función es actuar como una garantía por parte de la empresa frente a terceros. Es decir, una especie de “colchón” de seguridad."
        }, 
        {
            "term": "Costumbre Mercantil",
            "definition": "Un conjunto de usos o prácticas que realizan los comerciantes y que cumplen con los requisitos exigidos por las leyes para ser consideradas Derecho consuetudinario y, por ende, fuente del Derecho."
        }, 
        {
            "term": "Cuota de Partición",
            "definition": "Porcentaje en el que un miembro de la Comunidad depropietarios   participa   en   los   gastos   y   cargas   incluso   en   posibles   beneficios-comunes que recaen sobre la comunidad (por ejemplo los gastos de portería, lasreparaciones del ascensor o el combustible de la calefacción central)."
        },
        {
            "term": "Cesión de Derechos",
            "definition": "Es la transmisión de un derecho real o de crédito mediante título a otra persona. En este negocio jurídico el cedente le otorga al cesionario los títulos que tiene sobre algo. Implica que quien recibe los derechos se convierte en el nuevo propietario de lo cedido, en las mismas condiciones que tenía el anterior dueño."
        },
        {
            "term": "Comodato",
            "definition": "es un contrato que consiste en un préstamo de uso, mediante el cual una de las partes deja a otra el uso y disfrute de algo no fungible, que será devuelto en el momento que se hubiera estipulado en el acuerdo en cuestión."
        },
        {
            "term": "Contrato de Arrendamiento",
            "definition": "Es un documento que regula la relación entre dos partes. El arrendador cede el uso de su propiedad al arrendatario, quien paga una cuota periódica por un tiempo fijado en el mismo."
        },
        
    ],
    "D": [
        {
            "term": "Derecho Tributario",
            "definition": "Es una rama del derecho público que se encarga de regular la creación, cobro y administración de los tributos (impuestos, tasas y contribuciones especiales) que deben pagar los ciudadanos y empresas al Estado."
        },
        {
            "term": "Derecho  Mercantil",
            "definition": "Es un conjunto de normas que regulan los actos decomercio. Se regula la actividad entre las empresas y los consumidores."
        },
        {
            "term": "Disolución   de   las   Sociedades",
            "definition": " La   disolución   de   sociedades   es   laeliminación jurídica de una empresa, por lo que acabará desapareciendo tras elcierre definitivo de su actividad. Es decir, si bien podemos dar de baja a nuestraempresa en el registro mercantil, debemos seguir con su actividad normal hastaque finalice las fases de liquidación y extinción definitiva de la sociedad."
        },
        {
            "term": "Documento   Constitutivo",
            "definition": "Es   un   documento   de   carácter   obligatoriodeterminado   para   lograr   establecer   de   forma   legal   la   formación   de   unaorganización o sociedad empresarial, cuenta con parámetros que se consideranfundamentales  para   su   elaboración  en   donde   se   estipulan   todos   los  aspectosgenerales de la empresa. En pocas palabras el Acta Constitutiva es la base legalde cualquier empresa o asociación que está por comenzar."
        },
        {
            "term": "Domicilio Social",
            "definition": "Es el lugar en el que una empresa tiene el centro deadministración o dirección o, en su defecto, donde se encuentra su principal centrode explotación.   El domicilio social es, a efectos  legales,lo que etermina las obligaciones y derechos como sociedad empresarial."
        },
        {
            "term": "Contrato de Compraventa",
            "definition": "Un contrato de compraventa es un acuerdo bilateral, oneroso, consensual o formal entre dos personas, donde una parte, denominada comprador, se compromete a entregar una cantidad de dinero o signo que lo represente a otra, considerada vendedor."
        },
        {
            "term": "Contrato",
            "definition": "Un contrato es un acuerdo que establecen dos partes, el deudor y el acreedor, que acuerdan cumplir ciertas condiciones entre ellos en un tiempo determinado."
        },
        {
            "term": "Derecho Positivo",
            "definition": "Se refiere al conjunto de normas jurídicas que son establecidas y reconocidas por las autoridades del país en un momento determinado. Estas normas pueden ser leyes, reglamentos, decretos y otras disposiciones legales que regulan la convivencia y las relaciones entre los ciudadanos y el Estado."
        },
        {
            "term": "Doctrina",
            "definition": "La doctrina en el derecho es importante porque le da sentido a lo que está escrito en las leyes. Básicamente, se trata del conjunto de interpretaciones que existen con respecto a lo que dice una norma. En realidad, podríamos decir que esta es como la filosofía que nos ayuda a entender cómo piensan y actúan los juristas con respecto a una determinada ley."
        },
        {
            "term": "Derecho Internacional Privado",
            "definition": "El derecho internacional privado se encarga de regular las relaciones jurídicas privadas con componentes extranjeros, resolviendo conflictos de leyes y de jurisdicción, y estableciendo mecanismos para el reconocimiento y ejecución de sentencias y actos jurídicos foráneos."
        },
        {
            "term": "Derecho Subjetivo",
            "definition": "El derecho subjetivo es una facultad reconocida a un individuo por el ordenamiento jurídico, permitiéndole realizar o no realizar cierta acción, exigir algo a otra persona o defender un interés legítimo frente al Estado o particulares."
        },
        {
            "term": "Derecho Natural",
            "definition": "Se considera derecho natural al conjunto de normas y principios jurídicos que emanan directamente de la naturaleza misma del ser humano, y que son principios universales e inmutables."
        }, 
        {
            "term": "Derecho Internacional Público",
            "definition": "Es el conjunto de normas aplicables a los Estados y a las organizaciones internacionales en sus actuaciones. Sus sujetos de derecho son los Estados y las organizaciones internacionales y aborda aspectos de interés público a nivel supranacional."
        },
        {
            "term": "Derecho Objetivo",
            "definition": "Es el conjunto de normas, preceptos y reglas jurídicas que rigen la conducta humana en sociedad, estableciendo deberes y derechos. Estas normas son impuestas por el Estado y deben ser acatadas por los ciudadanos y las instituciones."
        },
        {
            "term": "Deber Jurídico",
            "definition": "Es una obligación implantada por una norma jurídica que tiene que ser respetada por los individuos. Por lo tanto, este deber restringe la libertad de las personas e implica la existencia de un derecho jurídico en contrapartida."
        }, 
        {
            "term": "Derecho Real",
            "definition": "Es un poder de dominio que faculta al titular de un bien a actuar inmediatamente frente a cualquiera."
        }, 
        {
            "term": "Delito",
            "definition": "es un acto u omisión del mismo, que es sancionado por infringir las leyes penales. Se trata de un comportamiento antijurídico y culpable de una persona."
        }, 
        {
            "term": "Delito de Estafa",
            "definition": "s un delito que consiste en provocar un perjuicio patrimonial a alguien mediante engaño. La intención final de una estafa es el lucro. Quien comete delito de estafa se propone obtener una ganancia o provecho del engaño."
        }, 
        {
            "term": "Orden de Alejamiento",
            "definition": "Es una pena privativa de derechos, por la cual se prohíbe a un agresor acercarse a su víctima o sus familiares."
        }, 
        {
            "term": "Dolo",
            "definition": "Es una figura jurídica que se refiere a la intención deliberada de cometer un acto ilícito o incumplir una obligación, siendo consciente del daño o perjuicio que se causa a otra persona."
        },
    ],
    "E": [
        {
            "term": "Eximente",
            "definition": " es un término que se emplea en derecho penal para referirse a aquellas circunstancias que anulan la responsabilidad penal del autor de un delito. Independientemente de las circunstancias, dichos casos han de ser analizados por el juez."
        },
        {
            "term": "Estado Civil",
            "definition": "Ees el conjunto de condiciones de una persona física, que determinan su situación jurídica y le otorgan un conjunto de derechos y obligaciones."
        },
        {
            "term": "Enajenación de bienes",
            "definition": "Es el acto jurídico por el cual una persona transfiere a otra la posesión de un bien. Puede ser a título gratuito u oneroso. Según el tipo de bien y forma de transferencia, la operación puede estar sujeta a diferentes tributos y obligaciones."
        },
    ],
    "F": [
        {
            "term": "Fuentes del Derecho",
            "definition": "Son aquellos procesos que dan nacimiento a todo marco normativo o jurídico que impondrá conductas a los habitantes de un estado."
        },
        {
            "term": "Fideicomiso",
            "definition": "es un acto jurídico por medio del cual una persona entrega a otra la titularidad de unos activos para que los administre y, al vencimiento de un plazo, transmita los resultados a un tercero. Es una herramienta jurídica muy utilizada en los negocios y para preservar los patrimonios familiares."
        },   
    ],
    "G": [],
    "H": [
        {
            "term": "Homicidio",
            "definition": "El delito de homicidio consiste en la acción de matar a otra persona. Se trata de un delito contra la vida humana en el que el bien jurídico protegido es la vida humana independiente. No obstante, la propia muerte o suicidio no es punible."
        },
    ],
    "I": [
        {
            "term": "Habeas Corpus",
            "definition": "Este principio legal proporciona la garantía de poder comparecer de forma inmediata y pública ante un Juez para que este determine si el arresto fue o no conforme a la legalidad y si debe mantenerse o interrumpirse."
        },
    ],
    "J": [],
    "M": [],
    "N": [
        {
            "term": "Norma Jurídica",
            "definition": "Es un mandato o regla que tiene como objetivo dirigir el comportamiento de la sociedad. En concreto, la norma jurídica confiere derechos e impone deberes a los individuos de la sociedad. Toda norma jurídica debe respetarse por los individuos, ya que, si se incumple puede suponer una sanción."
        },
    ],
    "O": [],
    "P": [
        {
            "term": "Persona Jurídica",
            "definition": "Una persona jurídica o persona moral es un concepto jurídico empleado para denominar a la figura jurídica que da lugar a la existencia de un individuo con derechos y obligaciones. No se trata de un ciudadano común, sino más bien de sociedades mercantiles y entes estatales, entre otros."
        },
    ],
    "Q": [],
    "R": [
        {
            "term": "Responsabilidad Civil",
            "definition": "Ese define como la obligación de toda persona de pagar por los daños y perjuicios que cause en la persona o el patrimonio de otra."
        },
        {
            "term": "Responsabilidad Penal",
            "definition": "cuando se le ha atribuido la culpabilidad de la comisión de un hecho punible."
        },
    ],
    "S": [
        {
            "term": "Semovientes",
            "definition": "son animales que, por su naturaleza, tienen la capacidad de moverse por sí mismos. En el ámbito jurídico venezolano, se consideran bienes muebles y están sujetos a normativas específicas en cuanto a su propiedad, comercio y tratamiento legal."
        },
    ],
    "T": [],
    "U": [
        {
            "term": "Usucapión",
            "definition": "Este fenómeno alude a la pérdida de titularidad de un derecho u obligación debido a que, durante un largo tiempo, su propietario no lo ha reclamado."
        },
        {
            "term": "Usufructo",
            "definition": "Se define como el derecho a disfrutar los bienes ajenos con la obligación de conservar su forma y sustancia, a no ser que el título de su constitución o la ley autoricen otra cosa."
        },
        {
            "term": "Usufructo",
            "definition": "Se define como el derecho a disfrutar los bienes ajenos con la obligación de conservar su forma y sustancia, a no ser que el título de su constitución o la ley autoricen otra cosa."
        },

        ],
    "V": [],
    "W": [],
    "X": [],
    "Y": [],
    "Z": [],
    
    };

    function showContent(contentId) {
        mainContents.forEach(content => {
            content.classList.remove('active');
            if(content.id === contentId) {
                content.classList.add('active');
                if(contentId === 'glosario') initGlossary();
            }
        });
    }

    function initGlossary() {
        const letterTabsContainer = document.getElementById('letterTabs');
        if(!letterTabsContainer.innerHTML) {
            for(let letter in glossaryData) {
                const tab = document.createElement('div');
                tab.className = 'letter-tab';
                tab.textContent = letter;
                tab.onclick = () => {
                    loadLetterContent(letter);
                    setActiveTab(letter);
                };
                letterTabsContainer.appendChild(tab);
            }
            loadLetterContent('A');
            setActiveTab('A');
        }
    }

    function loadLetterContent(letter) {
        const letterContentContainer = document.getElementById('letterContent');
        letterContentContainer.innerHTML = '';
        
        const terms = glossaryData[letter];
        
        if(!terms || terms.length === 0) {
            letterContentContainer.innerHTML = '<p>No hay términos disponibles para esta letra.</p>';
            return;
        }
        
        terms.forEach(term => {
            const termElement = document.createElement('div');
            termElement.className = 'term';
            termElement.innerHTML = `
                <div class="term-title">${term.term}</div>
                <div class="term-definition">${term.definition}</div>
            `;
            letterContentContainer.appendChild(termElement);
        });
    }

    function setActiveTab(letter) {
        document.querySelectorAll('.letter-tab').forEach(tab => {
            tab.classList.remove('active');
            if(tab.textContent === letter) tab.classList.add('active');
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            showContent(this.dataset.content);
        });
    });

    document.querySelector('[data-content="glosario"]').click();

    document.querySelector('.logout-btn').addEventListener('click', function(e) {
        e.preventDefault();
        if(confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            alert('Sesión cerrada correctamente');
            window.location.href = 'cerrar-sesion';
        }
    });
});
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        const content = this.dataset.content;
        document.querySelectorAll('.main-content').forEach(div => div.classList.remove('active'));
        document.getElementById(content).classList.add('active');
    });
});

let tasks = JSON.parse(localStorage.getItem('legalTasks')) || [];

document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newTask = {
        id: Date.now(),
        name: document.getElementById('taskName').value,
        description: document.getElementById('taskDescription').value,
        date: document.getElementById('taskDate').value,
        priority: document.getElementById('taskPriority').value,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    loadTasks();
    this.reset();
});

document.getElementById('filterPriority').addEventListener('change', filterTasks);

function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const row = document.createElement('tr');
        if(task.completed) row.classList.add('completed');
        
        row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${new Date(task.date).toLocaleDateString()}</td>
            <td><span class="badge bg-${getPriorityColor(task.priority)}">${task.priority}</span></td>
            <td>
                <button onclick="toggleComplete(${task.id})" class="btn btn-sm ${task.completed ? 'btn-success' : 'btn-outline-secondary'}">
                    ${task.completed ? '✓' : 'Marcar'}
                </button>
                <button onclick="deleteTask(${task.id})" class="btn btn-danger btn-sm">Eliminar</button>
            </td>
        `;
        
        taskList.appendChild(row);
    });
}

function getPriorityColor(priority) {
    const colors = {'Alta': 'danger', 'Media': 'warning', 'Baja': 'success'};
    return colors[priority];
}

function toggleComplete(id) {
    tasks = tasks.map(task => 
        task.id === id ? {...task, completed: !task.completed} : task
    );
    saveTasks();
    loadTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    loadTasks();
}

function filterTasks() {
    const priority = document.getElementById('filterPriority').value;
    const filtered = priority ? tasks.filter(task => task.priority === priority) : tasks;
    
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    filtered.forEach(task => {
        const row = document.createElement('tr');
        if(task.completed) row.classList.add('completed');
        
        row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${new Date(task.date).toLocaleDateString()}</td>
            <td><span class="badge bg-${getPriorityColor(task.priority)}">${task.priority}</span></td>
            <td>
                <button onclick="toggleComplete(${task.id})" class="btn btn-sm ${task.completed ? 'btn-success' : 'btn-outline-secondary'}">
                    ${task.completed ? '✓' : 'Marcar'}
                </button>
                <button onclick="deleteTask(${task.id})" class="btn btn-danger btn-sm">Eliminar</button>
            </td>
        `;
        taskList.appendChild(row);
    });
}

function saveTasks() {
    localStorage.setItem('legalTasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('[data-content="glosario"]').click();

    document.querySelector('.logout-btn').addEventListener('click', function(e) {
        e.preventDefault();
        if(confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            alert('Sesión cerrada correctamente');
            window.location.href = 'cerrar-sesion'; 
        }
    });
});