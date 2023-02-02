export const data = [
    {
        id: 0,
        name: 'Centro Historico',
        overview: 'Este circuito es ideal y completo para conocer la ciudad de Lima.La arquitectura barroca y renacentista maravilla a los viajeros por sus construcciones con estilo virreinal, resaltando la conservación de sus iglesias conventos y casonas con elegantes balcones tradicionales recorriendo diferentes áreas de la ciudad conectando los distritos con vista al Océano Pacífico de Lima con el Centro Histórico de la Ciudad (LIMA DOWN TOWN).',
        destino: 'Centro Historico De Lima',
        partida: 'Surco',
        ruta_regular: '35 km',
        edad_minima: '+12 años',
        talla_minima: '1.50 m',
        duracion: '4 a 5 horas aprox.',
        horario: 'Solo Domingos',
        incluye: [
            'Guiado',
            'Primeros auxilios',
            'Servicio mecánico para las bicicletas',
            'Renta de bicicleta simple, casco'
        ],
        no_incluye: [
            'Almuerzo, bebidas, gastos personales, seguro de viaje o accidentes',
            'Visitas a museos',
            'Servicio estándar NO INCLUYE SOPORTE DE VEHÍCULO'
        ],
        adicionales: ['Servicio Premium inicia/termina en hoteles ubicados en los distritos de Miraflores y Barranco'],
        privado_estandar: 'Empieza y termina en nuestras oficinas, Calle Punta  Sal 506 Surco',
        privado_premium: 'empieza y termina en Hotel de pasajeros ubicados en Miraflores o Barranco',
        tarifa:{
            una_persona: '80 usd',
            mas_dos_personas: {
                privado_estandar: '65 usd',
                privado_premium: '85 usd'
            }
        },
        imagenes: {
            principal: '/centro_historico/IMG_1346.JPG',
            banner: '/centro_historico/banner_centro_historico.JPG'
        }
    },
    
    {
        id: 1,
        name: 'Lima Bahia',
        overview: 'Este circuito en la ciudad frente al Océano Pacífico, se ofrece cualquier día de la semana idealmente durante la mañana y el recorrido se adapta según el nivel y objetivo del participante. La ruta base recorre los malecones del distrito de Miraflores, cruzamos el Puente Armendáriz y recorre el bohemio y antiguo distrito de Barranco, donde se encuentra el clásico Puente de los Suspiros.',
        destino: 'Puente De Los Suspiros',
        partida: 'Miraflores',
        ruta_regular: '20 - 30 km',
        edad_minima: '+12 años',
        talla_minima: '1.50 m',
        duracion: '3 horas aprox.',
        horario: 'Todo el año: 09.00',
        incluye: [
            'Guiado',
            'Renta de bicicleta de suspensión delantera, casco. (hardtailbike+ helmet'
        ],
        no_incluye: [
            'Almuerzo, bebidas, gastos personales, seguro de viaje o accidentes',
            'Visitas a museos',
            'Servicio estándar NO INCLUYE SOPORTE DE VEHÍCULO'
        ],
        adicionales: ['Servicio Premium inicia/termina en hoteles ubicados en los distritos de Miraflores y Barranco',
        'San Isidro, San Borja, Surco añadir US$10 por pax (Consultar)'],
        privado_estandar: 'Empieza y termina en nuestras oficinas, Calle Punta  Sal 506 Surco',
        privado_premium: 'empieza y termina en Hotel de pasajeros ubicados en Miraflores o Barranco',
        tarifa:{
            una_persona: '80 usd',
            mas_dos_personas: {
                privado_estandar: '65 usd',
                privado_premium: '85 usd'
            }
        },
        imagenes: {
            principal: '/lima_bahia/IMG_1470.JPG',
            banner: '/lima_bahia/banner_lima_bahia.jpg',
        }
    },

    {
        id: 2,
        name: 'Lima Bohemian',
        overview: 'Una experiencia por el tradicional distrito de Barranco frente al Océano Pacífico. Disfrutaremos del encanto de sus calles por la mezcla viva de la arquitectura clásica y el arte contemporáneo.  Dirigida a personas adultas que buscan usar la bicicleta para conocer las calles del distrito con calma y sin apuros, conociendo algunos secretos de Barranco - sus bares emblemáticos y degustar alguna Cerveza, Chilcano o Pisco Sour.',
        destino: 'Empieza y termina en PBK OFICINAS (PERÚ BIKE).',
        partida: 'Oficina Perú Bike. Calle Punta Sal 506, Surco ',
        ruta_regular: '25 km',
        edad_minima: '+12 años',
        talla_minima: '1.50 m',
        duracion: '3 horas aprox.',
        horario: 'Servicio Privado Estándar disponible todos los días. Consultar feriados.',
        incluye: [
            'Guiado, Renta de bicicleta simple (sin suspensión), casco.' 
        ],
        no_incluye: [
            'Almuerzo, bebidas, gastos personales, seguro de viaje o accidentes. Soporte vehicular'
        ],
        adicionales: ['Servicio Premium inicia/termina en hoteles ubicados en los distritos de Miraflores y Barranco',
        'San Isidro, San Borja, Surco añadir US$10 por pax (Consultar)'],
        privado_estandar: 'Empieza y termina en nuestras oficinas, Calle Punta  Sal 506 Surco',
        privado_premium: 'empieza y termina en Hotel de pasajeros ubicados en Miraflores o Barranco',
        tarifa:{
            una_persona: '80 usd',
            mas_dos_personas: {
                privado_estandar: '65 usd',
                privado_premium: '85 usd'
            }
        },
        imagenes: {
            principal: '/lima_bohemian/FOTO 9.JPG',
            banner: '/lima_bohemian/banner_lima_bohemian.JPG'
        }
    },
    
    {
        id: 3,
        name: 'Pachacamac',
        overview: 'El  Valle Sagrado de Pachacámac está ubicado a 45 kms al sur de la ciudad de Lima. Fue el principal santuario/adoratorio de la costa central durante la época de los Incas. Nuestras movilidades nos trasladan desde el Hotel en Miraflores o Barranco  hasta el punto de inicio del paseo en bicicleta en Pachacamac.  Los circuitos se desarrollan en el campo en caminos de tierra  y senderos de diversos niveles de dificultad, teniendo la posibilidad de conocer sitios arqueológicos como el Templo de Cardal durante el recorrido (de alrededor de 4,000 años de antigüedad). Durante los meses de Junio a Septiembre en temporada del invierno costero, los cerros conocidos como LOMAS se convierten en un campo lleno de verdor donde la naturaleza nos muestra todo su esplendor.',
        destino: 'Puente De Los Suspiros',
        partida: 'Miraflores',
        ruta_regular: '15 - 20 km',
        edad_minima: '+12 años',
        talla_minima: '1.50 m',
        duracion: '3 horas aprox.',
        horario: 'Todo el año: 09.00',
        incluye: [
            'Guiado',
            'Renta de bicicleta de suspensión delantera, casco. (hardtailbike+ helmet'
        ],
        no_incluye: [
            'Almuerzo, bebidas, gastos personales, seguro de viaje o accidentes',
            'Visitas a museos',
            'Servicio estándar NO INCLUYE SOPORTE DE VEHÍCULO'
        ],
        adicionales: ['Servicio Premium inicia/termina en hoteles ubicados en los distritos de Miraflores y Barranco',
        'San Isidro, San Borja, Surco añadir US$10 por pax (Consultar)'],
        privado_estandar: 'Empieza y termina en nuestras oficinas, Calle Punta  Sal 506 Surco',
        privado_premium: 'empieza y termina en Hotel de pasajeros ubicados en Miraflores o Barranco',
        tarifa:{
            una_persona: '80 usd',
            mas_dos_personas: {
                privado_estandar: '65 usd',
                privado_premium: '85 usd'
            }
        },
        imagenes: {
            principal: '/pachacamac/P1090073.JPG',
            banner: '/pachacamac/banner_pachacamac.JPG'
        },
        ruta_nivel_intermedio: 'La ruta se realiza por pista de tierra y senderos de nivel I y II (NIVEL INTERMEDIO). Aumenta en técnica y resistencia física; puede incluir (si se solicita en el momento) una corta sección de los senderos de las lomas costeras. Dirigido a deportistas en general y ciclistas de nivel medio. Pendientes ligeras y medias. Sumatoria de desnivel de subida promedio de 400msnm'
    }
]