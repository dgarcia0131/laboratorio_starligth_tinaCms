// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://instructivoportal.netlify.app',
    integrations: [starlight({
        title: 'Instructivo Portal',
        description: 'Instructivo para el uso del portal tributario',
        // Logo personalizado (opcional)
        logo: {
            src: './src/assets/LogoSmart.png',
            replacesTitle: false,
        },
        // Configuración de estilos personalizados
        customCss: [
            // Estilos personalizados
            './src/styles/custom.css',
            './src/styles/cards.css',
            './src/styles/footer.css',
            './src/styles/layoutSinSlidebar.css',
        ],
        sidebar: [
            {
                label: 'Guias',
                items: [
                    { label: 'ver guias', slug: 'guias/guiasinicio' },
                ],
            },
            {
                label: '¿Cómo Iniciar sesión en el Portal Tributario?',
                items: [
                    { label: '¿Cómo Iniciar sesión en el Portal Tributario?', slug: 'guias/iniciosesion/ingresoportal' },
                    { label: '¿Cómo Cambiar la Contraseña?', slug: 'guias/iniciosesion/cambiarcontrasena' },
                ],
            },
            {
                label: '¿Cómo Habilitar mi Firma Electrónica?',
                items: [
                    { label: '¿Cómo Ingresar al Servicio de Firma Electrónica?', slug: 'guias/firmaelectronica/ingresoservicio' },
                    { label: '¿Cómo Habilitar mi Firma Electrónica?', slug: 'guias/firmaelectronica/habilitarfirmaelectronica' },
                ],
            },
            {
                label: '¿Cómo Registrar un Usuario?',
                items: [
                    { label: 'Registrar Usuario', slug: 'guias/registrousuario/registrarusuario' },
                ],
            },
            {
                label: '¿Cómo Gestionar Mis Solicitudes Ante el Cuerpo de Bomberos?',
                items: [
                    { label: '¿Cómo Consultar el Estado de mi Solicitud?', slug: 'guias/certificadobomberos/consultasolicitud' },
                    { label: '¿Cómo Enviar una Solicitud?', slug: 'guias/certificadobomberos/enviasolicitud' },
                    { label: '¿Cómo Validar un Certificado?', slug: 'guias/certificadobomberos/validacertificado' },
                ],
            },
            {
                label: 'Ver Tutoriales',
                items: [
                    { label: 'Ver Tutoriales', slug: 'tutoriales/tutorialesinicio' },
                ],
            },
        ],
    }), react(), mdx()],
});