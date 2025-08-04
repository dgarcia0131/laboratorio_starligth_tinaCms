// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
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
        ],
        sidebar: [
            {
                label: 'Ingreso al Portal',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: '¿Cómo Iniciar sesión en el Portal Tributario?', slug: 'accesoportal/ingresoportal' },
                ],
            },
            {
                label: 'Cambio de Contraseña',
                items: [{ label: '¿Cómo Cambiar la Contraseña en el Portal Tributario?', slug: 'cambiocotrasena/cambiarcontrasena' }],
            },
        ],
		}), react(), mdx()],
});