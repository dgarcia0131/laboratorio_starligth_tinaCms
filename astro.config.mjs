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
                    { label: '¿Cómo Descargar el Comprobante de Firma Electrónica?', slug: 'guias/firmaelectronica/descargacomprobante' },
                ],
            },
            {
                label: '¿Cómo Registrar un Usuario?',
                items: [
                    { label: 'Validar Documento', slug: 'guias/registrousuario/validadocumento' },
                    { label: 'Registrar Datos', slug: 'guias/registrousuario/registradatos' },
                    { label: 'Validar Cuenta', slug: 'guias/registrousuario/validacuenta' },
                    { label: 'Bienvenida', slug: 'guias/registrousuario/bienvenida' },
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